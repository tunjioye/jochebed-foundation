"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

const BECOME_A_MEMBER_URL = "https://opencollective.com/jochebedfoundation#category-CONTRIBUTE"

export default function BecomeAMember() {
  return (
    <section className="flex flex-col justify-center items-center text-center w-full min-h-[400px] bg-jf-gray p-4 py-16">
      <div className="flex flex-col gap-6 justify-center items-center text-center max-w-screen-md">
        <h2 className="text-3xl font-bold">Jochebed Foundation</h2>
        <p className="text-lg mb-2">
          Jochebed Foundation is a mission outreach initiative financially supported by stewards of
          God&apos;s kingdom. We provide support to individuals within and without the faith
          community, facilitate the funding of various religious projects, and contribute to the
          spiritual nurturing and guidance of successive generations in service to God.
        </p>
        <Button variant="black" asChild>
          <Link href={BECOME_A_MEMBER_URL} target="_blank" rel="noreferrer noopener">
            <span className="h-[12px]">BECOME A MEMBER</span>
          </Link>
        </Button>
      </div>
    </section>
  )
}
