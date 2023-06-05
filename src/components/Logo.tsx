import Image from 'next/image';
export default function Logo() {
    return (
        <div className="flex items-center justify-center hover:cursor-pointer dark:text-white">
            <Image src="af.svg" width={40} height={40} alt="Automata Flow Logo" />
            <p className="transition-all text-inherit font-bold text-lg first-letter:text-accent checked:bg-success checked:border-success hover:drop-shadow-md hover:shadow-accent">AUTOMATA</p> 
            <p className="text-inherit text-lg font-medium first-letter:text-secondary">Flow</p>
        </div>
    )
}