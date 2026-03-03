import type { Metadata } from "next"
import { MortgageCalculator } from "@/components/mortgage-calculator"

export const metadata: Metadata = {
  title: "Ипотека — D Capital",
  description: "Ипотечный калькулятор D Capital. Рассчитайте ежемесячный платёж по программам Баспана Хит, 7-20-25, Наурыз.",
}

export default function MortgagePage() {
  return <MortgageCalculator />
}
