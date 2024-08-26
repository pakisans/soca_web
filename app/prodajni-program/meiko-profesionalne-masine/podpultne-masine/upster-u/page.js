import FeatureProductAccordionItem from "@/components/featuredProducts/FeaturedProductAccordionItem";
import FeaturedProductSlider from "@/components/featuredProducts/FeaturedProductSlider";
import PageHeader from "@/components/global/PageHeader";

export const metadata = {
  title: "UPster U - Tehnički podaci | SOĆA Servis",
  description:
    "Otkrijte industrijsku mašinu za pranje UPster U sa efikasnim rezultatom pranja, komfornim rukovanjem i maksimalnom fleksibilnošću.",
  keywords:
    "UPster U, Meiko, industrijske mašine, pranje posuđa, efikasnost, komfor, fleksibilnost, optimalan odnos cene i kvaliteta, UPster U 400, UPster U 500, UPster U 500 G, UPster U 500 XD",
};

export default function UpsterUDetails() {
  const images = [
    "https://www.soca.rs/public/images/upster-u-stage-1.jpeg",
    "https://www.soca.rs/public/images/upster-u-stage-2.jpeg",
    "https://www.soca.rs/public/images/upster-u-stage-4.jpeg",
    "https://www.soca.rs/public/images/upster-u-stage-5.jpeg",
    "https://www.soca.rs/public/images/upster-u-stage-6.jpeg",
    "https://www.soca.rs/public/images/upster-u-stage-7.jpeg",
    "https://www.soca.rs/public/images/upster-u-stage-8.jpeg",
  ];

  const upster400Details = [
    ["Dimenzije korpe", "400 x 400 mm"],
    ["Visina ulaza", "300 mm"],
    ["Dimenzije (Š x V x D)", "460 x 700 x 600 mm"],
    ["Ciklus programa", "120 / 180 / 240 s"],
    ["Kapacitet korpe/h", "30 / 20 / 15 korpi/h"],
    ["Punjenje rezervoara", "11,0 l"],
    ["Zapremina vode za ispiranje", "2,2 l/ciklusu"],
    ["Ukupna priključena snaga", "3,7 kW"],
    ["Lokalna zaštita osigurača", "16 A"],
    ["Grejanje bojlera", "3,00 kW / 4,33 A"],
    ["Grejanje rezervoara", "2,00 kW / 8,70 A"],
    ["Pumpa za pranje", "0,55 kW / 3,20 A"],
    ["Zaštitna klasa mašine", "IP X4"],
  ];

  const upster500Details = [
    ["Dimenzije korpe", "500 x 500 mm bis 540 x 500 mm"],
    ["Visina ulaza", "420 mm"],
    ["Dimenzije (Š x V x D)", "600 x 820 x 600 mm"],
    ["Ciklus programa", "90 / 120 / 240 s"],
    ["Kapacitet korpe/h", "40 / 30 / 15 korpi/h"],
    ["Punjenje rezervoara", "11,0 l"],
    ["Zapremina vode za ispiranje", "2,6 l/ciklusu"],
    ["Ukupna priključena snaga", "6,9 kW"],
    ["Lokalna zaštita osigurača", "16 A"],
    ["Grejanje bojlera", "6,00 kW / 8,66 A"],
    ["Grejanje rezervoara", "2,00 kW / 8,70 A"],
    ["Pumpa za pranje", "0,55 kW / 4,00 A"],
    ["Zaštitna klasa mašine", "IP X4"],
  ];

  const upster500GDetails = [
    ["Dimenzije korpe", "500 x 500 mm bis 540 x 500 mm"],
    ["Visina ulaza", "315 mm"],
    ["Dimenzije (Š x V x D)", "600 x 700 x 600 mm"],
    ["Ciklus programa", "90 / 120 / 240 s"],
    ["Kapacitet korpe/h", "40 / 30 / 15 korpi/h"],
    ["Punjenje rezervoara", "11,0 l"],
    ["Zapremina vode za ispiranje", "2,6 l/ciklusu"],
    ["Ukupna priključena snaga", "6,9 kW"],
    ["Lokalna zaštita osigurača", "16 A"],
    ["Grejanje bojlera", "6,00 kW / 8,66 A"],
    ["Grejanje rezervoara", "2,00 kW / 8,70 A"],
    ["Pumpa za pranje", "0,55 kW / 4,00 A"],
    ["Zaštitna klasa mašine", "IP X4"],
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    name: "UPster U Series",
    description: metadata.description,
    brand: {
      "@type": "Brand",
      name: "Meiko",
    },
    category: "Industrijske mašine za pranje sudova",
    hasVariant: [
      {
        "@type": "Product",
        name: "UPster U 400",
        description:
          "Ugostiteljska mašina za pranje posuđa UPster® U 400 brzo se isporučuje, brzo instalira, njome se brzo rukuje, a prljavo posuđe brzo pretvara u čisto. Zahvaljujući preglednom displeju i jednostavnim klik simbolima, UPster® U 400 je laka za rukovanje. Izolacija dvostrukih zidova obezbeđuje optimalnu toplotnu izolaciju i minimalnu potrošnju energije. Udoban program samočišćenja i meko pokretanje za veoma blago pranje, čine od UPster® U 400 ekonomsko čudo za savršeno pranje sudova.",
        image: "https://www.soca.rs/public/images/upster-u-400.jpeg",
        sku: "UP400",
        additionalProperty: upster400Details.map(([name, value]) => ({
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
        name: "UPster U 500 M2",
        description:
          "Zahvaljujući prostranim dimenzijama korpe i velikodušnoj ulaznoj visini, UPster® U 500 ugostiteljska mašina za pranje posuđa je pogodna za sve što je potrebno oprati. Njeno meko pokretanje posebno je blago prema osetljivim sudovima. Odličan dodatak za svaki prostor za pranje, koji ne mora da se krije. Jer, usled svog lepog, modernog dizajna, kompaktnih dimenzija od 600 x 810 mm i primene oprobane MEIKO tehnologije, odlično izgleda iza svakog šanka.",
        image: "https://www.soca.rs/public/images/upster-u-500-m2.jpeg",
        sku: "UP500M2",
        additionalProperty: upster500Details.map(([name, value]) => ({
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
        name: "UPster U 500 G M2",
        description:
          "Tu staje sve što treba da bude čisto i sjajno na šanku. Bilo da su u pitanju šoljice, tanjiri ili pribor za jelo, ugostiteljska mašina za pranje posuđa UPster® U 500 G može da ih savlada. Zahvaljujući gornjem sistemu pranja, nijedan ćošak ne ostaje suv. Jednostavno rukovanje sa 3 programska ciklusa i mnogo komfornih detalja, kao što je program za samočišćenje, obezbediće pored toga higijenski i uverljiv rezultat pranja.",
        image: "https://www.soca.rs/public/images/upster-u-500-g-m2.jpeg",
        sku: "UP500GM2",
        additionalProperty: upster500GDetails.map(([name, value]) => ({
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
        name: "UPster U 500 XD",
        description:
          "Pritom smo u perilicu uključili sve što biste i očekivali od uspješne serije UPster ®: robusne i dugovječne materijale, tehnologiju za resursno učinkovito pranje i intuitivno upravljanje. Može je se jednostavno intergrirati u pult ili postaviti na podnožje kako bi njome bilo moguće upravljati na ergonomski način.",
        image: "https://www.soca.rs/public/images/upster-u-500-xd.jpeg",
        sku: "UP500XD",
        offers: {
          "@type": "Offer",
          priceCurrency: "RSD",
          price: null,
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
      <div className="bg-mintCream text-night w-full">
        <PageHeader title={"UPster U - Tehnički podaci"} />
        <div className="pt-[4rem] px-8 md:px-16 max-w">
          <section className="mb-8 md:mb-16">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
                Industrijska mašina za pranje UPster® U
              </h2>
              <p className="text-base md:text-lg leading-8 md:leading-[2.4rem] mb-6 md:mb-8">
                Industrijska mašina za pranje UPster® U: efikasni rezultat
                pranja, komforno rukovanje, maksimalna fleksibilnost i optimalni
                odnos cene i kvaliteta. Sa intuitivnim displejom i digitalnim
                prikazima. Visokokvalitetni materijal i štedljivi rezervoar za
                pranje od 11 litara, izolovano dvostrukim zidovima za optimalnu
                toplotnu izolaciju i minimalnu potrošnju energije.
              </p>
            </div>
          </section>

          <section className="mb-8 md:mb-16">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
                Perač čaša UPster ® U
              </h2>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
                <div className="flex-1">
                  <p className="text-base md:text-lg leading-8 md:leading-[2.4rem] mb-6 md:mb-8">
                    UPster ® perač čaša u sebi sadrži sve prednosti firme MEIKO:
                    čistoća za posuđe i čaše a veliko posuđe se obrađuje sa
                    najboljim rezultatima - naravno sve pod najekonomičnijim
                    uslovima.
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold mb-4">
                    Prednosti
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-base md:text-lg mb-6 md:mb-8">
                    <li>Efikasna potrošnja vode</li>
                    <li>
                      Jednostavno rukovanje zahvaljujući kompletno elektronskom
                      upravljačkom sistemu
                    </li>
                    <li>
                      Higijenska sigurnost bez kompromisa zahvaljujući
                      digitalnom pokazivaču temperature
                    </li>
                    <li>
                      Najbolji rezultati pranja zahvaljujući izuzetnom filteru
                      za lužinu i optimalnom regenerisanje vode u rezervoaru
                    </li>
                    <li>
                      Spolja ostaje hladna i tiha zahvaljujući konstrukciji sa
                      dvostrukim zidovima
                    </li>
                    <li>
                      Robusna i higijenska zahvaljujući izvučenoj komori za
                      pranje sa integrisanom vođicom korpe
                    </li>
                    <li>Jednostavno poručivanje, brza isporuka</li>
                    <li>
                      Čuva čaše i posuđe zahvaljujući pumpi za pranje sa sporim
                      pokretanjem
                    </li>
                  </ul>
                </div>
                <div className="flex-1 w-full h-[50rem]">
                  <FeaturedProductSlider images={images} />
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8 md:mb-16 bg-white p-6 md:p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            <FeatureProductAccordionItem
              title="UPster U 400"
              titleDescription="Ugostiteljska mašina za pranje posuđa UPster ® U 400 sa dimenzijama korpe 400 x 400 mm je jednostavna i udobna za rukovanje. Uspešno savladava i do 30 korpi za sat vremena. Visina od 300 mm pogodna je i za pranje velikih pivskih čaša."
              table={upster400Details}
              imageUrl="https://www.soca.rs/public/images/upster-u-400.jpeg"
              dimennsionImageUrl="https://www.soca.rs/public/images/upster-u-400-dimenzije.png"
              description={
                "Ugostiteljska mašina za pranje posuđa UPster® U 400 brzo se isporučuje, brzo instalira, njome se brzo rukuje, a prljavo posuđe brzo pretvara u čisto. Zahvaljujući preglednom displeju i jednostavnim klik simbolima, UPster® U 400 je laka za rukovanje. Izolacija dvostrukih zidova obezbeđuje optimalnu toplotnu izolaciju i minimalnu potrošnju energije. Udoban program samočišćenja i meko pokretanje za veoma blago pranje, čine od UPster® U 400 ekonomsko čudo za savršeno pranje sudova."
              }
              technicalListUrl={
                "https://www.soca.rs/public/pdf/upster-u-400-tehnicki-list.pdf"
              }
              dimensionListUrl={
                "https://www.soca.rs/public/pdf/upster-u-400-dimenzije.pdf"
              }
            />
            <FeatureProductAccordionItem
              title="UPster U 500 M2"
              titleDescription="UPster ® U 500 je u solidna, svetrana ugostiteljska mašina za pranje posuđa. Zahvaljujući dimenzijama korpe od 500 x 500 mm i ulaznoj visini od 420 mm, savladaće i veće posuđe sa savršenim rezultatom. 3 programska ciklusa i ubedljive vrednosti potrošnje od 2,6 l po ciklusu pranja, čine UPster U zvezdom u pogledu odnosa cene i učinka."
              table={upster500Details}
              imageUrl="https://www.soca.rs/public/images/upster-u-500-m2.jpeg"
              dimennsionImageUrl="https://www.soca.rs/public/images/upster-u-500-dimenzije.png"
              description={
                "Zahvaljujući prostranim dimenzijama korpe i velikodušnoj ulaznoj visini, UPster® U 500 ugostiteljska mašina za pranje posuđa je pogodna za sve što je potrebno oprati. Njeno meko pokretanje posebno je blago prema osetljivim sudovima. Odličan dodatak za svaki prostor za pranje, koji ne mora da se krije. Jer, usled svog lepog, modernog dizajna, kompaktnih dimenzija od 600 x 810 mm i primene oprobane MEIKO tehnologije, odlično izgleda iza svakog šanka."
              }
              technicalListUrl={
                "https://www.soca.rs/public/pdf/upster-u-500-m2-tehnicki.pdf"
              }
              dimensionListUrl={
                "https://www.soca.rs/public/pdf/upster-u-500-m2-dimenzije.pdf"
              }
            />
            <FeatureProductAccordionItem
              title="UPster U 500 G M2"
              titleDescription="Ugostiteljska mašina za pranje posuđa UPster ® U 500 G lepo se uklapa iza svakog šanka, a zahvaljujući svojim dimenzijama od 500 x 500 mm i ulaznoj visini od 315 mm, savladava velike količine posuđa. Naročito čaše za koktele i čaše za vino sa dugačkom nožicom blago se peru usled mekog pokretanja, ali postaju savršeno čiste."
              table={upster500GDetails}
              imageUrl="https://www.soca.rs/public/images/upster-u-500-m-g2.jpeg"
              dimennsionImageUrl="https://www.soca.rs/public/images/upster-u-500-g2-dimenzije.png"
              description={
                "Tu staje sve što treba da bude čisto i sjajno na šanku. Bilo da su u pitanju šoljice, tanjiri ili pribor za jelo, ugostiteljska mašina za pranje posuđa UPster® U 500 G može da ih savlada. Zahvaljujući gornjem sistemu pranja, nijedan ćošak ne ostaje suv. Jednostavno rukovanje sa 3 programska ciklusa i mnogo komfornih detalja, kao što je program za samočišćenje, obezbediće pored toga higijenski i uverljiv rezultat pranja."
              }
              technicalListUrl={
                "https://www.soca.rs/public/pdf/upster-u-500-g-m2-tehnicki.pdf"
              }
              dimensionListUrl={
                "https://www.soca.rs/public/pdf/upster-u-500-g-m2-dimenzije.pdf"
              }
            />
            <FeatureProductAccordionItem
              title="UPster U 500 XD"
              titleDescription="Zahvaljujući UPster® U 500 XD imamo poboljšano rješenje za čisto i higijensko čišćenje različitih predmeta – bilo velikih ili malih. Pritom smo u perilicu uključili sve što biste i očekivali od uspješne serije UPster ®: robusne i dugovječne materijale, tehnologiju za resursno učinkovito pranje i intuitivno upravljanje. Može je se jednostavno intergrirati u pult ili postaviti na podnožje kako bi njome bilo moguće upravljati na ergonomski način. Za daljnje informacije o proizvodu obratite se svom prodajnom partneru."
              imageUrl="https://www.soca.rs/public/images/upster-u-500-xd.jpeg"
              dimennsionImageUrl="https://www.soca.rs/public/images/upster-u-500-xd-dimenzije.png"
              description={
                "Pritom smo u perilicu uključili sve što biste i očekivali od uspješne serije UPster ®: robusne i dugovječne materijale, tehnologiju za resursno učinkovito pranje i intuitivno upravljanje. Može je se jednostavno intergrirati u pult ili postaviti na podnožje kako bi njome bilo moguće upravljati na ergonomski način."
              }
            />
          </section>
        </div>
      </div>
    </>
  );
}
