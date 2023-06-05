import './globals.css'
import { NextAuthProvider } from './provider'
import Navigation from './components/Navigation'
import InfoModal from './components/infoModal'


export const metadata = {
  title: 'Spartan-Video',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative h-full w-full bg-zinc-900 bg-no-repeat bg-fixed bg-center bg-cover"> 
        <Navigation/>
        <NextAuthProvider>
        {children}
        </NextAuthProvider>
      </body>
    </html>
  )
}
