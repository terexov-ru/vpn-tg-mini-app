"use server";

import { SubscriptionResponse } from "@/types";

export const fetchSubscriptions = async (tgId: number): Promise<SubscriptionResponse | null> => {
  try {
    const response = await fetch(`https://109.176.30.186:12443/apiv0/telegramusers/${tgId}/get_subscriptions`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Ошибка запроса: ${response.status} ${response.statusText}`);
    }

    const data: SubscriptionResponse = await response.json();
    return data;
  } catch (error) {
    console.error("🚨 Ошибка получения подписок:", error);
    return null;
  }
};
