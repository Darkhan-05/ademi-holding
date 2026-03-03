import type { Metadata } from "next"
import Image from "next/image"
import { Phone, MapPin, Clock, Mail, Instagram, MessageCircle } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Контакты — SB Invest Group",
  description: "Свяжитесь с SB Invest Group. Адрес, телефон, WhatsApp, время работы. Кокшетау, Казахстан.",
}

const contacts = [
  {
    icon: Phone,
    label: "Телефон",
    value: "+7 707 141 04 41",
    href: "tel:+77071410441",
    description: "Звоните в рабочее время",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+7 707 141 04 41",
    href: "https://wa.me/77071410441",
    description: "Напишите нам в мессенджер",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@sbinvestgroup.kz",
    href: "mailto:info@sbinvestgroup.kz",
    description: "Для письменных обращений",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@sbinvestgroup",
    href: "https://instagram.com/sbinvestgroup",
    description: "Следите за новостями",
  },
]

export default function ContactsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-primary pt-20">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/hero-building.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 text-center lg:px-8">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            Контакты
          </span>
          <h1 className="text-balance text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
            Свяжитесь с нами
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/70">
            Мы всегда готовы ответить на ваши вопросы и помочь с выбором квартиры
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contacts.map((contact, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <a
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-accent/30 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 transition-colors group-hover:bg-accent/20">
                    <contact.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {contact.label}
                    </span>
                    <span className="text-base font-semibold text-card-foreground">
                      {contact.value}
                    </span>
                    <span className="text-xs text-muted-foreground">{contact.description}</span>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimatedSection>
              <div className="flex flex-col gap-6">
                <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                  Обратная связь
                </span>
                <h2 className="text-balance text-3xl font-bold text-secondary-foreground md:text-4xl">
                  Оставьте заявку
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Заполните форму, и наш менеджер свяжется с вами в ближайшее время для бесплатной консультации
                </p>
                <div className="rounded-xl bg-card p-6 shadow-sm">
                  <ContactForm variant="light" />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-6">
                  <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                    Адрес
                  </span>
                  <h2 className="text-balance text-3xl font-bold text-secondary-foreground md:text-4xl">
                    Наш офис
                  </h2>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-4 rounded-xl bg-card p-5 shadow-sm">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-semibold text-foreground">Адрес</span>
                      <span className="text-sm text-muted-foreground">
                        г. Кокшетау, ул. Магзи Абулкасымова, 164, офис 2
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-xl bg-card p-5 shadow-sm">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                      <Clock className="h-5 w-5 text-accent" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-semibold text-foreground">Время работы</span>
                      <span className="text-sm text-muted-foreground">Понедельник — Суббота: 09:00 — 19:00</span>
                      <span className="text-sm text-muted-foreground">Воскресенье: выходной</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-xl bg-card p-5 shadow-sm">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-semibold text-foreground">Отдел продаж</span>
                      <a href="tel:+77071410441" className="text-sm text-accent hover:underline">
                        +7 707 141 04 41
                      </a>
                      <span className="text-xs text-muted-foreground">Бесплатная консультация</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
