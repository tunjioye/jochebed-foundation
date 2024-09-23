import { Metadata } from "next/types"
import { PublicLayout } from "@/components/public/public-layout"
import Scholarship from "./page-components/scholarship"

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME
    ? `Scholarship | ${process.env.NEXT_PUBLIC_APP_NAME}`
    : "Scholarship",
}

export default function ScholarshipPage() {
  return (
    <PublicLayout>
      <main className="flex flex-col items-center justify-between">
        <Scholarship />
      </main>
    </PublicLayout>
  )
}
