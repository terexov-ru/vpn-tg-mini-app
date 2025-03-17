import {
  TelegramUser,
  SubscriptionResponse,
  TransactionResponse,
} from "@/types";
import { fetchAPI } from "./fetchApi";

// Получение данных пользователя Telegram
export const fetchTelegramUser = async (
  tgId: number
): Promise<TelegramUser | null> => {
  return fetchAPI<TelegramUser>(`/telegramusers/${tgId}/`);
};

// Получение подписок пользователя
export const fetchSubscriptions = async (
  tgId: number
): Promise<SubscriptionResponse | null> => {
  return fetchAPI<SubscriptionResponse>(
    `/telegramusers/${tgId}/get_subscriptions`
  );
};

// Получение фиксированных тарифных планов
const fixedCostIds = [
  "7dfc4894-e78c-4706-881f-870d5e7aaa8b",
  "8cc8743b-ce4e-406d-86e3-4a618f49a2af",
];

export const fetchFixedPlans = async () => {
  console.log("fetchFixedPlans");
  try {
    const responses = await Promise.all(
      fixedCostIds.map((id) => fetchAPI(`/costs/${id}/`))
    );

    console.log("responses:", responses);
    return responses as any;
  } catch (error) {
    console.error("❌ Ошибка загрузки тарифов:", error);
    return [];
  }
};

// Получение VPN-ключа пользователя
export const fetchCredentials = async (tgId: number) => {
  const data = await fetchAPI<{ credentials: any }>(
    `/telegramusers/${tgId}/get_credentials`
  );
  if (!data || !data.credentials.length) {
    console.error("Ошибка: VPN-ключ не найден");
    return null;
  }
  return data;
};

// Получение транзакций пользователя
export const fetchTransactions = async (
  tgId: number
): Promise<TransactionResponse | null> => {
  return fetchAPI<TransactionResponse>(
    `/telegramusers/${tgId}/get_transactions`
  );
};
