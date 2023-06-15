"use client"
import { motion,useDragControls, MotionStyle} from "framer-motion";
import { useXarrow } from "react-xarrows";

type StateProps = {
    state: "Read" | "Push" | "Pop" |string;
    valid?: boolean;
    id: string;
};

/**
 * 
 * This is representing the state of the Finite automata 
 * It is a circle with a value in it which is the state
 * @returns A circle with a value in it
 */
const ActionState = (props:StateProps) => {
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
            id={props.id}
            className="relative"
            >
                <motion.div className={`
                    flex 
                    items-center 
                    flex-col 
                    justify-center 
                    rotate-45
                    w-[5em] h-[5em] 
                    border-4  
                    transition-all 
                    scale-100 hover:shadow-text_color hover:shadow-md ${props.valid? "border-success bg-success scale-110":"border-primary bg-transparent"}
                    `}>
                </motion.div>
                <p className={`absolute font-bold top-[35%] left-[25%]`}>{props.state}</p>
        </motion.div>
        </>
    );
};

export default ActionState;