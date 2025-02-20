"use client";

import { Download, Upload, Signal } from "lucide-react";
import { useRouter } from "next/navigation";

const stats = [
  { icon: Download, value: "00:18:56", label: "Время визита" },
  { icon: Upload, value: "2392032", label: "Кол-во юзеров" },
  { icon: Signal, label: "Позвать друга", button: "Позвать", buttonLink: "#!" },
];

function StatCard({
  Icon,
  value,
  label,
  button,
  buttonLink,
}: {
  Icon: any;
  value?: string;
  label: string;
  button?: string;
  buttonLink?: string;
}) {
  const { push } = useRouter();
  return (
    <div className="relative bg-[rgb(255_255_255_/_8%)] backdrop-blur-md p-3 rounded-2xl w-full h-[118px] flex flex-col justify-end">
      <div className="absolute top-2 right-2 bg-white/10 p-2 rounded-full">
        <Icon className="w-4 h-4 text-gray-400" />
      </div>
      <div>
        {label && (
          <div className="text-xs/4 font-normal text-white mb-2 overflow-hidden truncate">{label}</div>
        )}
        {value && (
          <div className="text-white font-medium text-base/[19px]">
            {value}
          </div>
        )}
        {button && buttonLink && (
          <button
            className="rounded-[40px] bg-accent flex items-center justify-center px-3 py-[5px] text-xs font-normal max-w-full text-white hover:bg-accent"
            onClick={() => push(buttonLink)}
          >
            {button}
          </button>
        )}
      </div>
    </div>
  );
}

export default function TrafficStats() {
  return (
    <div className="grid grid-cols-3 gap-3 w-full">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          Icon={stat.icon}
          value={stat.value}
          label={stat.label}
          button={stat.button}
          buttonLink={stat.buttonLink}
        />
      ))}
    </div>
  );
}
