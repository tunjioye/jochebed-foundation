"use client"

import { APP_URL } from "@/constants/APP_URL"
import Link from "next/link"
import clsx from "clsx"
import { usePathname } from "next/navigation"
import Image from "next/image"
import logo from "/public/img/jochebed-foundation-logo.webp"
import Boxed from "./boxed"
import { CONTACT_EMAIL } from "@/constants/CONFIG"

type Props = {
  readonly children: React.ReactNode
}

const NAV_MENU_ITEMS = [
  {
    label: "Home",
    url: APP_URL.home,
  },
  {
    label: "Scholarship",
    url: APP_URL.scholarship,
  },
  {
    label: "Get Involved",
    url: APP_URL.getInvolved,
  },
  {
    label: "Contact",
    url: APP_URL.contact,
  },
  {
    label: "FAQ",
    url: APP_URL.faq,
  },
]

export function PublicLayout(props: Props) {
  const { children } = props
  const pathname = usePathname()

  const isCurrentPath = (url: string) => {
    if (url === APP_URL.home) {
      return pathname === url
    }
    return pathname.startsWith(url)
  }

  return (
    <div id="public-layout" className="flex flex-col flex-1 h-full w-full">
      <header className="md:sticky top-0 w-full h-[120px] flex justify-center items-center gap-4 border-b bg-background px-4 md:px-8 z-10">
        <Boxed>
          <nav className="flex flex flex-col md:flex-row gap-4 justify-center md:justify-between items-center text-sm w-full">
            <Link href={APP_URL.home} className="flex items-center gap-2 font-semibold">
              <Image
                src={logo.src}
                alt={process.env.NEXT_PUBLIC_APP_NAME ?? "Logo"}
                width={logo.width}
                height={logo.height}
                priority={true}
                className="object-contain md:object-left max-h-[60px] w-fit"
              />
            </Link>
            <div className="flex items-center gap-3 md:gap-4 text-sm">
              {NAV_MENU_ITEMS.map((item) => (
                <Link
                  key={item.url}
                  href={item.url}
                  className={clsx("hover:text-primary", {
                    "text-primary font-medium": isCurrentPath(item.url),
                  })}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </Boxed>
      </header>
      <div className="flex flex-col flex-1 w-full h-full">{children}</div>
      <footer className="bg-background flex flex-col gap-4 justify-center items-center p-4 md:p-8 min-h-[130px] text-sm text-center">
        <Link
          href={`mailto:${CONTACT_EMAIL}`}
          className="hover:text-primary hover:font-medium"
          target="_blank"
          rel="noreferrer noopener"
        >
          {CONTACT_EMAIL}
        </Link>
        <p>&copy; 2024 by {process.env.NEXT_PUBLIC_APP_NAME}</p>
      </footer>
    </div>
  )
}
