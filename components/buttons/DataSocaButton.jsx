"use client";

import { memo, useState } from "react";
import customToast from "@/lib/config/toast-config";
import Cookies from "js-cookie";
import DataSocaIcon from "../icons/DataSocaIcon";

const DataSocaButton = () => {
  const [loading, setLoading] = useState(false);

  const handleDataSocaClick = async () => {
    setLoading(true);
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
      console.log(response);
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDataSocaClick}
      disabled={loading}
      className="flex items-center w-full text-left gap-5 px-4 text-[1.6rem] py-2 text-night hover:bg-gray-600 hover:text-mintCream transition-all duration-200 ease-in-out"
    >
      <DataSocaIcon width={25} height={25} color={"#1C3738"} />
      {loading ? "Učitavanje..." : "DATA SOCA"}
    </button>
  );
};

export default memo(DataSocaButton);
