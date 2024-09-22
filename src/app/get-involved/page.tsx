import { Metadata } from "next/types"
import { PublicLayout } from "@/components/public/public-layout"
import GetInvolved from "./page-components/get-involved"

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME
    ? `Get Involved | ${process.env.NEXT_PUBLIC_APP_NAME}`
    : "Get Involved",
}

export default function GetInvolvedPage() {
  return (
    <PublicLayout>
      <main className="flex flex-col items-center my-auto">
        <GetInvolved />
      </main>
    </PublicLayout>
  )
}
