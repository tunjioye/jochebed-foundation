"use client"

import Boxed from "@/components/public/boxed"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CONTACT_EMAIL, GOOGLE_FORM_URL } from "@/constants/CONFIG"

export default function ContactUs() {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-jf-gray">
      <Boxed>
        <div className="flex flex-col gap-4 items-start">
          <h2 className="font-heading text-3xl font-bold text-primary">CONTACT US</h2>
          <div className="text-sm">Oshawa, ON</div>
          <Link
            href={`mailto:${CONTACT_EMAIL}`}
            className="hover:text-primary hover:font-medium text-sm"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span>{CONTACT_EMAIL}</span>
          </Link>
          <Button asChild size="sm">
            <Link href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer noopener">
              <span className="h-[12px]">FILL OUR CONTACT FORM</span>
            </Link>
          </Button>
        </div>
      </Boxed>
    </section>
  )
}
