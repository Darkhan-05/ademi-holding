import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import './globals.css'

const manrope = Manrope({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Estet Stroy — Элитные жилые комплексы и дома в Кокшетау',
  description: 'ТОО «Эстет Строй» — ведущая строительная компания в Кокшетау. Строительство ЖК ATLANT, LUMIERE, KEREMET и индивидуальных жилых домов премиум-класса.',
  keywords: ['Эстет Строй', 'Estet Stroy', 'недвижимость Кокшетау', 'купить квартиру Кокшетау', 'строительство частных домов', 'ЖК ATLANT', 'ЖК LUMIERE', 'ЖК KEREMET'],
  openGraph: {
    title: 'Estet Stroy — Элитные жилые комплексы и дома в Кокшетау',
    description: 'Строительная компания Estet Stroy — премиум ЖК и современные дома в Кокшетау',
    type: 'website',
    locale: 'ru_KZ',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
