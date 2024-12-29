"use client";

import Hero from "../_components/Hero/Hero";
import ProductList from "../_components/Product/ProductList";

export default function Home() {
  return (
    <div className="container mx-auto  w-full">
      <Hero />

      <ProductList />
    </div>
  );
}
