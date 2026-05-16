import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'Debokti Ghosh | Front-end Engineer & AI Integration Specialist',
  description:
    'Portfolio of Debokti Ghosh — a Front-end Engineer with 7.5+ years of experience in Financial Services, specializing in Angular, Spring Boot, Python/FastAPI, and AI-enabled enterprise applications.',
  keywords: [
    'Debokti Ghosh',
    'Full Stack Developer',
    'Angular Developer',
    'Spring Boot',
    'Financial Services',
    'Capgemini',
    'TCS',
    'Portfolio',
  ],
  authors: [{ name: 'Debokti Ghosh' }],
  openGraph: {
    title: 'Debokti Ghosh | Front-end Engineer',
    description:
      'Bridging traditional enterprise systems with modern, AI-enabled architectures.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
