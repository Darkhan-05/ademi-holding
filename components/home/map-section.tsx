"use client"

import { AnimatedSection } from "@/components/animated-section"

export function MapSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <AnimatedSection>
          <div className="mb-12 flex flex-col items-center gap-4 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Расположение
            </span>
            <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Наши объекты на карте
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="overflow-hidden rounded-xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40962.57927046921!2d69.37!3d53.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c264a9a8d1c1c9%3A0x3a1e5a9e5c6c5b5!2z0JrQvtC60YjQtdGC0LDRgw!5e0!3m2!1sru!2skz!4v1710000000000!5m2!1sru!2skz"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Расположение объектов Ademi Holding"
              className="w-full"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
