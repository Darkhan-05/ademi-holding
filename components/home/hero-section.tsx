import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-building.jpg"
        alt="Жилой комплекс Ademi Holding в Кокшетау"
        fill
        className="object-cover"
        priority
        quality={90}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D2D5E]/70 via-[#0D2D5E]/50 to-[#0D2D5E]/80" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 text-center">
        <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-white/80 backdrop-blur-sm">
          Кокшетау, Казахстан
        </span>
        <h1 className="max-w-4xl text-balance text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Ваш дом в Кокшетау
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/80 md:text-xl">
          Жилые комплексы комфорт-класса от надёжного застройщика. Малоквартирные дома для тех, кто ценит тишину и уют.
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

      <a
        href="#projects"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 animate-bounce flex-col items-center gap-1 text-white/60 transition-colors hover:text-white"
        aria-label="Прокрутить к проектам"
      >
        <span className="text-xs font-medium uppercase tracking-wider">Подробнее</span>
        <ChevronDown className="h-5 w-5" />
      </a>
    </section>
  )
}
