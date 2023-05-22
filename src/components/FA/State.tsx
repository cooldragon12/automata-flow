"use client"
import { motion,useDragControls} from "framer-motion";
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
        <motion.div 
        drag 
        dragControls={controls} 
        onPointerDown={startDrag}
        onPointerMove={updatePoints}
        onPointerUp={updatePoints}
        onPointerLeave={updatePoints}
        whileDrag={{color: "orange"}}
        // dragSnapToOrigin={true}
        dragElastic={0.2}
        dragTransition={{ bounceStiffness: 150, bounceDamping: 2, power: 0.1 }}
        
        transition={{
            
            type: "tween",
            duration: 2,
            ease: "easeInOut",

        }}
        id={props.id}
        className={`flex items-center flex-col justify-center rounded-full w-[6em] h-[6em] border-4 ${props.valid? "border-success":"border-primary"}`}>
            {props.state === "-"? 
            <div className={`flex items-center flex-col justify-center rounded-full w-[2em] h-[3em] border-1 ${props.valid? "border-success":"border-primary"}`}>
            <p>{props.state}</p>
            </div>:
            <p>{props.state}</p>
            }
        </motion.div>
    );
};

export default State;