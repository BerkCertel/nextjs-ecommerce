"use client";
import { ProductType } from "@/constans";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ProductModal from "./ProductModal";
import { useToast } from "@/hooks/use-toast";

interface ProductItemProps {
  product: ProductType;
}

function ProductItem({ product }: ProductItemProps) {
  const { toast } = useToast();
  const handleClick = () => {
    toast({
      title: `${product.title} Added to cart`,
      description: "Friday, February 10, 2023 at 5:57 PM",
      variant: "success",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{product.title}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={300}
          className="w-full h-56 object-cover object-center rounded-lg"
        />
        <div className="flex justify-between items-center w-full mt-5">
          <span className="text-2xl font-bold">${product.price}</span>
          <span className="line-through text-red-600">${product.price}</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <ProductModal product={product} />
        <Button onClick={handleClick} variant={"default"}>
          Add To Cart
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ProductItem;
