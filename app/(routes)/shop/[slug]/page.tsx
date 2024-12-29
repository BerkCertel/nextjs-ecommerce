import { categories } from "@/constans";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const project = categories.find((product) => product.href.includes(slug));

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The project you are looking for does not exist.",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

async function ShopDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  return (
    <div>
      <div>ShopDetailPage = {slug}</div>
    </div>
  );
}

export default ShopDetailPage;
