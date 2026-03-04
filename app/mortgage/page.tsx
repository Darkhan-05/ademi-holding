import type { Metadata } from "next"
import { MortgageCalculator } from "@/components/mortgage-calculator"

export const metadata: Metadata = {
  title: "Ипотека — Estet Stroy",
  description: "Ипотечный калькулятор Estet Stroy. Рассчитайте ежемесячный платёж по программам доступного жилья.",
}

export default function MortgagePage() {
  return <MortgageCalculator />
}
