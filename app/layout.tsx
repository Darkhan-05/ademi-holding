import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import './globals.css'

const manrope = Manrope({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Ademi Holding — Жилые комплексы комфорт-класса в Кокшетау',
  description: 'ТОО «Адеми Холдинг» — строительная компания, специализирующаяся на строительстве и продаже жилой недвижимости комфорт-класса в Кокшетау. ЖК Ак Шанырак, BAITAS, DOSTAR.',
  keywords: ['Ademi Holding', 'Адеми Холдинг', 'недвижимость Кокшетау', 'квартиры Кокшетау', 'новостройки', 'ЖК Ак Шанырак', 'ЖК BAITAS', 'ЖК DOSTAR'],
  openGraph: {
    title: 'Ademi Holding — Жилые комплексы комфорт-класса в Кокшетау',
    description: 'Строительная компания Ademi Holding — малоквартирные ЖК комфорт-класса в Кокшетау',
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
