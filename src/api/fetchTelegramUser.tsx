"use server";

import { TelegramUser } from "@/types";

export const fetchTelegramUser = async (tgId: number): Promise<TelegramUser | null> => {
  try {
    const response = await fetch(`https://109.176.30.186:12443/apiv0/telegramusers/${tgId}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Ошибка запроса: ${response.status} ${response.statusText}`);
    }

    const data: TelegramUser = await response.json();
    return data;
  } catch (error) {
    console.error("🚨 Ошибка получения пользователя Telegram:", error);
    return null;
  }
};
