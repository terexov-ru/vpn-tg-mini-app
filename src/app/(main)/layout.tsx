"use client";

import Navgation from "@/components/Navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gradient = 'bg-gradient-to-b from-[#291b4c] via-black to-black"';

  return (
    <main className={`h-full w-full max-w-[500px] ${gradient}`}>
      <div className="overflow-y-auto min-h-0 h h-[calc(100dvh-104px)]">{children}</div>
      <Navgation />
    </main>
  );
}
