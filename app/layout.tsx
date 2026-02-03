import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mano Unnati Psychiatric Hospital | Psychiatry & Psychotherapy in Jaipur',
  description:
    'Mano Unnati Psychiatric Hospital in Jaipur offers Psychiatry (Dr. Mukesh Chand Daderwal) and a dedicated Psychotherapy Wing (Dr Priyanka Sheoran, PhD Psychology). Book appointments via WhatsApp.',
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

