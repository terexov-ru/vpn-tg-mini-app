import Navgation from "@/components/Navigation";
import Image from "next/image";
import earthImage from "../../../public/main_background.png";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-b from-[#291b4c] via-black to-black">
      <div className="absolute bottom-[30%] left-1/2 transform -translate-x-1/2 w-full max-w-4xl bg-none">
        <Image
          src={earthImage}
          alt="Earth Background"
          width={800}
          height={400}
          objectFit="contain" 
          className="opacity-60"
          priority
        />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {children}
        <Navgation />
      </div>
    </div>
  );
}
