import { div } from "framer-motion/client";

export function TicketSystem() {
  return (
    <div className="px-4 my-5">
      <h2 className="text-xl font-semibold text-white mb-4">
        Запрос в поддержку
      </h2>
      <section className="bg-white-4 p-4 rounded-xl text-white">
        <p className="text-sm font-normal text-baseGray">
          Напишите в чат поддержки, если не нашли ответ на интересующий вас вопрос
        </p>
      </section>
    </div>
  );
}
