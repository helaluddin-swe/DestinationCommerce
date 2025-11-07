"use client"
import Image from "next/image";
import FeatureImg from "./images/ecommerce.png";
import productsData from "./utils/feaureData";
import ProductCard from "./components/ProductCard";
import { useState, useEffect } from "react";
import { ProductType } from "./utils/productTypes";
import Category from "./components/Category";

function HomePage() {
  const [products, setProducts] = useState<ProductType[]>([]);

  // If using static data, no fetch needed
  useEffect(() => {
    const fetchData= ()=>{ 
     setProducts(productsData);
    }
     fetchData()
  }, []);

  return (
    <div className="p-4">
      {/* Feature Image */}
      <div className="mb-12 relative w-full h-80 md:h-96 xl:h-[400px]">
        <Image src={FeatureImg} alt="Feature images" fill className="object-cover rounded-lg" />
      </div>

     <div className="mt-4 mb-4 "><Category/></div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
