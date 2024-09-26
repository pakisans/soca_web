import FeatureProductAccordionItem from "@/components/featuredProducts/FeaturedProductAccordionItem";
import PageHeader from "@/components/global/PageHeader";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "UPster H 500 - Profesionalna mašina za pranje | SOĆA Servis",
  description:
    "Profesionalna mašina za pranje UPster® H 500: trajna snaga sa komfornim pranjem po fer cenama. Idealna za brzo i efikasno pranje velikih posuda.",
  keywords:
    "UPster H 500, mašina za pranje sa haubom, MEIKO, profesionalna upotreba, pranje posuđa, ugostiteljske mašine, automatika programa, AirConcept",
};

export default function UpsterH500Details() {
  const productDetails = [
    ["Kapacitet korpe/h (teoretski)", "60 / 40 / 17 korpi/h"],
    ["Ciklus programa", "60 / 90 / 210 s"],
    ["Dimenzije korpe", "500 x 500 mm (540 x 500 mm)"],
    ["Visina ulaza", "440 mm"],
    [
      "Dimenzije (Š x V x D)",
      "635 (687) x 1470 x 750 (850) mm (sa ručkom haube)",
    ],
    ["Električno napajanje", "3-fazna struja 3N PE 400V 50Hz*"],
    ["Ukupna priključena snaga", "12.0 kW"],
    ["Maksimalna nazivna struja", "21.7 A"],
    ["Lokalna zaštita osigurača", "25 A"],
    ["Zaštitna klasa mašine", "IP X4"],
    [
      "Oprema",
      "Automatski start programa, MIKE kontrola, infracrveni interfejs za bežičnu komunikaciju, pumpa za ispiranje, sigurnosni uređaj za bojler, automatsko samočišćenje pri pražnjenju rezervoara",
    ],
    [
      "Dovod sveže vode",
      "Minimalni pritisak protoka 250 kPa / 2.5 bar ispred solenoidnog ventila, maksimalni pritisak: 500 kPa / 5.0 bar",
    ],
    ["Maksimalna temperatura dovodne vode", "60 °C"],
    ["Količina vode za konačno ispiranje", "3 litara/ciklusu"],
    ["Kapacitet bojlera", "9 l"],
    ["Grejač bojlera", "9.00 kW"],
    ["Temperatura bojlera", "83 °C"],
    ["Punjenje rezervoara za pranje", "22.0 l"],
    ["Grejač rezervoara", "2.00 kW"],
    ["Temperatura rezervoara", "60 °C"],
    ["Pumpa za pranje", "0.75 kW"],
    [
      "Doziranje sredstva za ispiranje",
      "Terminali bez potencijala (promenljivo na 230V) za lokalni sistem doziranja",
    ],
    [
      "Doziranje deterdženta",
      "Terminali bez potencijala (promenljivo na 230V) za lokalni sistem doziranja",
    ],
    [
      "Materijal",
      "Obloga: 1.4301, rezervoar za pranje: 1.4301, bojler: 1.4404",
    ],
    [
      "Emisija toplote za 20 programa/h",
      "Ukupno: 2.1 kW, osetljivo: 1.4 kW, latentno: 0.7 kW",
    ],
    ["Protok ventilacije", "540 m³/h"],
    ["Emisija pare", "1.0 kg/h"],
    ["Nivo buke na radnom mestu (LpA)", "65 dB"],
    ["Neto / bruto težina", "98.0 kg / 130.0 kg (standardno pakovanje)"],
    [
      "Dimenzije pakovanja (Š x V x D)",
      "730 x 1700 x 870 mm (standardno pakovanje)",
    ],
  ];

  return (
    <>
      <div className="w-full">
        <PageHeader
          title={"UPster H 500 - Profesionalna mašina za pranje"}
          description={
            "Super komforno pranje vrhunskog kvaliteta. UPster® H 500: trajna snaga sa komfornim pranjem po fer cenama. Idealan za sve profesionalne potrebe."
          }
        />
        <div className="flex flex-col items-center py-16 px-8 md:px-16 w-full max-w">
          <section className="pt-16 px-8 md:px-16 bg-white">
            <div className="mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Ovako i pranje postaje zabavno
              </h2>
              <p className="text-lg md:text-xl leading-8 mb-8">
                Profesionalna mašina za pranje UPster® H 500: trajna snaga sa
                komfornim pranjem po fer cenama. Nema oblaka pare pri otvaranju,
                udobna automatika za startovanje programa. Savladava i visoke
                posude za pranje kao npr. velike tanjire, plate i poslužavnike.
              </p>
              <p className="text-lg md:text-xl leading-8 mb-8">
                Na raspolaganju verovatno od leta 2018.
              </p>
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="flex-1">
                  <ul className="list-disc pl-5 space-y-2 text-lg md:text-xl mb-6 md:mb-8">
                    <li>
                      Više nego dovoljno mesta za veliko i malo sa visinom
                      ulaznog otvora 440 mm
                    </li>
                    <li>
                      Higijenska sigurnost bez kompromisa zahvaljujući
                      digitalnom pokazivaču temperature
                    </li>
                    <li>
                      Jednostavno rukovanje sa automatikom za pokretanje
                      programa
                    </li>
                    <li>
                      Trajno pouzdani rezultati pranja zahvaljujući pumpi za
                      povećanje pritiska
                    </li>
                    <li>
                      Nema čekanja ili prekida pogona: tokom regeneracije može
                      da se pere
                    </li>
                    <li>Robusno za zahtevnu profesionalnu upotrebu</li>
                    <li>
                      Velika sigurnost pogona zahvaljujući detekciji curenja
                      vode u podnom koritu
                    </li>
                  </ul>
                </div>
                <div className="flex-1 w-full h-[400px]">
                  <Image
                    src="https://www.soca.rs/public/images/upster-h-500.jpeg"
                    alt="UPster H 500"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 px-8 md:px-16 bg-gray-50">
            <div className="mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Ergonomija i snaga
              </h2>
              <p className="text-lg md:text-xl leading-8 mb-8">
                Super komforno pranje u rekordnom vremenu: UPster® H 500 pere
                sa maksimalnom snagom i najboljim komforom - upravo kod velikog
                prolaza u prostoru pranja. Čak i veliko ili visoko posuđe može
                jednostavno i sasvim komotno da se gurne sa strane u UPster® H
                500. Sad samo još ručicu haube pritisnuti na dole i kreće:
                automatika za početak programa pokreće proces pranja. Još jedan
                plus: pri otvaranju oblaci pare odlaze pozadi, a ne u lice
                osoblja koje radi na pranju. Pored toliko komfora posao postaje
                skoro zadovoljstvo!
              </p>
              <h3 className="text-2xl font-bold mb-4">Komforne opcije:</h3>
              <ul className="list-disc pl-5 space-y-2 text-lg md:text-xl mb-6 md:mb-8">
                <li>Najbolja klima u prostoriji sa MEIKO AirConcept</li>
                <li>Sjaj bez fleka sa MEIKO GiO-MODUL</li>
                <li>
                  Program za promenu vode za jednostavno osvežavanje vode za
                  pranje
                </li>
              </ul>
            </div>
          </section>

          <section className="py-16 px-8 md:px-16 bg-white">
            <FeatureProductAccordionItem
              title="UPster® H 500"
              titleDescription="Profesionalna mašina za pranje UPster® H 500 nudi visoku snagu, komfor i ergonomiju. Idealan izbor za ugostiteljske objekte koji traže efikasnost i kvalitet."
              table={productDetails}
              imageUrl="https://www.soca.rs/public/images/upster-h500.jpg"
              description={
                "Super komforno pranje u rekordnom vremenu: UPster® H 500 pere sa maksimalnom snagom i najboljim komforom. Sa visinom ulaznog otvora od 440 mm, ova mašina može da opere čak i velike tanjire, poslužavnike i drugo visoko posuđe. Ergonomija i snaga se kombinuju za jednostavno rukovanje i pouzdane rezultate pranja."
              }
            />
          </section>
        </div>
      </div>
    </>
  );
}
