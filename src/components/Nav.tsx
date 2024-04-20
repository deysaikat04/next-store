"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ComponentProps } from "react"

export function Nav({ children }: Readonly<{
    children: React.ReactNode
}>) {
    return <nav className="bg-primary flex justify-center px-4 text-primary-foreground">
        {children}
    </nav>
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
    const pathName = usePathname()
    return <Link {...props} className={cn("p-4 hover:bg-secondary hover:text-secondary-foreground focus-visible:bg-secondary focus-visible:text-secondary-foreground", pathName === props.href && "bg-background text-foreground")} />
}