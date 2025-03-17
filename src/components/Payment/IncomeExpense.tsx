"use client";

import Image from "next/image";

export function IncomeExpense() {
  const data = [] as any[];
  const isLoading = false;

  const isEmpty = data.length === 0;

  return (
    <section className="px-4">
      <div className="bg-white-4 mb-4 pt-5 rounded-2xl w-full text-white">
        <div className="px-3 pb-3 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Бонусы</h2>
          <h2 className="text-sm text-baseGray font-normal">
            Последние 6 месяцев
          </h2>
        </div>
        {isLoading || isEmpty ? (
          <div className="flex flex-col gap-[6px] justify-center items-center py-4 text-baseGray">
            <Image
              src="/emptyFile.svg"
              width={24}
              height={24}
              alt="emptyFile"
            />
            {isLoading ? "Загрузка..." : "Нет данных"}
          </div>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-[#ebedf027]">
                <th className="py-3 px-3 text-sm font-normal text-left text-baseGray">
                  Месяц
                </th>
                <th className="py-3 px-3 text-sm font-normal text-center text-baseGray">
                  Рефералы
                </th>
                <th className="py-3 px-3 text-sm font-normal text-right text-baseGray">
                  Заработок
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className={`text-sm font-medium ${
                    index !== data.length - 1
                      ? "border-b border-[#ebedf027]"
                      : ""
                  }`}
                >
                  <td className="py-3 px-3 text-left text-baseGray">
                    {item.month}
                  </td>
                  <td className="py-3 px-3 text-center">{item.refer}</td>
                  <td className="py-3 px-3 text-right">{item.earn}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
}
