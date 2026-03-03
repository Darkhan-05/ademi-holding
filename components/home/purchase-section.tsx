"use client"

import { AnimatedSection } from "@/components/animated-section"
import { CreditCard, Landmark, Banknote } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const options = [
  {
    icon: CreditCard,
    title: "Рассрочка",
    description: "Рассрочка от застройщика без участия банка. Удобный график платежей на весь период строительства.",
  },
  {
    icon: Landmark,
    title: "Ипотека",
    description: "Работаем с программами Баспана Хит, 7-20-25, Наурыз. Помогаем с оформлением документов.",
  },
  {
    icon: Banknote,
    title: "100% оплата",
    description: "При полной оплате — специальные условия и скидки. Гарантия прозрачной сделки.",
  },
]

export function PurchaseSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <AnimatedSection>
          <div className="mb-12 flex flex-col items-center gap-4 text-center lg:mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Способы покупки
            </span>
            <h2 className="max-w-lg text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Условия покупки
            </h2>
            <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Подберём оптимальный вариант приобретения квартиры под ваши возможности
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-3">
          {options.map((option, i) => (
            <AnimatedSection key={i} delay={i * 150}>
              <div className="flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-8 text-center shadow-sm transition-all hover:border-accent/30 hover:shadow-md">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                  <option.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground">{option.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{option.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={450}>
          <div className="mt-10 flex justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/mortgage">Подробнее об ипотеке</Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
