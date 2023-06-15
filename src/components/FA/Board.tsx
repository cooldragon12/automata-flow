"use client"

import  {Xwrapper} from 'react-xarrows'
import {useProblem} from '@/context/problem'
import { useTheme } from '@/context/theme'
import DFA1 from './DFA1'
import DFA2 from './DFA2'


const Board = () => {
    const {state} = useProblem();
    const {theme} = useTheme();
    
    return (
        <>
            <Xwrapper >
                {/* {
                    
                    state.dfa.Q.map((q, i) => {
                        return (
                            <div  key={i} className={`absolute flex justify-center items-center`} 
                                style={{left:`${i % 2 === 0 ? (i-1)*10 :i*10}rem`,top:`${i != 0? i % 2 === 0 ?80:20:50}%`}}>
                                <State id={q} state={q} finalState={state.dfa.F.includes(q)} valid={state.dfa.path[state.simulation.step] === q ? true:false}/>
                            </div>
                        )
                    })
                    
                }*/}
                {/* {
                    arrows
                } */}
                {
                    state.selection === '1'?<DFA1 theme={theme} state={state}/>:  state.selection === '2' ? <DFA2 theme={theme} state={state}/>:null
                }
                
            </Xwrapper>
        </>
    )
}

export default Board;