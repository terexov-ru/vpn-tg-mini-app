"use client";

import { ReactNode, useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getMainInfo, getPaymentInfo, getPlans, getUserToken } from "@/api/api";
import { retrieveRawInitData } from "@telegram-apps/sdk";

export function AppWrapper({ children }: { children: ReactNode }) {
  const initData =
    typeof window === "undefined" ? undefined : retrieveRawInitData();

  const queryClient = useQueryClient();

  const { data: userToken } = useQuery({
    queryKey: ["userToken"],
    queryFn: () => getUserToken({ initData: initData as string }),
    enabled: !!initData,
    staleTime: Infinity,
  });

  useEffect(() => {
    if (!userToken?.token) return;
    localStorage.setItem("token", userToken.token);

    fetchMain();

    queryClient.prefetchQuery({
      queryKey: ["plans"],
      queryFn: getPlans,
    });

    queryClient.prefetchQuery({
      queryKey: ["paymentInfo"],
      queryFn: getPaymentInfo,
    });
  }, [userToken?.token]);

  const { status, refetch: fetchMain } = useQuery({
    queryKey: ["main"],
    queryFn: () => getMainInfo(),
    enabled: false,
  });

  const isLoading = status === "pending";

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
