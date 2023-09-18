import {Header} from '@/components/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
const inter = Inter({
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Trx Headphone',
  description: 'Landing Page Product Headphone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='antialiased'>
      <body className={inter.className}>
       <div className="w-full h-screen bg-[url('/headphone3.jpeg')] bg-cover items-center justify-center">
        <Header />
        {children}
       </div>
      </body>
    </html>
  )
}
