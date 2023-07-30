
import Head from 'next/head'
import './globals.css'
import { Rubik } from 'next/font/google'
import { ContextAppProvider } from '@/context/context'

const rubik = Rubik({
    weight: ["300","400", "500", "600", "700", "800", "900"],
    subsets: ['latin']
})

export const metadata = {
  title: 'App Anime',
  description: 'App Anime By Confama',
  favicon: '/favicon.ico'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning={true}>
      <Head>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
      </Head>
      <body className={rubik.className}>
        <ContextAppProvider>
          {children}
        </ContextAppProvider>
      </body>
    </html>
  )
}
