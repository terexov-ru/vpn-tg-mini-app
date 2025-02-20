"use client";

const apps = [
  { name: "iOS", link: "/download/ios", icon: "🍏" },
  { name: "Android", link: "/download/android", icon: "🤖" },
  { name: "Windows", link: "/download/windows", icon: "🖥" },
  { name: "macOS", link: "/download/mac", icon: "💻" },
];

export default function DownloadLinks() {
  return (
    <div className="mt-4 ml-4 overflow-x-auto flex gap-[10px] no-scrollbar">
      {apps.map((app) => (
        <a
          key={app.name}
          href={app.link}
          className="bg-white/5 backdrop-blur-md p-4 rounded-[16px] min-w-[160px] h-[156px] flex-grow flex-[1_0_0%] flex flex-col justify-between"
        >
          <div className="flex items-center gap-2 justify-between">
            <span className="text-2xl">{app.icon}</span>
          </div>
          <div className="mt-auto">
            <div className="text-sm font-normal text-gray-300 mb-1">ОС</div>
            <div className="text-lg font-medium">{app.name}</div>
          </div>
        </a>
      ))}
    </div>
  );
}
