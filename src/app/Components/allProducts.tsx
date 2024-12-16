import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
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

const ProductCard = ({ product }: { product: Product }) => (
  <div key={product.id} className="group relative rounded-lg bg-white">
    <div className="relative aspect-square overflow-hidden rounded-lg">
      {product.isNew && (
        <Badge className="absolute left-3 top-3 bg-emerald-500 hover:bg-emerald-600">
          New
        </Badge>
      )}
      {product.isSale && (
        <Badge className="absolute left-3 top-3 bg-orange-500 hover:bg-orange-600">
          Sale
        </Badge>
      )}
      <Link href={`/product/${product.id}`}>
        <Image
          src={product.image}
          alt={product.title}
          height={400}
          width={400}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          aria-label={`View details of ${product.title}`}
        />
      </Link>
    </div>
    <div className="mt-4 flex items-center justify-between">
      <div>
        <h3 className="text-sm text-[#1C1B1F]">{product.title}</h3>
        <div className="mt-1 flex items-center gap-2">
          <span className="text-lg font-medium text-[#1C1B1F]">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
      </div>
      <Link href={"/cart"}>
        <button
          className="flex items-center justify-center h-[44px] w-[44px] rounded-[8px] bg-[#F0F2F3] p-2 text-[#272343] transition-colors hover:bg-[#029FAE] hover:text-white"
          aria-label={`Add ${product.title} to cart`}
        >
          <ShoppingCart className="h-5 w-5 " />
        </button>
      </Link>
    </div>
  </div>
);

export default function AllProduct() {
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
    { id: 3, title: "Library Stool Chair", price: 20, image: "/03.jpg" },
    { id: 4, title: "Library Stool Chair", price: 20, image: "/04.jpg" },
    {
      id: 5,
      title: "Library Stool Chair",
      price: 20,
      image: "/topCate02.png",
      isNew: true,
    },
    {
      id: 6,
      title: "Library Stool Chair",
      price: 20,
      originalPrice: 30,
      image: "/06.jpg",
      isSale: true,
    },
    { id: 7, title: "Library Stool Chair", price: 20, image: "/07.jpg" },
    { id: 8, title: "Library Stool Chair", price: 20, image: "/01.jpg" },
    {
      id: 9,
      title: "Library Stool Chair",
      price: 20,
      image: "/topCate01.png",
      isNew: true,
    },
    {
      id: 10,
      title: "Library Stool Chair",
      price: 20,
      originalPrice: 30,
      image: "/02.jpg",
      isSale: true,
    },
    { id: 11, title: "Library Stool Chair", price: 20, image: "/13.jpg" },
    {
      id: 12,
      title: "Library Stool Chair",
      price: 20,
      image: "/topCate03.png",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl text-center font-semibold text-[#1C1B1F] tracking-tight mb-8">
        All Products
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
