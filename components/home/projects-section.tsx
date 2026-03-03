"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { projects } from "@/lib/data"
import { AnimatedSection } from "@/components/animated-section"

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <AnimatedSection>
          <div className="mb-12 flex flex-col gap-4 lg:mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Наши объекты
            </span>
            <h2 className="max-w-lg text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Наши жилые комплексы
            </h2>
            <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Каждый проект — это продуманное пространство для комфортной жизни, созданное с заботой о деталях
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 150}>
              <Link href={`/projects/${project.slug}`} className="group block">
                <div className="overflow-hidden rounded-xl bg-card shadow-sm transition-shadow hover:shadow-xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span
                        className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                          project.status === "Сдан"
                            ? "bg-green-500/90 text-white"
                            : "bg-amber-500/90 text-white"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 p-5">
                    <h3 className="text-xl font-bold text-card-foreground group-hover:text-accent transition-colors">
                      {project.name}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <span>{project.class} класс</span>
                      <span className="text-border">|</span>
                      <span>{project.floors} этажей</span>
                      <span className="text-border">|</span>
                      <span>{project.apartments}</span>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-accent">
                      Подробнее
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
