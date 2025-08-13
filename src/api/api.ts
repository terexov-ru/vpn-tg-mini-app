import { apiClient } from "@/api/apiClient";

export const getUserToken = ({ initData }) =>
  apiClient.post("auth", {
    headers: {
      Authorization: `tma ${initData}`,
    },
  });
