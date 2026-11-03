import { Layout } from "./geometry";

export const DFA_LAYOUTS: Record<"1" | "2", Layout> = {
    "1": {
        width: 1130,
        height: 460,
        transposeOnMobile: true,
        start: { node: "q0", angle: 180 },
        loops: { qT: 0, q8: 0 },
        nodes: [
            { id: "q0", x: 100, y: 230 },
            { id: "q1", x: 260, y: 110 },
            { id: "q2", x: 260, y: 350 },
            { id: "qT", x: 430, y: 230 },
            { id: "q3", x: 600, y: 110 },
            { id: "q4", x: 600, y: 350 },
            { id: "q7", x: 760, y: 230 },
            { id: "q5", x: 900, y: 70 },
            { id: "q6", x: 900, y: 390 },
            { id: "q8", x: 1030, y: 230 },
        ],
    },
    "2": {
        width: 1040,
        height: 450,
        transposeOnMobile: true,
        start: { node: "q0", angle: 180 },
        loops: { q6: 0 },
        nodes: [
            { id: "q0", x: 100, y: 240 },
            { id: "q1", x: 280, y: 130 },
            { id: "q2", x: 280, y: 350 },
            { id: "q3", x: 550, y: 70 },
            { id: "q4", x: 730, y: 240 },
            { id: "q5", x: 550, y: 370 },
            { id: "q6", x: 930, y: 240 },
        ],
    },
};

export const PDA_LAYOUTS: Record<"1" | "2", Layout> = {
    "1": {
        width: 700,
        height: 780,
        nodes: [
            { id: "Start", x: 350, y: 60, shape: "pill" },
            { id: "Read1", x: 350, y: 190, shape: "diamond" },
            { id: "Read2", x: 170, y: 330, shape: "diamond" },
            { id: "Reject", x: 350, y: 330, shape: "pill" },
            { id: "Read3", x: 530, y: 330, shape: "diamond" },
            { id: "Read4", x: 170, y: 480, shape: "diamond" },
            { id: "Read6", x: 530, y: 480, shape: "diamond" },
            { id: "Read5", x: 350, y: 610, shape: "diamond" },
            { id: "Accept", x: 350, y: 730, shape: "pill" },
        ],
    },
    "2": {
        width: 760,
        height: 750,
        loops: { Read7: 150 },
        bends: { "Read6>Read2": -60 },
        nodes: [
            { id: "Start", x: 380, y: 50, shape: "pill" },
            { id: "Read1", x: 380, y: 165, shape: "diamond" },
            { id: "Read3", x: 160, y: 290, shape: "diamond" },
            { id: "Read2", x: 600, y: 290, shape: "diamond" },
            { id: "Read6", x: 160, y: 430, shape: "diamond" },
            { id: "Read4", x: 380, y: 430, shape: "diamond" },
            { id: "Read5", x: 600, y: 430, shape: "diamond" },
            { id: "Read7", x: 380, y: 570, shape: "diamond" },
            { id: "Accept", x: 380, y: 700, shape: "pill" },
        ],
    },
};
