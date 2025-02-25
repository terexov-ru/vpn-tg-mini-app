"use client";

import { fetchTransactions } from "@/app/api/transactions";
import {
  QueryClient,
  QueryClientProvider,
  useQueryClient,
} from "@tanstack/react-query";
import { useState, useEffect } from "react";

const fetchUserProfile = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Карина", email: "karina@example.com" });
    }, 1500);
  });
};

const fetchSubscriptionPlans = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Basic", price: "$5.99/month" },
        { id: 2, name: "Pro", price: "$9.99/month" },
      ]);
    }, 1800);
  });
};

function PrefetchData() {
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: ["transactions"],
      queryFn: fetchTransactions,
      staleTime: 60000,
    });
    queryClient.prefetchQuery({
      queryKey: ["userProfile"],
      queryFn: fetchUserProfile,
      staleTime: 60000,
    });
    queryClient.prefetchQuery({
      queryKey: ["subscriptionPlans"],
      queryFn: fetchSubscriptionPlans,
      staleTime: 60000,
    });
  }, [queryClient]);

  return null;
}

export function QueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <PrefetchData />
      {children}
    </QueryClientProvider>
  );
}
