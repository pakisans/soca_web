import FeatureProductAccordionItem from "@/components/featuredProducts/FeaturedProductAccordionItem";
import PageHeader from "@/components/global/PageHeader";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "M-iClean H – mašine za pranje sa haubom | SOĆA Servis",
  description:
    "Otkrijte M-iClean H mašine za pranje sa haubom sa vrhunskom ergonomijom, ekonomičnošću i brzim sušenjem. Savršene za ugostiteljstvo, hotelijerstvo i kolektivno spremanje hrane.",
  keywords:
    "M-iClean H, mašine za pranje sa haubom, MEIKO, ergonomija, ekonomičnost, brzo sušenje, ugostiteljstvo, hotelijerstvo, kolektivno spremanje hrane",
};

export default function MicleanH() {
  const miCleanHMDetails = [
    ["Dimenzije korpe", "500 x 500 mm bis 540 x 500 mm"],
    ["Visina ulaza", "505 mm"],
    ["Dimenzije (Š x V x D)", "635 (725) x 1520 x 750 (800) mm (mit Griffe mm"],
    ["Ciklus programa", "60 / 90 / 210 s"],
    ["Kapacitet korpe/h", "60 / 40 / 17 korpi/h"],
    ["Punjenje rezervoara", "22,0 l"],
    ["Zapremina vode za ispiranje", "2,4 l/ciklusu"],
    ["Ukupna priključena snaga", "9 kW"],
    ["Lokalna zaštita osigurača", "20 A"],
    ["Grejanje bojlera", "8,00 kW / 13,00 A"],
    ["Grejanje rezervoara", "4,00 kW / 10,00 A"],
    ["Pumpa za pranje", "0,60 kW / 4,00 A"],
    ["Zaštitna klasa mašine", "IP X5"],
  ];

  const miCleanHLDetails = [
    ["Dimenzije korpe", "500 x 500 mm bis 650 x 500 mm"],
    ["Visina ulaza", "560 mm"],
    ["Dimenzije (Š x V x D)", "735 (825) x 1575 x 750 (800) mm (mit Griffe mm"],
    ["Ciklus programa", "60 / 90 / 210 s"],
    ["Kapacitet korpe/h", "60 / 40 / 17 korpi/h"],
    ["Punjenje rezervoara", "22,0 l"],
    ["Zapremina vode za ispiranje", "3,0 l/ciklusu"],
    ["Ukupna priključena snaga", "9,9 kW"],
    ["Lokalna zaštita osigurača", "20 A"],
    ["Grejanje bojlera", "8,00 kW / 13,00 A"],
    ["Grejanje rezervoara", "4,00 kW / 10,00 A"],
    ["Pumpa za pranje", "1,50 kW / 3,30 A"],
    ["Zaštitna klasa mašine", "IP X5"],
  ];

  const miCleanHXLDetails = [
    ["Dimenzije korpe", "2 x 500 x 500 mm bis 540 x 500 mm"],
    ["Visina ulaza", "505 mm"],
    [
      "Dimenzije (Š x V x D)",
      "1180 (1270) x 1520 x 750 (800) mm (mit Griffe mm",
    ],
    ["Ciklus programa", "60 / 90 / 210 s"],
    ["Kapacitet korpe/h", "120 / 80 / 34 korpi/h"],
    ["Punjenje rezervoara", "54,0 l"],
    ["Zapremina vode za ispiranje", "4,8 l/ciklusu"],
    ["Ukupna priključena snaga", "20,1 kW"],
    ["Lokalna zaštita osigurača", "32 A"],
    ["Grejanje bojlera", "18,00 kW / 26,00 A"],
    ["Grejanje rezervoara", "8,00 kW / 17,00 A"],
    ["Pumpa za pranje", "0,75 kW / 4,60 A"],
    ["Zaštitna klasa mašine", "IP X5"],
  ];

  return (
    <>
      <div className="w-full">
        <PageHeader
          title={"M-iClean H - mašine za pranje sa haubom"}
          description={
            " Ergonomsko radno mesto, kratko vreme pranja, brzo sušenje, manje troškova. Sve govori tome u prilog."
          }
        />
        <div className="flex flex-col items-center py-16 px-8 md:px-16 w-full max-w">
          <section className="pt-16 px-8 md:px-16 bg-white">
            <div className="mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
                Dobro došli u raj pranja
              </h2>
              <p className="text-lg md:text-xl leading-8 mb-8">
                Mašina za pranje sa haubom M-iClean H nije nastala na tabli za
                crtanje. Nastala je u kuhinjskoj perionici - to se primeti: tako
                brzo, ekonomično i ergonomično pranje još nikada nije bilo
                moguće. I to sa 80 % manje opterećenja vlage i do 21 % manje
                potrošnje energije. Čudo u pogledu rukovanja i ekonomičnosti.
              </p>
              <p className="text-lg md:text-xl leading-8 mb-8">
                Koncept ergonomije firme MEIKO. Jedinstveno.
              </p>
              <div className="relative w-full h-[400px] mb-8">
                <Image
                  src="https://www.soca.rs/public/images/m-iclean-h-background.png"
                  alt="M-iClean H"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>

          <section className="py-16 px-8 md:px-16 bg-white">
            <FeatureProductAccordionItem
              title="M-iClean HM"
              titleDescription="Zahvaljujući visini ulaznog otvora od 505 mm i dimenzijama korpe od 500 x 500 mm, mašina za pranje posuđa sa haubom M-iClean HM idealna je za pranje velikog posuđa. Automatika haube obezbeđuje manje radno opterećenje osoblja i uz to štedi vreme, i do 30 minuta po ciklusu."
              table={miCleanHMDetails}
              imageUrl="https://www.soca.rs/public/images/m-iclean-hm.jpg"
              dimennsionImageUrl="https://www.soca.rs/public/images/m-iclean-hm-dimenzije.png"
              description={
                "Uz pomoć mašine za pranje posuđa sa haubom M-iClean HM, gomile posuđa se jednostavno tope: pomoću ove ergonomske tehnologije pranja posuđa može da se radi i brzo i ekonomično. I to sa manjim opterećenjem vlagom do 80 % i uštedom energije do čak 21 %. Pravo čudo u pogledu rukovanja i ekonomičnosti. Hauba se otvara i zatvara nežnim dodirom – kao sama od sebe. Mašina za pranje posuđa sa podiznom haubom M-iClean HM osoblju olakšava rad, a ergonomija štedi i vreme i troškove."
              }
              dimensionListUrl={
                "https://www.soca.rs/public/pdf/m-iclean-hm-dimenzije.pdf"
              }
              technicalListUrl={
                "https://www.soca.rs/public/pdf/m-iclean-hm-tehnicki.pdf"
              }
            />
            <FeatureProductAccordionItem
              title="M-iClean HL"
              titleDescription="Ova mašina za pranje posuđa sa podiznom haubom, svojom ulaznom visinom od 560 mm i dimenzijama korpe do 650 x 500 mm, pod svoju automatsku haubu može lagano da primi i veće posuđe. Ergonomski rad, manje pare i optimalni rezultati pranja i sušenja, ovoj mašini sa podiznom haubom ne predstavljaju problem."
              table={miCleanHLDetails}
              imageUrl="https://www.soca.rs/public/images/m-iclean-hl.jpg"
              dimennsionImageUrl="https://www.soca.rs/public/images/m-iclean-hl-dimenzije.png"
              description={
                "Punom snagom protiv zaprljanog posuđa, ali nežno pri rukovanju i čisto i obazrivo prema životnoj sredini. U slučaju mašine za pranje posuđa sa podiznom haubom M-iClean H sve staje pod jednu haubu. I to kakvu haubu! Otvaranje i zatvaranje blagim dodirom - rajski jednostavno. I super brzo. Jer novi ergonomski koncept štedi vreme i troškove. Ušteda vremena pranja do čak 30 minuta dnevno, kao i znatno brže sušenje."
              }
              dimensionListUrl={
                "https://www.soca.rs/public/pdf/m-iclean-hl-dimenzije.pdf"
              }
              technicalListUrl={
                "https://www.soca.rs/public/pdf/m-iclean-hl-tehnicki.pdf"
              }
            />
            <FeatureProductAccordionItem
              title="M-iClean HXL"
              titleDescription="Kada veliko nije dovoljno veliko: mašina za pranje posuđa sa dvostrukom haubom M‐iClean HXL, to uspeva zahvaljujući svoje dve korpe 500 x 500 mm. Uprkos njenoj veličini, uz pomoć automatske haube to je dečja igra. To olakšava posao, skraćuje trajanje pranja i obezbeđuje optimalne rezultate."
              table={miCleanHXLDetails}
              imageUrl="https://www.soca.rs/public/images/m-iclean-hxl.jpg"
              dimennsionImageUrl="https://www.soca.rs/public/images/m-iclean-hxl-dimenzije.png"
              description={
                "Zahvaljujući slobodnoj ulaznoj visini od 505 mm nikakav problem ne predstavlja ni veliko i glomazno posuđe. Tako mašina za pranje posuđa sa dvostrukom haubom higijenski čisto i blistavo pere i šerpe, tiganje i plehove. Iako se dvostruka hauba mašine M-iClean HXL zaista ne ubraja u laku kategoriju, i pored toga može da se podigne bez ikakvog napora. Ušteda vremena i očuvanje resursa za M-iClean HXL takođe nisu strani pojmovi."
              }
              dimensionListUrl={
                "https://www.soca.rs/public/pdf/m-iclean-hxl-dimenzije.pdf"
              }
              technicalListUrl={
                "https://www.soca.rs/public/pdf/m-iclean-hxl-tehnicki.pdf"
              }
            />
          </section>

          <section className="py-16 px-8 md:px-16 bg-gray-50">
            <div className="mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Nagrade i odlikovanja
              </h2>
              <p className="text-lg md:text-xl leading-8 mb-8">
                Sve u vezi sa vrhunskim kvalitetom: u pogledu ambijenta, servisa
                i mašine za pranje. Samopohvala prouzrokuje naravno tračeve -
                zbog toga najviše volimo kada drugi kritički testiraju i
                ocenjuju našu tehniku. Lista odlikovanja i nagrada je duga,
                slobodno bacite pogled. Onda ćemo da nastavimo da razvijamo,
                isprobavamo i poboljšavamo. Do sledeće nagrade.
              </p>
              <div className="relative w-full h-96 mb-8">
                <Image
                  src="https://www.soca.rs/public/images/awards-mi-clean-h.png"
                  alt="Nagrade i odlikovanja"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="text-center">
                <Link href="/kontakt" legacyBehavior passHref>
                  <a className="text-lg font-semibold text-white bg-offRed hover:bg-red-700 transition-all duration-300 py-3 px-6 rounded-md shadow-md">
                    Zatražite ponudu
                  </a>
                </Link>
              </div>
            </div>
          </section>
          <section className="py-16 px-8 md:px-16 bg-white">
            <div className="mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Sve pod jednom haubom
              </h2>
              <p className="text-lg md:text-xl leading-8 mb-8">
                Lak rad, kratko vreme pranja, bolja klima u prostoriji, savršeni
                rezultati, manje prekida rada zbog bolje ergonomije, više
                slobodnog budžeta i optimalna ocena radnog mesta: M-iClean H sve
                smešta pod jednu haubu. Revolucionarna tehnika i promišljeni
                ergonomski koncept to omogućavaju.
              </p>
              <p className="text-lg md:text-xl leading-8 mb-8">
                Vaše potrebe, Vaša M-iClean H mašina za pranje sa haubom: nema
                problema sa našim specijalnim paketima.
              </p>

              <h4 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Paketi
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h5 className="text-xl md:text-2xl font-bold mb-4">
                    Paket ErgonomieKomfort
                  </h5>
                  <p className="text-lg md:text-xl leading-8 mb-4">
                    Sa automatskim prepoznavanjem korpe eliminisan je čak i
                    dodir. Gurnuti korpu sa bočne strane, ostalo sve radi mašina
                    za pranje. Za perfekciju do kraja pobrinuće se promišljeni
                    sto za sušenje - nema sušenja, nema naknadnog poliranja.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h5 className="text-xl md:text-2xl font-bold mb-4">
                    Paket EnergiePur
                  </h5>
                  <p className="text-lg md:text-xl leading-8 mb-4">
                    Sa rekuperacijom toplote otpadne vode i zadržavanjem
                    toplote, neiskorišćena energija pripada prošlosti. Ovde se
                    razmišlja o svemu - bez obzira šta perete.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h5 className="text-xl md:text-2xl font-bold mb-4">
                    Paket Prijatan dodir klime
                  </h5>
                  <p className="text-lg md:text-xl leading-8 mb-4">
                    Radi se o klimi, čak i u kuhinjskoj perionici. Usisavanje
                    pare sa samočišćenjem i rekuperacija toplote otpadne vode
                    predstavljaju ogroman plus za osoblje.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h5 className="text-xl md:text-2xl font-bold mb-4">
                    Paket Čudo od sjaja
                  </h5>
                  <p className="text-lg md:text-xl leading-8 mb-4">
                    Ne sija sve što je zlato, ali savršen rezultat pranja zlata
                    vredi. Paket Čudo od sjaja ne ulazi u kompromise,
                    zahvaljujući GIO MODULU i stolu za sušenje u prošlost odlazi
                    poliranje, sušenje i korozija stakla.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
