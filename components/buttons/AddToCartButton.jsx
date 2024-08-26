"use client";
import { useCart } from "@/context/ShopCartContext";
import { memo } from "react";

const AddToCartButton = ({ article }) => {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(article)}
      className="bg-offRed text-white py-4 px-4 text-[1.4rem] rounded hover:bg-red-700 transition duration-300 mt-auto"
    >
      Dodaj u korpu
    </button>
  );
};

export default memo(AddToCartButton);
