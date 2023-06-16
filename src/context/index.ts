import {DFA, CFG , PDA} from "@/types";

export const prob1 = new DFA(
    ["a","b"],  
    // ['q0', 'q1', 'q3', 'q5', 'q7', 'q2', 'q4', 'q6','q8'], 
    ['q0','q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7','q8'],
    'q0', 
    ['q8'],
    {
        "q0.a":"q1", "q0.b":"q2",
        "q1.a":"q3", "q1.b":"qT",
        "q2.a":"qT", "q2.b":"q4",
        "q3.a":"q5", "q3.b":"q7",
        "q4.a":"q7", "q4.b":"q6",
        "q5.a":"q8", "q5.b":"q8",
        "q6.a":"q8", "q6.b":"q8",
        "q7.a":"q8", "q7.b":"q8",
        "qT.a":"qT", "qT.b":"qT"
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
    ["S","T","U","W","X","Y","Z"],
    ["a","b"],
    {
        "S":["TUVWXYZ"],
        "T":["aa","bb"],
        "U":["aU","bU","ε"],
        "V":["a","b","ab","ba"],
        "W":["aW","bW","abW","baW", "ε"],
        "X":["aaX","babX","ε"],
        "Y":["a","b","aa"],
        "Z":["aZ","bZ","bbZ", "aaZ","ε"]
    },
    "S"
)
export const prob2_cfg = new CFG(
    ["S","V","W","X","Y","Z"],
    ["0","1"],
    {
        "S":["VWXYZ"],
        "V":["101","100","W"], 
        "W":["111W","1W","0W","11W","ε"],
        "X": ["1X","0X","01X","ε"],   
        "Y":["111","000","101"],
        "Z":["1Z","0Z","ε"],
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
        "Read1.0": "Read3",
        "Read1.1": "Read2",
        "Read2.0": "Read4",
        "Read2.1": "Read5",
        "Read3.0": "Read6",
        "Read3.1": "Read2",
        "Read4.0": "Read6",
        "Read4.1": "Read7",
        "Read5.0": "Read5",
        "Read5.1": "Read7",
        "Read6.0": "Read7",
        "Read7.0": "Read7",
        "Read7.1": "Read7",
        "Read7.ε": "Accept",
    },
    ["Read1","Read2","Read3","Read4","Read5","Read6","Read7"],
    ["Start","Accept"],
    )
    