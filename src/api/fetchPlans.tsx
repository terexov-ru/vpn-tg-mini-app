"use server";

const fixedCostIds = [
  "7dfc4894-e78c-4706-881f-870d5e7aaa8b",
  "8cc8743b-ce4e-406d-86e3-4a618f49a2af"
];

export async function fetchFixedPlans() {
  console.log("fetchFixedPlans");
  try {
    const responses = await Promise.all(
      fixedCostIds.map((id) =>
        fetch(`https://109.176.30.186:12443/apiv0/costs/${id}/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          cache: "no-store",
        }).then((res) => res.json())
      )
    );

    console.log("responses");
    console.log(responses);

    return responses;
  } catch (error) {
    console.error("❌ Ошибка загрузки тарифов:", error);
    return [];
  }
}
