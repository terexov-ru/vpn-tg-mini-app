const data = [
  { month: "Январь", refer: 20, earn: "+100.00 ₽" },
  { month: "Февраль", refer: 18, earn: "+90.00 ₽" },
  { month: "Март", refer: 24, earn: "+120.00 ₽" },
  { month: "Апрель", refer: 32, earn: "+160.00 ₽" },
  { month: "Май", refer: 12, earn: "+60.00 ₽" },
  { month: "Июнь", refer: 17, earn: "+85.00 ₽" },
];

export function IncomeExpense() {
  return (
    <section className="px-4">
      <div className="bg-[#171819] mb-4 pt-5 rounded-2xl w-full">
        <div className="px-3 pb-3 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Бонусы</h2>
          <h2 className="text-sm text-gray-400 font-normal">
            Последние 6 месяцев
          </h2>
        </div>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-[#ebedf027]">
              <th className="py-3 px-3 text-sm font-normal text-left">Месяц</th>
              <th className="py-3 px-3 text-sm font-normal text-center">
                Рефералы
              </th>
              <th className="py-3 px-3 text-sm font-normal text-right">Заработок</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className={`text-sm font-medium ${
                  index !== data.length - 1 ? "border-b border-[#ebedf027]" : ""
                }`}
              >
                <td className="py-3 px-3 text-left">{item.month}</td>
                <td className="py-3 px-3 text-center">{item.refer}</td>
                <td className="py-3 px-3 text-right">{item.earn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
