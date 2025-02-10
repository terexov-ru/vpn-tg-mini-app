"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ShieldCheck, Settings } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    setIsFirstLoad(false);
  }, []);

  const menuItems = [
    { href: "/", icon: Home, label: "Главная" },
    { href: "/payment", icon: ShieldCheck, label: "Оплата" },
    { href: "/support", icon: Settings, label: "Поддержка" },
  ];

  return (
    <nav className="flex justify-center items-center gap-4 p-3 fixed bottom-0 w-full max-w-[500px] mx-auto bg-black">
      {menuItems.map(({ href, icon: Icon, label }) => {
        const isActive = pathname === href;

        return (
          <Link
            key={href}
            href={href}
            className="flex items-center justify-center rounded-full bg-[#111] shadow-lg text-white h-[56px]"
          >
            <motion.div
              className="inline-flex items-center overflow-hidden px-2 py-1 h-full w-full"
              initial={isFirstLoad ? { maxWidth: isActive ? 130 : 56 } : {}}
              animate={{
                maxWidth: isActive ? 130 : 56,
              }}
              transition={
                isFirstLoad
                  ? { duration: 0 }
                  : { duration: 0.2, ease: "easeInOut" }
              }
            >
              <div
                className={`w-10 h-10 min-w-10 min-h-10 flex items-center justify-center rounded-full ${
                  isActive ? "bg-[#6F40DC] shadow-lg" : "bg-transparent"
                }`}
              >
                <Icon className="w-6 h-6" />
              </div>

              <motion.span
                className="text-xs font-normal whitespace-nowrap"
                initial={
                  isFirstLoad
                    ? {
                        opacity: isActive ? 1 : 0,
                        width: isActive ? "auto" : 0,
                        marginLeft: isActive ? "8px" : 0,
                      }
                    : {}
                }
                animate={{
                  opacity: isActive ? 1 : 0,
                  width: isActive ? "auto" : 0,
                  marginLeft: isActive ? "8px" : 0,
                }}
                transition={isFirstLoad ? { duration: 0 } : { duration: 0.2 }}
              >
                {label}
              </motion.span>
            </motion.div>
          </Link>
        );
      })}
    </nav>
  );
}
