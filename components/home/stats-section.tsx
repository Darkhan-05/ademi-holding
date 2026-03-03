"use client"

import { AnimatedSection } from "@/components/animated-section"

const stats = [
  { value: "6+", label: "Лет на рынке" },
  { value: "5+", label: "Жилых комплексов" },
  { value: "35к+", label: "Квадратных метров" },
]

export function StatsSection() {
  return (
    <section className="bg-primary py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <AnimatedSection>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-3 lg:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-2 text-center">
                <span className="text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
                  {stat.value}
                </span>
                <span className="text-sm font-medium uppercase tracking-wider text-primary-foreground/60 md:text-base">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
