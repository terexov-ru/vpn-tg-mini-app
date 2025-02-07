import ActiveInfoCard from "@/components/ActiveInfoCard";

export default function Subscription() {
  return (
    <ActiveInfoCard
      title="Подписка"
      description={
        <>
          Истекает:{" "}
          <span className="text-white font-medium">15 марта 2025</span>
        </>
      }
      buttonText="Продлить"
    />
  );
}
