"use client"

import Boxed from "@/components/public/boxed"
import { Button } from "@/components/ui/button"
import clsx from "clsx"
import Link from "next/link"

const WAYS_TO_HELP = [
  {
    title: "Jochebed Scholarship",
    description:
      "A scholarship program created to provide financial support and educational opportunities to deserving individuals who aspire to make a positive impact on their communities and the world.",
    link: "https://opencollective.com/jochebed-scholarship",
  },
  {
    title: "Porter's House",
    description:
      "An evangelical outreach program dedicated to nurturing and instilling discipline in the younger generation of all tribes and religions.",
    link: null,
  },
  {
    title: "David's Quest",
    description:
      "A mission program dedicated to providing support to missionaries operating in the field, and establishing churches in communities across the globe.",
    link: null,
  },
  {
    title: "Zarephath Rewards",
    description:
      "A dedicated support network for the spouses and dependents of deceased ministers, missionaries, pastors, and educators.",
    link: null,
  },
]

export default function WaysWeHelp() {
  return (
    <section className="w-full py-20">
      <Boxed>
        <h2 className="font-heading text-center text-4xl font-bold mb-4">Ways We Help</h2>
        <div className="text-center text-lg mb-8">The Focus of Our Efforts</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-10">
          {WAYS_TO_HELP.map((item, index) => {
            return (
              <div key={item.title} className="flex flex-col items-start gap-4 border p-6">
                <div className="flex gap-2 items-end font-heading">
                  <span className="text-gray-500 text-4xl">0{index + 1}</span>
                  <h3 className="uppercase text-xl font-bold text-jf-yellow">{item.title}</h3>
                </div>
                <p className="mb-2">{item.description}</p>
                <Button
                  asChild={item.link != null}
                  className={clsx("mt-auto", {
                    "cursor-not-allowed": item.link == null,
                  })}
                >
                  {item.link != null ? (
                    <Link href={item.link} target="_blank" rel="noreferrer noopener">
                      <span className="h-[12px]">LEARN MORE</span>
                    </Link>
                  ) : (
                    <span className="h-[12px]">COMING SOON</span>
                  )}
                </Button>
              </div>
            )
          })}
        </div>
      </Boxed>
    </section>
  )
}
