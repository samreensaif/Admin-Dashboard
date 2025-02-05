import Link from "next/link"
import {
  BarChart,
  MessageSquare,
  Package,
  ShoppingCart,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "./ui/scroll-area"

const sidebarLinks = [
  {
    title: "Dashboard",
    icon: BarChart,
    href: "/",
    variant: "ghost" as const,
  },
  {
    title: "Products",
    icon: Package,
    href: "/product-data",
    variant: "ghost" as const,
  },
  {
    title: "Orders",
    icon: ShoppingCart,
    href: "/orders",
    variant: "ghost" as const,
  },
  {
    title: "Customers",
    icon: Users,
    href: "/customers",
    variant: "ghost" as const,
  },
  {
    title: "Reviews",
    icon: MessageSquare,
    href: "/reviews",
    variant: "ghost" as const,
  },
]

export function AdminSidebar() {
  return (
    <aside className="w-64 border-r bg-background md:w-56 sm:w-48 xs:w-40">
      <ScrollArea className="h-[calc(100vh-4rem)]">
        <div className="flex flex-col gap-4 p-4">
          {sidebarLinks.map((link) => (
            <Button 
              key={link.title} 
              variant={link.variant} 
              asChild 
              className="justify-start gap-2 text-base md:text-sm sm:text-xs"
            >
              <Link href={link.href} className="flex items-center gap-2">
                <link.icon className="size-5 md:size-4 sm:size-3" />
                <span className="hidden md:inline">{link.title}</span>
              </Link>
            </Button>
          ))}
        </div>
      </ScrollArea>
    </aside>
  )
}
