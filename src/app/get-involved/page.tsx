"use client"

import { PublicLayout } from "@/components/public/public-layout"
import GetInvolved from "./page-components/get-involved"

export default function GetInvolvedPage() {
  return (
    <PublicLayout>
      <main className="flex flex-col items-center my-auto">
        <GetInvolved />
      </main>
    </PublicLayout>
  )
}
