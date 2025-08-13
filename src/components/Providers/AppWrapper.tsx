"use client";

import { useEffect } from "react";
import { useUserStore } from "@/store/useUserStore";

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const {
    fetchUserData,
    fetchTransactions,
    fetchCredentials,
    fetchPlans,
    fetchPaymentLinks,
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
      fetchPaymentLinks();
    });
  }, [fetchUserData, fetchTransactions, subscriptionStatus]);

  return <>{isLoading ? <LoadingScreen /> : children}</>;
}

function LoadingScreen() {
  const gradient = "bg-gradient-to-b from-[#291b4c] via-[#0D0E0F] to-[#0D0E0F]";

  return (
    <div
      className={`flex items-center justify-center h-screen text-white ${gradient}`}
    >
      <p>Загрузка...</p>
    </div>
  );
}
