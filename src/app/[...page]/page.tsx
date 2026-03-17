import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/components/builder";
import { notFound } from "next/navigation";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export async function generateStaticParams() {
  const allPages = await builder.getAll("page", {
    options: { noTraverse: true, noTargeting: true },
  });

  return allPages
    .map((page) => page.data?.url as string | undefined)
    .filter((url): url is string => !!url && url !== "/")
    .map((url) => ({
      page: url.split("/").filter(Boolean),
    }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ page?: string[] }>;
}) {
  const { page } = await params;
  const urlPath = page?.length ? `/${page.join("/")}` : "/";

  const content = await builder
    .get("page", {
      // Use `urlPath` so Builder matches by the page's URL path (e.g. `/home`)
      userAttributes: { urlPath },
      options: {
        includeUnpublished: process.env.NODE_ENV === "development",
      },
    })
    .toPromise();

  if (!content) {
    notFound();
  }

  return <RenderBuilderContent content={content} model="page" />;
}