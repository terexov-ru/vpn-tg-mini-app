"use client";

import InfoCard from "@/components/InfoCard";

export default function Key() {
  return (
    <div className="px-4 w-full">
      <InfoCard
        title="VPN-ключ"
        description={'YZ-123-ABCD'}
        buttonText="Скопировать"
      />
    </div>
  );
}
