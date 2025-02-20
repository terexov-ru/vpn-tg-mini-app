import Image from "next/image";

const plans = [
  {
    title: "Базовый",
    price: "$0",
    period: "/месяц",
    features: ["Приоритетная поддержка, просто супер", "Политика возврата"],
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
    <section className="mx-4 mb-5 overflow-x-auto flex gap-[10px] no-scrollbar text-white">
      {plans.map((plan, index) => (
        <div
          key={index}
          className="bg-white/5 backdrop-blur-md p-4 pb-[14px] rounded-2xl min-w-[180px] flex-grow flex-[1_0_0%] flex flex-col justify-between"
        >
          <div>
            <h3 className="text-sm/4 font-medium text-white mb-3">
              {plan.title}
            </h3>
            <p className="mb-5">
              <span className="text-[22px]/[26px] font-medium text-white pr-[2px]">
                {plan.price}
              </span>
              <span className="text-xs font-normal text-gray-200">
                {plan.period}
              </span>
            </p>
            <ul className="mb-4 flex flex-col gap-2 w-full">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-[6px]">
                  <div className="w-4 h-4 flex items-center justify-center shrink-0 border-[0.5px] border-accent rounded-full">
                    <Image
                      src="/check-mark.svg"
                      alt="check-mark"
                      width={8}
                      height={8}
                    />
                  </div>

                  <span className="text-xs font-normal text-gray-200 overflow-hidden truncate">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <button className="bg-accent rounded-[60px] text-xs/4 font-medium w-full py-2">
            Купить
          </button>
        </div>
      ))}
    </section>
  );
}
