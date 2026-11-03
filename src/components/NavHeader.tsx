"use client"
import Logo from "./Logo";
import {useTheme} from "@/context/theme";
import Image from "next/image";
import Link from "next/link";

const LINKS = [
    { href: "/", label: "Problem" },
    { href: "/#dfa", label: "DFA" },
    { href: "/#cfg", label: "CFG" },
    { href: "/#pda", label: "PDA" },
    { href: "/about", label: "About" },
];

const NavHeader = () => {
    const {toggle} = useTheme();
    return (
        <nav className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 sm:px-6 pt-4 pb-2 md:py-6">
            <Link href="/" aria-label="Automata Flow home">
                <Logo/>
            </Link>
            {/* Both icons are rendered and swapped with CSS, so server and client markup always match. */}
            <button type="button" onClick={toggle} aria-label="Toggle dark mode"
                className="md:order-last grid place-items-center h-10 w-10 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                <Image src="/icons8-moon-64.png" width={26} height={26} alt="" className="dark:hidden" />
                <Image src="/icons8-sun-60.png" width={26} height={26} alt="" className="hidden dark:block" />
            </button>
            <ul className="flex w-full md:w-auto md:ml-auto items-center gap-1 overflow-x-auto scrollbar-none list-none -mx-2 md:mx-0">
                {LINKS.map((l) => (
                    <li key={l.href}>
                        <Link href={l.href} className="block whitespace-nowrap rounded-lg px-3 py-2 text-sm md:text-base hover:text-accent hover:bg-black/5 dark:hover:bg-white/10 transition-colors">{l.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavHeader;
