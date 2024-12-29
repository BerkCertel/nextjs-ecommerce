"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

function Footer() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <footer className="text-sm text-center flex flex-col md:flex-row items-center justify-around bg-gray-900 text-gray-200 border-t p-5">
      <div className="mb-3 md:mb-0">
        <Button
          onClick={handleClick}
          variant={"destructive"}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md"
        >
          All Rights Reserved | Ecommerce Website 2024
        </Button>
      </div>
      <div>
        <Button
          onClick={() =>
            window.open("https://www.berkcertel.com.tr/", "_blank")
          }
          variant={"destructive"}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
        >
          © Berk Certel | Visit My Personal Website
        </Button>
      </div>
    </footer>
  );
}

export default Footer;
