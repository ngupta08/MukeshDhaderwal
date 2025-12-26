import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MindCare - Professional Psychiatric Care',
  description: 'Professional psychiatric care in a safe, compassionate environment. Licensed and certified mental health services.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

