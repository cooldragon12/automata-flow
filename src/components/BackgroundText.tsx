"use client"
import { useScroll,motion, useSpring, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
const BackgroundText = ({text}:{text:string}) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 500);
    return(
        <>
          <motion.h1 
            style={{y}}
          className="-z-10 select-none absolute dark:text-[#90cbfc0c] text-[#1a252e0c] font-bold sm:text-[13rem] md:text-[16rem] lg:text-[20rem]">{text}</motion.h1>
        </>
    )
}
export default BackgroundText;