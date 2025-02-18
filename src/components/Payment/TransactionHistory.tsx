export function TransactionHistory() {
  return (
    <section className="mb-4 mx-4 bg-[#171819] px-4 py-[18px] rounded-[20px]">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl/6 font-medium">История транзакций</h2>
        <button className="text-sm/[18px] font-normal text-gray-400">
          Подробнее
        </button>
      </div>
      <ul className="flex flex-col gap-[18px]">
        <li>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[10px]">
              <div className="w-[42px] h-[42px] rounded-full bg-[#DFE2E6]"></div>
              <div>
                <div className="font-medium text-[15px]/[18px]">
                  Ежемесячная подписка
                </div>
                <div className="text-gray-400 font-normal text-[13px]/[18px]">
                  17.04.2024
                </div>
              </div>
            </div>
            <div className="font-medium text-base/5">-$5.75</div>
          </div>
        </li>
        <li>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[10px]">
              <div className="w-[42px] h-[42px] rounded-full bg-[#DFE2E6]"></div>
              <div>
                <div className="font-medium text-[15px]/[18px]">
                  Ежемесячная подписка
                </div>
                <div className="text-gray-400 font-normal text-[13px]/[18px]">
                  17.03.2024
                </div>
              </div>
            </div>
            <div className="font-medium text-base/5">-$5.75</div>
          </div>
        </li>
        <li>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[10px]">
              <div className="w-[42px] h-[42px] rounded-full bg-[#DFE2E6]"></div>
              <div>
                <div className="font-medium text-[15px]/[18px]">
                  Ежемесячная подписка
                </div>
                <div className="text-gray-400 font-normal text-[13px]/[18px]">
                  17.02.2024
                </div>
              </div>
            </div>
            <div className="font-medium text-base/5">-$5.75</div>
          </div>
        </li>
      </ul>
    </section>
  );
}
