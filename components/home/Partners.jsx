import Image from "next/image";
import Link from "next/link";
import SearchIcon from "../icons/SearchIcon";

const Partners = () => {
  const partners = [
    {
      name: "Electrolux",
      url: "https://www.electrolux.com/",
      image: "/images/partners/electrolux-logo.png",
      search: "electrolux",
    },
    {
      name: "Tefal",
      url: "http://www.tefal.co.rs",
      image: "/images/partners/tefal.png",
      search: "tefal",
    },
    {
      name: "Primus",
      url: "https://primuslaundry.com/en/",
      image: "/images/partners/primus.png",
      search: "primus",
    },
    {
      name: "Krups",
      url: "https://krups.rs/",
      image: "/images/partners/krups.png",
      search: "krups",
    },
    {
      name: "Zanussi",
      url: "https://country.zanussi.com/",
      image: "/images/partners/zannusi.png",
      search: "zanussi",
    },
    {
      name: "AEG",
      url: "https://www.aeg.hr/",
      image: "/images/partners/aeglogo.png",
      search: "aeg",
    },
    {
      name: "Moulinex",
      url: "http://www.sav.moulinex.co.rs/Pages/home.aspx",
      image: "/images/partners/Moulinex-logo.png",
      search: "moulinex",
    },
    {
      name: "Rowenta",
      url: "https://www.rowenta.co.rs//",
      image: "/images/partners/rowenta.png",
      search: "rowenta",
    },
    {
      name: "Meiko",
      url: "https://www.meiko.rs/sr",
      image: "/images/partners/meiko.png",
      search: "meiko",
    },
  ];

  return (
    <section
      id="partners"
      className="py-16 px-8 lg:px-40 border-t border-gray-300 mt-16 w-full bg-gray-50"
    >
      <h1 className="text-[3.6rem]  text-center mb-8 text-night">
        PARTNERSTVA
      </h1>
      <p className="text-center text-lg md:text-xl mb-12 text-night">
        Ponosni smo što sarađujemo sa nekim od najpoznatijih brendova u
        industriji. Naši partneri uključuju:
      </p>
      <div className="flex flex-wrap justify-center gap-10">
        {partners.map((partner, index) => (
          <div key={index} className="flex flex-col items-center gap-5">
            <Link href={partner.url} passHref legacyBehavior>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="w-52 h-24 relative block transition-transform transform hover:scale-105"
              >
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  style={{ objectFit: "contain" }}
                  className="opacity-75"
                />
              </a>
            </Link>
            <Link
              href={`/proizvodi?pretraga=${partner.search}`}
              passHref
              legacyBehavior
            >
              <a className="flex items-center justify-center w-10 h-10 rounded-full text-white transition-transform transform hover:scale-110">
                <SearchIcon width={24} height={24} />
              </a>
            </Link>
          </div>
        ))}
      </div>
      <p className="text-center text-lg md:text-xl mt-12 text-night">
        Naša partnerstva omogućavaju da našim kupcima ponudimo vrhunske
        proizvode i usluge, osiguravajući zadovoljstvo i kvalitet u svakodnevnom
        životu.
      </p>
      <Image
        src="/images/logo_soca.png"
        alt="Logo"
        width={120}
        height={50}
        className="mx-auto mt-[40px]"
      />
      <p className="text-center text-lg md:text-xl mt-12 text-night">
        Naši ovlašćeni servisni partneri širom Srbije pružaju pouzdane usluge
        popravke bele tehnike sa originalnim delovima. Bez obzira gde se
        nalazite, naši partneri su dostupni za brzu i kvalitetnu uslugu, bilo u
        Beogradu, Novom Sadu, Nišu, ili manjim mestima. <br />
        Za kompletnu listu ovlašćenih servisnih partnera i njihove kontakt
        informacije, posetite našu stranicu{" "}
        <b>
          <Link className="hover:text-offRed" href={"/servis/partnerstva"}>
            ovde
          </Link>
        </b>
        .
      </p>
    </section>
  );
};

export default Partners;
