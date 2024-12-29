import { columns } from "@/components/DataTable/columns";
import { DataTable, Payment } from "@/components/DataTable/data-table";
import React from "react";

async function AboutPage() {
  const data = await getData();

  async function getData(): Promise<Payment[]> {
    return [
      {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "m@example.com",
      },
    ];
  }

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default AboutPage;
