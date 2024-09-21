"use client"

import { PublicLayout } from "@/components/public/public-layout"
import HomeHero from "./page-components/home-hero"
import BecomeAMember from "./page-components/become-a-member"
import WaysWeHelp from "./page-components/ways-we-help"
import Features from "./page-components/features"
import ScriptureQuote from "./page-components/scripture-quote"
import ConnectWithUs from "./page-components/connect-with-us"

export default function HomePage() {
  return (
    <PublicLayout>
      <main className="flex flex-col items-center">
        <HomeHero />
        <BecomeAMember />
        <WaysWeHelp />
        <Features />
        <ScriptureQuote />
        <ConnectWithUs />
      </main>
    </PublicLayout>
  )
}
