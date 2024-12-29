"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";

export type Payment = {
  id: string;
  product: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
  code: string;
};

const StatusCell = ({ status }: { status: Payment["status"] }) => {
  const statusColors = {
    pending: "bg-yellow-200 dark:text-black",
    processing: "bg-blue-200 dark:text-black",
    success: "bg-green-200 dark:text-black",
    failed: "bg-red-200 dark:text-black",
  };

  return (
    <span className={`px-2 py-1 rounded ${statusColors[status]}`}>
      {status}
    </span>
  );
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <StatusCell status={row.original.status} />,
  },
  {
    accessorKey: "product",
    header: "Product Title",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "code",
    header: "Code",
    cell: ({ row }) => (
      <Button onClick={() => console.log(row.original.amount)}>Code</Button>
    ),
  },
];
