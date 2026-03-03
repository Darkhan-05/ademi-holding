import type { Metadata } from "next"
import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"
import { Shield, Heart, Users, Star, Building2, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "О компании — SB Invest Group",
  description:
    "ТОО «SB Invest Group» — строительная компания в Кокшетау, специализирующаяся на строительстве малоквартирных ЖК комфорт-класса.",
}

const values = [
  {
    icon: Shield,
    title: "Надёжность",
    description: "Мы строим дома, в которых можно жить поколениями. Каждый проект сдаётся точно в срок.",
  },
  {
    icon: Heart,
    title: "Забота",
    description: "Мы заботимся о каждой детали — от планировки до благоустройства территории.",
  },
  {
    icon: Users,
    title: "Партнёрство",
    description: "Прозрачные условия сотрудничества и честные отношения с покупателями.",
  },
  {
    icon: Star,
    title: "Качество",
    description: "Используем только проверенные материалы и современные технологии строительства.",
  },
]

const timeline = [
  { year: "2020", event: "Основание компании SB Invest Group. Начало строительства первых жилых объектов в Кокшетау." },
  { year: "2024", event: "Сдача ЖК ASAR и ЖК Bereke. Успешный ввод в эксплуатацию более 15 000 м² жилья." },
  { year: "2026", event: "Строительство ЖК Елім-Ай. Расширение портфеля проектов и внедрение новых стандартов качества." },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-primary pt-20">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/about-team.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 text-center lg:px-8">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            О компании
          </span>
          <h1 className="mx-auto max-w-3xl text-balance text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
            Строим будущее Кокшетау
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/70">
            SB Invest Group — это команда профессионалов, создающих комфортное жильё для семей, ценящих качество и уют
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimatedSection>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src="/images/about-team.jpg"
                  alt="Команда SB Invest Group"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="flex flex-col gap-6">
                <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                  Наша миссия
                </span>
                <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
                  Создаём пространства для счастливой жизни
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  ТОО «SB Invest Group» — строительная компания, специализирующаяся на строительстве и продаже жилой недвижимости в городе Кокшетау, Акмолинская область, Республика Казахстан.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Мы реализуем малоквартирные жилые комплексы комфорт-класса, сочетающие удобство, тишину и уют. Наши объекты строятся по индивидуальным архитектурным проектам с акцентом на качество и современный облик.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1">
                    <span className="text-3xl font-bold text-primary">6+</span>
                    <span className="text-sm text-muted-foreground">Лет опыта</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-3xl font-bold text-primary">5+</span>
                    <span className="text-sm text-muted-foreground">Жилых комплексов</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <AnimatedSection>
            <div className="mb-12 flex flex-col items-center gap-4 text-center lg:mb-16">
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                Ценности
              </span>
              <h2 className="text-balance text-3xl font-bold text-secondary-foreground md:text-4xl lg:text-5xl">
                Наши ценности
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="flex flex-col items-center gap-4 rounded-xl bg-card p-6 text-center shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <value.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-card-foreground">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <AnimatedSection>
            <div className="mb-12 flex flex-col items-center gap-4 text-center lg:mb-16">
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                История
              </span>
              <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                Наш путь
              </h2>
            </div>
          </AnimatedSection>

          <div className="mx-auto max-w-2xl">
            {timeline.map((item, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <div className="relative flex gap-6 pb-10 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {item.year.slice(2)}
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="mt-2 w-px flex-1 bg-border" />
                    )}
                  </div>
                  <div className="flex flex-col gap-1 pb-2 pt-1.5">
                    <span className="text-lg font-bold text-foreground">{item.year}</span>
                    <p className="text-base leading-relaxed text-muted-foreground">{item.event}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <AnimatedSection>
            <div className="mb-12 flex flex-col items-center gap-4 text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                Галерея
              </span>
              <h2 className="text-balance text-3xl font-bold text-secondary-foreground md:text-4xl lg:text-5xl">
                Строительный процесс
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { src: "/images/hero-building.jpg", alt: "ЖК ASAR" },
              { src: "/images/hero-building.jpg", alt: "Строительство" },
              { src: "/images/interior.jpg", alt: "Интерьер квартиры" },
              { src: "/images/about-team.jpg", alt: "Команда" },
            ].map((img, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
