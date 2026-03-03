"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { Calculator, Percent, Clock, Banknote, Info } from "lucide-react"
import { mortgagePrograms, formatPrice } from "@/lib/data"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export function MortgageCalculator() {
  const [selectedProgram, setSelectedProgram] = useState(mortgagePrograms[0])
  const [propertyPrice, setPropertyPrice] = useState(20000000)
  const [downPaymentPercent, setDownPaymentPercent] = useState(20)
  const [term, setTerm] = useState(20)

  const calculation = useMemo(() => {
    const downPayment = (propertyPrice * downPaymentPercent) / 100
    const loanAmount = propertyPrice - downPayment
    const monthlyRate = selectedProgram.rate / 100 / 12
    const months = term * 12

    if (monthlyRate === 0) {
      const monthlyPayment = loanAmount / months
      return {
        downPayment,
        loanAmount,
        monthlyPayment,
        totalPayment: loanAmount,
        overpayment: 0,
      }
    }

    const monthlyPayment =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1)

    const totalPayment = monthlyPayment * months
    const overpayment = totalPayment - loanAmount

    return {
      downPayment,
      loanAmount,
      monthlyPayment,
      totalPayment,
      overpayment,
    }
  }, [propertyPrice, downPaymentPercent, term, selectedProgram])

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-primary pt-20">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/hero-building.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 text-center lg:px-8">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            Ипотека
          </span>
          <h1 className="text-balance text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
            Ипотечный калькулятор
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/70">
            Рассчитайте ежемесячный платёж по ипотеке и выберите подходящую программу
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <AnimatedSection>
            <div className="mb-10 flex flex-col gap-4">
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                Программы
              </span>
              <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
                Ипотечные программы
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {mortgagePrograms.map((program, i) => (
              <AnimatedSection key={program.id} delay={i * 100}>
                <button
                  onClick={() => setSelectedProgram(program)}
                  className={`flex w-full flex-col gap-3 rounded-xl border-2 p-6 text-left transition-all ${
                    selectedProgram.id === program.id
                      ? "border-accent bg-accent/5 shadow-md"
                      : "border-border bg-card hover:border-accent/30 hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-foreground">{program.name}</span>
                    <span className={`text-2xl font-bold ${
                      selectedProgram.id === program.id ? "text-accent" : "text-primary"
                    }`}>
                      {program.rate}%
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{program.description}</p>
                  <div className="flex gap-4 text-xs text-muted-foreground">
                    <span>До {program.maxTerm} лет</span>
                    <span>ПВ от {program.downPayment}%</span>
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Inputs */}
            <div className="flex flex-col gap-8 lg:col-span-3">
              <AnimatedSection>
                <div className="flex flex-col gap-6 rounded-2xl bg-card p-6 shadow-sm lg:p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                      <Calculator className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground">
                      {"Калькулятор: "}{selectedProgram.name}
                    </h3>
                  </div>

                  {/* Property Price */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <Label className="text-sm font-medium text-foreground">Стоимость квартиры</Label>
                      <span className="text-sm font-semibold text-primary">{formatPrice(propertyPrice)}</span>
                    </div>
                    <Slider
                      value={[propertyPrice]}
                      onValueChange={([v]) => setPropertyPrice(v)}
                      min={5000000}
                      max={50000000}
                      step={500000}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>5 000 000 ₸</span>
                      <span>50 000 000 ₸</span>
                    </div>
                  </div>

                  {/* Down Payment */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <Label className="text-sm font-medium text-foreground">
                        {"Первоначальный взнос: "}{downPaymentPercent}%
                      </Label>
                      <span className="text-sm font-semibold text-primary">
                        {formatPrice(Math.round((propertyPrice * downPaymentPercent) / 100))}
                      </span>
                    </div>
                    <Slider
                      value={[downPaymentPercent]}
                      onValueChange={([v]) => setDownPaymentPercent(v)}
                      min={selectedProgram.downPayment}
                      max={80}
                      step={5}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{selectedProgram.downPayment}%</span>
                      <span>80%</span>
                    </div>
                  </div>

                  {/* Term */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <Label className="text-sm font-medium text-foreground">Срок ипотеки</Label>
                      <span className="text-sm font-semibold text-primary">
                        {term} {term === 1 ? "год" : term < 5 ? "года" : "лет"}
                      </span>
                    </div>
                    <Slider
                      value={[term]}
                      onValueChange={([v]) => setTerm(v)}
                      min={1}
                      max={selectedProgram.maxTerm}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>1 год</span>
                      <span>{selectedProgram.maxTerm} лет</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Results */}
            <div className="flex flex-col gap-6 lg:col-span-2">
              <AnimatedSection delay={200}>
                <div className="flex flex-col gap-6 rounded-2xl bg-primary p-6 text-primary-foreground shadow-lg lg:p-8">
                  <h3 className="text-lg font-bold text-primary-foreground">Результат расчёта</h3>

                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-primary-foreground/60">Ежемесячный платёж</span>
                    <span className="text-3xl font-bold text-accent lg:text-4xl">
                      {formatPrice(Math.round(calculation.monthlyPayment))}
                    </span>
                  </div>

                  <div className="flex flex-col gap-4 border-t border-primary-foreground/10 pt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Banknote className="h-4 w-4 text-primary-foreground/50" />
                        <span className="text-sm text-primary-foreground/70">Сумма кредита</span>
                      </div>
                      <span className="text-sm font-semibold text-primary-foreground">
                        {formatPrice(Math.round(calculation.loanAmount))}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Percent className="h-4 w-4 text-primary-foreground/50" />
                        <span className="text-sm text-primary-foreground/70">Переплата</span>
                      </div>
                      <span className="text-sm font-semibold text-primary-foreground">
                        {formatPrice(Math.round(calculation.overpayment))}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary-foreground/50" />
                        <span className="text-sm text-primary-foreground/70">Общая выплата</span>
                      </div>
                      <span className="text-sm font-semibold text-primary-foreground">
                        {formatPrice(Math.round(calculation.totalPayment))}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 rounded-lg bg-primary-foreground/5 p-3">
                    <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary-foreground/40" />
                    <p className="text-xs leading-relaxed text-primary-foreground/50">
                      Расчёт носит информационный характер и не является публичной офертой. Точные условия уточняйте в банке.
                    </p>
                  </div>

                  <Button
                    asChild
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    <a href="https://wa.me/77001234567?text=Здравствуйте!%20Хочу%20узнать%20об%20ипотечных%20условиях." target="_blank" rel="noopener noreferrer">
                      Получить консультацию
                    </a>
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Purchase Steps */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <AnimatedSection>
            <div className="mb-12 flex flex-col items-center gap-4 text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                Процесс
              </span>
              <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
                Как оформить ипотеку
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "Выберите квартиру", desc: "Подберите подходящий вариант из нашего каталога или на просмотре" },
              { step: "02", title: "Подайте заявку", desc: "Подайте заявку в банк на выбранную ипотечную программу" },
              { step: "03", title: "Одобрение", desc: "Получите одобрение от банка и согласуйте условия кредитования" },
              { step: "04", title: "Получите ключи", desc: "Подпишите договор, оформите сделку и получите ключи от квартиры" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="flex flex-col gap-4 rounded-xl bg-card p-6 shadow-sm">
                  <span className="text-3xl font-bold text-accent/30">{item.step}</span>
                  <h3 className="text-lg font-bold text-card-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
