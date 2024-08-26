import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/global/PageHeader";

export const metadata = {
  title: "Mašine za pranje sa haubom | SOĆA Servis",
  description:
    "Otkrijte industrijske mašine za pranje sa haubom firme MEIKO, sa vrhunskom čistoćom i ekonomičnošću. M-iClean H i UPster H500 su savršeni za ugostiteljstvo, hotelijerstvo i kolektivno spremanje hrane.",
  keywords:
    "Mašine za pranje sa haubom, M-iClean H, UPster H500, MEIKO, industrijske mašine, pranje posuđa, efikasnost, ekonomičnost, ugostiteljstvo, hotelijerstvo, kolektivno spremanje hrane, ustanove za negu",
};

export default function MasineZaPranjeSaHaubom() {
  return (
    <section className="flex flex-col items-center bg-gray-50 w-full">
      <h1 className="sr-only">Mašine za pranje sa haubom - SOĆA Servis</h1>
      <PageHeader
        title={"Mašine za pranje sa haubom - svaka je klasa za sebe"}
        description={
          "Mašine za pranje sa haubom za industriju: premijum klasa i UPster-Line"
        }
      />
      <div className="space-y-20 py-16 px-[2rem] sm:px-[4rem] max-w">
        <div className="mb-12">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            <p className="text-lg text-left leading-relaxed text-black animate-slide-down mb-6">
              Mašine za pranje sa haubom firme MEIKO završavaju ono, što mora da
              ide brzo. Velike količine posuđa za pranje savlađuju lako i
              pojednostavljuju procese u oblasti pranja. Ove mašine se proizvode
              sa različitim promišljenim konceptima. Za svaku primenu, svaki
              zadatak, MEIKO ima odgovarajuću industrijsku mašinu za pranje sa
              haubom - uvek je tu i ona prava!
            </p>

            <p className="text-lg leading-relaxed black animate-slide-down mb-6">
              Da li je ravnolinijski prolazni ili ugaoni model za mali prostor,
              idealna konstrukcija MEIKO industrijske mašina za pranje omogućava
              mnoge varijante postavljanja. Za svako preduzeće - bilo da je u:
            </p>
            <ul className="list-disc pl-10 space-y-2 text-lg leading-relaxed text-black animate-slide-down mb-6">
              <li>ugostiteljstvu ili u</li>
              <li>hotelijerstvu ili u</li>
              <li>preduzećima za kolektivno spremanje hrane i</li>
              <li>ustanovama za negu</li>
            </ul>
            <p className="text-lg leading-relaxed text-black animate-slide-down">
              mi iz svog širokog asortimana za svaku kuhinju možemo da ponudimo
              najefektivnije rešenje za pranje.
            </p>
          </div>
        </div>

        <div className="space-y-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20">
            <div className="flex-1 p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 duration-600 ease">
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-4 mb-6 md:mb-0">
                  <Image
                    src="https://www.soca.rs/public/images/m-iclean-h.jpg"
                    alt="M-iClean H"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
                <div className="flex-1 md:ml-6">
                  <h3 className="text-2xl sm:text-3xl font-semibold mb-5 text-night">
                    M-iClean H
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Mašine za pranje sa haubom M-iClean H su pravi standard u
                    pogledu rada i rukovanja, čistoće i ekonomičnosti.
                    Zahvaljujući novom MEIKO konceptu ergonomije dobijate
                    vrhunske vrednosti: skraćeno vreme pranja, brzo sušenje,
                    manje troškova osoblja. Dobrodošli u raj pranja.
                  </p>
                  <div className="mt-6">
                    <Link
                      href="/prodajni-program/meiko-profesionalne-masine/masine-za-pranje-sa-haubom/m-iclean-h"
                      passHref
                      legacyBehavior
                    >
                      <a className="text-lg font-semibold text-white bg-offRed hover:bg-red-700 transition-all duration-300 py-3 px-6 rounded-md shadow-md flex items-center">
                        Prikaži proizvod <span className="ml-2">➔</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-10 mb-20">
            <div className="flex-1 p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 duration-600 ease">
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-4 mb-6 md:mb-0">
                  <Image
                    src="https://www.soca.rs/public/images/upster-h.jpg"
                    alt="UPster H500"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
                <div className="flex-1 md:ml-6">
                  <h3 className="text-2xl sm:text-3xl font-semibold mb-5 text-night">
                    UPster H500
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Super komforno pranje u rekordnom vremenu: UPster ® H 500
                    pere sa maksimalnom snagom i najboljim komforom - upravo kod
                    velikog prolaza u prostoru pranja. Čak i veliko ili visoko
                    posuđe može jednostavno i sasvim komotno da se uvuče sa
                    strane u UPster ® H 500.
                  </p>
                  <div className="mt-6">
                    <Link
                      href="/prodajni-program/meiko-profesionalne-masine/masine-za-pranje-sa-haubom/upster-h500"
                      passHref
                      legacyBehavior
                    >
                      <a className="text-lg font-semibold text-white bg-offRed hover:bg-red-700 transition-all duration-300 py-3 px-6 rounded-md shadow-md flex items-center">
                        Prikaži proizvod <span className="ml-2">➔</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
