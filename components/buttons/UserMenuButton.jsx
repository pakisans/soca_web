'use client'
import { useState } from "react";
import DataSocaButton from "./DataSocaButton";
import LogoutButton from "./LogoutButton";
import Cookies from "js-cookie";
import customToast from "@/lib/config/toast-config";

const UserMenu = ({ username }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDataSocaClick = async () => {
    const token = Cookies.get("session");

    if (!token) {
      customToast.error(
        "Nema sesion tokena. Molimo vas prijavite se na sistem."
      );
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/forward?token=${token}`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      if (response.ok) {
        customToast.success("Uspešno preusmereni.");
        window.location.href = "https://www.soca.rs/public/radninalog/osnovna";
      } else {
        customToast.error("Neuspešno preusmeravanje.");
        console.error("Failed to forward:", response.statusText);
      }
    } catch (error) {
      console.log(error);
      customToast.error("Greška prilikom preusmeravanja.");
      console.error("Error forwarding to private section:", error);
    }
  };

  return (
    <div className="flex items-center gap-10">
      <div className="relative">
        {/* <div 
          className="justify-center text-center items-center hidden xl:flex bg-gray-800 text-white rounded-full w-[50px] h-[50px] cursor-pointer"
          onClick={toggleMenu}
        >
          {username
            .split(" ")
            .map((name) => name[0].toUpperCase())
            .join("")}
        </div> */}
        <div 
          className="flex justify-center text-center items-center xl:hidden bg-gray-800 ml-auto text-white rounded-full w-[42px] h-[42px] cursor-pointer"
          onClick={handleDataSocaClick}
        >
          {/* {username
            .split(" ")
            .map((name) => name[0].toUpperCase())
            .join("")} */}
            DATA SOĆA
        </div>

        {/* {isMenuOpen ? (
          <div 
            className="absolute right-0 mt-[15px] bg-white opacity-100 z-10 transition-opacity duration-300"
            onMouseLeave={() => setIsMenuOpen(false)}
          >
              <DataSocaButton />
              <LogoutButton />
          </div>
        ) : null} */}
      </div>
      <button onClick={handleDataSocaClick} className="text-[18px] hidden xl:block font-bold cursor-pointer text-night hover:text-offRed hover:scale-110">DATA SOĆA</button>
    </div>
  );
};

export default UserMenu;
