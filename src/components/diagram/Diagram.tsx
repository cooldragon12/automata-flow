"use client"
import { animate, motion, useMotionValue, useReducedMotion, useTransform, AnimationPlaybackControls } from "framer-motion";
import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import type { Trace } from "@/types";
import {
    Edge, Layout, LayoutNode, SIZES, Shape,
    edgeGeometry, edgeKey, entryGeometry, loopGeometry, transpose,
} from "./geometry";
import { useIsMobile } from "./useIsMobile";

export type NodeStatus = "idle" | "visited" | "current" | "accept" | "reject";

type DiagramProps = {
    title: string;
    layout: Layout;
    edges: Edge[];
    finals?: string[];
    trace: Trace;
    /** Frame of `trace` to show. */
    frame: number;
    /** False while idle: nothing is highlighted. */
    active: boolean;
    /** Frame changes are animated by this key, so a repeated state (self-loop) still animates. */
    stepKey: number;
    stepMs: number;
};

type Offset = { x: number; y: number };

const Diagram = ({ title, layout: baseLayout, edges, finals = [], trace, frame, active, stepKey, stepMs }: DiagramProps) => {
    const uid = useId().replace(/:/g, "");
    const isMobile = useIsMobile();
    const reduceMotion = useReducedMotion();
    const layout = useMemo(
        () => (isMobile && baseLayout.transposeOnMobile ? transpose(baseLayout) : baseLayout),
        [isMobile, baseLayout],
    );

    // ---- dragging: nodes follow the pointer, edges are recomputed from the same coordinates, then spring home
    const svgRef = useRef<SVGSVGElement>(null);
    const [offsets, setOffsets] = useState<Record<string, Offset>>({});
    const offsetsRef = useRef(offsets);
    offsetsRef.current = offsets;
    const drag = useRef<{ id: string; x: number; y: number; scale: number } | null>(null);
    const springs = useRef<Record<string, AnimationPlaybackControls>>({});

    useEffect(() => setOffsets({}), [layout]);

    const onPointerDown = useCallback((e: React.PointerEvent, id: string) => {
        const ctm = svgRef.current?.getScreenCTM();
        springs.current[id]?.stop();
        const o = offsetsRef.current[id] ?? { x: 0, y: 0 };
        const scale = ctm ? 1 / ctm.a : 1;
        drag.current = { id, x: e.clientX - o.x / scale, y: e.clientY - o.y / scale, scale };
        (e.currentTarget as Element).setPointerCapture(e.pointerId);
    }, []);
    const onPointerMove = useCallback((e: React.PointerEvent) => {
        const d = drag.current;
        if (!d) return;
        setOffsets((o) => ({ ...o, [d.id]: { x: (e.clientX - d.x) * d.scale, y: (e.clientY - d.y) * d.scale } }));
    }, []);
    const onPointerUp = useCallback(() => {
        const d = drag.current;
        drag.current = null;
        if (!d) return;
        const from = offsetsRef.current[d.id];
        if (!from) return;
        springs.current[d.id] = animate(1, 0, {
            type: "spring", stiffness: 260, damping: 20,
            onUpdate: (v) => setOffsets((o) => ({ ...o, [d.id]: { x: from.x * v, y: from.y * v } })),
        });
    }, []);
    useEffect(() => () => Object.values(springs.current).forEach((s) => s.stop()), []);

    const placed = useMemo(() => {
        const map: Record<string, LayoutNode> = {};
        for (const n of layout.nodes) {
            const o = offsets[n.id];
            map[n.id] = o ? { ...n, x: n.x + o.x, y: n.y + o.y } : n;
        }
        return map;
    }, [layout, offsets]);

    const geometry = useMemo(() => {
        const keys = new Set(edges.map((e) => edgeKey(e.from, e.to)));
        return edges
            .filter((e) => placed[e.from] && placed[e.to])
            .map((e) => {
                const key = edgeKey(e.from, e.to);
                const g = e.from === e.to
                    ? loopGeometry(placed[e.from], layout.loops?.[e.from] ?? -90)
                    : edgeGeometry(placed[e.from], placed[e.to],
                        layout.bends?.[key] ?? (keys.has(edgeKey(e.to, e.from)) ? 26 : 0));
                return { ...e, key, ...g };
            });
    }, [edges, placed, layout]);

    // ---- run state for this frame
    const current = trace.frames[frame];
    const finished = active && frame === trace.frames.length - 1;
    const currentEdge = active && current?.from ? edgeKey(current.from, current.node) : null;
    const visited = useMemo(() => {
        const nodes = new Set<string>(), edgeSet = new Set<string>();
        if (active)
            for (const f of trace.frames.slice(0, frame)) {
                nodes.add(f.node);
                if (f.from) edgeSet.add(edgeKey(f.from, f.node));
            }
        return { nodes, edges: edgeSet };
    }, [trace, frame, active]);

    const travel = reduceMotion ? 0 : Math.min(stepMs * 0.6, 650);
    const arrival = currentEdge ? travel : 0;
    const activeGeometry = geometry.find((g) => g.key === currentEdge);

    const statusOf = (id: string): NodeStatus => {
        if (!active) return "idle";
        if (id === current?.node) return finished ? (trace.accepted ? "accept" : "reject") : "current";
        return visited.nodes.has(id) ? "visited" : "idle";
    };

    return (
        <svg
            ref={svgRef}
            viewBox={`0 0 ${layout.width} ${layout.height}`}
            role="img"
            aria-label={title}
            className="dg block w-full h-auto max-h-[78vh] select-none overflow-visible"
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
        >
            <defs>
                {(["idle", "active"] as const).map((kind) => (
                    <marker key={kind} id={`${uid}-${kind}`} viewBox="0 0 10 10" refX="9" refY="5"
                        markerWidth="11" markerHeight="11" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
                        <path d="M0,0 L10,5 L0,10 z" className={`dg-arrow-${kind}`} />
                    </marker>
                ))}
            </defs>

            {layout.start && placed[layout.start.node] && (
                <path d={entryGeometry(placed[layout.start.node], layout.start.angle)}
                    className="dg-edge" data-status={active ? "visited" : "idle"}
                    markerEnd={`url(#${uid}-${active ? "active" : "idle"})`} />
            )}

            {geometry.map((g) => {
                const status = g.key === currentEdge || visited.edges.has(g.key) ? "visited" : "idle";
                return <path key={g.key} d={g.d} className="dg-edge" data-status={status}
                    markerEnd={`url(#${uid}-${status === "idle" ? "idle" : "active"})`} />;
            })}

            {activeGeometry && (
                <motion.path key={`trail-${stepKey}`} d={activeGeometry.d} className="dg-trail"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                    transition={{ duration: travel / 1000, ease: "easeInOut" }} />
            )}

            {geometry.map((g) => g.label && (
                <text key={`l-${g.key}`} x={g.labelAt.x} y={g.labelAt.y} className="dg-label"
                    data-status={g.key === currentEdge ? "current" : "idle"}
                    textAnchor="middle" dominantBaseline="central">{g.label}</text>
            ))}

            {layout.nodes.map((n) => {
                const p = placed[n.id];
                const status = statusOf(n.id);
                const isCurrent = status === "current" || status === "accept" || status === "reject";
                return (
                    <g key={n.id} transform={`translate(${p.x},${p.y})`}
                        className="dg-node cursor-grab active:cursor-grabbing touch-none" data-status={status}
                        style={{ "--delay": `${isCurrent ? arrival : 0}ms` } as React.CSSProperties}
                        onPointerDown={(e) => onPointerDown(e, n.id)}>
                        <NodeShape shape={n.shape} className="dg-shape" />
                        {finals.includes(n.id) && <circle r={SIZES.circle.r - 7} className="dg-inner" />}
                        {isCurrent && !reduceMotion && (
                            <motion.g key={`ring-${stepKey}`} initial={{ scale: 1, opacity: 0 }}
                                animate={{ scale: [1, 1.45], opacity: [0.7, 0] }}
                                transition={{ delay: arrival / 1000, duration: 0.6, ease: "easeOut" }}>
                                <NodeShape shape={n.shape} className="dg-ring" />
                            </motion.g>
                        )}
                        <text className="dg-node-label" textAnchor="middle" dominantBaseline="central">{n.label ?? n.id}</text>
                    </g>
                );
            })}

            {activeGeometry && travel > 0 && <Token key={`token-${stepKey}`} d={activeGeometry.d} duration={travel} />}
        </svg>
    );
};

const NodeShape = ({ shape = "circle", className }: { shape?: Shape; className: string }) => {
    if (shape === "diamond") {
        const h = SIZES.diamond.h;
        return <path d={`M0,${-h} L${h},0 L0,${h} L${-h},0 z`} className={className} />;
    }
    if (shape === "pill") {
        const { rx, ry } = SIZES.pill;
        return <rect x={-rx} y={-ry} width={rx * 2} height={ry * 2} rx={ry} className={className} />;
    }
    return <circle r={SIZES.circle.r} className={className} />;
};

/** A dot that travels along the edge being taken. */
const Token = ({ d, duration }: { d: string; duration: number }) => {
    const ref = useRef<SVGPathElement>(null);
    const progress = useMotionValue(0);
    const point = (p: number) => {
        const path = ref.current;
        return path ? path.getPointAtLength(p * path.getTotalLength()) : { x: 0, y: 0 };
    };
    const cx = useTransform(progress, (p) => point(p).x);
    const cy = useTransform(progress, (p) => point(p).y);
    const opacity = useTransform(progress, [0, 0.03, 0.9, 1], [0, 1, 1, 0]);
    useEffect(() => {
        const controls = animate(progress, 1, { duration: duration / 1000, ease: "easeInOut" });
        return () => controls.stop();
    }, [progress, duration]);
    return (
        <g pointerEvents="none">
            <path ref={ref} d={d} fill="none" stroke="none" />
            <motion.circle r={8} cx={cx} cy={cy} style={{ opacity }} className="dg-token" />
        </g>
    );
};

export default Diagram;
