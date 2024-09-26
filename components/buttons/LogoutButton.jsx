"use client";

import { handleLogout } from "@/utils/logoutUtil";
import LogoutIcon from "../icons/LogoutIcon";
import { memo } from "react";

const LogoutButton = () => {
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
