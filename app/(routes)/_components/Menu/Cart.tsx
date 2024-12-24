import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { ShoppingBagIcon } from "lucide-react";

function CartMenu() {
  return (
    <div className="flex justify-center items-center">
      <Sheet>
        <SheetTrigger>
          <ShoppingBagIcon size={24} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>SHOPPING CART</SheetTitle>
            <hr />
            <SheetDescription className="text-xs">
              Don`t miss out! Complete your purchase before the items sell out.
            </SheetDescription>
          </SheetHeader>

          <h2 className="text-lg font-bold"></h2>

          <div className="flex flex-col mt-4 space-y-3">
            <p className="text-center text-gray-500">Empty Cart</p>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default CartMenu;
