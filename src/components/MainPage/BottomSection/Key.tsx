"use client";

import InfoCard from "@/components/InfoCard";

export default function Key() {
  return (
    <InfoCard
      title="VPN Key"
      description={
        <p className="text-purple-400 font-medium text-lg tracking-wide">
          XYZ-123-ABCD
        </p>
      }
      buttonText="Copy"
    />
  );
}
