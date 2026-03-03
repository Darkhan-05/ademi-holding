import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, MapPin, Building2, Layers, Ruler, Check, ArrowRight } from "lucide-react"
import { projects, floorPlans, formatPrice } from "@/lib/data"
import { AnimatedSection } from "@/components/animated-section"
import { ContactForm } from "@/components/contact-form"
import { Button } from "@/components/ui/button"

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: `${project.name} — D Capital`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  const projectPlans = floorPlans.filter((p) => p.projectSlug === slug)
  const minPrice = projectPlans.length > 0 ? Math.min(...projectPlans.map((p) => p.price)) : null

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-primary pt-20">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723]/90 via-[#3E2723]/40 to-[#3E2723]/20" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 lg:px-8 lg:pb-16">
          <Link
            href="/projects"
            className="mb-6 inline-flex items-center gap-2 text-xl font-medium text-white transition-colors hover:text-white"
          >
            <ArrowLeft className="h-6 w-6" />
            Все проекты
          </Link>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span
                className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${project.status === "Сдан"
                  ? "bg-green-500/90 text-white"
                  : "bg-amber-500/90 text-white"
                  }`}
              >
                {project.status}
              </span>
              <span className="text-sm text-white/70">{project.class} класс</span>
              {project.statusNote && (
                <span className="text-sm text-white/70">• {project.statusNote}</span>
              )}
            </div>
            <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              {project.name}
            </h1>
            <div className="flex items-center gap-2 text-white/70">
              <MapPin className="h-4 w-4" />
              <span>{project.address}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-2 divide-x divide-border md:grid-cols-4">
            {[
              { label: "Этажей", value: String(project.floors), icon: Building2 },
              { label: "Квартиры", value: project.apartments, icon: Layers },
              { label: "Потолки", value: project.ceilingHeight, icon: Ruler },
              { label: "Отделка", value: project.finishing, icon: Check },
            ].map((fact, i) => (
              <div key={i} className="flex flex-col items-center gap-2 py-6 text-center lg:py-8">
                <fact.icon className="h-5 w-5 text-accent" />
                <span className="text-lg font-bold text-foreground md:text-xl">{fact.value}</span>
                <span className="text-xs text-muted-foreground">{fact.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description & Features */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimatedSection>
              <div className="flex flex-col gap-6">
                <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                  О комплексе
                </span>
                <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
                  {project.name}
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                {minPrice && (
                  <div className="flex flex-col gap-1 rounded-xl bg-secondary p-6">
                    <span className="text-sm text-muted-foreground">Цены от</span>
                    <span className="text-2xl font-bold text-primary">{formatPrice(minPrice)}</span>
                    {project.pricePerSqm && (
                      <span className="text-sm text-muted-foreground">{project.pricePerSqm} за м²</span>
                    )}
                    <Button asChild className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90">
                      <a href="#plans">
                        Смотреть планировки
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                )}
                {!minPrice && project.statusNote && (
                  <div className="flex flex-col gap-1 rounded-xl bg-amber-50 border border-amber-200 p-6">
                    <span className="text-lg font-bold text-amber-800">{project.statusNote}</span>
                    <span className="text-sm text-amber-700">Планировки и цены будут доступны позже</span>
                  </div>
                )}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-foreground">Преимущества комплекса</h3>
                  <ul className="flex flex-col gap-3">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                          <Check className="h-3 w-3 text-accent" />
                        </div>
                        <span className="text-base text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-foreground">Инфраструктура</h3>
                  <ul className="flex flex-col gap-3">
                    {project.infrastructure.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                          <MapPin className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-base text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Floor Plans */}
      <section id="plans" className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <AnimatedSection>
            <div className="mb-12 flex flex-col gap-4">
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                Планировки
              </span>
              <h2 className="text-balance text-3xl font-bold text-secondary-foreground md:text-4xl">
                {projectPlans.length > 0 ? "Доступные планировки" : "Планировки скоро появятся"}
              </h2>
            </div>
          </AnimatedSection>

          {projectPlans.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {projectPlans.map((plan) => (
                <AnimatedSection key={plan.id}>
                  <div className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg">
                    <div className="relative aspect-square overflow-hidden bg-white p-4">
                      <Image
                        src={plan.image}
                        alt={`${plan.rooms}-комнатная, ${plan.area} м²`}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col gap-3 p-5">
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-card-foreground">
                          {plan.rooms}-комн.
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {plan.area} м²
                        </span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-xs text-muted-foreground">от</span>
                        <span className="text-xl font-bold text-primary">{formatPrice(plan.price)}</span>
                      </div>
                      <div className="flex items-center justify-between border-t border-border pt-3 text-sm text-muted-foreground">
                        <span>{formatPrice(plan.pricePerSqm)} за м²</span>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4 rounded-xl bg-card py-16 text-center">
              <Building2 className="h-12 w-12 text-muted-foreground/40" />
              <h3 className="text-xl font-bold text-foreground">{project.statusNote || "Скоро"}</h3>
              <p className="text-base text-muted-foreground">
                Планировки и цены будут доступны после старта продаж
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimatedSection>
              <div className="flex flex-col gap-6">
                <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                  Запись на просмотр
                </span>
                <h2 className="text-balance text-3xl font-bold text-primary-foreground md:text-4xl">
                  Заинтересовал проект?
                </h2>
                <p className="text-base leading-relaxed text-primary-foreground/70">
                  Оставьте заявку, и наш менеджер свяжется с вами для консультации по {project.nameShort}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <ContactForm selectedProject={project.id} variant="dark" />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
