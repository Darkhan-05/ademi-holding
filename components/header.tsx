"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/about", label: "О нас" },
  { href: "/projects", label: "Проекты" },
  { href: "/apartments", label: "Планировки" },
  { href: "/mortgage", label: "Ипотека" },
  { href: "/contacts", label: "Контакты" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-primary shadow-lg py-3"
          : "bg-primary/80 backdrop-blur-md py-4 lg:py-5"
          }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8">
          <Link href="/" className="flex items-center gap-2" aria-label="SB Invest Group - На главную">
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-primary-foreground lg:text-2xl">
                SB INVEST
              </span>
              <span className="text-[10px] font-medium tracking-[0.25em] text-primary-foreground/70 uppercase lg:text-xs">
                GROUP
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Основная навигация">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-primary-foreground/80 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="tel:+77071410441"
              className="flex items-center gap-2 text-sm font-medium text-primary-foreground/90 transition-colors hover:text-primary-foreground"
            >
              <Phone className="h-4 w-4" />
              +7 707 141 04 41
            </a>
            <Button
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link href="/contacts">Связаться</Link>
            </Button>
          </div>

          <button
            className="flex items-center justify-center rounded-lg p-2 text-primary-foreground transition-colors hover:bg-primary-foreground/10 lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-primary animate-fade-in lg:hidden">
          <div className="flex h-full flex-col items-center justify-center gap-6 px-6">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-semibold text-primary-foreground transition-colors hover:text-accent"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-6 flex flex-col items-center gap-4">
              <a
                href="tel:+77071410441"
                className="flex items-center gap-2 text-lg font-medium text-primary-foreground/80"
              >
                <Phone className="h-5 w-5" />
                +7 707 141 04 41
              </a>
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Link href="/contacts">Связаться с нами</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
