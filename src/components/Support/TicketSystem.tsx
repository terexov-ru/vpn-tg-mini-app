"use client";

import { postEvent } from "@telegram-apps/sdk";

export function TicketSystem() {
  const goToSupport = () => {
    postEvent("web_app_open_link", {
      url: process.env.NEXT_PUBLIC_SUPPORT_URL as string,
    });
  };

  return (
    <div className="px-4 my-5">
      <h2 className="text-xl font-semibold text-white mb-4">
        Запрос в поддержку
      </h2>
      <section className="bg-white-4 p-4 rounded-xl text-white">
        <p className="text-sm font-normal text-baseGray">
          Напишите в чат поддержки, если не нашли ответ на интересующий вас
          вопрос
        </p>

        <button
          className="bg-accent rounded-[60px] text-sm font-medium mt-4 py-4 w-full"
          onClick={goToSupport}
        >
          Перейти в чат поддержки
        </button>
      </section>
    </div>
  );
}
