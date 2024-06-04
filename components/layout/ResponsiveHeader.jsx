"use client";

import { useState } from "react";
import Link from "next/link";
import CartIcon from "../icons/CartIcon";

const ResponsiveHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animateMenu, setAnimateMenu] = useState(false);

  const toggleMenu = () => {
    if (menuOpen) {
      setAnimateMenu(true);
      setTimeout(() => {
        setMenuOpen(false);
        setAnimateMenu(false);
      }, 300); // Duration of the closing animation
    } else {
      setMenuOpen(true);
    }
  };

  return (
    <>
      <button
        className={`lg:hidden text-[3rem] hover:text-offRed transition-transform transform hover:scale-110 ${
          menuOpen ? "rotate-90" : "rotate-0"
        }`}
        onClick={toggleMenu}
        style={{ transition: "transform 0.3s ease" }}
      >
        &#9776;
      </button>
      {menuOpen && (
        <nav
          className={`absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center lg:hidden ${
            animateMenu ? "animate-slide-up" : "animate-slide-down"
          }`}
        >
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link href="/prodaja" passHref legacyBehavior>
                <a className="text-night text-[1.6rem] uppercase hover:text-offRed font-bold">
                  Prodaja
                </a>
              </Link>
            </li>
            <li>
              <Link href="/prodajni-program" passHref legacyBehavior>
                <a className="text-night text-[1.6rem] uppercase hover:text-offRed font-bold">
                  Prodajni program
                </a>
              </Link>
            </li>
            <li>
              <Link href="/servis" passHref legacyBehavior>
                <a className="text-night text-[1.6rem] uppercase hover:text-offRed font-bold">
                  Servis
                </a>
              </Link>
            </li>
            <li>
              <Link href="/o-nama-i-kontakt" passHref legacyBehavior>
                <a className="text-night text-[1.6rem] uppercase hover:text-offRed font-bold">
                  Kontakt
                </a>
              </Link>
            </li>
            <li>
              <Link href="/korpa" passHref legacyBehavior>
                <div className="flex items-center gap-5 cursor-pointer">
                  <button className="hover:scale-125" aria-label="Korpa - Cart">
                    <CartIcon width={20} height={20} color={"#1C3738"} />
                  </button>
                  <a className="text-night text-[1.6rem] uppercase hover:text-offRed font-bold">
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
