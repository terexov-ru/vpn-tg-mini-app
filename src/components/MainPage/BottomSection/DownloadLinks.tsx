"use client";

const apps = [
  { name: "iOS", link: "#!", icon: "🍏" },
  { name: "Android", link: "#!", icon: "🤖" },
  { name: "Windows", link: "#!", icon: "🖥" },
  { name: "macOS", link: "#!", icon: "💻" },
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
            <span className="text-2xl">{app.icon}</span>
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
