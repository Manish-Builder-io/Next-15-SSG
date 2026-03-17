"use client";

type Props = {
  relatedPostsData?: { count?: number; fetchedAt?: string };
};

export default function RelatedPosts({ relatedPostsData }: Props) {
  return (
    <section style={{ padding: "2rem 1.5rem" }}>
      <h2 style={{ fontSize: "1.5rem", fontWeight: 600 }}>RelatedPosts</h2>
      <p style={{ marginTop: "0.5rem", color: "#4b5563" }}>
        This is a demo Related posts section registered with Builder.
      </p>
      {relatedPostsData && (
        <p style={{ marginTop: "0.5rem", fontSize: "0.875rem", color: "#6b7280" }}>
          Showing {relatedPostsData.count} related posts (fetched at{" "}
          {relatedPostsData.fetchedAt})
        </p>
      )}
    </section>
  );
}

