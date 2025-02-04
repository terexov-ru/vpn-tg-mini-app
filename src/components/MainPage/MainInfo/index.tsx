import TrafficStats from "./TrafficStats";
import Subscription from "./Subscription";
import Referral from "./Referral";

export default function MainInfo() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <TrafficStats />
      <Subscription />
      <Referral />
    </div>
  );
}
