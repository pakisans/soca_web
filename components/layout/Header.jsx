import Image from "next/image";
import Link from "next/link";
import CartIcon from "../icons/CartIcon";
import SearchIcon from "../icons/SearchIcon";
import HeaderScrollProgress from "./HeaderScrollProgress";
import ResponsiveHeader from "./ResponsiveHeader";
import Search from "../global/Search";

const Header = () => {
  return (
    <header className="bg-white shadow-md px-[4rem] p-5 flex justify-between items-center sticky top-0 w-full z-[100]">
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
        </ul>
      </nav>
      <div className="flex justify-end items-center space-x-5 lg:space-x-10">
        <Search />
        <Link className="hidden lg:flex" href={"/korpa"}>
          <button className="hover:scale-125" aria-label="Korpa - Cart">
            <CartIcon width={30} height={30} color={"#1C3738"} />
          </button>
        </Link>
        <Link href="/login" passHref legacyBehavior>
          <a className="text-night text-[1.6rem] uppercase hover:text-offRed font-bold">
            Login
          </a>
        </Link>
      </div>
      <ResponsiveHeader />
    </header>
  );
};

export default Header;
