"use client";
import PaymentForm from "@/app/components/PaymentForm";
import ProductCart from "@/app/components/ProductCart";
import ShippingForm from "@/app/components/ShippingForm";
import { cartItems } from "@/app/utils/productTypes";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

import React, { useState } from "react";

const CartPage = () => {
  const searchParams = useSearchParams();
  const steps = [
    { id: 1, title: "Shoping Cart" },
    { id: 2, title: "Shipping Address" },
    { id: 3, title: "Payment" },
  ];


  const cartItems: cartItems = [
    {
      id: 1,
      name: "Adidas CoreFit T-Shirt",
      shortDescription: "A comfortable and lightweight classic.",
      description:
        "Experience the perfect blend of comfort and performance with the CoreFit T-Shirt. Made with breathable, moisture-wicking fabric. Ideal for workouts or everyday casual wear.",
      price: 39.99,
      sizes: ["s", "m", "l", "xl", "xxl"],
      colors: ["gray", "purple", "green"],
      images: 
 "https://picsum.photos/id/10/400/300",
     
      
      selectedColor: "gray",
      selectedSize: "s",
      quantity: 1,
    },
    {
      id: 2,
      name: "Nike Dri-FIT Running Shorts",
      shortDescription: "Stay dry and focused on your run.",
      description:
        "Lightweight running shorts featuring Nike Dri-FIT technology to move sweat away from your skin. Includes an internal key pocket and an elastic waistband with drawcord.",
      price: 49.95,
      sizes: ["xs", "s", "m", "l", "xl"],
      colors: ["black", "red", "blue"],
      images: 
     "https://picsum.photos/id/13/400/300",
    
    
      selectedColor: "red",
      selectedSize: "xs",
      quantity: 2,
    },
    {
      id: 3,
      name: "Puma Training Hoodie",
      shortDescription: "Warm and cozy for your post-workout cool down.",
      description:
        "A soft fleece training hoodie with an adjustable drawstring hood and a kangaroo pocket. Perfect for layering during colder months or for lounging.",
      price: 65.0,
      sizes: ["m", "l", "xl", "xxl"],
      colors: ["navy", "charcoal", "olive"],
      images: 
       "https://picsum.photos/id/16/400/300",
     
      
      selectedColor: "navy",
      selectedSize: "xl",
      quantity: 3,
    },
  ];
  const activeStep = parseInt(searchParams.get("steps") || "1");
  const router = useRouter();
  const [shippingForm,setShippingForm]=useState(null)
  return (
    <div className="">
      <h1 className="text-center p-4 text-2xl">Your Shoping cart Details</h1>
      <div className="flex flex-col   lg:flex-row gap-4 lg:gap-8 text-center items-center p-4   justify-center ">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`flex justify-start items-center  gap-4  ${
              step.id === activeStep
                ? "text-gray-900 font-bold "
                : " text-gray-400"
            }`}
          >
            <h3
              className={`h-6 w-6 items-center text-center rounded-full ${
                step.id === activeStep
                  ? "bg-gray-800 text-white  "
                  : "bg-gray-400 text-gray-200"
              }`}
            >
              {step.id}
            </h3>{" "}
            <div className="flex flex-col gap-2">
              <p>{step.title}</p>{" "}
              <hr
                className={`${step.id === activeStep ? " border-2 " : " "}`}
              />{" "}
            </div>
          </div>
        ))}
      </div>

      {/* step details */}

      <div className="flex flex-col w-full lg:flex-row lg:w-full lg:justify-between  gap-8 mt-20    ">
        <div className="border border-gray-100 p-4 rounded-lg w-full lg:w-4/7 shadow-lg">
        {activeStep===1? ( <div>
              <h2 className="text-2xl font-bold text-center"> Shopping Details</h2>
              {cartItems.map((item) => (
                <ProductCart item={item} key={item.id}/>
              ))}
            </div>):activeStep===2?(<ShippingForm/>):activeStep===3 && shippingForm? <PaymentForm/>:(<div>Please fill the payment form </div> ) }

           </div>



   

        {/* cart page only */}
        <div className="border w-full lg:w-3/7 p-4 rounded-lg shadow-lg">
          <h2 className="text-center text-2xl font-bold uppercase">
            {" "}
            cart Details
          </h2>
          <div className="flex flex-col justify-between">
            <p className="text-gray-500 font-semibold">Discount(10%): </p>
            <p className="font-semibold ">
              Total:${" "}
              {cartItems
                .reduce((acc, item) => acc + item.price * item.quantity, 0)
                .toFixed(2)}{" "}
            </p>{" "}
          </div>
          {activeStep === 1 && (
            <button
              className="bg-blue-400 rounded-2xl p-2 w-full text-white flex justify-center gap-4 hover:bg-blue-600 cursor-pointer mt-10"
              onClick={() => router.push("/Cart?steps=2")}
            >
              Continue <ArrowRight />
            </button>
          )}
        </div>
      </div>
    </div>

   
  );
};

export default CartPage;
