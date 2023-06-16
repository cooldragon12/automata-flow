"use client"
import Logo from "./Logo";
import {useTheme} from "@/context/theme";
import { useEffect } from "react";
import Image from "next/image";

const NavHeader = () => {
    const {theme, toggle} = useTheme();
    useEffect(()=>{
        console.log(theme);
    }, [theme]);
    return (
        <nav className="flex items-center justify-between flex-wrap p-6">
            <a href="/">
                <Logo/>
            </a>
            
            <ul className="flex items-center flex-shrink-0  mr-6 list-none">
                <li className="mr-6 hover:text-accent">
                    <a href="/">Problem</a>
                </li>
                <li className="mr-6 hover:text-accent">
                    <a href="#dfa">DFA</a>
                </li>
                <li className="mr-6 hover:text-accent">
                    <a href="#cfg">CFG</a>
                </li>
                <li className="mr-6 hover:text-accent">
                    <a href="#pda">PDA</a>
                </li>
                <li className="mr-6 hover:text-accent">
                    <a href="/about">About</a>
                </li>
                <li className="mr-6 hover:text-accent">
                    <div className='toggle-theme'></div>
                </li>
                <li className="mr-6 hover:text-accent select-none cursor-pointer">
                    <div className='toggle-theme' onClick={toggle}>
                        <Image src={theme === "Light"?  "/icons8-moon-64.png": "/icons8-sun-60.png" } width={30} height={30} alt="Theme Toggle" />
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default NavHeader;