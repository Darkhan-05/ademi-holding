import type { Metadata } from "next"
import { Suspense } from "react"
import { ApartmentsCatalog } from "@/components/apartments-catalog"

export const metadata: Metadata = {
  title: "Квартиры — Ademi Holding",
  description: "Каталог квартир в жилых комплексах Ademi Holding в Кокшетау. Фильтрация по количеству комнат, площади и цене.",
}

export default function ApartmentsPage() {
  return (
    <Suspense>
      <ApartmentsCatalog />
    </Suspense>
  )
}
