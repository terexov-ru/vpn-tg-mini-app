"use client";

import { useUserStore } from "@/store/useUserStore";
import ActiveInfoCard from "@/components/ActiveInfoCard";

export default function Subscription() {
  const { subscription, subscriptionStatus } = useUserStore();

  let title = "Подписка";
  let description = "";
  let buttonText = "";

  switch (subscriptionStatus) {
    case "no_subscription":
      description = "Оформи подписку, чтобы пользоваться сервисом";
      buttonText = "Оформить подписку";
      break;
    case "active":
      description = subscription?.date_billing_next
        ? `Истекает: ${new Date(
            subscription.date_billing_next
          ).toLocaleDateString("ru-RU", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}`
        : "Подписка активна";
      buttonText = "Продлить";
      break;
    case "expired":
      description = "Продли подписку, чтобы использовать VPN";
      buttonText = "Продлить подписку";
      break;
  }

  return (
    <ActiveInfoCard
      title={title}
      description={description}
      buttonText={buttonText}
    />
  );
}
