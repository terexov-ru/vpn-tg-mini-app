"use server";

export async function fetchAPI<T>(
  endpoint: string,
  method: "GET" | "POST" = "GET",
  body?: any
): Promise<T | null> {
  try {
    const url = `https://109.176.30.186:12443/apiv0${endpoint}`;
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

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(
        `Ошибка запроса: ${response.status} ${response.statusText}`
      );
    }

    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error(`🚨 Ошибка запроса к ${endpoint}:`, error);
    return null;
  }
}
