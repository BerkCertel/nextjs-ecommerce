export const categories: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Men's Clothing",
    href: "/shop/mens-clothing",
    description:
      "A wide collection of men's clothing, from suits to casual wear.",
  },
  {
    title: "Women's Clothing",
    href: "/shop/womens-clothing",
    description:
      "A broad range of options for women, from elegant dresses to comfortable everyday outfits.",
  },
  {
    title: "Kids' Clothing",
    href: "/shop/kids-clothing",
    description:
      "Fun and comfortable clothing for kids, perfect for school or playtime.",
  },
  {
    title: "Accessories",
    href: "/shop/accessories",
    description: "Complete your style with bags, hats, jewelry, and more.",
  },
  {
    title: "Sportswear",
    href: "/shop/sportswear",
    description:
      "Clothing options that provide comfort and style while working out.",
  },
  {
    title: "Shoes",
    href: "/shop/shoes",
    description:
      "A variety of shoes for men, women, and kids, offering both comfort and style.",
  },
];

export interface sssType {
  id: string;
  title: string;
  description: string;
}

export const sssList: sssType[] = [
  {
    id: "İtem-1",
    title: "Title 1 sss",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odio temporibus, veritatis ipsa recusandae maiores!",
  },
  {
    id: "İtem-2",
    title: "Title 2 sss",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odio temporibus, veritatis ipsa recusandae maiores!",
  },
  {
    id: "İtem-3",
    title: "Title 3 sss",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odio temporibus, veritatis ipsa recusandae maiores!",
  },
  {
    id: "İtem-4",
    title: "Title 4 sss",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odio temporibus, veritatis ipsa recusandae maiores!",
  },
];

export interface CarouselType {
  id: number;
  image: string;
}

export const carouselList: CarouselType[] = [
  { id: 1, image: "/images/slider/5.jpg" },
  { id: 2, image: "/images/slider/6.jpg" },
  { id: 3, image: "/images/slider/7.jpg" },
];

export interface ProductType {
  id: number;
  title: string;
  price: number;
  mrp: number;
  description: string;
  image: string;
}

export const products: ProductType[] = [
  {
    id: 1,
    title: "Product One",
    price: 150,
    mrp: 170,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odio temporibus, veritatis ipsa recusandae maiores!",
    image: "/images/products/1.jpg",
  },
  {
    id: 2,
    title: "Product Two",
    price: 130,
    mrp: 180,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odio temporibus, veritatis ipsa recusandae maiores!",
    image: "/images/products/2.jpg",
  },
  {
    id: 3,
    title: "Product Three",
    price: 180,
    mrp: 200,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odio temporibus, veritatis ipsa recusandae maiores!",
    image: "/images/products/3.jpg",
  },
  {
    id: 4,
    title: "Product Four",
    price: 100,
    mrp: 160,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odio temporibus, veritatis ipsa recusandae maiores!",
    image: "/images/products/4.jpg",
  },
  {
    id: 5,
    title: "Product Five",
    price: 210,
    mrp: 110,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odio temporibus, veritatis ipsa recusandae maiores!",
    image: "/images/products/5.jpg",
  },
  {
    id: 6,
    title: "Product Six",
    price: 175,
    mrp: 170,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odio temporibus, veritatis ipsa recusandae maiores!",
    image: "/images/products/6.jpg",
  },
  {
    id: 7,
    title: "Product Seven",
    price: 120,
    mrp: 140,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odio temporibus, veritatis ipsa recusandae maiores!",
    image: "/images/products/7.jpg",
  },
  {
    id: 8,
    title: "Product Eight",
    price: 160,
    mrp: 140,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odio temporibus, veritatis ipsa recusandae maiores!",
    image: "/images/products/8.jpg",
  },
  {
    id: 9,
    title: "Product Nine",
    price: 130,
    mrp: 140,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odio temporibus, veritatis ipsa recusandae maiores!",
    image: "/images/products/9.jpg",
  },
  {
    id: 10,
    title: "Product Ten",
    price: 190,
    mrp: 170,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odio temporibus, veritatis ipsa recusandae maiores!",
    image: "/images/products/10.jpg",
  },

  {
    id: 11,
    title: "Product Eleven",
    price: 180,
    mrp: 130,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odio temporibus, veritatis ipsa recusandae maiores!",
    image: "/images/products/11.jpg",
  },
  {
    id: 12,
    title: "Product  Twelve",
    price: 170,
    mrp: 190,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odio temporibus, veritatis ipsa recusandae maiores!",
    image: "/images/products/12.jpg",
  },
];
