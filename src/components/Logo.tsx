import Image from 'next/image';
export default function Logo() {
    return (
        <div className="flex items-center justify-center hover:cursor-pointer dark:text-white">
            <Image src="af.svg" width={40} height={40} alt="Automata Flow Logo" />
            <p className="text-inherit font-bold text-lg first-letter:text-accent hover:drop-shadow-md hover:shadow-accent">AUTOMATA</p> 
            <p className="text-inherit text-lg font-medium first-letter:text-secondary">Flow</p>
        </div>
    )
} 