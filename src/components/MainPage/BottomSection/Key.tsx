"use client";

import InfoCard from "@/components/InfoCard";

export default function Key() {
  return (
    <InfoCard
      title="VPN-ключ"
      description={
        <p className="text-purple-400">
          XYZ-123-ABCD
        </p>
      }
      buttonText="Скопировать"
    />
  );
}
