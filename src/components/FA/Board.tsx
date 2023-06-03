"use client"
import State from './State'
import Xarrow, {Xwrapper} from 'react-xarrows'
import {useProblem} from '@/context/problem'
import { useEffect } from 'react';
const Board = () => {
    const {state} = useProblem();
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
            {
                state.dfa.Q.map((q, i) => {
                    return (
                        <State key={i} id={q} state={q} valid={state.simulation.step === q ? true:false} />
                    )
                })
            }
        </Xwrapper>
        </>
    )
}

export default Board;