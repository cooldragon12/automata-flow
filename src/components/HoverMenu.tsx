"use client"

import { useProblem } from "@/context/problem";
import {  useEffect } from "react";
import {AiFillCheckCircle, AiFillCloseCircle} from "react-icons/ai";

const HoverMenu = () => {
  const {state, dispatch} = useProblem();
  const validateHandler = () => {
    dispatch({type:"VALIDATE", payload:{selection:"1", currentInput:""}})
  }
  const stopValidationHandler = ()=>{
    dispatch({type:"VALIDATING",payload:{selection:"1",currentInput:""}})
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
  useEffect(()=>{
    if (state.validation.validating)
      stopValidationHandler()
  }, [state.validation.validating])
  useEffect(() => { // Play sound on valid/invalid
    const audio1 = new Audio("/sound/ping.mp3");
    const audio2 = new Audio("/sound/error.mp3");
    if (state.validation.valid === true)
      audio1.play();
    else if (state.validation.valid === false)
      audio2.play();
    console.log(state.validation.valid)
  }, [state.validation.valid])

  useEffect(() => {
    setTimeout(() => {
      if ((state.dfa.path.length > state.simulation.step) && state.simulation.step != -1)
        nextStepHandler()
      else
        if (state.simulation.simulating)
        stopSimulationHandler()
    }, 1000);
    console.log("Steps: ",state.simulation.step," out ",state.dfa.path.length-1)
  }, [state.simulation.step])

  
  return(
    <>
      <menu className={`flex justify-center border border-text_color dark:border-primary rounded-md fixed shadow-background 
                        bottom-[13%] 
                        lg:left-[30%] backdrop-blur-md backdrop-brightness-120 w-[90vw] lg:w-[40vw] h-20 z-10`}>
          <div className="flex justify-center items-center outline-inherit border-inherit relative">
            <select 
              name="problem-selection" 
              placeholder='Expression' value={state.selection} 
              onChange={(e)=>dispatch({type: 'SELECT', payload:{selection:e.target.value,currentInput:""}})} 
              className="dark:bg-dark_background bg-inherit border border-inherit rounded-lg p-3 m-2 focus-visible:outline-inherit flex-[0.8] transition-color" >
              <option value="1">Problem 1</option>
              <option value="2">Problem 2</option>
            </select>
          </div>

          <div className="flex justify-center items-center outline-inherit border-inherit relative w-[35em]">
            {
              state.validation.valid === null ? <></>: state.validation.valid ? 
              <AiFillCheckCircle className="text-2xl text-success absolute right-3"/> : 
              <AiFillCloseCircle className="text-2xl text-danger absolute right-3"/>
            }
            <input 
              onChange={(e)=>dispatch({type:"ENTERED_INPUT",payload:{selection:"1", currentInput:e.target.value}})} 
              disabled={state.simulation.simulating} type="text" placeholder='Validaty' 
              className={`bg-inherit border border-inherit rounded-lg p-3 m-2 w-[100%] focus-within:outline-none focus-visible:outline-inherit ${state.validation.valid != null? state.validation.valid? "text-success": "text-danger":""}`} />
          </div>
          <div className="flex gap-0">
            <button type="button" onClick={validateHandler} disabled={state.simulation.simulating} className="text-sm hover:tracking-wider bg-inherit border border-inherit rounded-lg p-3 m-2 w-[50%] focus-visible:outline-inherit transition-all hover:bg-secondary hover:text-dark_text_color hover:drop-shadow-md hover:dark:drop-shadow-[0_4px_3px_rgba(231,76,60,.25)] disabled:hover:tracking-normal disabled:hover:drop-shadow-none disabled:bg-[#acabab44] disabled:text-slate-500">VALIDATE</button>
            <button type="button" onClick={simulateHandler} disabled={state.simulation.simulating} className="text-sm hover:tracking-wider bg-inherit border border-inherit rounded-lg p-3 m-2 w-[50%] focus-visible:outline-inherit transition-all hover:bg-accent hover:text-dark_text_color hover:drop-shadow-md  hover:dark:drop-shadow-[0_4px_3px_rgba(52,152,219,.25)] disabled:hover:tracking-normal disabled:hover:drop-shadow-none disabled:bg-[#acabab44] disabled:text-slate-500">SIMULATE</button>
          </div>
      </menu>
    </>
    )
}

export default HoverMenu;