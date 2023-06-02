import Board from "@/components/FA/Board"
import HoverMenu from "@/components/HoverMenu";
import TitleProblem from "@/components/TitleProblem";

export default function Home() { 
  return (
    <main className="flex min-h-screen flex-col items-center px-24 py-20">
      {/* Hover */}
      <HoverMenu/>
      {/* Main Content */}

      <TitleProblem/>

      <div id="dfa" className="flex  items-center justify-between relative overflow-visible max-w-[60vw] w-[100%] max-h-[40vh] h-[40vh]">
        <Board />
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
