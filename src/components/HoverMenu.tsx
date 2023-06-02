"use client"

import { useProblem } from "@/context/problem";

const HoverMenu = () => {
  const {state, dispatch} = useProblem();  
  return(
      <menu className="flex justify-center border border-text_color dark:border-primary rounded-md fixed shadow-background bottom-[15%] left-[15%] backdrop-blur-md backdrop-brightness-120 w-[70vw] h-20 z-10">
          <select name="problem-selection" placeholder='Expression' value={state.selection} onChange={(e)=>dispatch({type: 'SELECT', payload:{selection:e.target.value}})} className="dark:bg-dark_background bg-inherit border border-inherit rounded-lg p-3 m-2 w-[50%] focus-visible:outline-inherit flex-[0.8]" >
            <option value="1">Problem 1</option>
            <option value="2">Problem 2</option>
          </select>
          <input type="text" placeholder='Validaty' className="bg-inherit border border-inherit rounded-lg p-3 m-2 w-[50%] focus-visible:outline-inherit " />
          <div className="flex gap-0">
            <button className="text-sm hover:tracking-wider bg-inherit border border-inherit rounded-lg p-3 m-2 w-[50%] focus-visible:outline-inherit transition-all hover:bg-secondary hover:text-dark_text_color hover:drop-shadow-md hover:dark:drop-shadow-[0_4px_3px_rgba(231,76,60,.25)]">Validate</button>
            <button className="text-sm hover:tracking-wider bg-inherit border border-inherit rounded-lg p-3 m-2 w-[50%] focus-visible:outline-inherit transition-all hover:bg-accent hover:text-dark_text_color hover:drop-shadow-md  hover:dark:drop-shadow-[0_4px_3px_rgba(52,152,219,.25)]">Simulate</button>
          </div>
      </menu>
    )
}

export default HoverMenu;