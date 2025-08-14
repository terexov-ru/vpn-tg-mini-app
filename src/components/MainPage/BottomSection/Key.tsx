"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getMainInfo } from "@/api/api";

const getSubscriptionStatus = (subscription?: { is_active: boolean }) => {
  if (!subscription) return "no_subscription";
  return subscription.is_active ? "active" : "expired";
};

export default function Key() {
  const { data: { subscription, key } = {}, isLoading } = useQuery({
    queryKey: ["main"],
    queryFn: () => getMainInfo(),
  });
  const subscriptionStatus = getSubscriptionStatus(subscription);

  let title = "VPN-ключ";
  let description = "";
  let buttonText = "";

  switch (subscriptionStatus) {
    case "no_subscription":
      description = "Оформи подписку, чтобы получить VPN-ключ";
      buttonText = "Оформить подписку";
      break;
    case "expired":
      description = "Продли подписку, чтобы продолжить использовать VPN";
      buttonText = "Продлить подписку";
      break;
    case "active":
      if (isLoading) {
        description = "Загрузка ключа...";
        buttonText = "";
      } else {
        description = key ?? "";
        buttonText = "Скопировать";
      }
      break;
  }

  return (
    <div className="px-4 w-full">
      <InfoCard
        title={title}
        description={description}
        buttonText={buttonText}
      />
    </div>
  );
}

function InfoCard({
  title,
  description,
  buttonText,
}: {
  title: string;
  description: string;
  buttonText?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(description);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="relative bg-white-6 backdrop-blur-[12px] px-5 py-6 rounded-[16px] flex items-center justify-between w-full gap-5">
      <div className="w-[75%] overflow-hidden">
        <h2 className="text-[22px]/[22px] font-medium mb-1 text-white">
          {title}
        </h2>
        <div className="text-sm/[22px] font-normal text-baseGray truncate">
          {description}
        </div>
      </div>
      {buttonText && (
        <button
          onClick={handleCopy}
          className={`px-[18px] py-3 rounded-[60px] text-white text-sm font-medium hover:opacity-90 transition shadow-md ${
            copied ? "bg-green-500" : "bg-accent"
          }`}
        >
          {copied ? "Скопировано" : buttonText}
        </button>
      )}
    </div>
  );
}
