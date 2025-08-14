import ky from "ky";

export const apiClient = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_URL,
  hooks: {
    beforeRequest: [
      (request) => {
        if (request.headers.has("Authorization")) return request;

        request.headers.set(
          "Authorization",
          `Bearer ${localStorage.getItem("token")}`,
        );

        return request;
      },
    ],
  },
});
