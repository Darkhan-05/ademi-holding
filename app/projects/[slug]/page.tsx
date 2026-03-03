import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, MapPin, Building2, Layers, Ruler, Check, ArrowRight } from "lucide-react"
import { projects, apartments, formatPrice } from "@/lib/data"
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
    title: `${project.name} — Ademi Holding`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  const projectApartments = apartments.filter((a) => a.projectSlug === slug)
  const minPrice = projectApartments.length > 0 ? Math.min(...projectApartments.map((a) => a.price)) : null

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
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D2D5E]/90 via-[#0D2D5E]/40 to-[#0D2D5E]/20" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 lg:px-8 lg:pb-16">
          <Link
            href="/projects"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Все проекты
          </Link>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span
                className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                  project.status === "Сдан"
                    ? "bg-green-500/90 text-white"
                    : "bg-amber-500/90 text-white"
                }`}
              >
                {project.status}
              </span>
              <span className="text-sm text-white/70">{project.class} класс</span>
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
                    <Button asChild className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90">
                      <Link href={`/apartments?project=${project.slug}`}>
                        Смотреть квартиры
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
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

      {/* Available Apartments preview */}
      {projectApartments.length > 0 && (
        <section className="bg-secondary py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <AnimatedSection>
              <div className="mb-12 flex flex-col gap-4">
                <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                  Квартиры
                </span>
                <h2 className="text-balance text-3xl font-bold text-secondary-foreground md:text-4xl">
                  Доступные квартиры
                </h2>
              </div>
            </AnimatedSection>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Комнат</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Этаж</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">{"Площадь, м\u00B2"}</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Цена</th>
                    <th className="px-4 py-3 text-right text-sm font-semibold text-foreground">{"Цена за м\u00B2"}</th>
                  </tr>
                </thead>
                <tbody>
                  {projectApartments.map((apt) => (
                    <tr key={apt.id} className="border-b border-border/50 transition-colors hover:bg-card">
                      <td className="px-4 py-4 text-sm text-foreground font-medium">{apt.rooms}-комн.</td>
                      <td className="px-4 py-4 text-sm text-muted-foreground">{apt.floor} из {project.floors}</td>
                      <td className="px-4 py-4 text-sm text-muted-foreground">{apt.area}</td>
                      <td className="px-4 py-4 text-sm font-semibold text-foreground">{formatPrice(apt.price)}</td>
                      <td className="px-4 py-4 text-right text-sm text-muted-foreground">
                        {formatPrice(Math.round(apt.price / apt.area))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-center">
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href={`/apartments?project=${project.slug}`}>
                  Все квартиры в {project.nameShort}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}

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
                  Хотите посмотреть квартиру?
                </h2>
                <p className="text-base leading-relaxed text-primary-foreground/70">
                  Оставьте заявку, и наш менеджер свяжется с вами для организации просмотра квартиры в {project.nameShort}
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
