"use client";

import { Download, Upload, Signal } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const stats = [
  { icon: "/time.svg", value: "00:18:56", label: "Время визита" },
  { icon: "/people.svg", value: "2392032", label: "Кол-во юзеров" },
  {
    icon: "/invite.svg",
    label: "Позвать друга",
    button: "Позвать",
    buttonLink: "#!",
  },
];

function StatCard({
  icon,
  value,
  label,
  button,
  buttonLink,
}: {
  icon: any;
  value?: string;
  label: string;
  button?: string;
  buttonLink?: string;
}) {
  const { push } = useRouter();
  return (
    <div className="relative bg-white-6 p-3 rounded-2xl w-full h-[118px] flex flex-col justify-end">
      <div className="absolute top-2 right-2 bg-white-4 p-2 rounded-full">
        <Image width={16} height={16} src={icon} alt={icon} />
      </div>
      <div>
        {label && (
          <div className="text-xs/4 font-normal text-baseGray mb-2 overflow-hidden truncate">
            {label}
          </div>
        )}
        {value && (
          <div className="text-white font-medium text-base/[19px]">{value}</div>
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
          icon={stat.icon}
          value={stat.value}
          label={stat.label}
          button={stat.button}
          buttonLink={stat.buttonLink}
        />
      ))}
    </div>
  );
}
