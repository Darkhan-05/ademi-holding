import type { Metadata } from "next"
import { MortgageCalculator } from "@/components/mortgage-calculator"

export const metadata: Metadata = {
  title: "Ипотека — Ademi Holding",
  description: "Ипотечный калькулятор Ademi Holding. Рассчитайте ежемесячный платёж по программам Баспана Хит, 7-20-25, Наурыз.",
}

export default function MortgagePage() {
  return <MortgageCalculator />
}
