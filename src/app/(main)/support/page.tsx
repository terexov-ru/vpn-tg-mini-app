import Header from "@/components/header";
import { FAQ } from "@/components/Support/FAQ";
import { TicketSystem } from "@/components/Support/TicketSystem";

export default function SupportPage() {
  return (
    <div className="text-white">
      <Header text="Support" />
      <FAQ />
      <TicketSystem />
    </div>
  );
}
