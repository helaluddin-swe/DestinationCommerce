"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

import Image from "next/image";
import { ProductType } from "../utils/productTypes";

const ProductCard = ({ product }: { product: ProductType }) => {
  // Default selected options
  const [productTypes, setProductTypes] = useState({
    size: product.sizes[0],
    color: product.colors[0],
  });

  // Handle size/color changes
  const handleProductTypes = ({
    type,
    value,
  }: {
    type: "size" | "color";
    value: string;
  }) => {
    setProductTypes((prev) => ({ ...prev, [type]: value }));
  };

  // Add to Cart
  const handleAddToCart = () => {
    console.log("🛒 Product Added:", {
      id: product.id,
      name: product.name,
      price: product.price,
      color: productTypes.color,
      size: productTypes.size,
    });
    alert(
      `${product.name} (${productTypes.color}, ${productTypes.size}) added to cart!`
    );
  };

  // Currency formatter
  const formattedPrice = new Intl.NumberFormat("en-BD", {
    style: "currency",
    currency: "BDT",
    minimumFractionDigits: 2,
  }).format(product.price);
 

  return (
    <div className="flex flex-col border justify-between border-gray-300 rounded-xl shadow-lg p-3 max-w-sm mx-auto bg-white transition-shadow hover:shadow-2xl">
      {/* Product Image */}
      <div className="overflow-hidden rounded-lg">
        <Link href={`/products/${product.id}`}>
          <Image
            src={product.images[productTypes.color]}
            alt={`${product.name} - ${productTypes.color}`}
            width={400}
            height={300}
            unoptimized
            className="rounded-lg object-cover w-full h-auto hover:scale-105 transition-all duration-300"
          />
        </Link>
      </div>

      {/* Product Info */}
      <div className="mt-4">
        <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
        <p className="text-gray-500 text-sm">{product.shortDescription}</p>
      </div>

      {/* Size & Color Selectors */}
      <div className="flex flex-row justify-between gap-6 mt-4">
        {/* Size Selector */}
        <div>
          <p className="text-center text-blue-600 font-semibold mb-1">Size</p>
          <select
            name="size"
            id="size"
            value={productTypes.size}
            onChange={(e) =>
              handleProductTypes({ type: "size", value: e.target.value })
            }
            className="px-2 py-2 border border-gray-300 rounded-md"
          >
            {product.sizes.map((size) => (
              <option key={size} value={size}>
                {size.toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        {/* Color Selector */}
        <div>
          <p className="text-center text-indigo-600 font-semibold mb-1">
            Color
          </p>
          <div className="flex flex-wrap gap-2">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() =>
                  handleProductTypes({ type: "color", value: color })
                }
                className={`px-3 py-1 text-sm rounded-full border transition 
                ${
                  productTypes.color === color
                    ? "border-4 border-indigo-500 scale-110 shadow-md"
                    : "border-gray-400 hover:border-indigo-400"
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Add to Cart */}
      <div className="flex mt-6 justify-between items-center">
        <p className="text-2xl font-extrabold text-indigo-600">
          {formattedPrice}
        </p>
        <button
          onClick={handleAddToCart}
          className="bg-green-500 text-white flex items-center gap-2 px-3 py-2 rounded-xl font-semibold uppercase hover:bg-green-600 transition duration-300 shadow-lg"
        >
          <ShoppingCart size={20} /> Add Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
