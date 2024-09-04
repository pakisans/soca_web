"use client";

import customToast from "@/lib/config/toast-config";
import Cookies from "js-cookie";
import LogoutIcon from "../icons/LogoutIcon";
import { memo } from "react";

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/logout`
      );

      if (response.ok) {
        Cookies.remove("session", { path: "/", secure: true });
        Cookies.remove("username", { path: "/", secure: true });

        customToast.success("Uspešno ste se odjavili. Vidimo se uskoro!");

        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        console.error("Failed to log out:", response.statusText);
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full flex items-center gap-5 text-left text-night text-[1.6rem] hover:bg-gray-600 hover:text-mintCream transition-all duration-200 ease-in-out px-4 py-2"
    >
      <LogoutIcon width={25} height={25} color={"#1C3738"} />
      Odjava
    </button>
  );
};

export default memo(LogoutButton);
