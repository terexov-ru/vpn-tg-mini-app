import { create } from "zustand";

import { TelegramUser } from "@/types";
import { fetchCredentials, fetchFixedPlans, fetchSubscriptions, fetchTelegramUser, fetchTransactions, fetchPaymentLinks } from "@/api/api";

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

type Cost = {
  id: string;
  cost: string;
  recurrence_period: number;
  recurrence_unit: string;
};

type SubscriptionStatus = "no_subscription" | "active" | "expired";

type UserState = {
  user: TelegramUser | null;
  tgId: number | null;
  isLoading: boolean;
  subscription: Subscription | null;
  subscriptionStatus: SubscriptionStatus;
  credentials: Credential[] | null;
  transactions: any[] | null;
  plans: Cost[] | null;
  paymentLinks: string[] | null;
  setTgId: (id: number) => void;
  fetchUserData: () => Promise<void>;
  fetchTransactions: () => Promise<void>;
  fetchCredentials: () => Promise<void>;
  fetchPlans: () => Promise<void>;
  fetchPaymentLinks: () => Promise<void>;
};

export const useUserStore = create<UserState>((set, get) => ({
  user: null,
  tgId: null,
  isLoading: true,
  subscription: null,
  subscriptionStatus: "no_subscription",
  credentials: null,
  transactions: null,
  plans: null,
  paymentLinks: null,

  setTgId: (id) => set({ tgId: id }),

  fetchUserData: async () => {
    set({ isLoading: true });

    try {
      const tgId = 264692551; // TODO: заменить на Telegram API
      set({ tgId });

      const user = await fetchTelegramUser(tgId);
      if (!user) throw new Error("Пользователь не найден");
      set({ user });

      const subscriptionData = await fetchSubscriptions(tgId);
      const subscription = subscriptionData?.subscriptions?.[0] || null;

      let subscriptionStatus: SubscriptionStatus = "no_subscription";
      if (subscription) {
        subscriptionStatus = subscription.active ? "active" : "expired";
      }

      set({ subscription, subscriptionStatus, isLoading: false });

    } catch (error) {
      console.error("❌ Ошибка загрузки данных:", error);
      set({ isLoading: false, subscriptionStatus: "no_subscription" });
    }
  },

  fetchTransactions: async () => {
    const { tgId, subscriptionStatus } = get();
    if (!tgId || subscriptionStatus !== "active") return;

    try {
      const transactions = await fetchTransactions(tgId);
      set({ transactions: transactions?.transactions || [] });
    } catch (error) {
      console.error("❌ Ошибка загрузки транзакций:", error);
    }
  },

  fetchCredentials: async () => {
    const { tgId, subscriptionStatus } = get();
    if (!tgId || subscriptionStatus !== "active") return;

    try {
      const credentialsData = await fetchCredentials(tgId);
      set({ credentials: credentialsData?.credentials || [] });
    } catch (error) {
      console.error("❌ Ошибка загрузки VPN-ключа:", error);
    }
  },

  fetchPlans: async () => {
    try {
      console.log("check 1");
      const plansData = await fetchFixedPlans();
      console.log("check 2");

      set({ plans: plansData });
    } catch (error) {
      console.error("❌ Ошибка загрузки тарифов:", error);
    }
  },

  fetchPaymentLinks: async () => {
    const { tgId } = get();
    if (!tgId) return;

    try {
      const paymentLinks = await fetchPaymentLinks(tgId);
      set({ paymentLinks: paymentLinks }); //?.credentials || []
    } catch (error) {
      console.error("❌ Ошибка загрузки ключей оплаты:", error);
    }
  },
}));
