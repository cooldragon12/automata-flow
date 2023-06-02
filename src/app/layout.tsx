import './globals.css'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'
import Loading from './loading'
import NavHeader from '@/components/NavHeader'
import { ThemeProvider } from '@/context/theme'
import { ProblemProvider } from '@/context/problem'
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
    <html lang="en" >
      <body className={`${inter.className} transition-colors dark:bg-dark_background bg-background dark:text-dark_text_color text-text_color`}>
        <ThemeProvider>
          <ProblemProvider>
            <NavHeader/>
            <Suspense fallback={<Loading/>}>
                {children}
            </Suspense>
          </ProblemProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
