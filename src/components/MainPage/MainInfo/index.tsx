import TrafficStats from "./TrafficStats";
import Subscription from "./Subscription";

export default function MainInfo() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <TrafficStats />
      <Subscription />
    </div>
  );
}
