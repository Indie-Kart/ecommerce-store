import { Urbanist } from 'next/font/google'

import { SpeedInsights } from '@vercel/speed-insights/next'

import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import Navbar from '@/components/navbar'
// import HomePage from './(routes)/page'
import Footer from '@/components/footer'
import AnimatedCursor from 'react-animated-cursor'
import './globals.css'

const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'IndieKart',
  description: 'IndieKart - The place for all your purchases.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    
      
    <html lang="en">
      <body className={font.className}>
      <AnimatedCursor 
        innerSize={9}
        outerSize={40}
        color="98, 111, 152"
        outerAlpha={.2}
        innerScale={0.7}
        outerScale={3}
        clickables={[
          
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
    />
        <ToastProvider />
        
        <ModalProvider />
        <Navbar />

        {children}
        <SpeedInsights /> 
        <Footer />
      </body>
    </html>
    </>
  )
}
