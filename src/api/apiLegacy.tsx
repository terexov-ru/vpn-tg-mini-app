import {
  TelegramUser,
  SubscriptionResponse,
  TransactionResponse,
} from "@/types";
import { fetchData } from "./fetchApi";

// Получение данных пользователя Telegram
export const fetchTelegramUser = (tgId: number) =>
  fetchData<TelegramUser>("fetchTelegramUser", tgId);

// Получение подписок пользователя
export const fetchSubscriptions = (tgId: number) =>
  fetchData<SubscriptionResponse>("fetchSubscriptions", tgId);

// Получение фиксированных тарифных планов
export const fetchFixedPlans = () => fetchData("fetchFixedPlans");

// Получение VPN-ключа пользователя
export const fetchCredentials = (tgId: number) =>
  fetchData<{ credentials: string[] }>("fetchCredentials", tgId);

// Получение транзакций пользователя
export const fetchTransactions = (tgId: number) =>
  fetchData<TransactionResponse>("fetchTransactions", tgId);

export const fetchPaymentLinks = (tgId: number) =>
  fetchData<{ links: string[] }>("fetchPaymentLinks", tgId);

// // Получение данных пользователя Telegram
// export const fetchTelegramUser = async (
//   tgId: number
// ): Promise<TelegramUser | null> => {
//   return fetchAPI<TelegramUser>(`/telegramusers/${tgId}/`);
// };

// // Получение подписок пользователя
// export const fetchSubscriptions = async (
//   tgId: number
// ): Promise<SubscriptionResponse | null> => {
//   return fetchAPI<SubscriptionResponse>(
//     `/telegramusers/${tgId}/get_subscriptions`
//   );
// };

// // Получение фиксированных тарифных планов
// const fixedCostIds = [
//   "7dfc4894-e78c-4706-881f-870d5e7aaa8b",
//   "8cc8743b-ce4e-406d-86e3-4a618f49a2af",
// ];

// export const fetchFixedPlans = async () => {
//   console.log("fetchFixedPlans");
//   try {
//     const responses = await Promise.all(
//       fixedCostIds.map((id) => fetchAPI(`/costs/${id}/`))
//     );

//     console.log("responses:", responses);
//     return responses as any;
//   } catch (error) {
//     console.error("❌ Ошибка загрузки тарифов:", error);
//     return [];
//   }
// };

// // Получение VPN-ключа пользователя
// export const fetchCredentials = async (tgId: number) => {
//   const data = await fetchAPI<{ credentials: any }>(
//     `/telegramusers/${tgId}/get_credentials`
//   );
//   if (!data || !data.credentials.length) {
//     console.error("Ошибка: VPN-ключ не найден");
//     return null;
//   }
//   return data;
// };

// // Получение транзакций пользователя
// export const fetchTransactions = async (
//   tgId: number
// ): Promise<TransactionResponse | null> => {
//   return fetchAPI<TransactionResponse>(
//     `/telegramusers/${tgId}/get_transactions`
//   );
// };

// export const fetchData = async (action: string, tgId?: number) => {
//     const response = await fetch(`/api/data`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ action, tgId }),
//     });

//     if (!response.ok) {
//       throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
//     }

//     return response.json();
//   };
