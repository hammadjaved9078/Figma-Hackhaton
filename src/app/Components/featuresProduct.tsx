import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import React from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  isNew?: boolean;
  isSale?: boolean;
}

const FeaturesProduct = () => {
  const products: Product[] = [
    {
      id: 1,
      title: "Library Stool Chair",
      price: 20,
      image: "/01.jpg",
      isNew: true,
    },
    {
      id: 2,
      title: "Library Stool Chair",
      price: 20,
      originalPrice: 30,
      image: "/02.jpg",
      isSale: true,
    },
    {
      id: 3,
      title: "Library Stool Chair",
      price: 20,
      image: "/03.jpg",
    },
    {
      id: 4,
      title: "Library Stool Chair",
      price: 20,
      image: "/04.jpg",
    },
  ];
  return (
    <div className="container mx-auto px-4 py-20">
        <h1 className="text-3xl text-start font-semibold text-[#1C1B1F] tracking-tight  mb-8">
        {" "}
        Featured Products
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((Product) => (
          <div key={Product.id} className="group relative rounded-lg bg-white">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              {Product.isNew && (
                <Badge className="absolute left-3 top-3 bg-emerald-500 hover:bg-emerald-600">
                  New
                </Badge>
              )}
              {Product.isSale && (
                <Badge className="absolute left-3 top-3 bg-orange-500 hover:bg-orange-600">
                  Sales
                </Badge>
              )}
              <Link href={`/product/${Product.id}`}>
                <Image
                  src={Product.image}
                  alt={Product.title}
                  height={400}
                  width={400}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <h3 className="text-sm text-[#1C1B1F]">{Product.title}</h3>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-lg font-medium text-[#1C1B1F]">
                    ${Product.price}
                  </span>
                  {Product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ${Product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
              <button className="flex items-center justify-center h-[44px] w-[44px] rounded-[8px] bg-[#F0F2F3] p-2 text-[#272343] transition-colors hover:bg-[#029FAE] hover:text-white">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Add to cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>{" "}
    </div>
  );
};

export default FeaturesProduct;
