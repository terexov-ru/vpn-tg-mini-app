"use client";

import { useEffect } from "react";
import { useUserStore } from "@/store/useUserStore";

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const {
    fetchUserData,
    fetchTransactions,
    fetchCredentials,
    fetchPlans,
    isLoading,
    subscriptionStatus,
  } = useUserStore();

  useEffect(() => {
    fetchUserData().then(() => {
      if (subscriptionStatus === "active") {
        fetchTransactions();
        fetchCredentials();
      }
      fetchPlans();
    });
  }, [fetchUserData, fetchTransactions, subscriptionStatus]);

  return <>{isLoading ? <LoadingScreen /> : children}</>;
}

function LoadingScreen() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <p>Загрузка...</p>
    </div>
  );
}
