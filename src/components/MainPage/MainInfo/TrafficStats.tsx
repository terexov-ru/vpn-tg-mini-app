"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { useQuery } from "@tanstack/react-query";
import { getMainInfo } from "@/api/api";

export default function TrafficStats() {
  const { data: mainInfo, isLoading } = useQuery({
    queryKey: ["main"],
    queryFn: getMainInfo,
  });

  const [userCount, setUserCount] = useState<number>(8317);

  useEffect(() => {
    const storedCount = sessionStorage.getItem("userCount");
    let previousCount = storedCount ? parseInt(storedCount, 10) : 8317;

    const randomIncrease = 20 + Math.floor(Math.random() * 9) + 1;
    const newCount = previousCount + randomIncrease;

    sessionStorage.setItem("userCount", newCount.toString());
    setUserCount(newCount);
  }, []);

  const registrationDate = mainInfo?.registered_at
    ? format(new Date(mainInfo.registered_at), "d MMMM yyyy", { locale: ru })
    : "Неизвестно";

  const stats = [
    { icon: "/time.svg", value: registrationDate, label: "Дата регистрации" },
    {
      icon: "/people.svg",
      value: userCount.toLocaleString(),
      label: "Кол-во юзеров",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-3 w-full">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          icon={stat.icon}
          value={stat.value}
          label={stat.label}
        />
      ))}
    </div>
  );
}

function StatCard({
  icon,
  value,
  label,
  button,
}: {
  icon: string;
  value?: string;
  label: string;
  button?: React.ReactNode;
}) {
  return (
    <div className="relative bg-white-6 p-3 rounded-2xl w-full h-[118px] flex flex-col justify-end">
      <div className="absolute top-2 right-2 bg-white-4 p-2 rounded-full">
        <Image
          width={16}
          height={16}
          src={icon}
          alt={label}
          loading="eager"
          unoptimized={false}
        />
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
        {button && <div>{button}</div>}
      </div>
    </div>
  );
}

function CopyButton({ text }: { text: string }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={`rounded-[40px] flex items-center justify-center px-3 py-[5px] text-xs font-normal max-w-full transition shadow-md ${
        isCopied
          ? "bg-green-500 text-white"
          : "bg-accent text-white hover:bg-accent"
      }`}
    >
      {isCopied ? "Скопировано" : "Скопировать"}
    </button>
  );
}
