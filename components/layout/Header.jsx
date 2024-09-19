import Image from "next/image";
import Link from "next/link";
import CartIcon from "../icons/CartIcon";
import HeaderScrollProgress from "./HeaderScrollProgress";
import ResponsiveHeader from "./ResponsiveHeader";
import Search from "../global/Search";
import HomeIcon from "../icons/HomeIcon";
import { headerSchemaData } from "@/lib/SEO/schemaData";
import { cookies } from "next/headers";
import LogoutButton from "../buttons/LogoutButton";
import DataSocaButton from "../buttons/DataSocaButton";

const Header = () => {
  const sessionCookie = cookies().get("session");
  const usernameCookie = cookies().get("username");
  const username = usernameCookie
    ? decodeURIComponent(usernameCookie.value)
    : null;

  return (
    <>
      <script
        id="application/ld+json-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(headerSchemaData) }}
      />
      <header className="bg-white shadow-md px-[2rem] sm:px-[4rem] p-5 flex justify-between items-center sticky top-0 w-full z-[100]">
        <HeaderScrollProgress />
        <div className="flex justify-start">
          <Link href="/" passHref>
            <Image
              src="/images/logo_soca.png"
              alt="Logo"
              width={80}
              height={50}
              className="hover:scale-110 hidden sm:block xsm:hidden"
            />
            <HomeIcon width={30} height={30} styles={"sm:hidden"} />
          </Link>
        </div>
        <nav className="hidden lg:flex justify-end items-center space-x-10">
          <ul className="flex space-x-8">
            <li>
              <Link href="/proizvodi" passHref legacyBehavior>
                <a className="text-night text-[1.6rem] uppercase hover:text-offRed font-bold">
                  Prodaja
                </a>
              </Link>
            </li>
            <li className="relative group">
              <Link href="/prodajni-program" passHref legacyBehavior>
                <a className="text-night text-[1.6rem] uppercase hover:text-offRed font-bold">
                  Prodajni program
                </a>
              </Link>
              <div className="absolute left-0 dropdown-menu">
                <ul className="w-full mt-[2.1rem] bg-mintCream border border-white shadow-xl rounded-[.2rem] ">
                  <li>
                    <Link
                      href="/prodajni-program/profesionalne-masine-za-veseraj"
                      passHref
                      legacyBehavior
                    >
                      <a className="block text-night text-[1.4rem] hover:bg-gray-600 hover:font-medium hover:text-mintCream hover:transition-colors transition-all duration-200 ease-in-out px-4 py-2">
                        Profesionalne mašine za vešeraje
                      </a>
                    </Link>
                  </li>
                  <li className="relative group">
                    <Link
                      href="/prodajni-program/meiko-profesionalne-masine"
                      passHref
                      legacyBehavior
                    >
                      <a className="block text-night text-[1.4rem] hover:bg-gray-600 hover:font-medium hover:text-mintCream hover:transition-colors transition-all duration-200 ease-in-out px-4 py-2">
                        MEIKO profesionalne mašine za pranje
                      </a>
                    </Link>
                    <div className="absolute top-0 left-full w-[20rem] mt-0 bg-mintCream border border-white shadow-xl rounded-[.2rem] submenu">
                      <ul className="w-full">
                        <li className="relative group">
                          <Link
                            href="/prodajni-program/meiko-profesionalne-masine/podpultne-masine"
                            passHref
                            legacyBehavior
                          >
                            <a className="block text-night text-[1.4rem] hover:bg-gray-600 hover:font-medium hover:text-mintCream hover:transition-colors transition-all duration-200 ease-in-out px-4 py-2">
                              podpultne mašine za pranje posuđa i čaša
                            </a>
                          </Link>
                          <div className="absolute -top-[.1rem] left-full mt-0 bg-mintCream border border-white shadow-xl rounded-[.2rem] sub-submenu">
                            <ul className="w-[10rem]">
                              <li>
                                <Link
                                  href="/prodajni-program/meiko-profesionalne-masine/podpultne-masine/m-iclean-u"
                                  passHref
                                  legacyBehavior
                                >
                                  <a className="block text-night text-[1.4rem] hover:bg-gray-600 hover:font-medium hover:text-mintCream hover:transition-colors transition-all duration-200 ease-in-out px-4 py-2">
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
                                  <a className="block text-night text-[1.4rem] hover:bg-gray-600 hover:font-medium hover:text-mintCream hover:transition-colors transition-all duration-200 ease-in-out px-4 py-2">
                                    UPster U
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="relative group">
                          <Link
                            href="/prodajni-program/meiko-profesionalne-masine/masine-za-pranje-sa-haubom"
                            passHref
                            legacyBehavior
                          >
                            <a className="block text-night text-[1.4rem] hover:bg-gray-600 hover:font-medium hover:text-mintCream hover:transition-colors transition-all duration-200 ease-in-out px-4 py-2">
                              mašine za pranje sa haubom
                            </a>
                          </Link>
                          <div className="absolute top-0 left-full mt-0 bg-mintCream border border-white shadow-xl rounded-[.2rem] sub-submenu">
                            <ul className="space-y-2 w-[10rem]">
                              <li>
                                <Link
                                  href="/prodajni-program/meiko-profesionalne-masine/masine-za-pranje-sa-haubom/m-iclean-h"
                                  passHref
                                  legacyBehavior
                                >
                                  <a className="block text-night text-[1.4rem] hover:bg-gray-600 hover:font-medium hover:text-mintCream hover:transition-colors transition-all duration-200 ease-in-out px-4 py-2">
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
                                  <a className="block text-night text-[1.4rem] hover:bg-gray-600 hover:font-medium hover:text-mintCream hover:transition-colors transition-all duration-200 ease-in-out px-4 py-2 whitespace-nowrap">
                                    UPster H500
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="relative group">
                          <Link
                            href="/prodajni-program/meiko-profesionalne-masine/masine-za-pranje-crnog-posudja"
                            passHref
                            legacyBehavior
                          >
                            <a className="block text-night text-[1.4rem] hover:bg-gray-600 hover:font-medium hover:text-mintCream hover:transition-colors transition-all duration-200 ease-in-out px-4 py-2">
                              mašine za pranje crnog posuđa
                            </a>
                          </Link>
                          <div className="absolute top-0 left-full mt-0 bg-mintCream border border-white shadow-xl rounded-[.2rem] sub-submenu">
                            <ul className="space-y-2 w-[10.1rem]">
                              <li>
                                <Link
                                  href="/prodajni-program/meiko-profesionalne-masine/masine-za-pranje-crnog-posudja/dv-fv-serije"
                                  passHref
                                  legacyBehavior
                                >
                                  <a className="block text-night text-[1.4rem] hover:bg-gray-600 hover:font-medium hover:text-mintCream hover:transition-colors transition-all duration-200 ease-in-out px-4 py-2">
                                    DV/FV serije
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>

            <li className="relative group">
              <Link href="/servis" passHref legacyBehavior>
                <a className="text-night text-[1.6rem] uppercase hover:text-offRed font-bold">
                  Servis
                </a>
              </Link>
              <div className="absolute left-0 dropdown-menu">
                <ul className="w-full mt-[2.1rem] bg-mintCream border border-white shadow-xl rounded-[.2rem]">
                  <li>
                    <Link href="/servis/partnerstva" passHref legacyBehavior>
                      <a className="block text-night text-[1.4rem] hover:bg-gray-600 hover:font-medium hover:text-mintCream transition-all duration-200 ease-in-out px-4 py-2">
                        Partnerstva
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link href="/o-nama-i-kontakt" passHref legacyBehavior>
                <a className="text-night text-[1.6rem] uppercase hover:text-offRed font-bold">
                  Kontakt
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex justify-end items-center space-x-5 lg:space-x-10">
          <Search />
          <Link className="hidden lg:flex" href={"/korpa"}>
            <button className="hover:scale-125" aria-label="Korpa - Cart">
              <CartIcon width={30} height={30} color={"#1C3738"} />
            </button>
          </Link>
          {username ? (
            <div className="relative group">
              <span className="text-night text-[1.2rem] lg:text-[1.6rem] uppercase hover:text-offRed font-bold cursor-pointer hidden xl:block">
                {username}
              </span>
              <div className="flex justify-center items-center xl:hidden bg-gray-800 text-white rounded-full w-[40px] h-[40px] cursor-pointer">
                {username
                  .split(" ")
                  .map((name) => name[0].toUpperCase())
                  .join("")}
              </div>
              <div className="absolute left-0 mt-[10px] bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <DataSocaButton />
                <LogoutButton />
              </div>
            </div>
          ) : (
            <Link href="/prijava" passHref legacyBehavior>
              <a className="text-night text-[1.6rem] uppercase hover:text-offRed font-bold hidden sm:block">
                Prijava
              </a>
            </Link>
          )}
        </div>
        <ResponsiveHeader />
      </header>
    </>
  );
};

export default Header;
