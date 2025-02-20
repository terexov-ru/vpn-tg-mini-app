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
    <nav className="fixed bottom-0 w-full max-w-[500px] pb-[18px] backdrop-blur-md pt-4">
      <div className="h-[64px] flex justify-center items-center gap-1">
        {menuItems.map(({ href, icon: Icon, label }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className="flex items-center justify-center rounded-full bg-[#111] text-white h-[60px] min-w-[60px]"
            >
              <motion.div
                className="flex items-center overflow-hidden h-full w-full"
                initial={isFirstLoad ? { maxWidth: isActive ? 180 : 60 } : {}}
                animate={{ maxWidth: isActive ? 180 : 60 }}
                transition={
                  isFirstLoad
                    ? { duration: 0 }
                    : { duration: 0.3, ease: "easeInOut" }
                }
              >
                <div
                  className={`flex items-center justify-center rounded-[60px] ${
                    isActive
                      ? "bg-[#6F40DC] shadow-lg w-14 h-14 min-w-14 min-h-14 ml-1"
                      : "bg-transparent w-[60px] h-[60px] min-w-[60px] min-h-[60px]"
                  }`}
                >
                  <Icon className="w-7 h-7" />
                </div>

                <motion.div
                  className="text-[18px] font-medium inline-flex whitespace-nowrap overflow-hidden"
                  initial={{
                    opacity: isActive ? 1 : 0,
                    width: isActive ? "auto" : 0,
                    marginLeft: isActive ? "8px" : 0,
                    paddingRight: isActive ? "24px" : 0,
                    display: isActive ? "inline-flex" : "none",
                  }}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    width: isActive ? "auto" : 0,
                    marginLeft: isActive ? "8px" : 0,
                    paddingRight: isActive ? "24px" : 0,
                    display: isActive ? "inline-flex" : "none",
                  }}
                  transition={isFirstLoad ? { duration: 0 } : { duration: 0.3 }}
                >
                  {label}
                </motion.div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
