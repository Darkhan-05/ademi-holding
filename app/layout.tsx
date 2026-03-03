import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import './globals.css'

const manrope = Manrope({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'D Capital — Квартиры и дома от застройщика в Кокшетау',
  description: 'D Capital — строительная компания в Кокшетау. Квартиры от застройщика, комфорт-класс в чистовой отделке. ЖК Liberty, частные дома. Более 100 000 м² построенного жилья.',
  keywords: ['D Capital', 'Д Капитал', 'недвижимость Кокшетау', 'квартиры Кокшетау', 'новостройки', 'ЖК Liberty', 'частные дома Кокшетау', 'dcapital.kz'],
  openGraph: {
    title: 'D Capital — Квартиры и дома от застройщика в Кокшетау',
    description: 'Строительная компания D Capital — квартиры и дома комфорт-класса в Кокшетау',
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
