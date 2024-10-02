"use client";
import { memo, useState } from "react";
import Link from "next/link";
import CartIcon from "../icons/CartIcon";

import { useRouter } from "next/navigation";
import ChevronDownIcon from "../icons/ChevronDownIcon";
import { handleLogout } from "@/utils/logoutUtil";

const ResponsiveHeader = ({username}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState({});
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

  const toggleSubMenu = (menu) => {
    setSubMenuOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  const handleCloseMenu = () => {
    setAnimateMenu(true);
    setTimeout(() => {
      setMenuOpen(false);
      setAnimateMenu(false);
      setSubMenuOpen({});
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
          <ul className="flex flex-col space-y-4 p-4 w-full">
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
                  Pronađi deo
                </a>
              </Link>
            </li>
            <li className="relative">
              <div className="flex justify-between items-center">
                <Link href="/prodajni-program" passHref legacyBehavior>
                  <a
                    className="text-mintCream text-[1.6rem] uppercase hover:text-offRed font-bold"
                    onClick={handleCloseMenu}
                  >
                    Prodajni program
                  </a>
                </Link>
                <button
                  className="focus:outline-none"
                  onClick={() => toggleSubMenu("prodajni-program")}
                >
                  <ChevronDownIcon
                    width={14}
                    height={8}
                    color="mintCream"
                    styles={`transition-transform transform ${
                      subMenuOpen["prodajni-program"]
                        ? "rotate-180"
                        : "rotate-0"
                    }`}
                  />
                </button>
              </div>
              {subMenuOpen["prodajni-program"] && (
                <ul className="mt-2 pl-4 space-y-2">
                  <li className="relative">
                    <div className="flex justify-between items-center">
                      <Link
                        href="/prodajni-program/profesionalne-masine-za-veseraje"
                        passHref
                        legacyBehavior
                      >
                        <a
                          className="text-mintCream text-[1.4rem] hover:text-offRed"
                          onClick={handleCloseMenu}
                        >
                          Profesionalne mašine za vešeraje
                        </a>
                      </Link>
                      <button
                        className="focus:outline-none"
                        onClick={() =>
                          toggleSubMenu("profesionalne-masine-za-veseraje")
                        }
                      >
                        <ChevronDownIcon
                          width={14}
                          height={8}
                          color="mintCream"
                          styles={`transition-transform transform ${
                            subMenuOpen["profesionalne-masine-za-veseraje"]
                              ? "rotate-180"
                              : "rotate-0"
                          }`}
                        />
                      </button>
                    </div>
                    {subMenuOpen["profesionalne-masine-za-veseraje"] && (
                      <ul className="mt-2 pl-4 space-y-2">
                        <li>
                          <Link
                            href="/prodajni-program/profesionalne-masine-za-veseraje/masina-za-pranje"
                            passHref
                            legacyBehavior
                          >
                            <a
                              className="text-mintCream text-[1.2rem] hover:text-offRed"
                              onClick={handleCloseMenu}
                            >
                              Mašina za pranje
                            </a>
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li className="relative">
                    <div className="flex justify-between items-center">
                      <Link
                        href="/prodajni-program/meiko-profesionalne-masine"
                        passHref
                        legacyBehavior
                      >
                        <a
                          className="text-mintCream text-[1.4rem] hover:text-offRed"
                          onClick={handleCloseMenu}
                        >
                          MEIKO profesionalne mašine za pranje
                        </a>
                      </Link>
                      <button
                        className="focus:outline-none"
                        onClick={() =>
                          toggleSubMenu("meiko-profesionalne-masine")
                        }
                      >
                        <ChevronDownIcon
                          width={14}
                          height={8}
                          color="mintCream"
                          styles={`transition-transform transform ${
                            subMenuOpen["meiko-profesionalne-masine"]
                              ? "rotate-180"
                              : "rotate-0"
                          }`}
                        />
                      </button>
                    </div>
                    {subMenuOpen["meiko-profesionalne-masine"] && (
                      <ul className="mt-2 pl-4 space-y-2">
                        <li className="relative">
                          <div className="flex justify-between items-center">
                            <Link
                              href="/prodajni-program/meiko-profesionalne-masine/podpultne-masine"
                              passHref
                              legacyBehavior
                            >
                              <a
                                className="text-mintCream text-[1.2rem] hover:text-offRed"
                                onClick={handleCloseMenu}
                              >
                                Podpultne mašine za pranje posuđa i čaša
                              </a>
                            </Link>
                            <button
                              className="focus:outline-none"
                              onClick={() => toggleSubMenu("podpultne-masine")}
                            >
                              <ChevronDownIcon
                                width={14}
                                height={8}
                                color="mintCream"
                                styles={`transition-transform transform ${
                                  subMenuOpen["podpultne-masine"]
                                    ? "rotate-180"
                                    : "rotate-0"
                                }`}
                              />
                            </button>
                          </div>
                          {subMenuOpen["podpultne-masine"] && (
                            <ul className="mt-2 pl-4 space-y-2">
                              <li>
                                <Link
                                  href="/prodajni-program/meiko-profesionalne-masine/podpultne-masine/m-iclean-u"
                                  passHref
                                  legacyBehavior
                                >
                                  <a
                                    className="text-mintCream text-[1.2rem] hover:text-offRed"
                                    onClick={handleCloseMenu}
                                  >
                                    M-iClean U
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/prodajni-program/meiko-profesionalne-masine/podpultne-masine/upster-u"
                                  passHref
                                  legacyBehavior
                                >
                                  <a
                                    className="text-mintCream text-[1.2rem] hover:text-offRed"
                                    onClick={handleCloseMenu}
                                  >
                                    UPster U
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          )}
                        </li>
                        <li className="relative">
                          <div className="flex justify-between items-center">
                            <Link
                              href="/prodajni-program/meiko-profesionalne-masine/masine-za-pranje-sa-haubom"
                              passHref
                              legacyBehavior
                            >
                              <a
                                className="text-mintCream text-[1.2rem] hover:text-offRed"
                                onClick={handleCloseMenu}
                              >
                                Mašine za pranje sa haubom
                              </a>
                            </Link>
                            <button
                              className="focus:outline-none"
                              onClick={() =>
                                toggleSubMenu("masine-za-pranje-sa-haubom")
                              }
                            >
                              <ChevronDownIcon
                                width={14}
                                height={8}
                                color="mintCream"
                                styles={`transition-transform transform ${
                                  subMenuOpen["masine-za-pranje-sa-haubom"]
                                    ? "rotate-180"
                                    : "rotate-0"
                                }`}
                              />
                            </button>
                          </div>
                          {subMenuOpen["masine-za-pranje-sa-haubom"] && (
                            <ul className="mt-2 pl-4 space-y-2">
                              <li>
                                <Link
                                  href="/prodajni-program/meiko-profesionalne-masine/masine-za-pranje-sa-haubom/m-iclean-h"
                                  passHref
                                  legacyBehavior
                                >
                                  <a
                                    className="text-mintCream text-[1.2rem] hover:text-offRed"
                                    onClick={handleCloseMenu}
                                  >
                                    M-iClean H
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/prodajni-program/meiko-profesionalne-masine/masine-za-pranje-sa-haubom/upster-h500"
                                  passHref
                                  legacyBehavior
                                >
                                  <a
                                    className="text-mintCream text-[1.2rem] hover:text-offRed"
                                    onClick={handleCloseMenu}
                                  >
                                    UPster H500
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          )}
                        </li>
                      </ul>
                    )}
                  </li>
                  <li className="relative">
                    <div className="flex justify-between items-center">
                      <Link
                        href="/prodajni-program/meiko-profesionalne-masine/masine-za-pranje-crnog-posudja"
                        passHref
                        legacyBehavior
                      >
                        <a
                          className="text-mintCream text-[1.4rem] hover:text-offRed"
                          onClick={handleCloseMenu}
                        >
                          Mašine za pranje crnog posuđa
                        </a>
                      </Link>
                      <button
                        className="focus:outline-none"
                        onClick={() =>
                          toggleSubMenu("masine-za-pranje-crnog-posudja")
                        }
                      >
                        <ChevronDownIcon
                          width={14}
                          height={8}
                          color="mintCream"
                          styles={`transition-transform transform ${
                            subMenuOpen["masine-za-pranje-crnog-posudja"]
                              ? "rotate-180"
                              : "rotate-0"
                          }`}
                        />
                      </button>
                    </div>
                    {subMenuOpen["masine-za-pranje-crnog-posudja"] && (
                      <ul className="mt-2 pl-4 space-y-2">
                        <li>
                          <Link
                            href="/prodajni-program/meiko-profesionalne-masine/masine-za-pranje-crnog-posudja/dv-fv-serije"
                            passHref
                            legacyBehavior
                          >
                            <a
                              className="text-mintCream text-[1.2rem] hover:text-offRed"
                              onClick={handleCloseMenu}
                            >
                              DV/FV serije
                            </a>
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>
            <li className="relative">
              <div className="flex justify-between items-center">
                <Link href="/servis" passHref legacyBehavior>
                  <a
                    className="text-mintCream text-[1.6rem] uppercase hover:text-offRed font-bold"
                    onClick={handleCloseMenu}
                  >
                    Servis
                  </a>
                </Link>
                <button
                  className="focus:outline-none"
                  onClick={() => toggleSubMenu("servis")}
                >
                  <ChevronDownIcon
                    width={14}
                    height={8}
                    color="mintCream"
                    styles={`transition-transform transform ${
                      subMenuOpen["servis"] ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
              </div>
              {subMenuOpen["servis"] && (
                <ul className="mt-2 pl-4 space-y-2">
                  <li>
                    <Link href="/servis/partnerstva" passHref legacyBehavior>
                      <a
                        className="text-mintCream text-[1.4rem] hover:text-offRed"
                        onClick={handleCloseMenu}
                      >
                        ELECTROLUX/AEG/ZANUSI PARTNERI
                      </a>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href="/o-nama-i-kontakt" passHref legacyBehavior>
                <a
                  className="text-mintCream text-[1.6rem] uppercase hover:text-offRed font-bold"
                  onClick={handleCloseMenu}
                >
                  Kontakt
                </a>
              </Link>
            </li>
            <li>
              <Link href="/korpa" passHref legacyBehavior>
                <div
                  className="flex items-center gap-5 cursor-pointer"
                  onClick={handleCloseMenu}
                >
                  <a className="text-mintCream text-[1.6rem] uppercase hover:text-offRed font-bold">
                    Korpa
                  </a>
                  <CartIcon width={30} height={30} color={"#8E1B13"} />
                </div>
              </Link>
            </li>
            {username ? (
              <li onClick={() => {handleLogout(); handleCloseMenu()}}>
                <Link href="/#" passHref legacyBehavior>
                  <a className="text-mintCream text-[1.6rem] uppercase hover:text-offRed font-bold">
                    Odjava
                  </a>
                </Link>
              </li>
            ) : (
              <li onClick={handleCloseMenu}>
                <Link href="/prijava" passHref legacyBehavior>
                  <a className="text-mintCream text-[1.6rem] uppercase hover:text-offRed font-bold">
                    Prijava
                  </a>
                </Link>
              </li>
            )}
          </ul>
        </nav>
      )}
    </>
  );
};

export default memo(ResponsiveHeader);
