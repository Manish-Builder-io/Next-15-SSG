"use client";

type Props = {
  teamData?: { members?: number; fetchedAt?: string };
};

export default function TeamSection({ teamData }: Props) {
  return (
    <section style={{ padding: "2rem 1.5rem" }}>
      <h2 style={{ fontSize: "1.5rem", fontWeight: 600 }}>TeamSection</h2>
      <p style={{ marginTop: "0.5rem", color: "#4b5563" }}>
        This is a demo Team section registered with Builder.
      </p>
      {teamData && (
        <p style={{ marginTop: "0.5rem", fontSize: "0.875rem", color: "#6b7280" }}>
          Team members: {teamData.members} (fetched at {teamData.fetchedAt})
        </p>
      )}
    </section>
  );
}

