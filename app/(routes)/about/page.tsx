// app/(routes)/about/page.tsx
"use client";

import { columns, Payment } from "@/components/DataTable/columns";
import { DataTable } from "@/components/DataTable/data-table";
import React, { useEffect, useState } from "react";

function AboutPage() {
  const [data, setData] = useState<Payment[]>([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedData = await getData();
      setData(fetchedData);
    }

    fetchData();
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    author: "berkcertel",
    isPublished: true,
    tags: [
      "web development",
      "nextjs",
      "mobile development",
      "shopify development",
    ],
  };

  async function getData(): Promise<Payment[]> {
    return [
      {
        id: "148ed92f",
        product: "Product 1",
        amount: 100,
        status: "pending",
        email: "m1@example.com",
        code: "ABC123",
      },
      {
        id: "638ed56f",
        product: "Product 2",
        amount: 200,
        status: "processing",
        email: "m2@example.com",
        code: "ABC123",
      },
      {
        id: "926ed51f",
        product: "Product 3",
        amount: 300,
        status: "success",
        email: "m3@example.com",
        code: "ABC123",
      },
      {
        id: "798ed52f",
        product: "Product 4",
        amount: 300,
        status: "failed",
        email: "m4@example.com",
        code: "ABC123",
      },
    ];
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto p-10 border dark:border-slate-600 mt-5 mb-5 rounded-md shadow">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}

export default AboutPage;
