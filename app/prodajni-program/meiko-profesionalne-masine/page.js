import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/global/PageHeader";

export const metadata = {
  title: "Meiko profesionalne mašine za pranje posuđa i čaša | SOĆA Servis",
  description:
    "Otkrijte našu ponudu Meiko profesionalnih mašina za pranje posuđa i čaša, uključujući podpultne mašine, mašine sa haubom i mašine za pranje crnog posuđa. Nudimo vrhunske proizvode za profesionalnu upotrebu.",
  author: "SOĆA Servis AD",
  keywords:
    "Meiko, profesionalne mašine, mašine za pranje posuđa, mašine za pranje čaša, podpultne mašine, mašine sa haubom, crno posuđe, Novi Sad",
};

export default function MeikoProfesionalneMasine() {
  return (
    <>
      <section className="flex flex-col items-center  bg-mintCream w-full">
        <h1 className="sr-only">
          MEIKO profesionalne mašine za pranje posuđa i čaša - SOĆA Servis
        </h1>
        <div className="space-y-20">
          <PageHeader
            title={"MEIKO profesionalne mašine za pranje posuđa i čaša"}
            description={
              "Otkrijte MEIKO profesionalne mašine za pranje posuđa i čaša, koje pružaju izuzetnu efikasnost i pouzdanost u svakom pranju. Naša ponuda obuhvata vrhunske modele koji su dizajnirani da zadovolje sve vaše potrebe, bilo da vodite restoran, hotel ili bilo koji drugi ugostiteljski objekat."
            }
          />
          <div className="px-[2rem] sm:px-[4rem] max-w">
            <div className="bg-white p-[20px] rounded-lg shadow-md">
              <h2 className="text-3xl font-semibold text-night mb-6">
                MEIKO – Svetski lider u mašinskom pranju
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                MEIKO je apsolutni svetski lider u polju mašinskog pranja posuđa i čaša, sa ponudom koja obuhvata širok spektar proizvoda. Naši proizvodi uključuju:
              </p>
              <ul className="list-disc list-inside text-lg mt-4 text-gray-700">
                <li><a href="#podpultne-masine" className="text-offRed hover:underline">Mašine za pranje posuđa i čaša</a></li>
                <li><a href="#masine-za-crno-posudje" className="text-offRed hover:underline">Mašine za pranje crnog posuđa</a></li>
                <li><a href="#podpultne-masine" className="text-offRed hover:underline">Mašine sa haubom</a></li>
                <li>Specijalne mašine za pranje noćnog posuđa u medicinskim ustanovama</li>
              </ul>

              <h2 className="text-3xl mt-[20px] font-semibold text-night mb-6">
                Počeci kompanije
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Počeci kompanije datiraju od pre oko 90 godina, na Švarcvaldu, u jugozapadnoj Nemačkoj, sa jasnom vizijom – stvoriti čistiji svet. Njihova rešenja za profesionalno pranje, čišćenje i dezinfekciju su toliko dobro globalno prihvaćena da kompanija nije bila u mogućnosti da zadovolji sve potrebe kupaca koristeći samo proizvodni pogon u Ofenburgu, Nemačka.
              </p>

              <h2 className="text-3xl mt-[20px] font-semibold text-night mb-6">
                Globalna prisutnost
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Kako bi se odgovorilo na globalnu potražnju, MEIKO je proširio proizvodnju na tri kontinenta. Proizvodni pogoni sada funkcionišu u:
              </p>
              <ul className="list-disc list-inside text-lg mt-4 text-gray-700">
                <li>SAD</li>
                <li>Kina</li>
                <li>Nemačka</li>
              </ul>
              <p id="podpultne-masine" className="text-lg leading-relaxed text-gray-700 mt-4">
                Sva tri proizvodna pogona, zajedno sa svim zaposlenima u poslovnim jedinicama, dele jednu zajedničku strast – strast za vrhunskim kvalitetom. Kada vidite zakrivljeno slovo M, to označava samo jedno – Made by MEIKO.
              </p>
            </div>
          </div>

          <div className="space-y-20 py-16 px-[2rem] sm:px-[4rem] max-w">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20">
              <div className="flex-1 p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 duration-600 ease">
                <div  className="flex flex-col md:flex-row items-center">
                  <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-4 mb-6 md:mb-0">
                    <Image
                      src="https://www.soca.rs/public/images/masine-podpultne.jpeg"
                      alt="Podpultne mašine za pranje posuđa i čaša"
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex-1 md:ml-6">
                    <h3 className="text-2xl sm:text-3xl font-semibold mb-5 text-night">
                      Podpultne mašine za pranje posuđa i čaša
                    </h3>
                    <p className="text-lg leading-relaxed text-gray-700">
                      MEIKO nudi širok spektar podpultnih mašina za pranje
                      posuđa i čaša koje su idealne za restorane, hotele i druge
                      ugostiteljske objekte. Naši modeli, kao što su M-iClean U
                      i UPster U, osiguravaju brzo i temeljno pranje uz
                      minimalnu potrošnju resursa.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700">
                      M-iClean U nudi napredne funkcije kao što su automatsko
                      otvaranje vrata i energetski efikasan način rada. UPster U
                      je jednostavan za korišćenje i održavanje, čineći ga
                      savršenim izborom za svaki profesionalni kuhinjski
                      prostor.
                    </p>
                    <div className="mt-6">
                      <Link
                        href="/prodajni-program/meiko-profesionalne-masine/podpultne-masine"
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

            <div id="masine-sa-haubom" className="flex flex-col md:flex-row-reverse items-center justify-between gap-10 mb-20">
              <div className="flex-1 p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 duration-600 ease">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-4 mb-6 md:mb-0">
                    <Image
                      src="https://www.soca.rs/public/images/masine-sa-haubom.jpeg"
                      alt="Mašine za pranje sa haubom"
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex-1 md:ml-6">
                    <h3 className="text-2xl sm:text-3xl font-semibold mb-5 text-night">
                      Mašine za pranje sa haubom
                    </h3>
                    <p className="text-lg leading-relaxed text-gray-700">
                      MEIKO mašine za pranje sa haubom nude visoku efikasnost i
                      kapacitet za brzo i temeljno pranje velikih količina
                      posuđa. Naši modeli, kao što su M-iClean H i UPster H,
                      pružaju vrhunske performanse i maksimalnu higijenu u
                      svakom pranju.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700">
                      M-iClean H dolazi sa inovativnim funkcijama koje smanjuju
                      potrošnju energije i vode, dok UPster H nudi jednostavno
                      rukovanje i održavanje, čineći ga idealnim za
                      profesionalnu upotrebu.
                    </p>
                    <div className="mt-6">
                      <Link
                        href="/prodajni-program/meiko-profesionalne-masine/masine-za-pranje-sa-haubom"
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

            <div id="masine-za-crno-posudje" className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20">
              <div className="flex-1 p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 duration-600 ease">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-4 mb-6 md:mb-0">
                    <Image
                      src="https://www.soca.rs/public/images/masine-posudje.jpeg"
                      alt="Mašine za pranje crnog posuđa"
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex-1 md:ml-6">
                    <h3 className="text-2xl sm:text-3xl font-semibold mb-5 text-night">
                      Mašine za pranje crnog posuđa
                    </h3>
                    <p className="text-lg leading-relaxed text-gray-700">
                      MEIKO mašine za pranje crnog posuđa dizajnirane su da se
                      nose sa najtežim zadacima pranja, nudeći vrhunske
                      performanse i pouzdanost. Naši modeli DV/FV serije
                      osiguravaju temeljno pranje i odstranjivanje čak i
                      najupornijih nečistoća.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700">
                      DV/FV serije mašina za pranje crnog posuđa pružaju
                      izuzetnu snagu pranja i kapacitet, idealne su za velike
                      kuhinje i profesionalne ugostiteljske objekte gde je
                      potrebna maksimalna efikasnost i higijena.
                    </p>
                    <div className="mt-6">
                      <Link
                        href="/prodajni-program/meiko-profesionalne-masine/masine-za-pranje-crnog-posudja"
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

          </div>
        </div>
      </section>
    </>
  );
}
