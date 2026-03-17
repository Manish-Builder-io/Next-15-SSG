"use client";

type Props = {
  pricingData?: { tiers?: number; fetchedAt?: string };
};

export default function PricingTable({ pricingData }: Props) {
  return (
    <section style={{ padding: "2rem 1.5rem" }}>
      <h2 style={{ fontSize: "1.5rem", fontWeight: 600 }}>PricingTable</h2>
      <p style={{ marginTop: "0.5rem", color: "#4b5563" }}>
        This is a demo Pricing table registered with Builder.
      </p>
      {pricingData && (
        <p style={{ marginTop: "0.5rem", fontSize: "0.875rem", color: "#6b7280" }}>
          Tiers: {pricingData.tiers} (fetched at {pricingData.fetchedAt})
        </p>
      )}
    </section>
  );
}

