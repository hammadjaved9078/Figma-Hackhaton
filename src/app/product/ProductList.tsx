import Link from "next/link";
import Image from "next/image";

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
    image: "/05.jpg",
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
    image: "/08.jpg",
  },
  {
    id: 9,
    title: "Library Stool Chair",
    price: 10,
    image: "/09.jpg",
    isNew: true,
  },
  {
    id: 10,
    title: "Library Stool Chair",
    price: 150,
    image: "/10.jpg",
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

export default function ProductList() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Product List</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <Link href={`/product/${product.id}`}>
              <a>
                <Image
                  src={product.image}
                  alt={product.title}
                  width={300}
                  height={300}
                  className="rounded-lg"
                />
                <h3 className="text-lg font-semibold mt-4">{product.title}</h3>
                <div className="flex items-center space-x-2 mt-2">
                  <p className="text-green-600 text-lg font-bold">
                    ${product.price}
                  </p>
                  {product.originalPrice && (
                    <p className="text-gray-500 line-through text-sm">
                      ${product.originalPrice}
                    </p>
                  )}
                </div>
                {product.isSale && (
                  <span className="inline-block bg-red-500 text-white px-2 py-1 text-xs rounded mt-2">
                    On Sale
                  </span>
                )}
                {product.isNew && (
                  <span className="inline-block bg-blue-500 text-white px-2 py-1 text-xs rounded mt-2 ml-2">
                    New Arrival
                  </span>
                )}
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
