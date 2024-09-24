import type { Metadata, Viewport } from "next"
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
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#315436",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
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
