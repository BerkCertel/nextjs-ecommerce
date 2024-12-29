"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { carouselList } from "@/constans";
import Image from "next/image";

function Hero() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {carouselList.map((slider) => (
          <CarouselItem key={slider.id}>
            <Image
              src={slider.image}
              alt={`slider-${slider.id}`}
              width={1920}
              height={1080}
              className="w-full h-96 object-cover md:h-[450px] lg:h-[520px]"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0 z-50  p-5" />
      <CarouselNext className="right-0 z-50 p-5" />
    </Carousel>
  );
}

export default Hero;
