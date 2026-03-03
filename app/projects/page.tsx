import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Building2, Layers } from "lucide-react"
import { projects } from "@/lib/data"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Проекты — Ademi Holding",
  description: "Жилые комплексы комфорт-класса от Ademi Holding в Кокшетау: ЖК Ак Шанырак, ЖК BAITAS, ЖК DOSTAR.",
}

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-primary pt-20">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/hero-building.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 text-center lg:px-8">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            Проекты
          </span>
          <h1 className="text-balance text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
            Наши жилые комплексы
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/70">
            Выберите идеальный дом для вашей семьи из нашего портфеля проектов комфорт-класса
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col gap-12">
            {projects.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 150}>
                <div className="group grid overflow-hidden rounded-2xl bg-card shadow-sm transition-shadow hover:shadow-xl md:grid-cols-2">
                  <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto md:min-h-[400px]">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4">
                      <span
                        className={`inline-block rounded-full px-4 py-1.5 text-xs font-semibold ${
                          project.status === "Сдан"
                            ? "bg-green-500/90 text-white"
                            : "bg-amber-500/90 text-white"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center gap-6 p-8 lg:p-12">
                    <div className="flex flex-col gap-3">
                      <h2 className="text-2xl font-bold text-card-foreground md:text-3xl">
                        {project.name}
                      </h2>
                      <p className="text-base leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 shrink-0 text-accent" />
                        <span>{project.address}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Building2 className="h-4 w-4 shrink-0 text-accent" />
                        <span>{project.floors} этажей</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Layers className="h-4 w-4 shrink-0 text-accent" />
                        <span>{project.apartments}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <svg className="h-4 w-4 shrink-0 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 21h18" />
                          <path d="M3 10h18" />
                          <path d="M5 6l7-3 7 3" />
                          <path d="M4 10v11" />
                          <path d="M20 10v11" />
                          <path d="M8 14v3" />
                          <path d="M12 14v3" />
                          <path d="M16 14v3" />
                        </svg>
                        <span>{project.class} класс</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                        <Link href={`/projects/${project.slug}`}>
                          Подробнее
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="border-border text-foreground hover:bg-secondary">
                        <Link href={`/apartments?project=${project.slug}`}>
                          Смотреть квартиры
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
