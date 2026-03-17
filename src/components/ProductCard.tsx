"use client";

type Props = {
  productData?: { name?: string; fetchedAt?: string };
};

export default function ProductCard({ productData }: Props) {
  return (
    <section style={{ padding: "2rem 1.5rem" }}>
      <h2 style={{ fontSize: "1.5rem", fontWeight: 600 }}>ProductCard</h2>
      <p style={{ marginTop: "0.5rem", color: "#4b5563" }}>
        This is a demo Product card registered with Builder.
      </p>
      {productData && (
        <p style={{ marginTop: "0.5rem", fontSize: "0.875rem", color: "#6b7280" }}>
          Product: {productData.name} (fetched at {productData.fetchedAt})
        </p>
      )}
    </section>
  );
}

