
import Board from "@/components/FA/Board"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Hover */}
      <menu className="flex justify-center border border-primary rounded-sm fixed shadow-background bottom-[15%] left-[25%] backdrop-blur-md backdrop-brightness-120 w-[50vw] h-20">
        <input type="text" placeholder='Expression' className="bg-inherit border border-inherit rounded-lg p-3 m-2 w-[50%] focus-visible:outline-inherit " />
        <input type="text" placeholder='Validaty' className="bg-inherit border border-inherit rounded-lg p-3 m-2 w-[50%] focus-visible:outline-inherit " />
      </menu>

      {/* Main Content */}
      <div className="flex  items-center justify-between border relative overflow-hidden bg-black max-w-[60vw] w-[100%] max-h-[40vh] h-[40vh]">
        <Board />
      </div>
      <div className="flex flex-col items-center justify-center border bg-accent w-[40vw] h-[20vh]">

      </div>


    </main>
  )
}
