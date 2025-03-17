import { create } from "zustand";
import { fetchTelegramUser } from "@/api/fetchTelegramUser";
import { fetchSubscriptions } from "@/api/fetchSubscription";
import { fetchTransactions } from "@/api/fetchTransactions";
import { fetchCredentials } from "@/api/fetchCredentials"; // 🔹 Добавляем API для VPN-ключа
import { QueryClient } from "@tanstack/react-query";

type Subscription = {
  id: string;
  active: boolean;
  date_billing_next: string | null;
};

type Credential = {
  id: number;
  uri: string;
  is_active: boolean;
};

type SubscriptionStatus = "no_subscription" | "active" | "expired";

type UserState = {
  tgId: number | null;
  isLoading: boolean;
  subscription: Subscription | null;
  subscriptionStatus: SubscriptionStatus;
  credentials: Credential[] | null;
  transactions: any[] | null;
  setTgId: (id: number) => void;
  fetchUserData: (queryClient: QueryClient) => Promise<void>;
  fetchTransactions: (queryClient: QueryClient) => Promise<void>;
  fetchCredentials: (queryClient: QueryClient) => Promise<void>;
};

export const useUserStore = create<UserState>((set, get) => ({
  tgId: null,
  isLoading: true,
  subscription: null,
  subscriptionStatus: "no_subscription",
  credentials: null,
  transactions: null,

  setTgId: (id) => set({ tgId: id }),

  fetchUserData: async (queryClient) => {
    set({ isLoading: true });

    try {
      const tgId = 37257522; // TODO: заменить на Telegram API
      set({ tgId });

      const user = await fetchTelegramUser(tgId);
      if (!user) throw new Error("Пользователь не найден");

      // 🔹 Загружаем подписку
      const subscriptionData = await fetchSubscriptions(tgId);
      const subscription = subscriptionData?.subscriptions?.[0] || null;

      let subscriptionStatus: SubscriptionStatus = "no_subscription";
      if (subscription) {
        subscriptionStatus = subscription.active ? "active" : "expired";
      }

      set({ subscription, subscriptionStatus, isLoading: false });

      queryClient.setQueryData(["telegramUser", tgId], user);
      queryClient.setQueryData(["subscriptions", tgId], subscriptionData);
    } catch (error) {
      console.error("❌ Ошибка загрузки данных:", error);
      set({ isLoading: false, subscriptionStatus: "no_subscription" });
    }
  },

  fetchTransactions: async (queryClient) => {
    const { tgId, subscriptionStatus } = get();
    if (!tgId || subscriptionStatus !== "active") return;

    try {
      const transactions = await fetchTransactions(tgId);
      set({ transactions: transactions?.transactions || [] });

      queryClient.setQueryData(["transactions", tgId], transactions);
    } catch (error) {
      console.error("❌ Ошибка загрузки транзакций:", error);
    }
  },

  fetchCredentials: async (queryClient) => {
    const { tgId, subscriptionStatus } = get();
    if (!tgId || subscriptionStatus !== "active") return;

    try {
      const credentialsData = await fetchCredentials(tgId);
      set({ credentials: credentialsData?.credentials || [] });

      queryClient.setQueryData(["credentials", tgId], credentialsData);
    } catch (error) {
      console.error("❌ Ошибка загрузки VPN-ключа:", error);
    }
  },
}));
