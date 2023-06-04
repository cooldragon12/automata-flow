"use client"
import State from './State'
import Xarrow, {Xwrapper} from 'react-xarrows'
import {useProblem} from '@/context/problem'
import { useTheme } from '@/context/theme'


const Board = () => {
    const {state} = useProblem();
    const {theme} = useTheme();
    const arrows = Object.keys(state.dfa.delta).map((key, index) => {
        const [from, val] = key.split('.')
        const to = state.dfa.delta[key]
        return (
            
            <Xarrow  endAnchor={"left"}  strokeWidth={3} zIndex={-100} labels={val} path='smooth' animateDrawing color={theme=== 'Dark'? "#3498DB":"#999"} key={index} start={from} end={to} />
            
        )
    })
    
    return (
        <>
        <Xwrapper >
            {
                
                state.dfa.Q.map((q, i) => {
                    return (
                        <div  key={i} className={`flex justify-center items-center ${i === 0 ? "row-span-4":"row-span-2"}`}>
                            <State id={q} state={q} finalState={state.dfa.F.includes(q)} valid={state.dfa.path[state.simulation.step] === q ? true:false}/>
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