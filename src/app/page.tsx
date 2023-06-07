
import Board from "@/components/FA/Board"
import TitleProblem from "@/components/TitleProblem";
import { Suspense, lazy } from 'react'
import Loading from "./about/loading";
import HoverMenu from "@/components/HoverMenu";


export default function Home() { 
  return (
    <main className="flex min-h-screen flex-col items-center px-24 py-20">
      {/* Hover */}
      <HoverMenu/>
      {/* Main Content */}

      <TitleProblem/>

      <div id="dfa" className="relative overflow-hidden flex justify-center items-center  max-w-[100vw] w-[100%] max-h-[70vh] h-[70vh]">
          <div className="overflow-visible w-[65%] relative h-[100%]">
            <Board />
          </div>

      </div>
      <div id="pda" className="flex  items-center justify-between relative overflow-visible max-w-[60vw] w-[100%] max-h-[40vh] h-[40vh]">
        {/* <Board /> */}
      </div>
      <div id="cfg" className="flex  items-center justify-between relative overflow-visible max-w-[60vw] w-[100%] max-h-[40vh] h-[40vh]">
        {/* <Board /> */}
      </div>

    </main>
  )
}
