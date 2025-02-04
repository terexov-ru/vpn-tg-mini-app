import InfoCard from "@/components/InfoCard";

export default function Subscription() {
  return (
    <InfoCard
      title="Subscription"
      description={
        <>
          Expires on:{" "}
          <span className="text-white font-medium">March 15, 2025</span>
        </>
      }
      buttonText="Renew"
    />
  );
}
