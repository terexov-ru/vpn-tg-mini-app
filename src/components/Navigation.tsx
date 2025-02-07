"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ShieldCheck, Settings } from "lucide-react";

export default function Navigation() {
  const pathname = usePathname();

  const menuItems = [
    { href: "/", icon: Home, label: "Главная" },
    { href: "/payment", icon: ShieldCheck, label: "Оплата" },
    { href: "/support", icon: Settings, label: "Поддержка" },
  ];

  return (
    <nav className="flex justify-center items-center gap-4 p-3 fixed bottom-0 w-full max-w-[500px] mx-auto">
      {menuItems.map(({ href, icon: Icon, label }) => {
        const isActive = pathname === href;

        return (
          <Link key={href} href={href} className="relative">
            <div
              className={`flex items-center justify-center rounded-full bg-[#111] transition-all duration-300 ${
                isActive
                  ? "px-3 py-1 text-white shadow-lg w-auto"
                  : "w-12 h-12 "
              }`}
            >
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
                  isActive ? "bg-[#6F40DC] shadow-lg" : "bg-transparent"
                }`}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>
              <span
                className={`text-sm font-normal ml-2 transition-all duration-300 ${
                  isActive ? "opacity-100 w-auto" : "opacity-0 w-0 hidden"
                }`}
              >
                {label}
              </span>
            </div>
          </Link>
        );
      })}
    </nav>
  );
}
