"use client";

type Props = {
  heroData?: { title?: string; fetchedAt?: string };
};

export default function HeroSection({ heroData }: Props) {
  return (
    <section style={{ padding: "3rem 1.5rem", textAlign: "center" }}>
      <h2 style={{ fontSize: "2.25rem", fontWeight: 700 }}>HeroSection</h2>
      <p style={{ marginTop: "0.75rem", color: "#4b5563" }}>
        This is a demo Hero section registered with Builder.
      </p>
      {heroData && (
        <p style={{ marginTop: "0.5rem", fontSize: "0.875rem", color: "#6b7280" }}>
          Data fetched at: {heroData.fetchedAt}
        </p>
      )}
    </section>
  );
}

