import { div } from "framer-motion/client";

export function TicketSystem() {
  return (
    <div className="px-4 my-5">
      <h2 className="text-xl font-semibold text-white mb-4">
        Запрос в поддержку
      </h2>
      <section className="bg-white bg-opacity-[0.15] backdrop-blur-md p-4 rounded-xl text-white">
        <h2 className="text-[17px]/5 font-medium mb-3">
          Перенаправление в аккаунт Telegram
        </h2>
        <p className="text-sm font-normal">
          Легко получите доступ к вашему VPN-аккаунту в Telegram для поддержки и
          обновлений. Нажмите на ссылку, чтобы открыть Telegram и управлять всем
          без лишних усилий.
        </p>
      </section>
    </div>
  );
}
