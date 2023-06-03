"use client"
import { motion,useDragControls, MotionStyle} from "framer-motion";
import { useXarrow } from "react-xarrows";

type StateProps = {
    state: "Start" | "+" | "-" |string;
    valid: boolean;
    id: string;
};

/**
 * 
 * This is representing the state of the Finite automata 
 * It is a circle with a value in it which is the state
 * @returns A circle with a value in it
 */
const State = (props:StateProps) => {
    const updatePoints = useXarrow();
    const controls = useDragControls()
    
    const startDrag = (event:any)=>{
        controls.start(event)
    }

    return (
        <>
        <motion.div 
            drag="y"
            dragControls={controls} 
            onPointerDown={startDrag}
            onPointerMove={updatePoints}
            onPointerUp={updatePoints}
            onPointerLeave={updatePoints}
            whileDrag={{ transition:{duration: 0.3, bounce: 1}}}
            dragSnapToOrigin={true}
            dragElastic={1}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 2, power: 1 }}
            transition={{
                type: "tween",
                duration: 1,
                ease: "easeInOut",
            }}
            id={props.id}
            className={`flex items-center flex-col justify-center rounded-full w-[6em] h-[6em] border-4 transition-color hover:shadow-text_color hover:shadow-md ${props.valid? "border-success bg-success":"border-primary"}`}>
                <p>{props.state}</p>
        </motion.div>
        </>
    );
};

export default State;