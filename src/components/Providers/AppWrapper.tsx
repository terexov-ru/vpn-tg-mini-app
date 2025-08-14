"use client";

import { ReactNode, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getDevToken, getMainInfo, getUserToken } from "@/api/api";
import { retrieveRawInitData } from "@telegram-apps/sdk";

export function AppWrapper({ children }: { children: ReactNode }) {
  const initData =
    typeof window === "undefined" ? undefined : retrieveRawInitData();

  const { data: userToken } = useQuery({
    queryKey: ["userToken"],
    queryFn: () => getDevToken({ initData }),
    enabled: !!initData,
    staleTime: Infinity,
  });

  useEffect(() => {
    if (!userToken?.token) return;
    localStorage.setItem("token", userToken.token);
  }, [userToken?.token]);

  const { status } = useQuery({
    queryKey: ["main"],
    queryFn: () => getMainInfo(),
    enabled: !!userToken?.token,
    retry: (failureCount) => failureCount < 1,
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
