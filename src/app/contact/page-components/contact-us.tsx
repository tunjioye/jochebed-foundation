"use client"

import Boxed from "@/components/public/boxed"
import Link from "next/link"
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

          <iframe
            src={GOOGLE_FORM_URL}
            width="100%"
            height="100%"
            className="min-h-[1680px] md:min-h-[1540px]"
            style={{
              border: 0,
            }}
          >
            Loading…
          </iframe>
        </div>
      </Boxed>
    </section>
  )
}
