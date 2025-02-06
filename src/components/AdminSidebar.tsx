import Link from "next/link";
import {
  BarChart,
  MessageSquare,
  Package,
  ShoppingCart,
  Users,
  Menu,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

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
];

export function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button (only visible for exsm and xsm) */}
      <button
        className="fixed top-4 left-4 z-50 block sm:hidden bg-gray-800 text-white p-2 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="size-6" />
      </button>

      <aside
        className={`fixed inset-y-0 left-0 top-16 z-40 bg-background border-r transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        w-64 sm:translate-x-0`}
      >
        <ScrollArea className="h-[calc(100vh-4rem)]">
          <div className="flex flex-col gap-4 p-4">
            {sidebarLinks.map((link) => (
              <Button
                key={link.title}
                variant={link.variant}
                asChild
                className="justify-start gap-2"
              >
                <Link href={link.href} className="flex items-center gap-2">
                  <link.icon className="size-5" />
                  <span className="hidden sm:inline">{link.title}</span>
                </Link>
              </Button>
            ))}
          </div>
        </ScrollArea>
      </aside>

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 sm:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}