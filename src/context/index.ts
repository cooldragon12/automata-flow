import {DFA, CFG , PDA} from "@/types";

export const prob1 = new DFA(
    ["a","b"],  
    // ['q0', 'q1', 'q3', 'q5', 'q7', 'q2', 'q4', 'q6','q8'], 
    ['q0','q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7','q8'],
    'q0', 
    ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7','q8'],
    {
        "q0.a":"q1", "q0.b":"q2",
        "q1.a":"q3", "q1.b":"q7",
        "q2.a":"q8", "q2.b":"q4",
        "q3.a":"q5", "q3.b":"q6",
        "q4.a":"q5", "q4.b":"q6",
        "q5.a":"q5", "q5.b":"q6",
        "q6.a":"q5", "q6.b":"q6",
        "q7.a":"q8", "q7.b":"q8",
        "q8.a":"q7", "q8.b":"q7",
    }
);
export const prob2 = new DFA(
["0","1"],
['q0', 'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7','q8'],
'q0',
['q8'],
{
    "q0.0":"q1", "q0.1":"q1",
    "q1.0":"q3", "q1.1":"q2",
    "q2.0":"q4", "q2.1":"q5",
    "q3.0":"q7", "q3.1":"q6",
    "q4.0":"q7", "q4.1":"q8",
    "q5.0":"q4", "q5.1":"q8",
    "q6.0":"q4", "q6.1":"q5",
    "q7.0":"q8", "q7.1":"q2",
    "q8.0":"q8", "q8.1":"q8",
}
);

export const prob1_cfg = new CFG(
    ["S","X","Y"],
    ["a","b"],
    {
        "S":["XY"],
        "X":["a","b","aY", "bY"],
        "Y":["ε"],
    },
    "S"
)
export const prob2_cfg = new CFG(
    ["S","X","Y","Z"],
    ["0","1"],
    {
        "S":["XYZ"],
        "X":["0X","1X","0", "1"], 
        "Y":["000","111","101"],
        "Z": ["X","ε"],   
    },
    "S"
)

export const prob1_pda = new PDA()
export const prob2_pda = new PDA()
