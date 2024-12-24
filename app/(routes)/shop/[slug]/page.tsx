import React from "react";

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
