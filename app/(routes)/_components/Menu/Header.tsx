"use client";
import { ModeToggle } from "@/components/ModeToggle";
import { Input } from "@/components/ui/input";
import { Heart, Search, UserIcon } from "lucide-react";
import { Pacifico } from "next/font/google";
import Link from "next/link";
import React, { useState } from "react";
import NavMenu from "./NavMenu";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";
import CartMenu from "./Cart";
import { useRouter } from "next/navigation";

const pacifiko = Pacifico({ subsets: ["cyrillic"], weight: "400" });

function Header() {
  const router = useRouter();

  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/search?query=${encodeURIComponent(query)}`);
      return;
    } else {
    }
  };

  return (
    <header className="  w-full bgone   shadow-md  dark:border-b dark:border-mycolor-101">
      <div className=" container mx-auto flex flex-row items-center justify-between p-5  dark:border-b dark:border-mycolor-101 space-x-3  ">
        <div>
          <Link href="/" className={`${pacifiko.className} text-3xl`}>
            Ecommerce
          </Link>
        </div>
        <div className="hidden md:flex relative md:min-w-96 lg:w-1/2">
          <Input
            onChange={(e) => setQuery(e.target.value)}
            className="w-full border-2 dark:ring-mycolor-101 dark:outline-mycolor-101 "
          />
          <Button
            onClick={handleSearch}
            variant="link"
            className="absolute right-0  bg-gray-300 dark:bg-mycolor-101 "
          >
            <Search />
          </Button>
        </div>
        <div className="flex flex-row items-center justify-center space-x-3">
          <Link href="/favorites">
            <Heart />
          </Link>

          <Link href="/cart">
            <CartMenu />
          </Link>
          <Link href="/login">
            <UserIcon />
          </Link>

          <ModeToggle />
          <MobileMenu />
        </div>
      </div>
      <NavMenu />
    </header>
  );
}

export default Header;
