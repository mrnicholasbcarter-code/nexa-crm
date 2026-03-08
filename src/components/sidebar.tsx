"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Briefcase, 
  Users, 
  Settings, 
  ChevronRight,
  LogOut
} from "lucide-react";
import { UserButton } from "@clerk/nextjs";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-zinc-500",
  },
  {
    label: "Deals",
    icon: Briefcase,
    href: "/dashboard/deals",
    color: "text-zinc-500",
  },
  {
    label: "Customers",
    icon: Users,
    href: "/dashboard/customers",
    color: "text-zinc-500",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/dashboard/settings",
  },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col space-y-4 bg-zinc-950 text-white border-r border-white/5">
      <div className="flex-1 px-3 py-4">
        <Link href="/dashboard" className="mb-14 flex items-center pl-3">
          <div className="relative mr-4 h-8 w-8">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white">
              <LayoutDashboard className="h-5 w-5 text-black" />
            </div>
          </div>
          <h1 className="text-2xl font-bold">Nexa</h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "group flex w-full cursor-pointer justify-start rounded-lg p-3 text-sm font-medium transition hover:bg-white/5 hover:text-white",
                pathname === route.href ? "bg-white/5 text-white" : "text-zinc-400"
              )}
            >
              <div className="flex flex-1 items-center">
                <route.icon className={cn("mr-3 h-5 w-5", route.color)} />
                {route.label}
              </div>
              {pathname === route.href && (
                <ChevronRight className="h-4 w-4 text-zinc-500" />
              )}
            </Link>
          ))}
        </div>
      </div>
      <div className="px-3 border-t border-zinc-900 py-4 flex items-center justify-between">
        <UserButton 
          appearance={{
            elements: {
              userButtonAvatarBox: "h-8 w-8"
            }
          }}
        />
        <div className="text-xs text-zinc-500 font-medium truncate max-w-[120px]">
          Workspace Alpha
        </div>
      </div>
    </div>
  );
};
