import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import './globals.css'

const manrope = Manrope({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'SB Invest Group — Жилые комплексы комфорт-класса в Кокшетау',
  description: 'ТОО «SB Invest Group» — строительная компания, специализирующаяся на строительстве и продаже жилой недвижимости комфорт-класса в Кокшетау. ЖК ASAR, Елім-Ай, Bereke, Айнакол.',
  keywords: ['SB Invest Group', 'СБ Инвест Групп', 'недвижимость Кокшетау', 'квартиры Кокшетау', 'новостройки', 'ЖК ASAR', 'ЖК Елім-Ай', 'ЖК Bereke', 'ЖК Айнакол'],
  openGraph: {
    title: 'SB Invest Group — Жилые комплексы комфорт-класса в Кокшетау',
    description: 'Строительная компания SB Invest Group — малоквартирные ЖК комфорт-класса в Кокшетау',
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
