"use client";

import Navgation from "@/components/Navigation";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const gradient = "bg-gradient-to-b from-[#291b4c] via-[#0D0E0F] to-[#0D0E0F]";
  const isHome = pathname === "/";

  return (
    <main
      className={`relative h-full w-full max-w-[500px] text-white ${gradient}`}
    >
      {isHome && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/main_background.png')",
            backgroundSize: "360px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      )}
      <div className="relative z-10 overflow-y-auto min-h-0 h h-[calc(100dvh-70px)]">
        {children}
      </div>
      <Navgation />
    </main>
  );
}
