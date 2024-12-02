"use client";

import { BuilderComponent, useIsPreviewing } from "@builder.io/react";

export function RenderBuilderContent({
  content,
  model,
}: {
  content: any;
  model: string;
}) {
  const isPreviewing = useIsPreviewing();

  if (content || isPreviewing) {
    return <BuilderComponent content={content} model={model} />;
  }

  return <div>Content not found</div>;
}
