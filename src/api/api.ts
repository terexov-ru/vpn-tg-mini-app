import { apiClient } from "@/api/apiClient";

export const getUserToken = ({ initData }) =>
  apiClient
    .post("auth", {
      headers: {
        Authorization: `tma ${initData}`,
      },
    })
    .json<{ token: string }>();

export const getDevToken = ({ initData }) =>
  apiClient
    .get("asdfn23r32/token", {
      headers: {
        Authorization: `tma ${initData}`,
      },
    })
    .json<{ token: string }>();

export const getMainInfo = () =>
  apiClient.get("main").json<{
    online: boolean;
    subscription?: {
      id: number;
      prod_id: number;
      is_active: boolean;
      price_amnt: number;
      price_currency: string;
      expires_at: string;
    };
    key?: string;
    last_transaction?: {
      created_at: string;
    };
  }>();

export const getPlans = () =>
  apiClient.get("plans").json<
    {
      id: number;
      name: string;
      description: string;
      price_total: number;
      period_months: number;
      price_per_month: number;
    }[]
  >();

export const getPlanPaymentLink = ({ planId }: { planId: number | string }) =>
  apiClient.get(`${planId}/checkout`).json<{
    url: string;
  }>();

export const getPaymentInfo = () =>
  apiClient.get("transactions").json<{
    transactions: {
      created_at: string;
      amount: string;
    }[];
    card: {
      brand: string;
      last4: string;
      exp_month: number;
      exp_year: number;
    };
    billing_info: {
      name: string;
      postal_code: string;
      country: string;
      city: string;
      address: string;
      state: string;
      country_code: string;
    };
  }>();
