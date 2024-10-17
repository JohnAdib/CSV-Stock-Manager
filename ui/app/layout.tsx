import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { Container } from '@components/atoms/container'
import clsx from 'clsx'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

export const metadata: Metadata = {
  title: 'CSV Stock Manager',
  description: 'Simple CRUD app for managing stocks in CSV format'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          geistSans.variable,
          geistMono.variable,
          'antialiased',
          'flex',
          'flex-col',
          'relative',
          'min-h-screen'
        )}
      >
        <Header />
        <Container className={clsx('grow', 'py-4 sm:py-6 md:py-12')}>
          {children}
        </Container>
        <Footer />
      </body>
    </html>
  )
}
