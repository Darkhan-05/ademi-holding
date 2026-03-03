import Link from "next/link"
import { Phone, MapPin, Clock, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight">D CAPITAL</span>
              <span className="text-xs font-medium tracking-[0.25em] text-primary-foreground/60 uppercase">
                Строим мечту
              </span>
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/70">
              Строительная компания в Кокшетау. Квартиры от застройщика, комфорт-класс в чистовой отделке. Строим ЖК и частные дома.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">
              Навигация
            </h3>
            <nav className="flex flex-col gap-2" aria-label="Навигация в подвале">
              {[
                { href: "/", label: "Главная" },
                { href: "/about", label: "О компании" },
                { href: "/projects", label: "Проекты" },
                { href: "/apartments", label: "Планировки" },
                { href: "/mortgage", label: "Ипотека" },
                { href: "/contacts", label: "Контакты" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Projects */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">
              Наши проекты
            </h3>
            <nav className="flex flex-col gap-2">
              <Link href="/projects/liberty" className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                ЖК Liberty
              </Link>
              <Link href="/projects/houses" className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                Частные дома
              </Link>
            </nav>
          </div>

          {/* Contacts */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">
              Контакты
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/70">
                  г. Кокшетау, ул. Кошкарбаева, 45
                </span>
              </div>
              <a href="tel:+77776586804" className="flex items-center gap-2 text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                +7 (777) 658-68-04
              </a>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/70">
                  Пн-Пт: 10:00 – 18:00 <br />
                  Сб-Вс: выходной
                </span>
              </div>
              <div className="mt-2 flex items-center gap-3">
                <a
                  href="https://wa.me/77057387238"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground/70 transition-colors hover:bg-accent hover:text-accent-foreground"
                  aria-label="WhatsApp"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/dcapital.kz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground/70 transition-colors hover:bg-accent hover:text-accent-foreground"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-primary-foreground/50">
              {"© 2022–2026 D Capital. Все права защищены."}
            </p>
            <p className="text-sm text-primary-foreground/50">
              г. Кокшетау, ул. Кошкарбаева, 45
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
