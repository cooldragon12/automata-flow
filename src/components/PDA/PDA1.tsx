"use client"
import { IProblemState } from '@/context/problem'
import ActionState from './ActionState'
import NonTState from './NonTState'
import Xarrow from 'react-xarrows'
const PDA1 = ({theme, state}: {theme:string, state: IProblemState}) => {
    return(
        <>
            {/* START */}
            <div className={`absolute flex justify-center items-center top-[20%] left-[45%]`}>
                <NonTState id={'Start'} state={'Start'} />
            </div>
            <Xarrow endAnchor={'top'} startAnchor={'bottom'}  strokeWidth={3} zIndex={-100} path='straight' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'start'} start={'Start'} end={'Read1'} />
            {/* Read1 */}
            <div className={`absolute flex justify-center items-center top-[40%] left-[45%]`}>
                <ActionState id={'Read1'} state={'Read1'}  />
            </div>
                <Xarrow endAnchor={'right'} startAnchor={'left'}  strokeWidth={3} zIndex={-100} labels="a" path='grid' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'read1.a'} start={'Read1'} end={'Read2'} />
                <Xarrow endAnchor={'left'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} labels="b" path='grid' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'read1.b'} start={'Read1'} end={'Read3'} />
             {/* Read2 */}
             <div className={`absolute flex justify-center items-center top-[40%] left-[25%]`}>
                <ActionState id={'Read2'} state={'Read2'}  />
            </div>
                <Xarrow endAnchor={'top'} startAnchor={'bottom'}  strokeWidth={3} zIndex={-100} labels="a" path='grid' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'read2.a'} start={'Read2'} end={'Read4'} />
             {/* Read3 */}
             <div className={`absolute flex justify-center items-center top-[40%] left-[65%]`}>
                <ActionState id={'Read3'} state={'Read3'}  />
            </div>
                <Xarrow endAnchor={'top'} startAnchor={'bottom'}  strokeWidth={3} zIndex={-100} labels="b" path='grid' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'read3.b'} start={'Read3'} end={'Read6'} />
                
             {/* Read4 */}
             <div className={`absolute flex justify-center items-center top-[60%] left-[25%]`}>
                <ActionState id={'Read4'} state={'Read4'}  />
            </div>
            <Xarrow endAnchor={'left'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} labels="a,b" path='grid' 
                    animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'read4.ab'} start={'Read4'} end={'Read5'} />
                
             {/* Read5 */}
             <div className={`absolute flex justify-center items-center top-[60%] left-[45%]`}>
                <ActionState id={'Read5'} state={'Read5'}  />
            </div>
                <Xarrow endAnchor={'top'} startAnchor={'bottom'}  strokeWidth={3} zIndex={-100} labels="a,b" path='straight' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'read1.ab'} start={'Read5'} end={'Accept'} />
             {/* Read6 */}
             <div className={`absolute flex justify-center items-center top-[60%] left-[65%]`}>
                <ActionState id={'Read6'} state={'Read6'}  />
            </div>
                <Xarrow endAnchor={'right'} startAnchor={'left'}  strokeWidth={3} zIndex={-100} labels="a,b" path='grid' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'read6.ab'} start={'Read6'} end={'Read5'} />
               
            {/* Accept */}
            <div className={`absolute flex justify-center items-center top-[80%] left-[45%]`}>
                    <NonTState id={'Accept'} state={'Accept'}  />
            </div>
            
        </>
    )
}
export default PDA1;