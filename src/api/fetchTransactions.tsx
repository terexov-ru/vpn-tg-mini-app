"use server";

import { TransactionResponse } from "@/types";

export const fetchTransactions = async (
  tgId: number
): Promise<TransactionResponse | null> => {
  try {
    const response = await fetch(
      `https://109.176.30.186:12443/apiv0/telegramusers/${tgId}/get_transactions`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(
        `Ошибка запроса: ${response.status} ${response.statusText}`
      );
    }

    const data: TransactionResponse = await response.json();
    return data;
  } catch (error) {
    console.error("🚨 Ошибка получения транзакций:", error);
    return null;
  }
};
