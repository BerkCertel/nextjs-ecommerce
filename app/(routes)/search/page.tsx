"use client";

import { useSearchParams } from "next/navigation";

function SearchPage() {
  const searchParams = useSearchParams();

  return (
    <div>
      <div>{searchParams.get("query")}</div>
    </div>
  );
}

export default SearchPage;
