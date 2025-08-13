export type TelegramUser = {
  id: number;
  url: string;
  uuid: string;
  tg_id: number;
  user: string;
  date_assigned: string;
  username: string;
  firstn: string;
  lastn: string | null;
  lg: string;
  referer: string | null;
  refer: string;
  ref_count: number;
  quiet: boolean;
  quiet_once: boolean;
  orders_count: number;
  total_count: number;
  credits: string[];
  is_bot: boolean;
  is_blocked: boolean;
  is_admin: boolean;
};

export type Subscription = {
  id: string;
  url: string;
  subscription: string;
  subscription_id: string;
  user: string;
  user_id: number;
  active: boolean;
  cancelled: boolean;
  date_billing_end: string | null;
  date_billing_last: string;
  date_billing_next: string;
  date_billing_start: string;
};

export type SubscriptionResponse = {
  this: string;
  subscriptions: Subscription[];
};

export type Transaction = {
  id: string;
  url: string;
  amount: string;
  date_transaction: string;
  subscription: string;
  subscription_id: string;
  user: string;
  user_id: number;
};

export type TransactionResponse = {
  this: string;
  transactions: Transaction[];
};
