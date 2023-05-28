"use client"
import State from './State'
import Xarrow, {Xwrapper} from 'react-xarrows'
import { DFA } from "@/types/DFA";
import { useEffect } from 'react';
const Board = () => {
    const values = ["(aa|bb)(a|b)*(a|b|ab|ba)|(a|b|ab|ba)*(aa|bab)*(a|b|aa)(a|b|bb|aa)*",
    "((101)|(111)*|(100)|(1|0|11)*)(1|0|01)*(111|000|101)(1|0)*"]
    /**
     * ((101)|(111)*|
     * (100)|(1|0|11)*)
     * (1|0|01)*
     * (111|000|101)
     * (1|0)*
     */
    /**
     * ------------
     *    | a | b |
     * ------------
     * |q0| q1| q3|
     * |q1| q2| None|
     * |q2| q4| q2|
     * |q3| None| q4|
     * |q4| q4| q5|
     * 
     * 
     */
    useEffect(() => {
    },[])
    return (
        <>
        <Xwrapper >
            <State  id='initial_state'  state="Start" valid={true} />

            {/* Follows the circle component */}
            
            <State  id="S1" state="1" valid={false} />
            <Xarrow animateDrawing={1} start={'initial_state'} end={'S1'} />

           
            <State  id="S2" state="2" valid={true} />
            <Xarrow   start={'S1'} end={'S3'} />

            <State  id="S3" state="3" valid={false}  />
            <Xarrow  start={'S2'} end={'S3'} />
            <Xarrow  animateDrawing={1} start={'S1'} end={'S2'} />

            <Xarrow  animateDrawing={1} start={'final_state'} end={'initial_state'} />
            <Xarrow  animateDrawing={1} start={'S3'} end={'final_state'} />

            <State  id='final_state'  state="-" valid={true} />

        </Xwrapper>
        </>
    )
}

export default Board;