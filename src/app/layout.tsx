import Logo from '@/components/Logo'
import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/context/theme'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Automata Flow',
  description: 'Generate your automata with diagram',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex items-center justify-between flex-wrap p-6">
          <a href="/">
          <Logo/>
          </a>
          <div className="flex items-center flex-shrink-0  mr-6 list-none">
            
              <li className="mr-6 hover:text-accent">
                <a href="/">Problem</a>
              </li>
              <li className="mr-6 hover:text-accent">
                <a href="/d-finite-automata">DFA</a>
              </li>
              <li className="mr-6 hover:text-accent">
                <a href="/n-finite-automata">PDA</a>
              </li>
              <li className="mr-6 hover:text-accent">
                <a href="/n-finite-automata">CFG</a>
              </li>
              <li className="mr-6 hover:text-accent">
                <a href="/about">About</a>
              </li>
            
          </div>
        </nav>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
