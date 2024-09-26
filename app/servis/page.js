import PageHeader from "@/components/global/PageHeader";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Servis profesionalnih mašina za sudove - SOĆA Servis Novi Sad",
  description:
    "Servis i prodaja profesionalnih mašina za sudove. Delovi za mašine za sudove. Nudimo kvalitetne usluge sa garancijom.",
  keywords:
    "servis profesionalnih mašina za sudove, održavanje, popravka, HORECA partner, MEIKO, Hobart, Winterhalter, Electrolux, Zanussi",
};

export default function ServisProfesionalnihMasinaZaSudove() {
  return (
    <div className="bg-gray-50 text-night pb-[4rem] w-full">
      <PageHeader
        title={"Servis profesionalnih mašina za sudove"}
        description={
          "Dobro došli na web prezentaciju Soća servisa – Vašeg pouzdanog HORECA partnera"
        }
      />

      <div className="pt-[4rem] px-8 md:px-16">
        {/* Uvodni deo */}
        <section className="mb-8 md:mb-16">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            {/* <h2 className="text-2xl md:text-[26px] font-bold mb-4 md:mb-6 text-center">
              Dobro došli na web prezentaciju Soća servisa – Vašeg pouzdanog
              HORECA partnera
            </h2> */}
            <p className="text-base md:text-lg leading-8 md:leading-[2.4rem] mb-6 md:mb-8">
              U sklopu asortimana usluga koje ‘’SZTR Soća servis AD’’ pruža,
              posebna pažnja je posvećena profesionalnim aparatima, a pogotovo
              jednoj vrsti – mašine za sudove. Za servisiranje profesionalnih
              mašina za sudove sa ponosom ističemo da je naša uska
              specijalizacija.
            </p>
            <p className="text-base md:text-lg leading-8 md:leading-[2.4rem]">
              <strong>Zahvaljujući redovnim edukacijama i seminarima</strong>,
              naši tehničari su tu da se pobrinu da Vaša sudomašina ponovo bude
              radno sposobna za najkraće moguće vreme. Postići higijenski
              ispravno oprano posuđe ili čaše je izuzetno veliki izazov i
              zahteva pre svega kvalitetno savetovanje od strane servisa
              specijalizovanog za mašine za pranje sudova. Naš tim se bavi
              celokupnim sistemom mašinskog pranja posuđa/čaša – od pripremanja
              uslova za pravilan rad mašine za sudove, kompletnog tretmana vode
              (odmekšavanje i prečišćavanje), pa do isporuke neophodnih
              sredstava za pranje i ispiranje, a sve sa ciljem kako bismo
              pružili celokupnu uslugu tehničke podrške jednom ugostiteljskom
              objektu. Naravno, kako bismo zaokružili uslugu – bavimo se i
              prodajom profesionalnih mašina za sudove.{" "}
              <Link
                className="text-blue-500 hover:text-offRed transition-colors duration-200"
                href="/prodajni-program/meiko-profesionalne-masine"
              >
                Posetite našu <b>MEIKO</b> ponudu
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Usluge sa slikama */}
        <section className="mb-8 md:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
              <h3 className="text-xl md:text-[18px] font-bold mb-4 md:mb-6">
                Popravka mašina za sudove na terenu
              </h3>
              <p className="text-base md:text-lg leading-8 md:leading-[2.4rem] mb-6 min-h-[48px]">
                <strong>Brz odziv i efikasno rešavanje problema</strong> – nešto
                što Vam garantujemo!
              </p>
              <div className="w-full relative h-[200px] md:h-[400px]">
                <Image
                  fill
                  objectFit="cover"
                  src="https://www.soca.rs/public/images/soca-servis-teren.jpg"
                  alt="Popravka na terenu"
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                />
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
              <h3 className="text-xl md:text-[18px] font-bold mb-4 md:mb-6">
                Popravka mašina za sudove u servisu
              </h3>
              <p className="text-base md:text-lg leading-8 md:leading-[2.4rem] mb-6">
                Servis profesionalnih mašina za sudove ne predstavlja samo
                servisiranje aparata – predstavlja servisiranje jednog
                celokupnog sistema.
              </p>
              <div className="w-full relative h-[200px] md:h-[400px]">
                <Image
                  fill
                  objectFit="cover"
                  src="https://www.soca.rs/public/images/soca-servis.jpg"
                  alt="Popravka u servisu"
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Dijagnostika */}
        <section className="mb-8 md:mb-16">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            <h3 className="text-xl md:text-[18px] font-bold mb-4 md:mb-6 text-center">
              Dijagnostika i otklanjanje kvarova
            </h3>
              <div className="flex flex-col gap-10 lg:gap-20 lg:flex-row mt-[20px]">
              <div className="w-full lg:w-[50%] mx-auto relative h-[500px] md:h-[700px]">
                <Image
                  fill
                  // objectFit="cover"
                  src="https://www.soca.rs/public/images/soca-servis-dijagnostika.jpg"
                  alt="Dijagnostika kvara"
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                />
              </div>
            <div className="lg:w-[50%] pl-[20px] lg:pl-0">
              <ul className="flex flex-col gap-[10px] lg:gap-[20px] list-disc">
              <li className="text-base md:text-lg leading-8 md:leading-[2.4rem]">
                Naš tim stručnjaka je specijalizovan za dijagnostiku i otklanjanje kvarova na profesionalnim mašinama za sudove svih brendova, uključujući MEIKO, Hobart, Winterhalter, i Electrolux. Sa više od 35 godina iskustva, nudimo pouzdanu uslugu sa ciljem da mašinu vratimo u fabričko stanje.
              </li>
              <li className="text-base md:text-lg leading-8 md:leading-[2.4rem]">
                Koristimo naprednu dijagnostiku kako bismo precizno identifikovali svaki kvar i otklonili ga koristeći samo nove i originalne delove. Naša misija je da vaša mašina za sudove ponovo radi kao nova, osiguravajući maksimalnu efikasnost i dugotrajnost.
              </li>
              <li className="text-base md:text-lg leading-8 md:leading-[2.4rem]">
                Bez obzira na vrstu problema – bilo da je u pitanju zapušenje, kvar grejača ili elektronike – naši tehničari su opremljeni za brzo rešavanje problema. Naša usluga uključuje analizu rada mašine, procenu stanja i predlog rešenja sa jasnim informacijama o potrebnim popravkama.
              </li>
              <li className="text-base md:text-lg leading-8 md:leading-[2.4rem]">
                Uz stručnu podršku i savete naših servisera, vaša mašina za sudove će raditi pouzdano, omogućujući vam da se fokusirate na ono što je važno – kvalitetnu uslugu prema vašim klijentima.
              </li>
              </ul>
            </div>
            </div>
          </div>
        </section>

        {/* Brendovi koje servisiramo */}
        <section className="mb-8 md:mb-16 mx-auto">
          <h3 className="text-xl md:text-[18px] font-bold mb-4 md:mb-6">
            Brendovi koje servisiramo
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[
              { name: "MEIKO", url: "https://www.meiko.rs/" },
              { name: "Hobart", url: "https://hobart.rs/" },
              {
                name: "Winterhalter",
                url: "https://www.winterhalter.com/rs-sr/",
              },
              { name: "Silanos", url: "https://www.silanos.it/en/" },
              { name: "ATA", url: "https://www.atasrl.com/en/" },
              { name: "MBM", url: "https://www.mbmsrl.it/en/" },
              { name: "Electrolux", url: "https://www.electrolux.rs/" },
              { name: "Zanussi", url: "https://www.zanussi.rs/" },
              { name: "Elframo", url: "https://www.elframo.it/en/" },
              { name: "Kromo", url: "https://www.kromo.it/" },
              { name: "Dihr", url: "https://www.dihr.com/en/" },
              { name: "Comenda", url: "https://www.comenda.eu/" },
              { name: "Jemi", url: "https://www.jemi.es/en/" },
              { name: "Krupps", url: "https://www.krupps.it/en/" },
              { name: "Elettrobar", url: "https://www.elettrobar.co.uk/" },
              { name: "Colged", url: "https://www.colged.com/en/" },
            ].map((brand, index) => (
              <Link
                key={index}
                target="_blank"
                href={brand.url}
                className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 text-center"
              >
                <p className="text-blue-500 hover:text-offRed text-lg font-bold">
                  {brand.name}
                </p>
              </Link>
            ))}
          </div>
        </section>
        <div className="flex flex-col lg:flex-row lg:gap-[40px]">
          {/* Saveti */}
          <section className="flex mb-8 md:mb-16 flex-1">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
              <h3 className="text-xl md:text-[18px] font-bold mb-4 md:mb-6">
                Saveti za korišćenje profesionalne mašine za sudove
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-base md:text-lg">
                <li>
                  Redovno čišćenja sita filtera i filtera mašine za sudove u
                  toku dana i na kraju radnog dana.
                </li>
                <li>
                  Na kraju svake smene potrebno je promeniti vodu unutar mašine
                  za pranje sudova – i češće, ukoliko primetite da je jako
                  zaprljana.
                </li>
                <li>
                  Uklanjati ostatke hrane sa tanjira pre nego što se isti ubace
                  u mašinu.
                </li>
                <li>
                  Pratiti potrošnju sredstava za pranje i ispiranje kako biste
                  mogli na vreme da reagujete ukoliko primetite da je mašina
                  prestala da ih troši.
                </li>
                <li>
                  Zvati servis na redovno održavanje u dogovorenom vremenskom
                  intervalu.
                </li>
              </ul>
            </div>
          </section>

          {/* Postupak servisiranja */}
          <section className="mb-8 md:mb-16 flex-1">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
              <h3 className="text-xl md:text-[18px] font-bold mb-4 md:mb-6">
                Postupak servisiranja profesionalnih mašina za sudove
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-base md:text-lg">
                <li>
                  <b>Analiza uslova u kojima radi mašina za sudove </b> -
                  Ukoliko su potrebne neke korekcije, dobićete neophodne
                  savete/instrukcije kako biste postigli maksimalne performanse
                  vaše mašine za sudove.
                </li>
                <li>
                  <b>Dijagnostika kvara </b> - Po izvršenoj dijagnostici
                  dobićete i mišljenje o generalnom stanju Vaše mašine za pranje
                  sudova.
                </li>
                <li>
                  <b>Otklanjanje kvara </b> - Ukoliko je tehnički moguće, kvar
                  će biti otklonjen na licu mesta i naši tehničari će pustiti
                  aparat u rad.
                </li>
                <li>
                  Ukoliko otklanjanje kvara zahteva nošenje mašine za sudove u
                  servis, to ćemo učiniti u dogovorenom vremenskom intervalu.
                </li>
                <li>
                  Ukoliko se odlučite da ne popravljate vaš aparat usled
                  finansijske neisplativosti ili starosti aparata, daćemo vam
                  ponudu za kupovinu nove mašine za sudove:{" "}
                  <Link
                    className="text-blue-500 hover:text-offRed transition-colors duration-200"
                    href="/prodajni-program/profesionalne-masine-za-veseraje"
                  >
                    Pogledajte našu <b>PRIMUS</b> ponudu
                  </Link>
                  .
                </li>
              </ul>
            </div>
          </section>
        </div>
        <div className="mt-12 bg-white p-6 md:p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
          <h3 className="text-xl md:text-2xl font-bold mb-6">
            Naši Servisni Partneri
          </h3>
          <p className="text-lg leading-relaxed mb-6">
            <b>Soća Servis AD</b> se ponosi svojim široko rasprostranjenim i
            dobro organizovanim mrežama servisnih partnera, koji su strateški
            raspoređeni širom Srbije. Naši partneri pružaju pouzdane usluge
            popravke i održavanja bele tehnike, koristeći isključivo originalne
            delove. Bilo da vam je potreban servis u Beogradu, Novom Sadu, Nišu
            ili u nekom manjem mestu, naši partneri su tu da obezbede kvalitetnu
            i brzu uslugu. Za detaljan spisak svih naših ovlašćenih servisnih
            partnera i njihove kontakt informacije, posetite našu stranicu{" "}
            <Link
              href="/servis/partnerstva"
              className="text-blue-500 hover:text-offRed transition-colors duration-200"
            >
              ovde
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
