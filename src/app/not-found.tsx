import type { Metadata } from "next"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/utils/shadcn/utils"
import { APP_URL } from "@/constants/APP_URL"
import Link from "next/link"

export const metadata: Metadata = {
  title: "404 | Page not found",
  description: "404: This page could not be found.",
}

export default function RootNotFound() {
  return (
    <div className="min-h-screen flex flex-col gap-4 items-center justify-center py-24 px-4 lg:p-8">
      <div>
        <h1
          className="next-error-h1"
          style={{
            display: "inline-block",
            margin: "0px 20px 0px 0px",
            padding: "0px 23px 0px 0px",
            fontSize: "24px",
            fontWeight: 500,
            verticalAlign: "top",
            lineHeight: "49px",
          }}
        >
          404
        </h1>
        <div style={{ display: "inline-block" }}>
          <h2
            style={{
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "49px",
              margin: "0px",
            }}
          >
            This page could not be found.
          </h2>
        </div>
      </div>
      <Link href={APP_URL.home} className={cn(buttonVariants({ variant: "ghost" }))}>
        Go home
      </Link>
    </div>
  )
}
