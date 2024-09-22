"use client"

import clsx from "clsx"

type Props = {
  readonly children: React.ReactNode
  readonly className?: string
}

export default function Boxed(props: Props) {
  const { children, className } = props
  return <div className={clsx("w-full max-w-screen-xl mx-auto", className)}>{children}</div>
}
