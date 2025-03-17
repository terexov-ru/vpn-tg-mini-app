export async function fetchData<T>(action: string, tgId?: number) {
  try {
    const response = await fetch(`/api/data`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action, tgId }),
    });

    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error(`🚨 Ошибка при вызове fetchData(${action}):`, error);
    return null;
  }
}
