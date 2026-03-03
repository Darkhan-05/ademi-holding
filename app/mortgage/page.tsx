import type { Metadata } from "next"
import { MortgageCalculator } from "@/components/mortgage-calculator"

export const metadata: Metadata = {
  title: "Ипотека — SB Invest Group",
  description: "Ипотечный калькулятор SB Invest Group. Рассчитайте ежемесячный платёж по программе Отау и другим программам.",
}

export default function MortgagePage() {
  return <MortgageCalculator />
}
