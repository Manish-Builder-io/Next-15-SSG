"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "@/components/Counter/Counter";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import BlogHeader from "@/components/BlogHeader";
import RelatedPosts from "@/components/RelatedPosts";
import PricingTable from "@/components/PricingTable";
import TeamSection from "@/components/TeamSection";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

function isComponentInContent(content: any, name: string): boolean {
  const blocks = content?.data?.blocks ?? content?.blocks;
  return Array.isArray(blocks)
    ? blocks.some((b: any) => b?.component?.name === name)
    : false;
}

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(HeroSection, {
  name: "HeroSection",
  inputs: [],
  // Cast to any to allow getAsyncProps, which is not in the default typings.
  getAsyncProps: (async ({ content }: { content: any }) => {
    console.log("[HeroSection] getAsyncProps called");
    const inPage = isComponentInContent(content, "HeroSection");
    if (!inPage) {
      console.log("[HeroSection] not in content, skipping");
      return {};
    }

    console.log("[HeroSection] simulating fetch (180ms)");
    await new Promise((r) => setTimeout(r, 180));
    console.log("[HeroSection] fetch complete");

    return {
      heroData: {
        title: "Hero for page",
        fetchedAt: new Date().toISOString(),
      },
    };
  }) as any,
} as any);

Builder.registerComponent(ProductCard, {
  name: "ProductCard",
  inputs: [],
  getAsyncProps: (async ({ content }: { content: any }) => {
    console.log("[ProductCard] getAsyncProps called");
    const inPage = isComponentInContent(content, "ProductCard");
    if (!inPage) {
      console.log("[ProductCard] not in content, skipping");
      return {};
    }

    console.log("[ProductCard] simulating fetch (220ms)");
    await new Promise((r) => setTimeout(r, 220));
    console.log("[ProductCard] fetch complete");

    return {
      productData: {
        name: "Demo product",
        fetchedAt: new Date().toISOString(),
      },
    };
  }) as any,
} as any);

Builder.registerComponent(BlogHeader, {
  name: "BlogHeader",
  inputs: [],
  getAsyncProps: (async ({ content }: { content: any }) => {
    console.log("[BlogHeader] getAsyncProps called");
    const inPage = isComponentInContent(content, "BlogHeader");
    if (!inPage) {
      console.log("[BlogHeader] not in content, skipping");
      return {};
    }

    console.log("[BlogHeader] simulating fetch (90ms)");
    await new Promise((r) => setTimeout(r, 90));
    console.log("[BlogHeader] fetch complete");

    return {
      blogHeaderData: {
        title: "Demo blog",
        fetchedAt: new Date().toISOString(),
      },
    };
  }) as any,
} as any);

Builder.registerComponent(RelatedPosts, {
  name: "RelatedPosts",
  inputs: [],
  getAsyncProps: (async ({ content }: { content: any }) => {
    console.log("[RelatedPosts] getAsyncProps called");
    const inPage = isComponentInContent(content, "RelatedPosts");
    if (!inPage) {
      console.log("[RelatedPosts] not in content, skipping");
      return {};
    }

    console.log("[RelatedPosts] simulating fetch (310ms)");
    await new Promise((r) => setTimeout(r, 310));
    console.log("[RelatedPosts] fetch complete");

    return {
      relatedPostsData: {
        count: 3,
        fetchedAt: new Date().toISOString(),
      },
    };
  }) as any,
} as any);

// Never used components in the demo — they should not appear in logs
// if they are not actually placed on the page.
Builder.registerComponent(PricingTable, {
  name: "PricingTable",
  inputs: [],
  getAsyncProps: (async ({ content }: { content: any }) => {
    console.log("[PricingTable] getAsyncProps called");
    const inPage = isComponentInContent(content, "PricingTable");
    if (!inPage) {
      console.log("[PricingTable] not in content, skipping");
      return {};
    }

    console.log("[PricingTable] simulating fetch (400ms)");
    await new Promise((r) => setTimeout(r, 400));
    console.log("[PricingTable] fetch complete");

    return {
      pricingData: {
        tiers: 3,
        fetchedAt: new Date().toISOString(),
      },
    };
  }) as any,
} as any);

Builder.registerComponent(TeamSection, {
  name: "TeamSection",
  inputs: [],
  getAsyncProps: (async ({ content }: { content: any }) => {
    console.log("[TeamSection] getAsyncProps called");
    const inPage = isComponentInContent(content, "TeamSection");
    if (!inPage) {
      console.log("[TeamSection] not in content, skipping");
      return {};
    }

    console.log("[TeamSection] simulating fetch (250ms)");
    await new Promise((r) => setTimeout(r, 250));
    console.log("[TeamSection] fetch complete");

    return {
      teamData: {
        members: 4,
        fetchedAt: new Date().toISOString(),
      },
    };
  }) as any,
} as any);
