"use client";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "../icons/CartIcon";
import SearchIcon from "../icons/SearchIcon";
import { useScrollProgress } from "@/components/hooks/useScrollProgress";
import { useState } from "react";

const Header = () => {
  const scrollProgress = useScrollProgress();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white shadow-md px-[4rem] p-5 flex justify-between items-center sticky top-0 w-full z-10">
      <div
        className="rounded-[1rem]"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: `${scrollProgress * 100}%`,
          height: "4px",
          background: `linear-gradient(to right, rgba(142, 27, 19, 0.8), rgba(142, 27, 19, 0.5))`,
          boxShadow: "0 2px 8px rgba(142, 27, 19, 0.5)",
          transition: "width 0.3s ease-out, opacity 0.3s ease",
        }}
      />
      <div className="flex justify-start">
        <Link href="/" passHref>
          <Image
            src="/images/logo_soca.png"
            alt="Logo"
            width={80}
            height={50}
            className="hover:scale-110 hidden sm:block xsm:hidden"
          />
        </Link>
      </div>
      <nav className="hidden md:flex justify-end items-center space-x-10">
        <ul className="flex space-x-8">
          <li>
            <Link href="/proizvodi" passHref legacyBehavior>
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
            <Link href="/kontakt" passHref legacyBehavior>
              <a className="text-night text-[1.6rem] uppercase hover:text-offRed font-bold">
                Kontakt
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex justify-end items-center space-x-5 md:space-x-10">
        <form className="flex space-x-2">
          <input
            type="search"
            placeholder="Pretraži..."
            className="border-b p-2 md:p-4 text-[1.4rem] placeholder:text-[1.4rem] outline-0"
            aria-label="Pretraga proizvoda"
          />
          <button type="submit" className="py-2 px-4 rounded">
            <SearchIcon width={20} height={20} color={"#1C3738"} />
          </button>
        </form>
        <button className="hover:scale-125" aria-label="Korpa - Cart">
          <CartIcon width={30} height={30} color={"#1C3738"} />
        </button>
        <Link href="/login" passHref legacyBehavior>
          <a className="text-night text-[1.6rem] uppercase hover:text-offRed font-bold">
            Login
          </a>
        </Link>
        <button
          className="md:hidden text-2xl hover:text-offRed transition-transform transform hover:scale-110"
          onClick={toggleMenu}
        >
          &#9776;
        </button>
      </div>
      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center md:hidden animate-slide-down">
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
              <Link href="/kontakt" passHref legacyBehavior>
                <a className="text-night text-[1.6rem] uppercase hover:text-offRed font-bold">
                  Kontakt
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
