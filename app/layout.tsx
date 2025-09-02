import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yatin Sharma - Portfolio',
  description: 'Full Stack Developer | Computer Science Engineer | Problem Solver',
  keywords: ['Yatin Sharma', 'Portfolio', 'Full Stack Developer', 'Computer Science', 'React', 'Next.js', 'Spring Boot'],
  authors: [{ name: 'Yatin Sharma' }],
  creator: 'Yatin Sharma',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yatin-portfolio.vercel.app',
    title: 'Yatin Sharma - Portfolio',
    description: 'Full Stack Developer | Computer Science Engineer | Problem Solver',
    siteName: 'Yatin Sharma Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yatin Sharma - Portfolio',
    description: 'Full Stack Developer | Computer Science Engineer | Problem Solver',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
