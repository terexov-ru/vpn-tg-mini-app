"use server";

export const fetchCredentials = async (telegramId: number) => {
  try {
    const response = await fetch(
      `https://109.176.30.186:12443/apiv0/telegramusers/${telegramId}/get_credentials`
    );
    const data = await response.json();

    if (!data.credentials.length) {
      throw new Error("VPN-ключ не найден");
    }

    return data;
  } catch (error) {
    console.error("Ошибка получения VPN-ключа:", error);
    return null;
  }
};
