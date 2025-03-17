"use client";

import { useUserTransactions } from "@/hooks/useUserTransactions";
import Image from "next/image";

export function TransactionHistory() {
  const { transactions, isLoading } = useUserTransactions();
  const isEmpty = transactions.length === 0;

  return (
    <section className="mb-4 mx-4 bg-[#171819] px-4 py-[18px] rounded-[20px] text-white">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl/6 font-medium">История транзакций</h2>
        {/* <button className="text-sm/[18px] font-normal text-gray-400">
          Подробнее
        </button> */}
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
                        {new Date(
                          transaction.date_transaction
                        ).toLocaleDateString("ru-RU")}
                      </div>
                      <div className="text-gray-400 font-normal text-[13px]/[18px]">
                        {transaction.cancelled ? "Неупешно" : "Успешно"}
                      </div>
                    </div>
                  </div>
                  <div className="font-medium text-base/5">
                    {parseFloat(transaction.amount).toFixed(2)} ₽
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
