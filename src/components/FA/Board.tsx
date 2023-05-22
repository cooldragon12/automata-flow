"use client"
import State from './State'
import Xarrow, {Xwrapper} from 'react-xarrows'

const Board = () => {
    return (
        <>
        <Xwrapper >
            <State  id='initial_state'  state="Start" valid={true} />

            {/* Follows the circle component */}
            
            <State  id="S1" state="1" valid={false} />
            <Xarrow  animateDrawing={1} start={'initial_state'} end={'S1'} />

           
            <State  id="S2" state="2" valid={true} />
            <Xarrow   start={'S1'} end={'S3'} />

            <State  id="S3" state="3" valid={false}  />
            <Xarrow  start={'S2'} end={'S3'} />
            <Xarrow  animateDrawing={1} start={'S1'} end={'S2'} />

            <Xarrow  animateDrawing={1} start={'final_state'} end={'initial_state'} />
            <Xarrow  animateDrawing={1} start={'S3'} end={'final_state'} />

            <State  id='final_state'  state="-" valid={true} />

        </Xwrapper>
        </>
    )
}

export default Board;