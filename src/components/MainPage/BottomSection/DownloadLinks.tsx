"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import Cookies from "js-cookie";

const defaultApps = [
  { name: "iOS", link: "/download/ios", icon: "🍏" },
  { name: "Android", link: "/download/android", icon: "🤖" },
  { name: "Windows", link: "/download/windows", icon: "🖥" },
  { name: "macOS", link: "/download/mac", icon: "💻" },
];

export default function DownloadLinks() {
  const [platform, setPlatform] = useState(null);
  const [cardWidth, setCardWidth] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const updateCardWidth = () => {
      const screenWidth = window.innerWidth;
      const gap = 16 * 2;
      const newCardWidth = (screenWidth - gap) / 3;
      setCardWidth(newCardWidth);
    };

    window.addEventListener("resize", updateCardWidth);
    updateCardWidth();
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  useEffect(() => {
    const storedPlatform = Cookies.get("userPlatform");
    if (storedPlatform) {
      setPlatform(storedPlatform as any);
      return;
    }

    const userAgent = navigator.userAgent.toLowerCase();
    let detectedPlatform = "iOS";
    if (userAgent.includes("android")) {
      detectedPlatform = "Android";
    } else if (userAgent.includes("iphone") || userAgent.includes("ipad")) {
      detectedPlatform = "iOS";
    } else if (userAgent.includes("win")) {
      detectedPlatform = "Windows";
    } else if (userAgent.includes("mac")) {
      detectedPlatform = "macOS";
    }

    Cookies.set("userPlatform", detectedPlatform, { expires: 7 });
    setPlatform(detectedPlatform as any);
  }, []);

  return (
    <div className="w-full overflow-hidden flex justify-center relative min-h-[120px] h-[120px]">
      {platform && (
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory"
          style={{
            width: "100%",
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
          }}
        >
          {defaultApps.map((app, index) => (
            <a
              key={app.name}
              href={app.link}
              className={`flex flex-col items-center justify-between rounded-xl p-4 font-semibold transition snap-center ${
                platform === app.name
                  ? "bg-[#6F40DC] text-white"
                  : "bg-gray-900 text-gray-400"
              }`}
              style={{
                width: `${cardWidth}px`,
                height: "120px",
                flex: "0 0 auto",
              }}
            >
              <span className="text-3xl">{app.icon}</span>
              <span className="text-sm">{app.name}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
