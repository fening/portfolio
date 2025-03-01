import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Sidebar } from './components/Sidebar'
import { GoogleAnalytics } from './components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fening Okai - Portfolio',
  description: 'IT Auditor | Security Analyst | GRC Analyst',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <GoogleAnalytics />
      <body className={inter.className}>
        <div className="min-h-screen flex">
          <div className="hidden lg:block fixed h-screen">
            <Sidebar />
          </div>
          <main className="flex-1 lg:ml-64 overflow-y-auto p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

