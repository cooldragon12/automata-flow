"use client"
import { IProblemState } from '@/context/problem'
import ActionState from './ActionState'
import NonTState from './NonTState'
import Xarrow from 'react-xarrows'
const PDA2 = ({theme, state}: {theme:string, state: IProblemState}) => {
    return(
        <>
            {/* START */}
            <div className={`absolute flex justify-center items-center top-[20%] left-[25%]`}>
                <NonTState id={'Start'} state={'Start'} valid={state.pda.stack[state.selection === "1"? state.simulation.step: state.simulation.step] == "Start"? true:false}/>
            </div>
            <Xarrow endAnchor={'left'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} path='grid' 
                    animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'start'} start={'Start'} end={'Read1'} />
            {/* Read1 */}
            <div className={`absolute flex justify-center items-center top-[20%] left-[45%]`}>
                <ActionState id={'Read1'} state={'Read1'}  valid={state.pda.stack[state.selection === "1"? state.simulation.step: state.simulation.step+1] == "Read1"? true:false}/>
            </div>
                <Xarrow endAnchor={'left'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} labels="1" path='grid' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'read1.1'} start={'Read1'} end={'Read2'} />
                        <Xarrow endAnchor={'top'} startAnchor={'bottom'}  strokeWidth={3} zIndex={-100} labels="0" path='grid' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'read1.0'} start={'Read1'} end={'Read3'} />
            {/* Read2 */}
            <div className={`absolute flex justify-center items-center top-[20%] left-[60%]`}>
                <ActionState id={'Read2'} state={'Read2'} valid={state.pda.stack[state.selection === "1"? state.simulation.step: state.simulation.step+1] == "Read2"? true:false} />
            </div>
                <Xarrow endAnchor={'top'} startAnchor={'left'}  strokeWidth={3} zIndex={-100} labels="0" path='straight' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'read2.0'} start={'Read2'} end={'Read4'} />
                <Xarrow endAnchor={'top'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} labels="1" path='grid' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'read2.1'} start={'Read2'} end={'Read5'} />  
            {/* Read3 */}
            <div className={`absolute flex justify-center items-center top-[40%] left-[45%]`}>
                <ActionState id={'Read3'} state={'Read3'} valid={state.pda.stack[state.selection === "1"? state.simulation.step: state.simulation.step+1] == "Read3"? true:false} />
            </div>
                <Xarrow endAnchor={'left'} startAnchor={'left'}  strokeWidth={3} zIndex={-100} labels="0" path='straight' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'read3.0'} start={'Read3'} end={'Read6'} />   
                <Xarrow endAnchor={'bottom'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} labels="1" path='grid' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'read3.1'} start={'Read3'} end={'Read2'} />  
            {/* Read4 */}
            <div className={`absolute flex justify-center items-center top-[45%] left-[30%]`}>
                <ActionState id={'Read4'} state={'Read4'}  valid={state.pda.stack[state.selection === "1"? state.simulation.step: state.simulation.step+1] == "Read4"? true:false}/>
            </div>
                <Xarrow endAnchor={'left'} startAnchor={'bottom'}  strokeWidth={3} zIndex={-100} labels="0" path='grid' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'read4.0'} start={'Read4'} end={'Read6'} />   
                <Xarrow endAnchor={'top'} startAnchor={'left'}  strokeWidth={3} zIndex={-100} labels="1" path='grid' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'read4.1'} start={'Read4'} end={'Read7'} />
             {/* Read5 */}
             <div className={`absolute flex justify-center items-center top-[45%] left-[70%]`}>
                <ActionState id={'Read5'} state={'Read5'}  valid={state.pda.stack[state.selection === "1"? state.simulation.step: state.simulation.step+1] == "Read5"? true:false}/>
            </div>
                <Xarrow endAnchor={'right'} startAnchor={'left'}  strokeWidth={3} zIndex={-100} labels="0" path='grid' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'read5.0'} start={'Read5'} end={'Read4'} />   
                <Xarrow endAnchor={'right'} startAnchor={'left'}  strokeWidth={3} zIndex={-100} labels="1" path='straight' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'read5.1'} start={'Read5'} end={'Read7'} />   
            {/* Read6 */}
            <div className={`absolute flex justify-center items-center top-[60%] left-[45%]`}>
                <ActionState id={'Read6'} state={'Read6'}  valid={state.pda.stack[state.selection === "1"? state.simulation.step: state.simulation.step+1] == "Read6"? true:false}/>
            </div>
                <Xarrow   endAnchor={'bottom'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} labels="0" path='smooth' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'read6.0'} start={'Read6'} end={'Read5'} />   
   
             {/* Read7 */}
             <div className={`absolute flex justify-center items-center top-[60%] left-[20%]`}>
                <ActionState id={'Read7'} state={'Read7'}  valid={state.pda.stack[state.selection === "1"? state.simulation.step: state.simulation.step+1] == "Read7"? true:false}/>
            </div>
                <Xarrow _cpx1Offset={-200} _cpx2Offset={-200}   endAnchor={'left'} startAnchor={'bottom'}  strokeWidth={3} zIndex={-100} labels="0,1" path='smooth' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'read7.01'} start={'Read7'} end={'Read7'} /> 
                <Xarrow    endAnchor={'left'} startAnchor={'bottom'}  strokeWidth={3} zIndex={-100} labels="ε" path='grid' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'read7.e'} start={'Read7'} end={'Accept'} />    
            {/* Accept */}
            <div className={`absolute flex justify-center items-center top-[75%] left-[45%]`}>
                    <NonTState id={'Accept'} state={'Accept'} valid={state.pda.stack[state.selection === "1"? state.simulation.step: state.simulation.step+1] == "Accept"? true:false} />
            </div>
            
        </>
    )
}
export default PDA2;