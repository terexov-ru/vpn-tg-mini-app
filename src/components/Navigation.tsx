"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ShieldCheck, Info } from "lucide-react";
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
    { href: "/support", icon: Info, label: "Поддержка" },
  ];
  return (
    <nav className="fixed bottom-0 w-full max-w-[500px] pb-2 bg-[#0D0E0F] pt-2">
      <div className="h-[54px] flex justify-center items-center gap-2">
        {menuItems.map(({ href, icon: Icon, label }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className="flex items-center justify-center rounded-full bg-white-6 backdrop-blur-[12px] text-white h-[50px] min-w-[50px]"
            >
              <motion.div
                className="flex items-center overflow-hidden h-full w-full"
                initial={isFirstLoad ? { maxWidth: isActive ? 180 : 50 } : {}}
                animate={{ maxWidth: isActive ? 180 : 50 }}
                transition={
                  isFirstLoad
                    ? { duration: 0 }
                    : { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
                }
              >
                <div
                  className={`flex items-center justify-center rounded-[60px] ${
                    isActive
                      ? "bg-[#6F40DC] shadow-lg w-[40px] h-[40px] min-w-[40px] min-h-[40px] ml-1"
                      : "bg-transparent w-[50px] h-[50px] min-w-[50px] min-h-[50px]"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <motion.div
                  className="text-[16px] font-medium inline-flex whitespace-nowrap overflow-hidden"
                  initial={{
                    opacity: isActive ? 1 : 0,
                    width: isActive ? "auto" : 0,
                    display: isActive ? "inline-flex" : "none",
                  }}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    width: isActive ? "auto" : 0,
                    display: isActive ? "inline-flex" : "none",
                  }}
                  transition={
                    isFirstLoad
                      ? { duration: 0 }
                      : { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
                  }
                >
                  <div className="pr-3 pl-2">{label}</div>
                </motion.div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
