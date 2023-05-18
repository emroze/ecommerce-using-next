import './globals.css'
import { Inter } from 'next/font/google'
import Providers from '@/component/providers'
import Nav from '@/component/nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ecommerce Emroze',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Nav/>
          {children}
        </Providers>
      </body>
    </html>
  )
}
