import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/components/builder"; // Assuming you created this component
import { notFound } from "next/navigation";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export async function generateStaticParams() {
  const allPages = await builder.getAll("page", {
    options: { noTraverse: true },
  });
  // .toPromise();
  console.log(allPages);

  return allPages.map((page) => ({
    page: page.data?.urlPath.split("/").filter(Boolean) || [],
  }));
}

export default async function Page({ params }: any) {
  const urlPath = `/${params.page?.join("/") || ""}`;
  const content = await builder
    .get("page", { userAttributes: { urlPath } })
    .toPromise();

  console.log(content);
  if (!content) {
    notFound(); // Show 404 for non-existent pages
  }

  return <RenderBuilderContent content={content} model="page" />;
}
