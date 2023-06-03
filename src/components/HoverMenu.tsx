"use client"

import { useProblem } from "@/context/problem";
import {  useEffect } from "react";

const HoverMenu = () => {
  const {state, dispatch} = useProblem();
  const validateHandler = () => {
    dispatch({type:"VALIDATE", payload:{selection:"1", currentInput:""}})
  }
  const simulateHandler = () => {
    dispatch({type:"SIMULATE", payload:{selection:"1", currentInput:""}})
  }
  const nextStepHandler = () => {
    dispatch({type:"NEXT_STEP", payload:{selection:"1", currentInput:""}})
  }
  const stopSimulationHandler = () => {
    dispatch({type:"STOP_SIMULATION", payload:{selection:"1", currentInput:""}})
  }
  useEffect(() => {
  
    console.log("Simulating:",state.simulation.simulating, " in ", state.currentInput)
  }, [state.simulation.simulating])

  useEffect(() => {
    setTimeout(() => {
      if ((state.dfa.path.length > state.simulation.step) && state.simulation.step != -1)
        nextStepHandler()
      else
        stopSimulationHandler()
    }, 1000);
    console.log("Steps: ",state.simulation.step," out ",state.dfa.path.length-1)
  }, [state.simulation.step])

  useEffect(() => {
    console.log(state.valid)
  }, [state.valid])
  return(
    <>
      <menu className="flex justify-center border border-text_color dark:border-primary rounded-md fixed shadow-background bottom-[15%] left-[15%] backdrop-blur-md backdrop-brightness-120 w-[70vw] h-20 z-10">
          <select name="problem-selection" placeholder='Expression' value={state.selection} onChange={(e)=>dispatch({type: 'SELECT', payload:{selection:e.target.value,currentInput:""}})} className="dark:bg-dark_background bg-inherit border border-inherit rounded-lg p-3 m-2 w-[50%] focus-visible:outline-inherit flex-[0.8]" >
            <option value="1">Problem 1</option>
            <option value="2">Problem 2</option>
          </select>
          <input onChange={(e)=>dispatch({type:"ENTERED_INPUT",payload:{selection:"1", currentInput:e.target.value}})} disabled={state.simulation.simulating} type="text" placeholder='Validaty' className={`bg-inherit border border-inherit rounded-lg p-3 m-2 w-[50%] focus-visible:outline-inherit `} />
          <div className="flex gap-0">
            <button type="button" onClick={validateHandler} disabled={state.simulation.simulating} className="text-sm hover:tracking-wider bg-inherit border border-inherit rounded-lg p-3 m-2 w-[50%] focus-visible:outline-inherit transition-all hover:bg-secondary hover:text-dark_text_color hover:drop-shadow-md hover:dark:drop-shadow-[0_4px_3px_rgba(231,76,60,.25)] disabled:bg-slate-400 disabled:text-slate-500">VALIDATE</button>
            <button type="button" onClick={simulateHandler} disabled={state.simulation.simulating} className="text-sm hover:tracking-wider bg-inherit border border-inherit rounded-lg p-3 m-2 w-[50%] focus-visible:outline-inherit transition-all hover:bg-accent hover:text-dark_text_color hover:drop-shadow-md  hover:dark:drop-shadow-[0_4px_3px_rgba(52,152,219,.25)] disabled:bg-slate-400 disabled:text-slate-500">SIMULATE</button>
          </div>
      </menu>
    </>
    )
}

export default HoverMenu;