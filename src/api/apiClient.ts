import ky from "ky";

let token =
  typeof window === "undefined" ? null : localStorage.getItem("token");

setInterval(() => {
  token = localStorage.getItem("token");
}, 300);

export const apiClient = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
