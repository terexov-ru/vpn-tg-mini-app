export type Transaction = {
  id: number;
  title: string;
  date: string;
  amount: string;
};

const array = [
  {
    id: 1,
    title: "Ежемесячная подписка",
    date: "17.04.2024",
    amount: "-$5.75",
  },
  {
    id: 2,
    title: "Ежемесячная подписка",
    date: "17.03.2024",
    amount: "-$5.75",
  },
  {
    id: 3,
    title: "Ежемесячная подписка",
    date: "17.02.2024",
    amount: "-$5.75",
  },
  {
    id: 4,
    title: "Ежемесячная подписка",
    date: "17.01.2024",
    amount: "-$5.75",
  },
  {
    id: 5,
    title: "Ежемесячная подписка",
    date: "17.12.2023",
    amount: "-$5.75",
  },
];

export const fetchTransactions = async (): Promise<Transaction[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(array);
    }, 0);
  });
};
