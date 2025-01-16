import { RenderBuilderContent } from "@/components/builder";
import { builder } from "@builder.io/sdk";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default async function ProductPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const builderModelName = "product-details";

  const { handle } = await params;

  const content = await builder
    .get(builderModelName, {
      userAttributes: {
        urlPath: '/product-details'
      }, 
      query: {
        "data.slug": handle,
      },
    })
    .toPromise();

  console.log(handle);
  console.log(content);

  return (
    <div>
      <RenderBuilderContent
        model={builderModelName}
        content={content || undefined}
      />
    </div>
  );
}
