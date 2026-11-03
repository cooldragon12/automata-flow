export type Shape = "circle" | "diamond" | "pill";

export interface LayoutNode {
    id: string;
    label?: string;
    x: number;
    y: number;
    shape?: Shape;
}

/**
 * Node positions live in viewBox units, so the whole diagram scales with its container
 * and arrows are computed from the same numbers as the nodes (they can never drift).
 */
export interface Layout {
    width: number;
    height: number;
    nodes: LayoutNode[];
    /** Self-loop direction per node, in degrees (0 = right, 90 = down). */
    loops?: Record<string, number>;
    /** Curvature per edge, keyed "from>to". Positive bends to the right of travel. */
    bends?: Record<string, number>;
    /** Entry arrow for the start state. */
    start?: { node: string; angle: number };
    /** Swap x/y on narrow screens so wide diagrams become tall ones. */
    transposeOnMobile?: boolean;
}

export interface Edge {
    from: string;
    to: string;
    label: string;
}

export const edgeKey = (from: string, to: string) => `${from}>${to}`;

/** Groups "state.symbol" -> "next" transitions into one labelled edge per pair of nodes. */
export function edgesFromTransitions(transitions: Record<string, string>): Edge[] {
    const grouped = new Map<string, Edge>();
    for (const [key, to] of Object.entries(transitions)) {
        const [from, symbol = ""] = key.split(".");
        const id = edgeKey(from, to);
        const edge = grouped.get(id);
        if (edge) edge.label = [edge.label, symbol].filter(Boolean).join(",");
        else grouped.set(id, { from, to, label: symbol });
    }
    return Array.from(grouped.values());
}

export function transpose(layout: Layout): Layout {
    const mapAngles = (angles?: Record<string, number>) =>
        angles && Object.fromEntries(Object.entries(angles).map(([k, a]) => [k, 90 - a]));
    return {
        ...layout,
        width: layout.height,
        height: layout.width,
        nodes: layout.nodes.map((n) => ({ ...n, x: n.y, y: n.x })),
        loops: mapAngles(layout.loops),
        // Mirroring across the diagonal flips which side "right of travel" is.
        bends: layout.bends && Object.fromEntries(Object.entries(layout.bends).map(([k, b]) => [k, -b])),
        start: layout.start && { ...layout.start, angle: 90 - layout.start.angle },
    };
}

export const SIZES = {
    circle: { r: 34 },
    diamond: { h: 46 },
    pill: { rx: 58, ry: 28 },
};

/** Distance from a node's centre to its outline along unit vector (ux, uy). */
export function boundary(shape: Shape = "circle", ux: number, uy: number) {
    switch (shape) {
        case "diamond":
            return SIZES.diamond.h / (Math.abs(ux) + Math.abs(uy));
        case "pill": {
            const { rx, ry } = SIZES.pill;
            return 1 / Math.sqrt((ux * ux) / (rx * rx) + (uy * uy) / (ry * ry));
        }
        default:
            return SIZES.circle.r;
    }
}

interface Point { x: number; y: number }
type Placed = Point & { shape?: Shape };

const ARROW_GAP = 2;
const fmt = (n: number) => Math.round(n * 10) / 10;

function onOutline(node: Placed, ux: number, uy: number, extra = 0): Point {
    const d = boundary(node.shape, ux, uy) + extra;
    return { x: node.x + ux * d, y: node.y + uy * d };
}

function toward(node: Placed, target: Point, extra = 0): Point {
    const dx = target.x - node.x, dy = target.y - node.y;
    const len = Math.hypot(dx, dy) || 1;
    return onOutline(node, dx / len, dy / len, extra);
}

export interface PathGeometry {
    d: string;
    labelAt: Point;
}

export function edgeGeometry(a: Placed, b: Placed, bend = 0): PathGeometry {
    const dx = b.x - a.x, dy = b.y - a.y;
    const len = Math.hypot(dx, dy) || 1;
    const nx = -dy / len, ny = dx / len;
    const c = { x: (a.x + b.x) / 2 + nx * bend, y: (a.y + b.y) / 2 + ny * bend };
    const s = toward(a, c);
    const e = toward(b, c, ARROW_GAP);
    // Point on the curve at t = 0.5, nudged to the outside of the bend (or above a straight edge).
    const side = bend > 0 ? 1 : -1;
    const labelAt = {
        x: 0.25 * s.x + 0.5 * c.x + 0.25 * e.x + nx * side * 16,
        y: 0.25 * s.y + 0.5 * c.y + 0.25 * e.y + ny * side * 16,
    };
    return { d: `M${fmt(s.x)},${fmt(s.y)} Q${fmt(c.x)},${fmt(c.y)} ${fmt(e.x)},${fmt(e.y)}`, labelAt };
}

export function loopGeometry(n: Placed, angleDeg: number): PathGeometry {
    const a = (angleDeg * Math.PI) / 180;
    const dir = (t: number) => ({ x: Math.cos(t), y: Math.sin(t) });
    const u1 = dir(a - 0.42), u2 = dir(a + 0.42);
    const p1 = onOutline(n, u1.x, u1.y);
    const p2 = onOutline(n, u2.x, u2.y, ARROW_GAP);
    const far = boundary(n.shape, Math.cos(a), Math.sin(a)) + 62;
    const c1 = { x: n.x + Math.cos(a - 0.75) * far, y: n.y + Math.sin(a - 0.75) * far };
    const c2 = { x: n.x + Math.cos(a + 0.75) * far, y: n.y + Math.sin(a + 0.75) * far };
    const apex = {
        x: 0.125 * (p1.x + p2.x) + 0.375 * (c1.x + c2.x),
        y: 0.125 * (p1.y + p2.y) + 0.375 * (c1.y + c2.y),
    };
    const u = dir(a);
    return {
        d: `M${fmt(p1.x)},${fmt(p1.y)} C${fmt(c1.x)},${fmt(c1.y)} ${fmt(c2.x)},${fmt(c2.y)} ${fmt(p2.x)},${fmt(p2.y)}`,
        labelAt: { x: apex.x + u.x * 16, y: apex.y + u.y * 16 },
    };
}

export function entryGeometry(n: Placed, angleDeg: number): string {
    const a = (angleDeg * Math.PI) / 180;
    const ux = Math.cos(a), uy = Math.sin(a);
    const end = onOutline(n, ux, uy, ARROW_GAP);
    const start = onOutline(n, ux, uy, 44);
    return `M${fmt(start.x)},${fmt(start.y)} L${fmt(end.x)},${fmt(end.y)}`;
}
