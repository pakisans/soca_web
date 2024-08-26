import PageHeader from "@/components/global/PageHeader";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Mašine za pranje crnog posuđa | SOĆA Servis",
  description:
    "Otkrijte industrijske mašine za pranje crnog posuđa iz firme MEIKO, dizajnirane za visoke performanse i savršene rezultate. DV i FV modeli su idealni za pranje šerpi, tiganja, poslužavnika i ostalog crnog posuđa.",
  keywords:
    "Mašine za pranje crnog posuđa, MEIKO, pranje šerpi, pranje tiganja, industrijske mašine, DV modeli, FV modeli, visoke performanse, pranje posuđa, ugostiteljstvo, hotelijerstvo, kolektivno spremanje hrane",
};

export default function MasineZaPranjeCrnogPosudja() {
  return (
    <>
      <section className="flex flex-col items-center w-full">
        <PageHeader
          title={"Mašine za pranje crnog posuđa"}
          description={
            "Mašine za pranje šerpi i pribora iz firme MEIKO postižu velike stvari! DV i FV modeli firme MEIKO: mašine za pranje šerpi da bolje ne mogu biti!"
          }
        />

        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20 py-16 px-[2rem] sm:px-[4rem] max-w">
          <div className="flex-1 p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 duration-600 ease">
            <div className="mb-10">
              <p className="text-lg leading-relaxed text-black animate-slide-down">
                MEIKO mašine za pranje crnog posuđa, u pravom smislu te reči,
                postižu sve to. DV 270.2 nije samo zamišljena da bude velika -
                mi smo je i napravili velikom: ogromna visina ulaznog otvora
                dozvoljava da kod ove mašine za pranje šerpi gotovo sve uđe
                ispod haube. Šerpe, tiganji i posude u modelima FV 130.2 i FV
                250.2, s druge strane, su u najboljim rukama. Jedan jedini
                veliki poklopac sa puno toga iza njega!
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-4 mb-6 md:mb-0">
                <Image
                  src="https://www.soca.rs/public/images/dv-fv-serije.jpeg"
                  alt="DV / FV serija"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </div>
              <div className="flex-1 md:ml-6">
                <h3 className="text-2xl sm:text-3xl font-semibold mb-5 text-night">
                  DV / FV serije
                </h3>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Ovi majstori za sve su pravi moćni paketi MEIKO tehnike
                  pranja, koji su dizajnirani za visoke performanse i kod
                  velikog posuđa kao što su šerpe, tiganji, poslužavnici, posude
                  i više od toga.
                </p>
                <div className="mt-6">
                  <Link
                    href="/prodajni-program/meiko-profesionalne-masine/masine-za-pranje-crnog-posudja/dv-fv-serije"
                    passHref
                    legacyBehavior
                  >
                    <a className="text-lg font-semibold text-white bg-offRed hover:bg-red-700 transition-all duration-300 py-3 px-6 rounded-md shadow-md flex items-center">
                      Prikaži proizvode <span className="ml-2">➔</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
