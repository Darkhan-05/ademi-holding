"use client"

import { AnimatedSection } from "@/components/animated-section"
import { ContactForm } from "@/components/contact-form"

export function ConsultationSection() {
  return (
    <section className="relative bg-primary py-20 lg:py-28">
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <div className="flex flex-col gap-4">
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                Бесплатная консультация
              </span>
              <h2 className="max-w-lg text-balance text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
                Подберём квартиру вашей мечты
              </h2>
              <p className="max-w-md text-pretty text-base leading-relaxed text-primary-foreground/70 md:text-lg">
                Оставьте заявку и наш менеджер свяжется с вами в течение 15 минут. Поможем подобрать квартиру, рассчитать ипотеку и организовать просмотр.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="rounded-xl bg-primary-foreground/5 p-6 backdrop-blur-sm lg:p-8">
              <ContactForm variant="dark" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
