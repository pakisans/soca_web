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
      className="py-24 px-6 lg:px-32 bg-gradient-to-r from-gray-50 to-gray-100 w-full"
    >
      <h1 className="text-[3.6rem] font-bold text-center mb-12">
        Naši Partneri
      </h1>
      <p className="text-center text-[2rem] mb-16 max-w-[800px] mx-auto">
        Sarađujemo sa renomiranim brendovima kako bismo vam ponudili najbolje
        proizvode i usluge. Naši partneri garantuju kvalitet, pouzdanost i
        inovacije u svakodnevnom životu.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2 p-6"
          >
            <Link href={partner.url} passHref legacyBehavior>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-24 relative mb-4"
              >
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  style={{ objectFit: "contain" }}
                  className="opacity-90 hover:opacity-100 transition-opacity"
                />
              </a>
            </Link>
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-700">
                {partner.name}
              </span>
              <Link
                href={`/proizvodi?pretraga=${partner.search}`}
                passHref
                legacyBehavior
              >
                <a className="w-12 h-12 text-white flex items-center justify-center rounded-full transition-transform transform hover:scale-110">
                  <SearchIcon width={24} height={24} />
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-[2rem] mt-20">
        Uz naše partnere, obezbeđujemo vrhunski kvalitet proizvoda i usluga za
        vašu belu tehniku. <br /> Za više informacija o našim servisnim
        partnerima, posetite{" "}
        <b>
          <Link href="/servis/partnerstva" className="hover:text-blue-500">
            ovde
          </Link>
        </b>
        .
      </p>
    </section>
  );
};

export default Partners;
