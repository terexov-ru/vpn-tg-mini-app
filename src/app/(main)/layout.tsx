import Navgation from "@/components/Navigation";
import Image from "next/image";
// import earthImage from "@/public/earth.png"; // Положи картинку в папку public

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-b from-[#291b4c] via-[black] to-[black]">
      {children}
      <Navgation />
    </div>
  );
}
