import Header from "@/components/header";
import { AutoPayment } from "@/components/Payment/AutoPayment";
import { IncomeExpense } from "@/components/Payment/IncomeExpense";
import { SubscriptionPlans } from "@/components/Payment/SubscriptionPlans";
import { TransactionHistory } from "@/components/Payment/TransactionHistory";

export default function Page() {
  return (
    <div>
      <Header text="Оплата" />
      <SubscriptionPlans />
      <TransactionHistory />
      <AutoPayment />
      {/*<IncomeExpense />*/}
    </div>
  );
}
