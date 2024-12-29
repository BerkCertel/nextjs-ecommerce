"use client";

import { useSearchParams } from "next/navigation";

function SearchPage() {
  const searchParams = useSearchParams();

  const search = searchParams.get("query");

  return (
    <div>
      <div>{search}</div>
    </div>
  );
}

export default SearchPage;
