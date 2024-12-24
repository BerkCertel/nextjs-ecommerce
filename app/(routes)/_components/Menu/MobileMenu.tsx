import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { categories } from "@/constans";

function MobileMenu() {
  return (
    <div className="flex md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col mt-4 space-y-3">
            {categories.map((category) => (
              <Link key={category.title} href={category.href}>
                {category.title}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileMenu;
