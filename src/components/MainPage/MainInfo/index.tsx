import TrafficStats from "./TrafficStats";
import Subscription from "./Subscription";

export default function MainInfo() {
  return (
    <div className="flex flex-col gap-4 px-4 pb-4 pt-3">
      <TrafficStats />
      <Subscription />
    </div>
  );
}
