"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import customToast from "@/lib/config/toast-config";

const ShopCartContext = createContext();

export const useCart = () => useContext(ShopCartContext);

export const ShopCartWrapper = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem("cartItems");
    if (localData) {
      setCartItems(JSON.parse(localData));
    }
  }, []);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems, item];
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      return updatedItems;
    });
    customToast.success("Dodato u korpu");
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== itemId);
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  const value = useMemo(
    () => ({
      cartItems,
      addToCart,
      removeFromCart,
      clearCart,
    }),
    [cartItems]
  );

  return (
    <ShopCartContext.Provider value={value}>
      {children}
    </ShopCartContext.Provider>
  );
};
