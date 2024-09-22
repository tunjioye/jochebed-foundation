"use client"

import Boxed from "@/components/public/boxed"
import { Button } from "@/components/ui/button"
import { APP_URL } from "@/constants/APP_URL"
import clsx from "clsx"
import Link from "next/link"

const TAKE_PART_ITEMS = [
  {
    title: "Volunteer",
    subtitle: "Create an Impact.",
    description:
      "Your time and skills can be just as valuable as financial contributions. Volunteering with our foundation allows you to actively participate in our efforts and make a hands-on difference. To volunteer, fill out our contact form and we'll be in touch.",
    link: APP_URL.contact,
    linkText: "VOLUNTEER",
    coloredBox: false,
  },
  {
    title: "Spread The Word",
    subtitle: "Join Our Efforts.",
    description:
      "Help us increase our reach by sharing our mission and success stories with your network. Social media, word-of-mouth, and online reviews can all contribute to our visibility and support.",
    link: null,
    linkText: null,
    coloredBox: true,
  },
  {
    title: "Donate",
    subtitle: "You Can Make a Difference.",
    description:
      "Your financial contributions play a crucial role in supporting our programs and initiatives. Whether it's a one-time gift or a recurring membership donation, every dollar makes a difference in advancing our mission.",
    link: "https://opencollective.com/jochebedfoundation#category-CONTRIBUTE",
    linkText: "DONATE NOW",
    coloredBox: false,
  },
]

export default function GetInvolved() {
  return (
    <section className="w-full pt-16 pb-20 px-4 md:px-8">
      <Boxed>
        <h2 className="font-heading text-center text-4xl font-bold mb-4">TAKE PART</h2>
        <div className="text-center text-lg mb-8">You Can Make a Difference</div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TAKE_PART_ITEMS.map((item) => {
            return (
              <div
                key={item.title}
                className={clsx(
                  "min-h-[400px] lg:min-h-[500px] flex flex-col justify-center items-center text-center gap-6 py-12 px-8 lg:px-14",
                  {
                    "bg-primary text-white": item.coloredBox,
                    "bg-jf-gray": !item.coloredBox,
                  }
                )}
              >
                <div className="flex gap-2 items-end font-heading">
                  <h3
                    className={clsx("text-xl font-bold", {
                      "text-jf-yellow": item.coloredBox,
                      "text-primary": !item.coloredBox,
                    })}
                  >
                    {item.title}
                  </h3>
                </div>
                <div className="mb-2 flex flex-col justify-center items-center text-center">
                  <p className="leading-loose">{item.subtitle}</p>
                  <p className="leading-loose">{item.description}</p>
                </div>
                <Button asChild={item.link != null} disabled={item.link == null}>
                  {item.link != null ? (
                    <Link
                      href={item.link}
                      target={item.link.startsWith("http") ? "_blank" : undefined}
                      rel={item.link.startsWith("http") ? "noreferrer noopener" : undefined}
                    >
                      <span className="h-[12px]">{item.linkText}</span>
                    </Link>
                  ) : (
                    <span className="h-[12px]">&nbsp;</span>
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
