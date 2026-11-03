
import Board from "@/components/FA/Board"
import TitleProblem from "@/components/TitleProblem";

import HoverMenu from "@/components/HoverMenu";
import CFGBoard from "@/components/CFG/Board";
import PDABoard from "@/components/PDA/Board";
import BackgroundText from "@/components/BackgroundText";

const Section = ({ id, title, subtitle, children }: { id: string, title: string, subtitle: string, children: React.ReactNode }) => (
  <section id={id} className="relative w-full max-w-6xl scroll-mt-6 py-10 md:py-16 md:min-h-screen flex flex-col justify-center">
    <div className="absolute inset-0 flex items-center justify-start overflow-hidden pointer-events-none" aria-hidden>
      <BackgroundText text={title}/>
    </div>
    <header className="mb-4 md:mb-6">
      <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
      <p className="text-sm md:text-base opacity-70">{subtitle}</p>
    </header>
    {children}
  </section>
)

export default function Home() { 
  return (
    <main className="flex min-h-screen flex-col items-center px-4 sm:px-8 lg:px-24 pt-4 md:pt-10 pb-48 md:pb-32">
      <HoverMenu/>
      <TitleProblem/>

      <Section id="dfa" title="DFA" subtitle="Deterministic finite automaton. Drag a state to move it.">
        <Board />
      </Section>
      <Section id="cfg" title="CFG" subtitle="Context-free grammar that generates the same language.">
        <CFGBoard/>
      </Section>
      <Section id="pda" title="PDA" subtitle="Pushdown automaton as a flowchart.">
        <div className="w-full max-w-2xl mx-auto">
          <PDABoard/>
        </div>
      </Section>
    </main>
  )
}
