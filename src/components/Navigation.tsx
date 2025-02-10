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
            className="flex items-center justify-center rounded-full bg-[#111] shadow-lg text-white h-[50px]"
          >
            <motion.div
              className="inline-flex items-center overflow-hidden px-2 py-1 h-full"
              initial={isFirstLoad ? { maxWidth: isActive ? 130 : 50 } : {}}
              animate={{
                maxWidth: isActive ? 130 : 50,
              }}
              transition={
                isFirstLoad
                  ? { duration: 0 }
                  : { duration: 0.3, ease: "easeInOut" }
              }
            >
              <div
                className={`w-8 h-8 min-w-8 min-h-8 flex items-center justify-center rounded-full ${
                  isActive ? "bg-[#6F40DC] shadow-lg" : "bg-transparent"
                }`}
              >
                <Icon className="w-5 h-5" />
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
                transition={
                  isFirstLoad
                    ? { duration: 0 }
                    : { duration: 0.3, delay: isActive ? 0.1 : 0 }
                }
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
