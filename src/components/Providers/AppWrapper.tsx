"use client";

import { useEffect, useState } from "react";
import { useUserStore } from "@/store/useUserStore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  const {
    fetchUserData,
    fetchTransactions,
    fetchCredentials,
    isLoading,
    subscriptionStatus,
  } = useUserStore();

  useEffect(() => {
    fetchUserData(queryClient).then(() => {
      if (subscriptionStatus === "active") {
        fetchTransactions(queryClient)
        fetchCredentials(queryClient); // 🔹 Загружаем транзакции только если подписка активна
      }
    });
  }, [fetchUserData, fetchTransactions, subscriptionStatus, queryClient]);

  return (
    <QueryClientProvider client={queryClient}>
      {isLoading ? <LoadingScreen /> : children}
    </QueryClientProvider>
  );
}

// 🔹 Экран загрузки
function LoadingScreen() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <p>Загрузка...</p>
    </div>
  );
}
