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
    <footer className="text-sm text-center flex flex-col items-center justify-center space-y-5">
      <Button onClick={handleClick} variant={"destructive"}>
        All Right Reserverd Ecommerce Website 2024
      </Button>
      <Button
        onClick={() => window.open("https://www.berkcertel.com.tr/", "_blank")}
        variant={"destructive"}
      >
        Copyright @BerkCertel Check My Personal Website
      </Button>
    </footer>
  );
}

export default Footer;
