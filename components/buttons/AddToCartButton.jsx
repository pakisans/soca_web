"use client";
import { useCart } from "@/context/ShopCartContext";
import { memo } from "react";

const AddToCartButton = ({ article }) => {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(article)}
      className="bg-offRed text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition duration-300 md:text-base uppercase"
    >
      Dodaj u korpu
    </button>
  );
};

export default memo(AddToCartButton);
