import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/global/PageHeader";

export const metadata = {
  title: "Podpultne mašine za pranje posuđa niske potrošnje | SOĆA Servis",
  description:
    "Otkrijte našu ponudu podpultnih mašina za pranje posuđa marke MEIKO, koje pružaju visok stepen komfora, nisku potrošnju i dug vek trajanja. Idealne za profesionalnu upotrebu u restoranima i hotelima.",
  author: "SOĆA Servis AD",
  keywords:
    "Meiko, podpultne mašine za pranje posuđa, niska potrošnja, komfor, dug vek trajanja, M-iClean U, UPster U, profesionalne mašine, pranje posuđa, Novi Sad",
};

export default function PodpultneMasine() {
  return (
    <>
      <section className="flex flex-col items-center bg-mintCream w-full">
        <h1 className="sr-only">
          Podpultne mašine za pranje posuđa niske potrošnje - SOĆA Servis
        </h1>
        <PageHeader
          title={"Podpultne mašine za pranje posuđa niske potrošnje"}
          description={
            "Ugradne i podpultne mašine za pranje posuđa marke MEIKO pružaju visok stepen komfora, nisku potrošnju resursa i dug vek trajanja. Idealne za profesionalnu upotrebu u restoranima, hotelima i drugim ugostiteljskim objektima."
          }
        />
        <div className="space-y-20 py-16 px-[2rem] sm:px-[4rem] max-w">
          <div className="bg-white p-6">
            <p className="text-lg leading-relaxed text-black animate-slide-down">
              Ugradne mašine za pranje posuđa marke MEIKO znaju da se smanje
              kada je potrebno više mesta za goste, a zablistaju kada čaše i
              posuđe treba oprati sa sjajnim i higijenski besprekornim
              rezultatima.
            </p>
            <p className="text-lg leading-relaxed text-black animate-slide-down">
              Bez obzira da li ćete naše ugradne mašine za pranje posuđa
              postaviti u prostoriju za goste ili ispod šanka, ili možda ipak
              bolje u neku kuhinjsku prostoriju: tanjiri, šolje, čaše, posude i
              pribor za jelo čisti su u tren oka. Ne treba ni da spominjemo da
              se radi o najmodernijoj tehnologiji. Ona je zasnovana na
              standardima sa kojima preduzeće MEIKO već decenijama prednjači u
              svojoj branši, i to na globalnom nivou. Pod njom se podrazumeva i
              štedljiva potrošnja resursa, kao i savršeni rezultati pranja.
            </p>
          </div>
          <div className="space-y-20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20">
              <div className="flex-1 p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 duration-600 ease">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-4 mb-6 md:mb-0">
                    <Image
                      src="https://www.soca.rs/public/images/m-clean-u.jpeg"
                      alt="Podpultne mašine za pranje posuđa i čaša"
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex-1 md:ml-6">
                    <h3 className="text-2xl sm:text-3xl font-semibold mb-5 text-night">
                      M-iClean U
                    </h3>
                    <p className="text-lg leading-relaxed text-gray-700">
                      Premijum klasa podpultnih mašina za pranje oduševljava
                      tehnikom, ekonomičnošću, jednostavnim konceptom rukovanja,
                      ekološkom tehnikom i posebno lepim izgledom.
                    </p>
                    <div className="mt-6">
                      <Link
                        href="/prodajni-program/meiko-profesionalne-masine/podpultne-masine/m-iclean-u"
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
                      src="https://www.soca.rs/public/images/upster-u.jpeg"
                      alt="UPster U"
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex-1 md:ml-6">
                    <h3 className="text-2xl sm:text-3xl font-semibold mb-5 text-night">
                      UPster U
                    </h3>
                    <p className="text-lg leading-relaxed text-gray-700">
                      Nova podpultna serija MEIKO UPster ® U primenjuje
                      kompletnu profesionalnu tehniku pranja: efikasni rezultat
                      pranja, komforno rukovanje, maksimalna fleksibilnost i
                      optimalni odnos cene i kvaliteta. Idealni partner kod
                      pranja. Samo priključite i slobodni ste!
                    </p>
                    <div className="mt-6">
                      <Link
                        href="/prodajni-program/meiko-profesionalne-masine/podpultne-masine/upster-u"
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
    </>
  );
}
