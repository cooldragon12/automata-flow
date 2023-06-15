import LowerRightImage from "@/assets/about/elements/4.png";
import LowerLeftImage from "@/assets/about/elements/1.png";
import LowerLeftSImage from "@/assets/about/elements/2.png";
import LowerRSImage from "@/assets/about/elements/3.png";

import Member1 from "@/assets/about/avatar/5.png";
import Member2 from "@/assets/about/avatar/6.png";
import Member3 from "@/assets/about/avatar/7.png";
import Member4 from "@/assets/about/avatar/8.png";
import Member5 from "@/assets/about/avatar/9.png";

import Image from 'next/image'
export default function About() {
    return (
        <main className="flex flex-col overflow-hidden items-center px-24 py-20">
            <div className="flex items-center justify-center py-10">
                <h1 className="text-6xl font-bold p-10">ABOUT</h1>
            </div>
            <section className="flex flex-col relative h-[80vh]">
                <div className="flex ">
                    <div className="flex flex-col w-[50%] h-[100%]">
                        <h1 className="text-4xl py-10 font-semibold">Welcome to Automata Flow!</h1>
                        <p className="text-lg">We provide a desktop application designed to simulate Deterministic Finite Automata (DFA) and validate input strings based on two given regular expression problems. With interactive DFA diagrams, you can explore and analyze the behavior of DFA in real-time. Simulate input strings, test different scenarios, and gain a deeper understanding of automata theory.</p>
                    </div>
                </div>
                <div className="flex  items-center absolute bottom-[-50%] right-[-10%]">
                    <Image  width={700} height={700} alt="LowerRifht" src={LowerRightImage}/>
                </div>
            </section>
            <section className="flex relative flex-col justify-center h-[60vh]">
                <div className="flex justify-end ">
                    <div className="flex flex-col justify-center items-end w-[60%] h-[100%]">
                        <p className="text-xl text-end">Built with the latest technologies, Automata Flow ensures a seamless experience. Powered by Next.js 13.4 App Router, our application delivers smooth performance and responsiveness. The stylish and modern interface, crafted with Tailwind CSS, offers an aesthetically pleasing environment. Framer Motion is used for captivating animations that enhance your interaction with the application. The User Manual can be downloaded here: *insert link for manual</p>
                    </div>
                </div>
                <div className="flex  items-center absolute bottom-[-102%] -left-[15%]">
                    <Image  width={700} height={700} alt="LowerLeft" src={LowerLeftImage}/>
                    
                </div>
                <div className="flex  items-center absolute bottom-[-104%] -left-[15%]">
                    <Image  width={700} height={700} alt="LowerLeftS" src={LowerLeftSImage}/>
                    
                </div>
                
            </section>
            <section className=" flex flex-col justify-center md:h-[80vh] lg:h-screen z-10">
                <div className="flex items-center justify-center py-10">
                    <h1 className="text-2xl font-bold p-10">Meet The Team</h1>
                </div>
                <div>
                    <div className="flex">
                        <div className="flex flex-col justify-center items-center hover:scale-105 transition-all hover:cursor-pointer">
                            <Image  width={500} height={500} alt="Member1" src={Member1}/>
                            <h2 className="text-xl ">Alphonsus Joseph Bihag</h2>
                        </div>
                        <div className="flex flex-col justify-center items-center hover:scale-105 transition-all hover:cursor-pointer">
                        <Image  width={500} height={500} alt="Member2" src={Member2}/>
                        <h2 className="text-xl ">Johndel Encabo</h2>
                        
                        </div>
                        
                        <div className="flex flex-col justify-center items-center hover:scale-105 transition-all hover:cursor-pointer">
                        <Image  width={500} height={500} alt="Member3" src={Member3}/>
                        <h2 className="text-xl ">Edward Raphael Viñegas</h2>
                        
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="flex flex-col justify-center items-center hover:scale-105 transition-all hover:cursor-pointer">
                            <Image  width={500} height={500} alt="Member4" src={Member5}/>
                            <h2 className="text-xl ">Antonio Miguel Chavez</h2>
                        </div>
                        <div className="flex flex-col justify-center items-center hover:scale-105 transition-all hover:cursor-pointer">
                            <Image  width={500} height={500} alt="Member5" src={Member4}/>
                            <h2 className="text-xl ">Maria Cassandra Vitug</h2>
                        </div>
                    </div>
                </div>
                {/* <div className="flex -z-10  items-center absolute h-[0px] bottom-[-1%] -right-[15%]">
                    <Image  width={700} height={200} alt="LowerRS" src={LowerRSImage}/>
                    
                </div> */}
            </section>
        </main>

    )
}