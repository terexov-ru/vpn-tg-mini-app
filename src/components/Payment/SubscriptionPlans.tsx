"use client";

import { useUserStore } from "@/store/useUserStore";
import { useRouter } from "next/navigation";
import Image from "next/image";

const planFeatures: Record<string, string[]> = {
  "7dfc4894-e78c-4706-881f-870d5e7aaa8b": [
    "Безлимитный доступ",
    "Поддержка 24/7",
    "Защита данных",
  ],
  "8cc8743b-ce4e-406d-86e3-4a618f49a2af": [
    "Все функции базового плана",
    "Приоритетное обслуживание",
    "Дополнительные бонусы",
  ],
};

// Функция перевода периода подписки
const translatePeriod = (unit: string) => {
  const translations: Record<string, string> = {
    "per month": "/месяц",
    "per year": "/год",
    "per week": "/неделю",
    "per day": "/день",
  };
  return translations[unit] || unit;
};

export function SubscriptionPlans() {
  const { plans, isLoading } = useUserStore();
  const router = useRouter();
  let paymentLink = "https://yoomoney.ru/checkout/payments/v2/contract?orderId=2fc12cfb-000f-5001-8000-1a888f1ccb5d"; 

  return (
    <section className="mx-4 mb-5 overflow-x-auto flex gap-[10px] no-scrollbar text-white">
      {isLoading ? (
        <p className="text-gray-400">Загрузка...</p>
      ) : (
        plans?.map((plan, i) => (
          <div
            key={plan.id}
            className="bg-white-4 p-4 pb-[14px] rounded-2xl min-w-[180px] flex-grow flex-[1_0_0%] flex flex-col justify-between"
          >
            <div>
              <h3 className="text-sm/4 font-medium text-white mb-3">
                {`Тариф ${i + 1}`}
              </h3>
              <p className="mb-5">
                <span className="text-[22px]/[26px] font-medium text-white ">
                  {Math.round(parseFloat(plan.cost))} ₽ {/* 🔹 Округление */}
                </span>
                <span className="text-xs font-normal text-baseGray">
                  {translatePeriod(plan.recurrence_unit)}
                </span>
              </p>
              {planFeatures[plan.id] && (
                <ul className="mb-4 flex flex-col gap-2 w-full">
                  {planFeatures[plan.id].map((feature, i) => (
                    <li key={i} className="flex items-center gap-[6px]">
                      <div className="w-4 h-4 flex items-center justify-center shrink-0 border-[0.5px] border-accent rounded-full">
                        <Image
                          src="/check-mark.svg"
                          alt="check-mark"
                          width={8}
                          height={8}
                          loading="eager" 
                          unoptimized={false} 
                        />
                      </div>
                      <span className="text-xs font-normal text-baseGray overflow-hidden truncate">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button className="bg-accent rounded-[60px] text-xs/4 font-medium w-full py-2" onClick={() => router.push(paymentLink)}>
              Купить
            </button>
          </div>
        ))
      )}
    </section>
  );
}
