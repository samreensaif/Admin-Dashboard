

"use client";

import { LayoutDashboard, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { logout } from "@/services/auth";

export function AdminHeader() {
  const router = useRouter();

  // ✅ Logout handler
  const handleLogout = async () => {
    await logout(); // Call the server function
    router.push("/sign-in"); // Redirect to sign-in page after logout
  };

  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-4 sm:px-6">
      {/* ✅ Logo & Title (Collapses on Small Screens) */}
      <div className="flex items-center gap-2 font-semibold">
        <div className="size-8 rounded bg-primary text-primary-foreground grid place-items-center">
          <LayoutDashboard size={20} />
        </div>
        <span className="hidden sm:block">Dashboard</span>
      </div>

      {/* ✅ Logout Button (Icon-Only on Small Screens) */}
      <Button
        variant="destructive"
        onClick={handleLogout}
        className="px-3 py-2 sm:px-4"
      >
        <LogOut className="size-5 sm:hidden" />
        <span className="hidden sm:inline">Logout</span>
      </Button>
    </header>
  );
}
