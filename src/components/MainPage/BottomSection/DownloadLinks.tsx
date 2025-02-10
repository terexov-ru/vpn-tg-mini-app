"use client";

const apps = [
  { name: "iOS", link: "/download/ios", icon: "🍏" },
  { name: "Android", link: "/download/android", icon: "🤖" },
  { name: "Windows", link: "/download/windows", icon: "🖥" },
  { name: "macOS", link: "/download/mac", icon: "💻" },
];

export default function DownloadLinks() {
  return (
    <div className="px-4 max-w-full overflow-x-auto no-scrollbar">
      <div className="overflow-x-auto w-full no-scrollbar">
        <div className="flex gap-4 min-w-max overflow-x-auto no-scrollbar">
          {apps.map((app) => (
            <a
              key={app.name}
              href={app.link}
              className="flex flex-col items-start justify-between w-40 h-[150px] rounded-2xl p-4 font-semibold transition bg-gray-900 text-white relative shadow-md hover:shadow-lg"
            >
              <div className="flex items-center gap-2 justify-between">
                <span className="text-2xl">{app.icon}</span>
              </div>
              <div className="mt-auto">
                <span className="text-xs text-gray-300">ОС</span>
                <span className="block text-lg font-bold">{app.name}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
