import FeatureProductAccordionItem from "@/components/featuredProducts/FeaturedProductAccordionItem";
import FeaturedProductSlider from "@/components/featuredProducts/FeaturedProductSlider";
import PageHeader from "@/components/global/PageHeader";

export const metadata = {
  title: "DV / FV serije - Tehnički podaci | SOĆA Servis",
  description:
    "Otkrijte industrijske mašine za pranje crnog posuđa iz DV / FV serije firme MEIKO, dizajnirane za visoke performanse i savršene rezultate.",
  keywords:
    "DV / FV serije, MEIKO, industrijske mašine, pranje posuđa, pranje crnog posuđa, efikasnost, ekonomičnost, visoke performanse, šerpe, tiganji, poslužavnici, posude",
};

export default function DVFVSerijeDetails() {
  const images = ["https://www.soca.rs/public/images/dv-270.2.jpeg"];

  const dv270Details = [
    ["Dimenzije korpe", "1310 x 690 mm"],
    ["Visina ulaza", "650 mm"],
    [
      "Dimenzije (Š x Vmin x D)",
      "1490 (1600) x 1792 x 995 (1100) mm (sa ručkom)",
    ],
    ["Ciklus programa", "120 / 240 / 480 s"],
    ["Kapacitet korpe/h (teoretski)", "30 / 15 / 7 korpi/h"],
    ["Punjenje rezervoara", "100,0 l"],
    ["Zapremina vode za ispiranje", "9,0 l/ciklusu"],
    ["Ukupna priključena snaga", "22,9 kW"],
    ["Grejanje bojlera", "18,00 kW / 25,98 A"],
    ["Grejanje rezervoara", "9,00 kW / 12,99 A"],
    ["Pumpa za pranje", "2,20 kW / 4,90 A"],
    ["Zaštitna klasa mašine", "IP X5"],
  ];

  const fv130Details = [
    ["Dimenzije korpe", "850 x 700 mm"],
    ["Visina ulaza", "740 mm"],
    ["Dimenzije (Š x Vmin x D)", "1030 x 1785 x 895 mm"],
    ["Ciklus programa", "120 / 240 / 360 s"],
    ["Kapacitet korpe/h (teoretski)", "30 / 15 / 10 korpi/h"],
    ["Punjenje rezervoara", "85,0 l"],
    ["Zapremina vode za ispiranje", "5,8 l/ciklusu"],
    ["Ukupna priključena snaga", "14,7 kW"],
    ["Grejanje bojlera", "12,00 kW / 17,32 A"],
    ["Grejanje rezervoara", "6,00 kW / 8,66 A"],
    ["Pumpa za pranje", "2,20 kW / 4,90 A"],
    ["Zaštitna klasa mašine", "IP X5"],
  ];

  const fv250Details = [
    ["Dimenzije korpe", "1310 x 700 mm"],
    ["Visina ulaza", "890 mm"],
    ["Dimenzije (Š x Vmin x D)", "1490 x 1935 x 895 mm"],
    ["Ciklus programa", "120 / 240 / 480 s"],
    ["Kapacitet korpe/h (teoretski)", "30 / 15 / 7 korpi/h"],
    ["Punjenje rezervoara", "100,0 l"],
    ["Zapremina vode za ispiranje", "9,0 l/ciklusu"],
    ["Ukupna priključena snaga", "22,9 kW"],
    ["Grejanje bojlera", "18,00 kW / 25,98 A"],
    ["Grejanje rezervoara", "9,00 kW / 12,99 A"],
    ["Pumpa za pranje", "2,20 kW / 4,90 A"],
    ["Zaštitna klasa mašine", "IP X5"],
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    name: "DV / FV Series",
    description: metadata.description,
    brand: {
      "@type": "Brand",
      name: "Meiko",
    },
    category: "Industrijske mašine za pranje sudova",
    hasVariant: [
      {
        "@type": "Product",
        name: "DV 270.2",
        description:
          "Ogromna ulazna visina od 650 mm ove industrijske mašine za pranje posuđa, dozvoljava jednostavno stavljanje i velikih šerpi, tiganja i korpi. Ono što „normalna“ mašina za pranje posuđa ne može da ostvari, ovde se za tren postiže zahvaljujući dinamičnim pumpama visoke snage i reverzibilnom okviru.",
        image: "https://www.soca.rs/public/images/dv-270.2.jpeg",
        sku: "DV2702",
        additionalProperty: dv270Details.map(([name, value]) => ({
          "@type": "PropertyValue",
          name: name,
          value: value,
        })),
        offers: {
          "@type": "Offer",
          priceCurrency: "RSD",
          price: null, // Cena je dostupna na upit
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "Product",
        name: "FV 130.2",
        description:
          "Punih 740 mm ulazne visine obezbeđuju dovoljan prostor za veliko posuđe ili transportne posude. Point2 AirConcept smanjuje izlaznu paru ove industrijske mašine za pranje posuđa. FV 130.2 je tehnički jaka, funkcionalna po svom dizajnu, a upravljanje je potpuno elektronsko.",
        image: "https://www.soca.rs/public/images/fv-130.2.jpeg",
        sku: "FV1302",
        additionalProperty: fv130Details.map(([name, value]) => ({
          "@type": "PropertyValue",
          name: name,
          value: value,
        })),
        offers: {
          "@type": "Offer",
          priceCurrency: "RSD",
          price: null, // Cena je dostupna na upit
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "Product",
        name: "FV 250.2",
        description:
          "Industrijska mašina za pranje posuđa FV 250.2 očarava svojim mnogostranim mogućnostima primene i ogromnim kapacitetom. Zahvaljujući ulaznoj visini od 890 mm mogu istovremeno da se peru dve transportne posude, a integrisani Point2 AirConcept je zadužen za manje pare.",
        image: "https://www.soca.rs/public/images/fv-250.2.jpeg",
        sku: "FV2502",
        additionalProperty: fv250Details.map(([name, value]) => ({
          "@type": "PropertyValue",
          name: name,
          value: value,
        })),
        offers: {
          "@type": "Offer",
          priceCurrency: "RSD",
          price: null, // Cena je dostupna na upit
          availability: "https://schema.org/InStock",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-gray-50 text-night w-full">
        <PageHeader title={"DV / FV serije - Tehnički podaci"} />

        <div className="pt-[4rem] px-8 md:px-16 w-full">
          <section className="mb-8 md:mb-16">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
                Industrijske mašine za pranje posuđa iz DV / FV serije
              </h2>
              <p className="text-base md:text-lg leading-8 md:leading-[2.4rem] mb-6 md:mb-8">
                Industrijske mašine za pranje posuđa kao majstori za sve su
                pravi moćni paketi MEIKO tehnike pranja, koji su dizajnirani za
                visoke performanse i kod velikog posuđa kao što su šerpe,
                tiganji, poslužavnici, posude i više od toga.
              </p>
            </div>
          </section>

          <section className="mb-8 md:mb-16">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
                Prednosti
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-base md:text-lg mb-6 md:mb-8">
                <li>
                  Prvoklasni rezultati čišćenja i pri najmanjim količinama vode
                </li>
                <li>
                  Minimalni operativni troškovi uz sistem finih filtera za
                  lužinu AktivPlus
                </li>
                <li>
                  Rekuperacija toplote i manja predaja pare za bolju klimu u
                  prostoru
                </li>
                <li>Briljantni rezultati pranja sa GIO modulom</li>
                <li>
                  Integrisani infracrveni interfejs za jednostavan prenos
                  podataka
                </li>
                <li>Lako čišćenje glatkih unutrašnjih zidova</li>
                <li>Pregledan sistem površine osetljive na dodir</li>
                <li>
                  Program za promenu vode - za higijenski siguran rezultat
                  pranja
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8 md:mb-16 bg-white p-6 md:p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            <FeatureProductAccordionItem
              title="DV 270.2"
              titleDescription="Ogromna ulazna visina od 650 mm ove industrijske mašine za pranje posuđa, dozvoljava jednostavno stavljanje i velikih šerpi, tiganja i korpi. Ono što „normalna“ mašina za pranje posuđa ne može da ostvari, ovde se za tren postiže zahvaljujući dinamičnim pumpama visoke snage i reverzibilnom okviru."
              table={dv270Details}
              imageUrl="https://www.soca.rs/public/images/dv-270.2.jpeg"
              description={
                "Ova industrijska mašina za pranje posuđa poseduje sve što čini jednog multitalenta: na taj način se radni tokovi u području pranja odvijaju skoro uporedo. Bezkompromisna snaga čini manuelno čišćenje nepotrebnim! Klizni stolovi obezbeđuju da ne dođe do nastajanja praznih hodova - osoblje radi sa ergonomski razumnih aspekata."
              }
              dimennsionImageUrl={
                "https://www.soca.rs/public/images/dv-270-dimenzije.png"
              }
              dimensionListUrl={
                "https://www.soca.rs/public/pdf/DV_270-dimenzije.pdf"
              }
              technicalListUrl={
                "https://www.soca.rs/public/pdf/DV_270-tehnicki.pdf"
              }
            />
            <FeatureProductAccordionItem
              title="FV 130.2"
              titleDescription="Punih 740 mm ulazne visine obezbeđuju dovoljan prostor za veliko posuđe ili transportne posude. Point2 AirConcept smanjuje izlaznu paru ove industrijske mašine za pranje posuđa. FV 130.2 je tehnički jaka, funkcionalna po svom dizajnu, a upravljanje je potpuno elektronsko."
              table={fv130Details}
              imageUrl="https://www.soca.rs/public/images/fv-130.2.jpeg"
              description={
                "FV 130.2 je industrijska mašina za pranje posuđa sa velikim poklopcem iza kog ne samo što može mnogo toga da stane, nego se i krije velika količina atraktivne tehnike. Pravi snažni multitalenat se ne povlači ni pred zagorelim tiganjem. MIKE 2 sistem potpuno elektronski upravlja ovom industrijskom mašinom za pranje posuđa i stara se da reverzibilni sistem pranja, u kombinaciji sa pouzdanim sistemom ispiranja preko obrtne ruke, nijednu želju ne ostavi neispunjenom."
              }
              dimennsionImageUrl={
                "https://www.soca.rs/public/images/fv-130.2-dimenzije.png"
              }
              dimensionListUrl={
                "https://www.soca.rs/public/pdf/FV130.2-dimenzije.pdf"
              }
              technicalListUrl={
                "https://www.soca.rs/public/pdf/FV130.2-tehnicki.pdf"
              }
            />
            <FeatureProductAccordionItem
              title="FV 250.2"
              titleDescription="Industrijska mašina za pranje posuđa FV 250.2 očarava svojim mnogostranim mogućnostima primene i ogromnim kapacitetom. Zahvaljujući ulaznoj visini od 890 mm mogu istovremeno da se peru dve transportne posude, a integrisani Point2 AirConcept je zadužen za manje pare."
              table={fv250Details}
              imageUrl="https://www.soca.rs/public/images/fv-250.2.jpeg"
              description={
                "Industrijska mašina za pranje posuđa koja donosi dinamiku prve klase. Opremljena je Point2 AirConcept-om. Inteligentan koncept rekuperacije toplote obezbeđuje da, čak i u slučaju kontinuirane primene, klima u kuhinjskoj perionici ostane prijatna. Osim toga, ova mašina pere i šerpe i tiganje, poslužavnike, kuhinjski pribor, posude i činije - sve bez ikakvih problema."
              }
              dimennsionImageUrl={
                "https://www.soca.rs/public/images/FV-250.2-dimenzijie.png"
              }
              dimensionListUrl={
                "https://www.soca.rs/public/pdf/FV250.2-dimenzije.pdf"
              }
              technicalListUrl={
                "https://www.soca.rs/public/pdf/FV250.2-tehnicki.pdf"
              }
            />
          </section>
        </div>
      </div>
    </>
  );
}
