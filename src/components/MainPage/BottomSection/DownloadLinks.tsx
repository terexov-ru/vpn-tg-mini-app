"use client";
import Image from "next/image";

const apps = [
  {
    name: "iOS",
    link: "https://itunes.apple.com/us/app/outline-app/id1356177741",
    icon: "/apps/apple.svg",
    alt: "iOS App Icon",
  },
  {
    name: "Android",
    link: "https://play.google.com/store/apps/details?id=org.outline.android.client",
    icon: "/apps/android.svg",
    alt: "Android App Icon",
  },

  {
    name: "Windows",
    link: "https://s3.amazonaws.com/outline-releases/client/windows/stable/Outline-Client.exe",
    icon: "/apps/windows.svg",
    alt: "Windows App Icon",
  },
  {
    name: "macOS",
    link: "https://itunes.apple.com/us/app/outline-app/id1356178125",
    icon: "/apps/apple.svg",
    alt: "macOS App Icon",
  },
  {
    name: "Linux",
    link: "https://support.google.com/outline/answer/15331527",
    icon: "/apps/linux.svg",
    alt: "Linux App Icon",
  },
];

export default function DownloadLinks() {
  return (
    <div className="mt-4 mx-4 overflow-x-auto flex gap-[10px] no-scrollbar text-white">
      {apps.map((app) => (
        <a
          key={app.name}
          href={app.link}
          className="bg-white-4 backdrop-blur-[12px] p-4 rounded-[16px] min-w-[160px] h-[156px] flex-grow flex-[1_0_0%] flex flex-col justify-between"
        >
          <div className="flex items-center gap-2 justify-between">
            <div className="w-[44px] h-[44px] bg-[#723CEB1A] rounded-full flex justify-center items-center">
              <Image
                src={app.icon}
                alt={app.alt}
                width={20}
                height={20}
                loading="eager"
                unoptimized={false}
              />
            </div>
          </div>
          <div className="mt-auto">
            <div className="text-sm font-normal text-baseGray mb-1">ОС</div>
            <div className="text-lg font-medium">{app.name}</div>
          </div>
        </a>
      ))}
    </div>
  );
}
