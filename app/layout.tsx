import type { Metadata } from 'next'
import './globals.css'
import { LangProvider } from './LangContext'

export const metadata: Metadata = {
  title: 'K-Beauty Seoul',
  description: 'Discover your perfect K-Beauty experience in Seoul',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <LangProvider>
          {children}
        </LangProvider>
      </body>
    </html>
  )
}