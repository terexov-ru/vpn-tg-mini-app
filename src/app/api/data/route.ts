"use server";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

import { NextResponse } from "next/server";

import {
  TelegramUser,
  SubscriptionResponse,
  TransactionResponse
} from "@/types";

async function fetchAPI<T>(
  endpoint: string,
  method: "GET" | "POST" = "GET",
  body?: any,
  baseUrl: string = "109.176.30.186:12443/apiv0",
): Promise<T | null> {
  try {
    const url = `https://${baseUrl}${endpoint}`;
    const options: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    const response = await globalThis.fetch(url, options);

    if (!response.ok) {
      throw new Error(
        `Ошибка запроса: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error(`🚨 Ошибка запроса к ${endpoint}:`, error);
    return null;
  }
}

const fixedCostIds = [
  "7dfc4894-e78c-4706-881f-870d5e7aaa8b",
  "8cc8743b-ce4e-406d-86e3-4a618f49a2af",
];

export async function POST(req: Request) {
  try {
    const { action, tgId } = await req.json();

    if (!action) {
      return NextResponse.json(
        { error: "Action is required" },
        { status: 400 }
      );
    }

    let data = null;

    switch (action) {
      case "fetchTelegramUser":
        if (!tgId)
          return NextResponse.json(
            { error: "tgId is required" },
            { status: 400 }
          );
        data = await fetchAPI<TelegramUser>(`/telegramusers/${tgId}/`);
        break;

      case "fetchSubscriptions":
        if (!tgId)
          return NextResponse.json(
            { error: "tgId is required" },
            { status: 400 }
          );
        data = await fetchAPI<SubscriptionResponse>(
          `/telegramusers/${tgId}/get_subscriptions`
        );
        break;

      case "fetchFixedPlans":
        data = await Promise.all(
          fixedCostIds.map((id) => fetchAPI(`/costs/${id}/`))
        );
        break;

      case "fetchCredentials":
        if (!tgId)
          return NextResponse.json(
            { error: "tgId is required" },
            { status: 400 }
          );
        const credentialsData = await fetchAPI<{ credentials: string[] }>(
          `/telegramusers/${tgId}/get_credentials`
        );
        if (!credentialsData || !credentialsData.credentials.length) {
          return NextResponse.json(
            { error: "VPN-ключ не найден" },
            { status: 404 }
          );
        }
        data = credentialsData;
        break;

      case "fetchTransactions":
        if (!tgId)
          return NextResponse.json(
            { error: "tgId is required" },
            { status: 400 }
          );
        data = await fetchAPI<TransactionResponse>(
          `/telegramusers/${tgId}/get_transactions`
        );
        break;
	
      case "fetchPaymentLink":
        if (!tgId)
          return NextResponse.json(
            { error: "tgId is required" },
            { status: 400 }
          );
        data = await fetchAPI<{ links: string[]}>(
          `/telegramusers/${tgId}/get_link`
        );
        break;

      default:
        return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    }


    return NextResponse.json(data);
  } catch (error) {
    console.error("🚨 Ошибка обработки запроса:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
