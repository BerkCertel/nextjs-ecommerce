import { products } from "@/constans";
import React from "react";
import ProductItem from "./ProductItem";

function ProductList() {
  return (
    <div className="container mx-auto px-5 py-9">
      <h1 className="text-5xl mt-8 text-center mb-3  ">Product List</h1>
      <hr className="w-full mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
