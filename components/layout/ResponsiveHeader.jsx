"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ResponsiveHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animateMenu, setAnimateMenu] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    if (menuOpen) {
      setAnimateMenu(true);
      setTimeout(() => {
        setMenuOpen(false);
        setAnimateMenu(false);
      }, 300);
    } else {
      setMenuOpen(true);
    }
  };

  const handleCloseMenu = () => {
    setAnimateMenu(true);
    setTimeout(() => {
      setMenuOpen(false);
      setAnimateMenu(false);
    }, 300);
  };

  return (
    <>
      <button
        className={`lg:hidden text-[3rem] hover:text-offRed transition-transform transform hover:scale-110  ${
          menuOpen ? "rotate-90" : "rotate-0"
        }`}
        onClick={toggleMenu}
        style={{ transition: "transform 0.3s ease" }}
      >
        &#9776;
      </button>
      {menuOpen && (
        <nav
          className={`absolute top-full left-0 w-full flex flex-col border-t border-t-offRed items-center lg:hidden bg-gradient-to-r from-gray-800 to-black ${
            animateMenu ? "animate-slide-up" : "animate-slide-down"
          }`}
        >
          <ul className="flex flex-col space-y-4 p-4">
            <li onClick={handleCloseMenu}>
              <Link href="/" passHref legacyBehavior>
                <a className="text-mintCream text-[1.6rem] uppercase hover:text-offRed font-bold">
                  Početna
                </a>
              </Link>
            </li>
            <li onClick={handleCloseMenu}>
              <Link href="/proizvodi" passHref legacyBehavior>
                <a className="text-mintCream text-[1.6rem] uppercase hover:text-offRed font-bold">
                  Prodaja
                </a>
              </Link>
            </li>
            <li onClick={handleCloseMenu}>
              <Link href="/prodajni-program" passHref legacyBehavior>
                <a className="text-mintCream text-[1.6rem] uppercase hover:text-offRed font-bold">
                  Prodajni program
                </a>
              </Link>
            </li>
            <li onClick={handleCloseMenu}>
              <Link href="/servis" passHref legacyBehavior>
                <a className="text-mintCream text-[1.6rem] uppercase hover:text-offRed font-bold">
                  Servis
                </a>
              </Link>
            </li>
            <li onClick={handleCloseMenu}>
              <Link href="/o-nama-i-kontakt" passHref legacyBehavior>
                <a className="text-mintCream text-[1.6rem] uppercase hover:text-offRed font-bold">
                  Kontakt
                </a>
              </Link>
            </li>
            <li onClick={handleCloseMenu}>
              <Link href="/korpa" passHref legacyBehavior>
                <div className="flex items-center gap-5 cursor-pointer">
                  <a className="text-mintCream text-[1.6rem] uppercase hover:text-offRed font-bold">
                    Korpa
                  </a>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default ResponsiveHeader;
