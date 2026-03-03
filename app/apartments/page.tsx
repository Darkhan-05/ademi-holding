import type { Metadata } from "next"
import { Suspense } from "react"
import { ApartmentsCatalog } from "@/components/apartments-catalog"

export const metadata: Metadata = {
  title: "Планировки — D Capital",
  description: "Каталог планировок квартир в жилых комплексах D Capital в Кокшетау. Фильтрация по количеству комнат, площади и цене.",
}

export default function ApartmentsPage() {
  return (
    <Suspense>
      <ApartmentsCatalog />
    </Suspense>
  )
}
