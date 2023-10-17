import './css/style.css'

import { Inter } from 'next/font/google'

import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'
import { getCurrentLocale, getI18n } from '../locales/server'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export async function generateMetadata() {
  const t = await getI18n()
  
  return {
    title: t('hello'),
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const lang = getCurrentLocale()

  return (
    <html lang={lang}>
      <body
        className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}
      >
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
