// import earthImage from "";

import Image from "next/image";

const plans = [
  {
    title: "Базовый",
    price: "$0",
    period: "/месяц",
    features: ["Приоритетная поддержка Приоритетная поддержка", "Условия оплаты", "Политика возврата"],
  },
  {
    title: "Премиум",
    price: "$4.99",
    period: "/месяц",
    features: ["Включенные функции", "Условия оплаты", "Политика возврата"],
  },
  {
    title: "Про",
    price: "$9.99",
    period: "/месяц",
    features: [
      "Все премиум функции",
      "Приоритетная поддержка",
      "Дополнительные бонусы",
    ],
  },
];

export function SubscriptionPlans() {
  return (
    <section className="ml-4 overflow-x-auto whitespace-nowrap flex gap-[10px] no-scrollbar">
      {plans.map((plan, index) => (
        <div
          key={index}
          className="min-w-[180px] bg-gray-800 p-4 pb-[14px] rounded-2xl"
        >
          <h3 className="text-sm/4 font-medium text-white mb-3">
            {plan.title}
          </h3>
          <p className="mb-5">
            <span className="text-[22px]/[26px] font-medium text-white pr-[2px]">
              {plan.price}
            </span>
            <span className="text-xs font-normal text-gray-400">
              {plan.period}
            </span>
          </p>
          <ul className="mb-4 flex flex-col gap-2">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-[6px]">
                <div className="w-4 h-4 flex items-center justify-center circle rounded-full shrink-0 border-accent border-[1px]">
                  <Image
                    src="/check-mark.svg"
                    alt="check-mark"
                    width={8}
                    height={8}
                  />
                </div>
                <span className="text-xs font-normal text-gray-400">{feature}</span>
              </li>
            ))}
          </ul>
          <button className="bg-accent rounded-[60px] text-xs/4 font-medium w-full py-2">
            Купить
          </button>
        </div>
      ))}
    </section>
  );
}
