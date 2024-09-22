import { Metadata } from "next/types"
import { PublicLayout } from "@/components/public/public-layout"
import ContactUs from "./page-components/contact-us"
import LocationOnMap from "./page-components/location-on-map"

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME
    ? `Contact | ${process.env.NEXT_PUBLIC_APP_NAME}`
    : "Contact",
}

export default function ContactPage() {
  return (
    <PublicLayout>
      <main className="flex flex-col items-center">
        <ContactUs />
        <LocationOnMap />
      </main>
    </PublicLayout>
  )
}
