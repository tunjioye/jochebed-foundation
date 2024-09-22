import type { Metadata } from "next"
import localFont from "next/font/local"
import { Raleway as FontHeading } from "next/font/google"
import { cn } from "@/utils/shadcn/utils"
import "@/styles/globals.css"
import { ThemeProvider } from "@/components/theme/theme-provider"

const fontSans = localFont({
  variable: "--font-sans",
  src: [
    {
      path: "../styles/avenir-font/AvenirLTStd-Light.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../styles/avenir-font/AvenirLTStd-LightOblique.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../styles/avenir-font/AvenirLTStd-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../styles/avenir-font/AvenirLTStd-MediumOblique.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../styles/avenir-font/AvenirLTStd-Heavy.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../styles/avenir-font/AvenirLTStd-HeavyOblique.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../styles/avenir-font/AvenirLTStd-Black.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../styles/avenir-font/AvenirLTStd-BlackOblique.otf",
      weight: "700",
      style: "italic",
    },
  ],
})

const fontHeading = FontHeading({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME ?? "Create Next App",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0",
  icons: [
    {
      rel: "icon",
      type: "image/x-icon",
      url: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      sizes: "180x180",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
  ],
  manifest: "/site.webmanifest",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "flex flex-col min-h-screen bg-background text-foreground font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
