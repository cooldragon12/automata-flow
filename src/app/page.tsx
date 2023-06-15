
import Board from "@/components/FA/Board"
import TitleProblem from "@/components/TitleProblem";

import HoverMenu from "@/components/HoverMenu";
import CFGBoard from "@/components/CFG/Board";
import BackgroundText from "@/components/BackgroundText";



export default function Home() { 
  return (
    <main className="flex min-h-screen flex-col items-center px-24 py-20">
      {/* Hover */}
      <HoverMenu/>
      {/* Main Content */}
      <TitleProblem/>

      <div id="dfa" className="py-1 relative overflow-hidden flex justify-center items-center  w-[100%] h-[86vh]">
          <div className="overflow-visible w-[65%] relative h-[100%]">
            <Board />
          </div>
          <div className="absolute">

            <BackgroundText text="DFA"/>
          </div>
          
          
      </div>
      <div id="cfg" className="py-1 overflow-hidden flex items-center justify-between relative w-[100%] h-[100vh]">
        <div className="flex w-[50%] flex-col">
          <CFGBoard/>
        </div>
        <div className="absolute">
          <BackgroundText text="CFG"/>
        </div>
          
      </div>
      <div id="pda" className="py-1 overflow-hidden flex  items-center justify-between relative  w-[100%] h-[100vh]">

      </div>

    </main>
  )
}
