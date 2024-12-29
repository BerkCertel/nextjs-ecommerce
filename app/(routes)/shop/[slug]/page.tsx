import { categories } from "@/constans";
import React from "react";

interface ShopDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ShopDetailPageProps) {
  const project = categories.find((product) =>
    product.href.includes(params.slug)
  );

  if (!project) {
    return <div>project not found</div>;
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
