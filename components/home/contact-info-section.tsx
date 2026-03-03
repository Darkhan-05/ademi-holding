"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Phone, MapPin, Clock, Mail } from "lucide-react"

const contacts = [
  {
    icon: MapPin,
    title: "Адрес",
    lines: ["г. Кокшетау, Акмолинская область", "Казахстан"],
  },
  {
    icon: Phone,
    title: "Телефон",
    lines: ["+7 700 123 45 67", "+7 716 225 00 00"],
    href: "tel:+77001234567",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@ademiholding.kz"],
    href: "mailto:info@ademiholding.kz",
  },
  {
    icon: Clock,
    title: "Режим работы",
    lines: ["Пн–Пт: 09:00 – 18:00", "Сб: 10:00 – 15:00"],
  },
]

export function ContactInfoSection() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <AnimatedSection>
          <div className="mb-12 flex flex-col items-center gap-4 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Свяжитесь с нами
            </span>
            <h2 className="text-balance text-3xl font-bold text-secondary-foreground md:text-4xl lg:text-5xl">
              Контакты
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contacts.map((contact, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="flex flex-col items-center gap-3 rounded-xl bg-card p-6 text-center shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                  <contact.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {contact.title}
                </h3>
                <div className="flex flex-col gap-1">
                  {contact.lines.map((line, j) =>
                    contact.href ? (
                      <a
                        key={j}
                        href={contact.href}
                        className="text-sm font-medium text-card-foreground transition-colors hover:text-accent"
                      >
                        {line}
                      </a>
                    ) : (
                      <span key={j} className="text-sm font-medium text-card-foreground">
                        {line}
                      </span>
                    )
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
