"use client"
import State from './State'
import Xarrow, {Xwrapper} from 'react-xarrows'
import {useProblem} from '@/context/problem'
import { useEffect } from 'react';


const Board = () => {
    const {state} = useProblem();
    const arrows = Object.keys(state.dfa.delta).map((key, index) => {
        const [from, val] = key.split('.')
        const to = state.dfa.delta[key]
        return (
            
            <Xarrow color='#ffffff' key={index} start={from} end={to} />
            
        )
    })
    
    return (
        <>
        <Xwrapper >
            {
                
                state.dfa.Q.map((q, i) => {
                    return (
                        <div  key={i} className={`flex justify-center items-center ${i === 0 ? "row-span-4":"row-span-1"}`}>
                            <State id={q} state={q} valid={state.dfa.path[state.simulation.step] === q ? true:false}/>
                        </div>
                    )
                })
                
            }
            {
                arrows
            }
        </Xwrapper>
        </>
    )
}

export default Board;