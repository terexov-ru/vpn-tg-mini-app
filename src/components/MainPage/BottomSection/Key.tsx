"use client";

import { useUserStore } from "@/store/useUserStore";
import InfoCard from "@/components/InfoCard";

export default function Key() {
  const { credentials, subscriptionStatus } = useUserStore();

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
      if (!credentials || credentials.length === 0) {
        description = "Загрузка ключа...";
        buttonText = "";
      } else {
        description = credentials[0].uri;
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
