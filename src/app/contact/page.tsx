import { Metadata } from "next/types"
import { PublicLayout } from "@/components/public/public-layout"

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME
    ? `Contact | ${process.env.NEXT_PUBLIC_APP_NAME}`
    : "Contact",
}

export default function ContactPage() {
  return (
    <PublicLayout>
      <main className="flex flex-col items-center justify-between p-24">Contact Page</main>
    </PublicLayout>
  )
}
