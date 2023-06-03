
import assert from "node:assert";
import { test, it } from "node:test";
const DFA = require("../types/DFA");
const newdfa = new DFA(
    "(aa+bb)(a+b)*(a+b+ab+ba)+(a+b+ab+ba)*(aa+bab)*(a+b+aa)(a+b+bb+aa)*", 
    ['q0', 'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7','q8'], 
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
test("dfa logic", () => {
    assert(newdfa.execute("aa") == true);
})