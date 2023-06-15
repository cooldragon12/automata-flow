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
            <Xarrow endAnchor={'top'} startAnchor={'bottom'}  strokeWidth={3} zIndex={-100} path='grid' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'start'} start={'Start'} end={'Read1'} />
            {/* Read */}
            <div className={`absolute flex justify-center items-center top-[40%] left-[46.5%]`}>
                <ActionState id={'Read1'} state={'Read1'}  />
            </div>
                <Xarrow endAnchor={'top'} startAnchor={'bottom'}  strokeWidth={3} zIndex={-100} labels="a,b" path='grid' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'read1.ab'} start={'Read1'} end={'Accept'} />
                <Xarrow endAnchor={'left'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} labels="ε" path='grid' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'read1.ε'} start={'Read1'} end={'Reject'} />
            {/* Accept */}
            <div className={`absolute flex justify-center items-center top-[60%] left-[45%]`}>
                    <NonTState id={'Accept'} state={'Accept'}  />
            </div>
            {/* Reject */}
            <div className={`absolute flex justify-center items-center top-[40%] left-[65%]`}>
                    <NonTState id={'Reject'} state={'Reject'}  />
            </div>
                
        </>
    )
}
export default PDA1;