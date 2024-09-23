"use client"

import { Icons } from "@/components/ui/icons"

const SCRIPTURE_TEXT =
  "To bring all individuals to Christ and empower every believer ​to become faithful stewards by exemplifying God's love, just as He did through His Son."

export default function ScriptureQuote() {
  return (
    <section className="w-full min-h-[500px] md:min-h-[540px] bg-primary text-white pt-16 pb-20 px-4 md:px-8 flex flex-col justify-center items-center">
      <div className="w-full max-w-screen-md mx-auto flex flex-col justify-center items-center gap-10 text-center text-3xl md:text-4xl">
        <Icons.quote className="w-10 h-10 mx-auto" color="#C2CCC3" />
        <div className="font-heading leading-normal">{SCRIPTURE_TEXT}</div>
      </div>
    </section>
  )
}
