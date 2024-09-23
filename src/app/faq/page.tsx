import { Metadata } from "next/types"
import { PublicLayout } from "@/components/public/public-layout"
import Faq from "./page-components/faq"

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME ? `FAQ | ${process.env.NEXT_PUBLIC_APP_NAME}` : "FAQ",
}

export default function ContactPage() {
  return (
    <PublicLayout>
      <main className="flex flex-col items-center">
       <Faq/>
      </main>
    </PublicLayout>
  )
}
