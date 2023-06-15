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
                <NonTState id={'Start'} state={'Start'} />
            </div>
            <Xarrow endAnchor={'left'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} path='grid' 
                    animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'start'} start={'Start'} end={'Read1'} />
            {/* Read1 */}
            <div className={`absolute flex justify-center items-center top-[15%] left-[45%]`}>
                <ActionState id={'Read1'} state={'Read1'}  />
            </div>
                <Xarrow endAnchor={'top'} startAnchor={'bottom'}  strokeWidth={3} zIndex={-100} labels="0,1" path='grid' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'read1.01'} start={'Read1'} end={'Read2'} />
            {/* Read2 */}
            <div className={`absolute flex justify-center items-center top-[35%] left-[45%]`}>
                <ActionState id={'Read2'} state={'Read2'}  />
            </div>
                <Xarrow endAnchor={'top'} startAnchor={'left'}  strokeWidth={3} zIndex={-100} labels="0" path='grid' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'read2.0'} start={'Read2'} end={'Read4'} />
                <Xarrow endAnchor={'top'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} labels="1" path='grid' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'read2.1'} start={'Read2'} end={'Read3'} />  
            {/* Read3 */}
            <div className={`absolute flex justify-center items-center top-[45%] left-[60%]`}>
                <ActionState id={'Read3'} state={'Read3'}  />
            </div>
                <Xarrow endAnchor={'left'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} labels="0" path='grid' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'read3.0'} start={'Read3'} end={'Read5'} />   
                <Xarrow endAnchor={'top'} startAnchor={'left'}  strokeWidth={3} zIndex={-100} labels="1" path='grid' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'read3.1'} start={'Read3'} end={'Read6'} />  
            {/* Read4 */}
            <div className={`absolute flex justify-center items-center top-[45%] left-[30%]`}>
                <ActionState id={'Read4'} state={'Read4'}  />
            </div>
                <Xarrow endAnchor={'top'} startAnchor={'bottom'}  strokeWidth={3} zIndex={-100} labels="0" path='grid' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'read4.0'} start={'Read4'} end={'Read8'} />   
                <Xarrow endAnchor={'top'} startAnchor={'left'}  strokeWidth={3} zIndex={-100} labels="1" path='grid' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'read4.1'} start={'Read4'} end={'Read7'} />
             {/* Read5 */}
             <div className={`absolute flex justify-center items-center top-[45%] left-[70%]`}>
                <ActionState id={'Read5'} state={'Read5'}  />
            </div>
                <Xarrow endAnchor={'right'} startAnchor={'bottom'}  strokeWidth={3} zIndex={-100} labels="0" path='grid' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'read5.0'} start={'Read5'} end={'Read8'} />   
                <Xarrow _cpy1Offset={200} _cpy2Offset={10} _cpx1Offset={800} _cpx2Offset={800} endAnchor={'bottom'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} labels="1" path='grid' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'read5.1'} start={'Read5'} end={'Read9'} />   
            {/* Read6 */}
            <div className={`absolute flex justify-center items-center top-[60%] left-[45%]`}>
                <ActionState id={'Read6'} state={'Read6'}  />
            </div>
                <Xarrow   endAnchor={'bottom'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} labels="0" path='smooth' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'read6.0'} start={'Read6'} end={'Read5'} />   
                <Xarrow endAnchor={'top'} startAnchor={'bottom'}  strokeWidth={3} zIndex={-100} labels="1" path='grid' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'read6.1'} start={'Read6'} end={'Read9'} />   
             {/* Read7 */}
             <div className={`absolute flex justify-center items-center top-[60%] left-[20%]`}>
                <ActionState id={'Read7'} state={'Read7'}  />
            </div>
                <Xarrow  endAnchor={'bottom'} startAnchor={'bottom'}  strokeWidth={3} zIndex={-100} labels="0" path='smooth' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'read7.0'} start={'Read7'} end={'Read5'} />   
                <Xarrow endAnchor={'left'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} labels="1" path='grid' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'read7.1'} start={'Read7'} end={'Read6'} />

            {/* Read8 */}
            <div className={`absolute flex justify-center items-center top-[68%] left-[55%]`}>
                <ActionState id={'Read8'} state={'Read8'}  />
            </div>
                <Xarrow endAnchor={'top'} startAnchor={'left'}  strokeWidth={3} zIndex={-100} labels="0" path='grid' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'read8.0'} start={'Read8'} end={'Read9'} />   
                <Xarrow endAnchor={'bottom'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} labels="1" path='grid' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'read8.1'} start={'Read8'} end={'Read3'} /> 
            {/* Read9 */}
            <div className={`absolute flex justify-center items-center top-[80%] left-[25%]`}>
                <ActionState id={'Read9'} state={'Read9'}  />
            </div>
                <Xarrow _cpy2Offset={100} _cpx1Offset={-200} _cpx2Offset={-100} endAnchor={'top'} startAnchor={'left'}  strokeWidth={3} zIndex={-100} labels="0,1" path='smooth' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'read9.0'} start={'Read9'} end={'Read9'} />   
                
                <Xarrow endAnchor={'left'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} labels="ε" path='grid' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'read9.ε'} start={'Read9'} end={'Accept'} /> 
            {/* Accept */}
            <div className={`absolute flex justify-center items-center top-[80%] left-[50%]`}>
                    <NonTState id={'Accept'} state={'Accept'}  />
            </div>
            
            {/* Reject */}
            <div className={`absolute flex justify-center items-center top-[20%] left-[60%]`}>
                <NonTState id={'Reject'} state={'Reject'}  />
            </div>
            <Xarrow endAnchor={'left'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} labels="ε" path='grid' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'read1.ε'} start={'Read1'} end={'Reject'} /> 
        </>
    )
}
export default PDA2;