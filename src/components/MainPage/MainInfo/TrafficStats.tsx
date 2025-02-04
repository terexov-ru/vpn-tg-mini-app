import { Download, Upload, Signal } from "lucide-react";

const stats = [
  { icon: Download, value: "16.7 Mb/s", label: "Download" },
  { icon: Upload, value: "24.2 Mb/s", label: "Upload" },
  { icon: Signal, value: "16 ms", label: "Ping" },
];

function StatCard({
  Icon,
  value,
  label,
}: {
  Icon: any;
  value: string;
  label: string;
}) {
  return (
    <div className="relative bg-white/5 backdrop-blur-lg p-4 rounded-2xl flex flex-col items-start justify-end text-white shadow-md w-full h-28">
      <div className="absolute top-2 right-2 bg-white/10 p-2 rounded-full">
        <Icon className="w-4 h-4 text-gray-400" />
      </div>
      <div>
        <span className="text-base/5 tracking-wide block font-normal">{value}</span>
        <span className="text-sm text-gray-400">{label}</span>
      </div>
    </div>
  );
}

export default function TrafficStats() {
  return (
    <div className="grid grid-cols-3 gap-4 mt-6 w-full">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          Icon={stat.icon}
          value={stat.value}
          label={stat.label}
        />
      ))}
    </div>
  );
}
