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
['q0', 'q1', 'q2', 'q3', 'q4', 'q5', 'q6'],
'q0',
['q6'],
{
    "q0.0":"q2", "q0.1":"q1",
    "q1.0":"q3", "q1.1":"q4",
    "q2.0":"q5", "q2.1":"q1",
    "q3.0":"q5", "q3.1":"q6",
    "q4.1":"q6", "q4.0":"q3",
    "q5.0":"q6", "q5.1":"q1",
    "q6.0":"q6", "q6.1":"q6",
   
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

export const prob1_pda = new PDA(
    {
        "Start":"Read1",
        "Read1.a": "Accept",
        "Read1.b": "Accept",
        "Read1.ε": "Reject",
    },
    ["Read1"],
    ["Start","Accept","Reject"],

)
export const prob2_pda = new PDA(
    {
        "Start":"Read1",
        "Read1.0": "Read2",
        "Read1.1": "Read2",
        "Read1.ε": "Reject",
        "Read2.0": "Read4",
        "Read2.1": "Read3",
        "Read3.0": "Read5",
        "Read3.1": "Read6",
        "Read4.0": "Read8",
        "Read4.1": "Read7",
        "Read5.0": "Read8",
        "Read5.1": "Read9",
        "Read6.0": "Read5",
        "Read6.1": "Read9",
        "Read7.0": "Read5",
        "Read7.1": "Read6",
        "Read8.0": "Read3",
        "Read8.1": "Read9",
        "Read9.0": "Read9",
        "Read9.1": "Read9",
        "Read9.ε": "Accept",
    },
    ["Read1","Read2","Read3","Read4","Read5","Read6","Read7","Read8","Read9"],
    ["Start","Accept","Reject"],
    )
    