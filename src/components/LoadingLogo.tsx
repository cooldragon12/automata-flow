"use client"
import { motion,animate, stagger} from "framer-motion";
import { useEffect } from "react";

const staggerLoading = stagger(0.2, { startDelay: 0.15 });

const LoadingLogo = () => {
    
    useEffect(() => {
        animate(
            [
                [
                    ".circle",
                    {opacity:0,transform: "translateY(1rem)"},
                    {duration: 0.5, ease: "easeInOut", delay: staggerLoading}
                ],
                [
                    ".circle",
                    {opacity:1,transform: "translateY(-1rem)"},
                    {duration: 0.5, ease: "easeInOut", delay: staggerLoading}
                ],
                [
                    ".circle",
                    {borderRadius: ["50%", "25%", "10%","25%" ,"50%"]},
                    {duration: 1, ease: "easeIn", delay: staggerLoading}
                ],
                [
                    ".circle",
                    {position: "absolute",top: "50%",left: "50%",transform: "translate(-50%, -50%)"},
                    {duration: 0.3, ease: "easeInOut", delay: staggerLoading}
                ],
            ],
            { repeat: Infinity, repeatType: "reverse"}
          );
    },[])
    return(
        <div className="relative w-[13rem] h-[13rem]">
            <div
                className="circle w-[6em] h-[6em] right-1 top-4 border-4 border-accent rounded-full flex items-center justify-center absolute bg-accent">
                    +
            </div>
            <div
                className="circle w-[4.5em] h-[4.5em] left-0 top-3  border-4 border-text_color rounded-full flex items-center justify-center absolute bg-accent">
                    q1
            </div>
            <div
                className="circle w-[3em] h-[3em] left-9 bottom-7 border-4 border-secondary rounded-full flex items-center justify-center absolute bg-accent">
                    -
            </div>
        </div>
    )
} 
export default LoadingLogo;