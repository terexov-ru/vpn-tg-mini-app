"use client";

import { useRouter } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getMainInfo, getPlanPaymentLink, getPlans } from "@/api/api";

export function SubscriptionPlans() {
  const { data: main } = useQuery({
    queryKey: ["main"],
    queryFn: () => getMainInfo(),
  });

  if (!main) throw new Error();

  const { data: plans, isLoading } = useQuery({
    queryKey: ["plans"],
    queryFn: () => getPlans(),
  });

  const {
    mutate,
    isPending,
    variables: currentPlanPendingId,
  } = useMutation({
    mutationKey: ["paymentLink"],
    mutationFn: (id: number) => getPlanPaymentLink({ planId: id }),
    onSuccess: (res) => {
      router.push(res.url);
    },
  });

  const router = useRouter();

  const currentPlan = main.subscription;

  const paymentButtonText = currentPlan?.is_active ? "Перейти" : "Купить";

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
                  {Math.round(plan.price_total)} ₽ {/* 🔹 Округление */}
                </span>
                <span className="text-xs font-normal text-baseGray">
                  /{plan.period_months} мес.
                </span>
              </p>
            </div>
            {!(currentPlan?.is_active && +currentPlan.prod_id === plan.id) ? (
              <button
                className="bg-accent rounded-[60px] text-xs/4 font-medium w-full py-2"
                onClick={() => mutate(plan.id)}
              >
                {isPending && currentPlanPendingId === plan.id
                  ? "Загрузка..."
                  : paymentButtonText}
              </button>
            ) : (
              <p className="flex justify-center bg-accent rounded-[60px] text-xs/4 font-medium w-full py-2">
                Выбрано
              </p>
            )}
          </div>
        ))
      )}
    </section>
  );
}
