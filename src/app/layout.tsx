import './globals.css'
import {Header} from "@/components/Header";
import { Poppins } from 'next/font/google'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <main style={{marginTop: "75px"}}>
          {children}
        </main>
      </body>
    </html>
  )
}