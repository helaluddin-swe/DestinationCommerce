import { Trash } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProductCart = ({ item }) => {
  return (
    <div
      key={item.id}
      className="flex gap-4 bg-gray-200 m-5 p-4 rounded-2xl justify-around items-center"
    >
      <div className="h-20 w-20 rounded-2xl">
        <Image
          src={item.images}
          alt={item.name}
          className="h-24 w-24 rounded-2xl"
          width={40}
          height={40}
          unoptimized
        />
      </div>

      <div>
        <h3 className="text-2xl">{item.name}</h3>
        <p className="font-semibold">Price:$ {item.price}</p>
        <p className="font-semibold">Quantity: {item.quantity}</p>
        <p>
          {item.selectedColor} and size:{item.selectedSize}
        </p>
      </div>
      <div className="cursor-pointer text-red-600"> <Trash/></div>
    </div>
  );
};

export default ProductCart;
