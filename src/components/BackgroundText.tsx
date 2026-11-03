"use client"
import { useScroll, motion, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
const BackgroundText = ({text}:{text:string}) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const y = useParallax(scrollYProgress, 120);
    return(
        <motion.h1 
          ref={ref}
          style={{y}}
          className="-z-10 select-none leading-none dark:text-[#90cbfc0c] text-[#1a252e0c] font-bold text-[8rem] sm:text-[13rem] md:text-[16rem] lg:text-[20rem]">{text}</motion.h1>
    )
}
export default BackgroundText;
