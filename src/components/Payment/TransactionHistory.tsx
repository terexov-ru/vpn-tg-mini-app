"use client";
import { fetchTransactions, Transaction } from "@/app/api/transactions";
import { useQuery } from "@tanstack/react-query";
import { div } from "framer-motion/client";
import Image from "next/image";

export function TransactionHistory() {
  const { data: transactions = [], isLoading } = useQuery<Transaction[]>({
    queryKey: ["transactions"],
    queryFn: fetchTransactions,
    staleTime: 60000,
  });

  const isEmpty = transactions.length === 0;

  return (
    <section className="mb-4 mx-4 bg-white-4 px-4 py-[18px] rounded-[20px] text-white">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl/6 font-medium">История транзакций</h2>
        <button className="text-sm/[18px] font-normal text-gray-400">
          Подробнее
        </button>
      </div>
      {isLoading || isEmpty ? (
        <div className="flex flex-col gap-[6px] justify-center items-center py-4">
          <Image src="/emptyFile.svg" width={24} height={24} alt="emptyFile" />
          <div className="text-gray-400 text-center">
            {isLoading ? "Загрузка..." : "Нет транзакций"}
          </div>
        </div>
      ) : (
        <div className="max-h-64 overflow-y-auto">
          <ul className="flex flex-col gap-[18px]">
            {transactions.slice(0, 4).map((transaction) => (
              <li key={transaction.id}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[10px]">
                    <div className="w-[42px] h-[42px] rounded-full bg-[#DFE2E6]"></div>
                    <div>
                      <div className="font-medium text-[15px]/[18px]">
                        {transaction.title}
                      </div>
                      <div className="text-baseGray font-normal text-[13px]/[18px]">
                        {transaction.date}
                      </div>
                    </div>
                  </div>
                  <div className="font-medium text-base/5">
                    {transaction.amount}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
