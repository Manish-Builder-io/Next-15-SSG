"use client";

type Props = {
  blogHeaderData?: { title?: string; fetchedAt?: string };
};

export default function BlogHeader({ blogHeaderData }: Props) {
  return (
    <header style={{ padding: "2.5rem 1.5rem", textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: 700 }}>BlogHeader</h1>
      <p style={{ marginTop: "0.75rem", color: "#4b5563" }}>
        This is a demo Blog header registered with Builder.
      </p>
      {blogHeaderData && (
        <p style={{ marginTop: "0.5rem", fontSize: "0.875rem", color: "#6b7280" }}>
          Data fetched at: {blogHeaderData.fetchedAt}
        </p>
      )}
    </header>
  );
}

