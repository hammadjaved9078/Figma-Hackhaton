"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { PiShoppingCartThin } from "react-icons/pi";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  originalPrice?: number;
  isNew?: boolean;
  isSale?: boolean;
};

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
    price: 40,
    image: "/02.jpg",
    originalPrice: 60,
    isSale: true,
  },
  { id: 3, title: "Library Stool Chair", price: 50, image: "/03.jpg" },
  { id: 4, title: "Library Stool Chair", price: 35, image: "/04.jpg" },
  {
    id: 5,
    title: "Library Stool Chair",
    price: 60,
    image: "/topCate02.png",
    isNew: true,
  },
  {
    id: 6,
    title: "Library Stool Chair",
    price: 25,
    image: "/06.jpg",
    isSale: true,
  },
  { id: 7, title: "Library Stool Chair", price: 30, image: "/07.jpg" },
  {
    id: 8,
    title: "Library Stool Chair",
    price: 15,
    image: "/01.jpg",
  },
  {
    id: 9,
    title: "Library Stool Chair",
    price: 10,
    image: "/topCate01.png",
    isNew: true,
  },
  {
    id: 10,
    title: "Library Stool Chair",
    price: 150,
    image: "/02.jpg",
    isSale: true,
    originalPrice: 200,
  },
  { id: 11, title: "Library Stool Chair", price: 20, image: "/13.jpg" },
  {
    id: 12,
    title: "Library Stool Chair",
    price: 20,
    image: "/topCate03.png",
  },
];

export default function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [productId, setProductId] = useState<string | null>(null);
  const [product, setProduct] = useState<Product | null>(null);
  console.log(productId);
  useEffect(() => {
    const unwrapParams = async () => {
      try {
        const resolvedParams = await params;
        setProductId(resolvedParams.id);

        const foundProduct = products.find(
          (item) => item.id === Number(resolvedParams.id)
        );
        setProduct(foundProduct || null);
      } catch (error) {
        console.error("Error fetching product:", error);
        setProductId(null);
      }
    };

    unwrapParams();
  }, [params]);

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-700 text-xl font-medium">Product not found</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="flex flex-col md:flex-row max-w-4xl w-full">
          {/* Image Section */}
          <div className="w-full md:w-1/2 p-4 flex justify-center">
            <Image
              src={product.image}
              alt={product.title}
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>

          {/* Product Details Section */}
          <div className="w-full md:w-1/2 p-4 mt-4 md:mt-1 md:ml-14">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center md:text-left">
              {product.title}
            </h1>
            <button className="mt-4 mb-4 bg-[#029FAE] text-white font-semibold py-2 px-4 rounded-[100px] md:w-auto">
              ${product.price}.00 USD
            </button>
            {product.originalPrice && (
              <p className="text-sm text-gray-500 line-through mt-2 text-center md:text-left">
                Original Price: ${product.originalPrice}
              </p>
            )}

            <div className="w-full md:w-[375px] h-[1px] bg-[#D9D9D9] mt-4 mx-auto md:mx-0"></div>

            <p className="text-[#272343] opacity-60 mt-4 text-[15px] sm:text-[17px] md:text-[19px] lg:text-[17px] text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
              adipiscing
            </p>

            <button className="flex flex-row justify-center items-center gap-[9px] mt-4 bg-[#029FAE] text-white font-semibold py-2 px-4 rounded-[8px] w-full md:w-auto">
              <PiShoppingCartThin className="w-[30px] h-[25px]" />
              Add To Cart
            </button>

            {product.isNew && (
              <span className="text-sm text-green-600 font-medium mt-2 block text-center md:text-left">
                <Badge className="bg-emerald-500 text-white mt-2.5 text-1xl">
                  New Arrival
                </Badge>
              </span>
            )}
            {product.isSale && (
              <span className="text-sm text-orange-600 font-medium mt-2 block text-center md:text-left">
                <Badge className="bg-orange-500 text-white mt-2.5 text-1xl">
                  On Sale!
                </Badge>
              </span>
            )}
          </div>
        </div>
      </div>
      {/* ---------Feature Products------ */}
      <div className="max-w-7xl mx-auto px-4 py-6 space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* -- Featured Products -- */}
          <h1 className="text-2xl sm:text-3xl font-semibold text-[#1C1B1F] tracking-tight mb-4 sm:mb-0">
            Featured Products
          </h1>

          {/* -- View All with Underline -- */}
          <div className="flex flex-col items-end sm:items-center">
            <h1 className="text-base sm:text-lg font-semibold text-[#1C1B1F] tracking-tight mb-1 sm:mb-2">
              <Link href={"/product"}> View All </Link>
            </h1>
            <div className="w-12 sm:w-16 border-b-2 border-[#000000]"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pb-24">
          <div className="aspect-square relative overflow-hidden rounded-lg ">
            <Image
              src="/07.jpg"
              alt="Feature Product 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/01.jpg"
              alt="Feature Product 2"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/topCate03.png"
              alt="Feature Product 3"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/03.jpg"
              alt="Feature Product 4"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/05.png"
              alt="Feature Product 5"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
