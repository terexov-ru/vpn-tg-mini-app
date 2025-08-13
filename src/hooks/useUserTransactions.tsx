import { useUserStore } from "@/store/useUserStore";

export const useUserTransactions = () => {
  const { transactions } = useUserStore();
  const isLoading = transactions === null;

  return { transactions: transactions || [], isLoading };
};
