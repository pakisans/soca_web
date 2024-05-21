import Image from "next/image";
import Link from "next/link";
import SearchIcon from "../icons/SearchIcon";

const Partners = () => {
  return (
    <section
      id="partners"
      className="py-[4rem] px-[15rem] border-t border-t-night border-b border-b-night mt-[4rem]"
    >
      <h1 className="text-[4.2rem] text-center mb-[2rem]">PARTNERSTVA</h1>
      <p className="text-center text-[1.6rem] md:text-[2.2rem] mb-[3rem]">
        Ponosni smo što sarađujemo sa nekim od najpoznatijih brendova u
        industriji. Naši partneri uključuju:
      </p>
      <div className="flex items-center justify-center flex-wrap gap-x-20">
        <div className="flex items-center gap-5">
          <Link href={"https://www.electrolux.com/"} passHref legacyBehavior>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="w-[20rem] h-[10rem] relative block"
            >
              <Image
                src={"/images/partners/electrolux-logo.png"}
                alt={"electrolux"}
                fill
                style={{ objectFit: "contain" }}
                className="opacity-75"
              />
            </a>
          </Link>
          <Link href={"/proizvodi?sifra=tefal"} legacyBehavior passHref>
            <a className="mx-auto w-fit ">
              <SearchIcon width={30} height={30} />
            </a>
          </Link>
        </div>
        <div className="flex items-center gap-5">
          <Link href={"http://www.tefal.co.rs"} passHref legacyBehavior>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="w-[20rem] h-[10rem] relative block"
            >
              <Image
                src={"/images/partners/tefal.png"}
                alt={"tefal"}
                fill
                style={{ objectFit: "contain" }}
                className="opacity-75"
              />
            </a>
          </Link>
          <Link href={"/proizvodi?sifra=tefal"} legacyBehavior passHref>
            <a className="mx-auto w-fit ">
              <SearchIcon width={30} height={30} />
            </a>
          </Link>
        </div>
        <div className="flex items-center gap-5">
          <Link href={"https://primuslaundry.com/en/"} passHref legacyBehavior>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="w-[20rem] h-[10rem] relative block"
            >
              <Image
                src={"/images/partners/primus.png"}
                alt={"aeg"}
                fill
                style={{ objectFit: "contain" }}
                className="opacity-75"
              />
            </a>
          </Link>
          <Link href={"/proizvodi?sifra=moulinex"} legacyBehavior passHref>
            <a className="mx-auto w-fit ">
              <SearchIcon width={30} height={30} />
            </a>
          </Link>
        </div>
        <div className="flex items-center gap-5">
          <Link href={"https://www.moulinex.co.rs/"} passHref legacyBehavior>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="w-[20rem] h-[10rem] relative block"
            >
              <Image
                src={"/images/partners/krups.png"}
                alt={"krups"}
                fill
                style={{ objectFit: "contain" }}
                className="opacity-75"
              />
            </a>
          </Link>
          <Link href={"/proizvodi?sifra=tefal"} legacyBehavior passHref>
            <a className="mx-auto w-fit ">
              <SearchIcon width={30} height={30} />
            </a>
          </Link>
        </div>
        <div className="flex items-center gap-5">
          <Link href={"https://country.zanussi.com/"} passHref legacyBehavior>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="w-[20rem] h-[10rem] relative block"
            >
              <Image
                src={"/images/partners/zannusi.png"}
                alt={"zanussi"}
                fill
                style={{ objectFit: "contain" }}
                className="opacity-75"
              />
            </a>
          </Link>
          <Link href={"/proizvodi?sifra=tefal"} legacyBehavior passHref>
            <a className="mx-auto w-fit ">
              <SearchIcon width={30} height={30} />
            </a>
          </Link>
        </div>
        <div className="flex items-center gap-5">
          <Link href={"https://www.aeg.hr/"} passHref legacyBehavior>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="w-[20rem] h-[10rem] relative block"
            >
              <Image
                src={"/images/partners/aeglogo.png"}
                alt={"aeg"}
                fill
                style={{ objectFit: "contain" }}
                className="opacity-75"
              />
            </a>
          </Link>
          <Link href={"/proizvodi?sifra=tefal"} legacyBehavior passHref>
            <a className="mx-auto w-fit ">
              <SearchIcon width={30} height={30} />
            </a>
          </Link>
        </div>
        <div className="flex items-center gap-5">
          <Link
            href={"http://www.sav.moulinex.co.rs/Pages/home.aspx"}
            passHref
            legacyBehavior
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="w-[20rem] h-[10rem] relative block"
            >
              <Image
                src={"/images/partners/Moulinex-logo.png"}
                alt={"aeg"}
                fill
                style={{ objectFit: "contain" }}
                className="opacity-75"
              />
            </a>
          </Link>
          <Link href={"/proizvodi?sifra=moulinex"} legacyBehavior passHref>
            <a className="mx-auto w-fit ">
              <SearchIcon width={30} height={30} />
            </a>
          </Link>
        </div>
        <div className="flex items-center gap-5">
          <Link href={"https://www.rowenta.co.rs//"} passHref legacyBehavior>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="w-[20rem] h-[10rem] relative block"
            >
              <Image
                src={"/images/partners/rowenta.png"}
                alt={"krups"}
                fill
                style={{ objectFit: "contain" }}
                className="opacity-75"
              />
            </a>
          </Link>
          <Link href={"/proizvodi?sifra=tefal"} legacyBehavior passHref>
            <a className="mx-auto w-fit ">
              <SearchIcon width={30} height={30} />
            </a>
          </Link>
        </div>
      </div>
      <p className="text-center text-[1.6rem] md:text-[2.2rem] mt-[3rem]">
        Naša partnerstva omogućavaju da našim kupcima ponudimo vrhunske
        proizvode i usluge, osiguravajući zadovoljstvo i kvalitet u svakodnevnom
        životu.
      </p>
    </section>
  );
};

export default Partners;
