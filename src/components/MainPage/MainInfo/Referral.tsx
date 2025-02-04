import InfoCard from "@/components/InfoCard";

export default function Referral() {
  return (
    <InfoCard
      title="Referral Bonus"
      description={
        <>
          You have invited{" "}
          <span className="text-white font-medium">5 friends</span>
          <br />
          Earned: <span className="text-green-400 font-medium">$25</span>
        </>
      }
    />
  );
}
