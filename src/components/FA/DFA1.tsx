"use client"
import { IProblemState } from '@/context/problem'
import State from './State'
import Xarrow from 'react-xarrows'
import { useCallback, useEffect } from 'react'
const DFA1 = ({theme, state}: {theme:string, state: IProblemState}) => {
        const checkValid = useCallback((q: string) => {
                if(state.dfa.path.length-1 === state.simulation.step && state.dfa.path[state.simulation.step] === q){
                        if (state.dfa.F.includes(q))
                                return true
                        else 
                                return false
                }else if (state.dfa.path[state.simulation.step] === q){ 
                        return true
                }else return undefined
        },[state])
    
    return(
        <>
            {/* Q0 */}
            <div className={`absolute flex justify-center items-center top-[30%] left-[1rem]`}>
                    <State id={'q0'} state={'q0'} finalState={state.dfa.F.includes('q0')} valid={checkValid('q0')}/>
                </div>
                <Xarrow endAnchor={'left'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} labels="a" path='smooth' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'q0.a'} start={'q0'} end={'q1'} />
                <Xarrow endAnchor={'left'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} labels="b" path='smooth' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'q0.b'} start={'q0'} end={'q2'} />
                {/* Q1 */}
                <div className={`absolute flex justify-center items-center top-[10%] left-[15rem]`}>
                    <State id={'q1'} state={'q1'} finalState={state.dfa.F.includes('q1')} valid={checkValid('q1')}/>
                </div>
                <Xarrow endAnchor={'left'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} labels="a" path='smooth' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'q1.a'} start={'q1'} end={'q3'} />
                <Xarrow endAnchor={'left'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} labels="b" path='smooth' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'q1.b'} start={'q1'} end={'qT'} />
                {/* Q2 */}
                <div className={`absolute flex justify-center items-center top-[50%] left-[15rem]`}>
                    <State id={'q2'} state={'q2'} finalState={state.dfa.F.includes('q2')} valid={checkValid('q2')}/>
                </div>
                <Xarrow endAnchor={'left'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} labels="a" path='smooth' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'q2.a'} start={'q2'} end={'qT'} />
                <Xarrow endAnchor={'left'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} labels="b" path='smooth' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'q2.b'} start={'q2'} end={'q4'} />
                {/* Q3 */}
                <div className={`absolute flex justify-center items-center top-[10%] left-[35rem]`}>
                    <State id={'q3'} state={'q3'} finalState={state.dfa.F.includes('q3')} valid={checkValid('q3')}/>
                </div>
                <Xarrow endAnchor={'left'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} labels="a" path='smooth' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'q3.a'} start={'q3'} end={'q5'} />
                <Xarrow endAnchor={'left'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} labels="b" path='straight' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'q3.b'} start={'q3'} end={'q7'} />
                {/* Q4 */}
                <div className={`absolute flex justify-center items-center top-[50%] left-[35rem]`}>
                    <State id={'q4'} state={'q4'} finalState={state.dfa.F.includes('q4')} valid={checkValid('q4')}/>
                </div>
                <Xarrow endAnchor={'left'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} labels="b" path='smooth' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'q4.b'} start={'q4'} end={'q6'} />
                <Xarrow endAnchor={'left'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} labels="a" path='straight' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'q4.a'} start={'q4'} end={'q7'} />
                {/* Q5 */}
                <div className={`absolute flex justify-center items-center top-[10%] left-[55rem]`}>
                    <State id={'q5'} state={'q5'} finalState={state.dfa.F.includes('q5')} valid={checkValid('q5')}/>
                </div>
                <Xarrow   endAnchor={'top'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} labels="a,b" path='smooth' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'q5.b'} start={'q5'} end={'q8'} />
                
                {/* Q6 */}
                <div className={`absolute flex justify-center items-center top-[50%] left-[55rem]`}>
                    <State id={'q6'} state={'q6'} finalState={state.dfa.F.includes('q6')} valid={checkValid('q6')}/>
                </div>
                <Xarrow  endAnchor={'bottom'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} labels="a,b" path='smooth' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'q6.a'} start={'q6'} end={'q8'} />
           
                {/* Q7 */}
                <div className={`absolute flex justify-center items-center top-[30%] left-[45rem]`}>
                    <State id={'q7'} state={'q7'} finalState={state.dfa.F.includes('q7')} valid={checkValid('q7')}/>
                </div>

                <Xarrow  endAnchor={'left'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} labels="a,b" path='smooth' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'q7.a'} start={'q7'} end={'q8'} />
                {/* Q8 */}
                <div className={`absolute flex justify-center items-center top-[30%] right-[0rem]`}>
                    <State id={'q8'} state={'q8'} finalState={state.dfa.F.includes('q8')} valid={checkValid('q8')}/>
                </div>
                <Xarrow _cpy1Offset={100}  _cpx2Offset={200} _cpx1Offset={200} endAnchor={'right'} startAnchor={'bottom'}  strokeWidth={3} zIndex={-100} labels="b,a" path='smooth' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'q8.ab'} start={'q8'} end={'q8'} />
                {/* QT */}
                <div className={`absolute flex justify-center items-center top-[30%] left-[25rem]`}>
                    <State id={'qT'} state={'T'} finalState={state.dfa.F.includes('qT')} valid={checkValid('qT')}/>
                </div>
                <Xarrow _cpy1Offset={100}  _cpx2Offset={200} _cpx1Offset={200} endAnchor={'right'} startAnchor={'bottom'}  strokeWidth={3} zIndex={-100} labels="b,a" path='smooth' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'qT.ab'} start={'qT'} end={'qT'} />
        </>
    )
}
export default DFA1;