"use client"
import { IProblemState } from '@/context/problem'
import State from './State'
import Xarrow from 'react-xarrows'
const DFA1 = ({theme, state}: {theme:string, state: IProblemState}) => {
    return(
        <>
            {/* Q0 */}
            <div className={`absolute flex justify-center items-center top-[40%] left-[5rem]`}>
                    <State id={'q0'} state={'q0'} finalState={state.dfa.F.includes('q0')} valid={state.dfa.path[state.simulation.step] === 'q0' ? true:false}/>
                </div>
                <Xarrow endAnchor={'left'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} labels="a" path='smooth' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'q0.a'} start={'q0'} end={'q1'} />
                <Xarrow endAnchor={'left'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} labels="b" path='smooth' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'q0.b'} start={'q0'} end={'q2'} />
                {/* Q1 */}
                <div className={`absolute flex justify-center items-center top-[20%] left-[20rem]`}>
                    <State id={'q1'} state={'q1'} finalState={state.dfa.F.includes('q1')} valid={state.dfa.path[state.simulation.step] === 'q1' ? true:false}/>
                </div>
                <Xarrow endAnchor={'left'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} labels="a" path='smooth' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'q1.a'} start={'q1'} end={'q3'} />
                {/* Q2 */}
                <div className={`absolute flex justify-center items-center top-[60%] left-[20rem]`}>
                    <State id={'q2'} state={'q2'} finalState={state.dfa.F.includes('q2')} valid={state.dfa.path[state.simulation.step] === 'q2' ? true:false}/>
                </div>
                <Xarrow endAnchor={'left'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} labels="b" path='smooth' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'q2.b'} start={'q2'} end={'q4'} />
                {/* Q3 */}
                <div className={`absolute flex justify-center items-center top-[20%] left-[40rem]`}>
                    <State id={'q3'} state={'q3'} finalState={state.dfa.F.includes('q3')} valid={state.dfa.path[state.simulation.step] === 'q3' ? true:false}/>
                </div>
                <Xarrow endAnchor={'left'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} labels="a" path='smooth' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'q3.a'} start={'q3'} end={'q5'} />
                <Xarrow endAnchor={'left'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} labels="b" path='straight' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'q3.b'} start={'q3'} end={'q6'} />
                {/* Q4 */}
                <div className={`absolute flex justify-center items-center top-[60%] left-[40rem]`}>
                    <State id={'q4'} state={'q4'} finalState={state.dfa.F.includes('q4')} valid={state.dfa.path[state.simulation.step] === 'q4' ? true:false}/>
                </div>
                <Xarrow endAnchor={'left'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} labels="b" path='smooth' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'q4.b'} start={'q4'} end={'q6'} />
                <Xarrow endAnchor={'left'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} labels="a" path='straight' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'q4.a'} start={'q4'} end={'q5'} />
                {/* Q5 */}
                <div className={`absolute flex justify-center items-center top-[20%] left-[60rem]`}>
                    <State id={'q5'} state={'q5'} finalState={state.dfa.F.includes('q5')} valid={state.dfa.path[state.simulation.step] === 'q5' ? true:false}/>
                </div>
                <Xarrow _cpx2Offset={-30} _cpx1Offset={-30}  endAnchor={'left'} startAnchor={'left'}  strokeWidth={3} zIndex={-100} labels="b" path='smooth' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'q5.b'} start={'q5'} end={'q6'} />
                <Xarrow _cpy1Offset={-100} _cpx1Offset={200} _cpx2Offset={100} endAnchor={'right'} startAnchor={'top'}  strokeWidth={3} zIndex={-100} labels="a" path='smooth' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'q5.a'} start={'q5'} end={'q5'} />
                {/* Q6 */}
                <div className={`absolute flex justify-center items-center top-[60%] left-[60rem]`}>
                    <State id={'q6'} state={'q6'} finalState={state.dfa.F.includes('q6')} valid={state.dfa.path[state.simulation.step] === 'q6' ? true:false}/>
                </div>
                <Xarrow _cpx2Offset={30} _cpx1Offset={30} endAnchor={'right'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} labels="a" path='smooth' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'q6.a'} start={'q6'} end={'q5'} />
                <Xarrow _cpy1Offset={100} _cpx1Offset={200} _cpx2Offset={100} endAnchor={'right'} startAnchor={'bottom'}  strokeWidth={3} zIndex={-100} labels="b" path='smooth' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'q6.b'} start={'q6'} end={'q6'} />
                {/* Q7 */}
                <div className={`absolute flex justify-center items-center top-[1%] left-[7rem]`}>
                    <State id={'q7'} state={'q7'} finalState={state.dfa.F.includes('q7')} valid={state.dfa.path[state.simulation.step] === 'q7' ? true:false}/>
                </div>
                <Xarrow  endAnchor={'right'} startAnchor={'top'}  strokeWidth={3} zIndex={-100} labels="a" path='smooth' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'q1.b'} start={'q1'} end={'q7'} />
                <Xarrow _cpy1Offset={-400}  _cpx2Offset={-200} _cpx1Offset={-200} endAnchor={'left'} startAnchor={'top'}  strokeWidth={3} zIndex={-100} labels="a,b" path='smooth' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'q7.a'} start={'q7'} end={'q8'} />
                {/* Q8 */}
                <div className={`absolute flex justify-center items-center top-[80%] left-[7rem]`}>
                    <State id={'q8'} state={'q8'} finalState={state.dfa.F.includes('q8')} valid={state.dfa.path[state.simulation.step] === 'q8' ? true:false}/>
                </div>
                <Xarrow  endAnchor={'right'} startAnchor={'bottom'}  strokeWidth={3} zIndex={-100} labels="b" path='smooth' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'q2.a'} start={'q2'} end={'q8'} />
                <Xarrow _cpy1Offset={400}  _cpx2Offset={-300} _cpx1Offset={-300} endAnchor={'left'} startAnchor={'bottom'}  strokeWidth={3} zIndex={-100} labels="b,a" path='smooth' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'q8.b'} start={'q8'} end={'q7'} />
        </>
    )
}
export default DFA1;