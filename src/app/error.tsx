"use client"

import type { Metadata } from "next"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/utils/shadcn/utils"
import { APP_URL } from "@/constants/APP_URL"
import Link from "next/link"

export const metadata: Metadata = {
  title: "500 | Something went wrong",
  description: "500: Something went wrong. Please try again later.",
}

export default function RootError() {
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
          500
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
            Something went wrong. Please try again later.
          </h2>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <Link href={APP_URL.home} className={cn(buttonVariants({ variant: "ghost" }))}>
          Go home
        </Link>
        <button
          type="button"
          className={cn(buttonVariants({ variant: "ghost" }))}
          onClick={() => {
            window.location.href = window.location.href
          }}
        >
          Try again
        </button>
      </div>
    </div>
  )
}
