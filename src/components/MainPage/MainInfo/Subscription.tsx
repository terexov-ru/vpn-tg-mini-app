"use client";

import { useUserStore } from "@/store/useUserStore";
import { useRouter } from "next/navigation";

export default function Subscription() {
  const { subscription, subscriptionStatus } = useUserStore();
  const router = useRouter();

  let title = "Подписка";
  let description = "";
  let buttonText = "";
  let paymentLink = "/payment";

  switch (subscriptionStatus) {
    case "no_subscription":
      description = "Оформи подписку, чтобы пользоваться сервисом";
      buttonText = "Оформить подписку";
      break;
    case "active":
      description = subscription?.date_billing_next
        ? `Истекает: ${new Date(
            subscription.date_billing_next,
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
      onClick={() => router.push(paymentLink)} // 🔹 Перенаправление на оплату
    />
  );
}

function ActiveInfoCard({
  title,
  description,
  buttonText,
  onClick,
}: {
  title: string;
  description: React.ReactNode;
  buttonText?: string;
  onClick?: () => void;
}) {
  return (
    <div className="relative bg-accent px-5 py-6 rounded-[16px] flex items-center justify-between w-full">
      <div>
        <h2 className="text-lg/5 font-medium tracking-wide mb-1 text-white">
          {title}
        </h2>
        <div className="text-sm font-normal text-baseGray">{description}</div>
      </div>
      {buttonText && (
        <button
          className="bg-white px-[18px] py-3 rounded-[60px] text-[#0D0E0F] text-sm font-medium hover:bg-gray-200 transition shadow-md"
          onClick={onClick}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}
