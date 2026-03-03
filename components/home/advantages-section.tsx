"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Shield, Award, Users, Building2, TreePine, Ruler } from "lucide-react"

const advantages = [
  {
    icon: Shield,
    title: "Надёжность",
    description: "Все объекты сдаются в срок. 100% выполнение обязательств перед покупателями.",
  },
  {
    icon: Award,
    title: "Качество",
    description: "Используем только проверенные материалы и технологии строительства.",
  },
  {
    icon: Users,
    title: "Малоквартирность",
    description: "Камерные дома с небольшим количеством квартир — тишина и уют для каждого жильца.",
  },
  {
    icon: Building2,
    title: "Комфорт-класс",
    description: "Высокие потолки, просторные планировки, современная архитектура.",
  },
  {
    icon: TreePine,
    title: "Инфраструктура",
    description: "Все объекты расположены в районах с развитой инфраструктурой и транспортной доступностью.",
  },
  {
    icon: Ruler,
    title: "Индивидуальные проекты",
    description: "Каждый ЖК строится по уникальному архитектурному проекту.",
  },
]

export function AdvantagesSection() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <AnimatedSection>
          <div className="mb-12 flex flex-col items-center gap-4 text-center lg:mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Наши преимущества
            </span>
            <h2 className="max-w-lg text-balance text-3xl font-bold text-secondary-foreground md:text-4xl lg:text-5xl">
              Почему SB Invest Group
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="flex flex-col gap-4 rounded-xl bg-card p-6 shadow-sm transition-shadow hover:shadow-md lg:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-card-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
