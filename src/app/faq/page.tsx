import { Metadata } from "next/types"
import { PublicLayout } from "@/components/public/public-layout"

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME ? `FAQ | ${process.env.NEXT_PUBLIC_APP_NAME}` : "FAQ",
}

export default function ContactPage() {
  return (
    <PublicLayout>
      <main className="flex flex-col items-center justify-between p-24">
        FAQ Page
      </main>
    </PublicLayout>
  )
}
