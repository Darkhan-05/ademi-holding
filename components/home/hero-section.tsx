import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-building.jpg"
        alt="Жилой комплекс Estet Stroy в Кокшетау"
        fill
        className="object-cover"
        priority
        quality={90}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-background" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 text-center">
        <span className="mb-4 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent backdrop-blur-sm">
          Кокшетау
        </span>
        <h1 className="max-w-4xl text-balance text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Строим будущее <br className="hidden sm:block" /> в <span className="text-accent">Кокшетау</span>
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/90 md:text-xl">
          Жилые комплексы премиум-класса и современные частные дома от Estet Stroy. Воплощаем мечты об идеальном жилье с 2015 года.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 text-base"
          >
            <Link href="/projects">Смотреть проекты</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white px-8 text-base"
          >
            <Link href="/apartments">Узнать цены</Link>
          </Button>
        </div>
      </div>

    </section>
  )
}
