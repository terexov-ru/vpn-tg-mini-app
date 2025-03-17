export type IncomeExpenseType = {
  month: string;
  refer: number;
  earn: string;
};

const mockIncomeExpense = [
  { month: "Январь", refer: 20, earn: "+100.00 ₽" },
  { month: "Февраль", refer: 18, earn: "+90.00 ₽" },
  { month: "Март", refer: 24, earn: "+120.00 ₽" },
  { month: "Апрель", refer: 32, earn: "+160.00 ₽" },
  { month: "Май", refer: 12, earn: "+60.00 ₽" },
  { month: "Июнь", refer: 17, earn: "+85.00 ₽" },
];

export const fetchIncomeExpense = async (): Promise<IncomeExpenseType[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockIncomeExpense), 0);
  });
};
