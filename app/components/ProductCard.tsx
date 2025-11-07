"use client"

import Image from "next/image";
import { useState } from "react";
// Assuming this path is correct
import { ProductType } from "../utils/productTypes";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";


const ProductCard = ({ product }: { product: ProductType }) => {
  // 1. State for selected options
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colors[0]
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    product.sizes[0]
  );



  // 2. Handler for "Add to Cart"
  const handleAddToCart = () => {
    console.log("Product Added to Cart:", {
      id: product.id,
      name: product.name,
      price: product.price,
      color: selectedColor,
      size: selectedSize,
    });
    alert(
      `${product.name} (${selectedColor}, ${selectedSize}) added to cart!`
    );
    // In a real app, you would dispatch a Redux action or update global cart state here.
  };

  // 3. Currency Formatter 
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "BDT",
    minimumFractionDigits: 2,
  }).format(product.price);

  return (
    <div className="flex flex-col border justify-between border-gray-300 rounded-xl shadow-lg p-3 max-w-sm mx-auto bg-white transition-shadow hover:shadow-2xl">
      {/*  Image Display */}
      <div className="overflow-hidden h-50 rounded-lg">
        <Link href={`/products /${product.id}`}>
          <Image
            src={product.images[selectedColor]}
            alt={product.name}
            width={400}
            height={300}
            unoptimized // Avoids dynamic URL issues with the color switch
            className="rounded-lg object-cover w-full h-auto hover:scale-105 transition-all"
          /></Link>
      </div>

      {/* Name and Price */}
      <div className="mt-4">
        <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
        <p className="text-gray-400">{product.shortDescription}</p>

      </div>

      {/*  Size Selector and colore */}
      <div className="flex flex-row  justify-between gap-8 ">
        <div className=" ">
          <p className="text-center text-blue-500">Size:</p>
          <select name="size" id="size" value={selectedSize} className="px-2 py-3 border border-gray-300 rounded-md " onChange={(e) => setSelectedSize(e.target.value)}>

            {product.sizes.map((size) => (
              <option value={selectedSize} key={size} className="bg-gray-500 text-sm text-white"> {size.toUpperCase()}</option>
            ))}
          </select>
        </div>

        {/* color selector */}
        <div className="items-center">
          <p className="text-center text-indigo-700">Colors:</p>
          <div className="flex flex-wrap gap-2">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                style={{
                  backgroundColor: color ===color ?color:"transparent",
                  color: color === "black" ? "white" : "black",
                  
                }}
                className={`px-3 py-2 text-sm rounded-full border transition duration-150 
    ${selectedColor === color ? "shadow-md scale-115 border-4" : "hover:border-gray-700"}`}
              >
                {color}
              </button>

            ))}
          </div>
        </div>

      </div>








      {/* Add to Cart Button */}
      <div className="flex mt-6 justify-between">
        <p className="text-2xl font-extrabold text-indigo-600 mt-1">
          {formattedPrice}
        </p>
        <button
          onClick={handleAddToCart}
          className="  bg-green-500 text-white flex  px-3 py-2 rounded-xl  font-semibold uppercase  hover:bg-green-600 transition duration-300 shadow-lg"
        ><ShoppingCart/> Add Cart
        </button></div>
    </div>

  );
};

export default ProductCard;