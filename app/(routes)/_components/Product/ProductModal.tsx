"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ProductType } from "@/constans";
import { Minus, Plus } from "lucide-react";

interface ProductModalProps {
  product: ProductType;
}

function ProductModal({ product }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"destructive"}>Detail</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle className="text-center mb-4 text-2xl uppercase border-b border-black dark:border-mycolor-500">
            {product.title}
          </DialogTitle>
        </DialogHeader>
        <div className="w-full">
          <div className="grid  grid-cols-1 md:grid-cols-2 gap-x-3">
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={300}
              className="w-full h-96 object-cover object-center rounded-lg"
            />
            <div className="p-5 space-y-2">
              <p className="text-xs font-thin">{product.description}</p>
              <hr />
              <div className="flex flex-col justify-center items-start w-full space-y-2">
                <span className="line-through text-red-600">
                  OldPrice: ${product.price}
                </span>
                <span className="text-2xl font-bold">
                  Current Price:${product.price}
                </span>
              </div>
              <div className="flex flex-row mt-3 justify-start items-center  space-x-4">
                <Button
                  onClick={handleDecrement}
                  variant={"destructive"}
                  size={"icon"}
                >
                  <Minus />
                </Button>
                <p>{quantity}</p>
                <Button
                  onClick={handleIncrement}
                  variant={"destructive"}
                  size={"icon"}
                >
                  <Plus />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Add To Cart</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ProductModal;
