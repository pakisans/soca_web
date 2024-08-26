import FeatureProductAccordionItem from "@/components/featuredProducts/FeaturedProductAccordionItem";
import FeaturedProductSlider from "@/components/featuredProducts/FeaturedProductSlider";
import PageHeader from "@/components/global/PageHeader";

export const metadata = {
  title: "M-iClean U - Tehnički podaci | SOĆA Servis",
  description:
    "Otkrijte sledeću generaciju ugostiteljskih mašina za pranje sudova sa inovativnom tehnologijom pranja posuđa i mnogim prednostima.",
  keywords:
    "M-iClean U, Meiko, ugostiteljske mašine, pranje sudova, rekuperacija toplote, modul GiO, ComfortAir",
};

export default function MicleanUDetails() {
  const images = [
    "https://www.soca.rs/public/images/m-iclean-u-stage-1.jpeg",
    "https://www.soca.rs/public/images/m-iclean-u-stage-2.jpeg",
    "https://www.soca.rs/public/images/m-iclean-u-stage-3.jpeg",
    "https://www.soca.rs/public/images/m-iclean-u-stage-4.jpeg",
  ];

  const miCleanUSDetails = [
    ["Dimenzije korpe", "400 x 400 mm"],
    ["Visina ulaza", "315 mm"],
    ["Dimenzije (Š x V x D)", "460 x 700 x 600 mm"],
    ["Ciklus programa", "90 / 120 / 180 s"],
    ["Kapacitet korpe/h", "40 / 30 / 20 korpi/h"],
    ["Punjenje rezervoara", "7,5 l"],
    ["Zapremina vode za ispiranje", "1,9 l/ciklusu"],
    ["Ukupna priključena snaga", "6,7 kW"],
    ["Lokalna zaštita osigurača", "16 A"],
    ["Grejanje bojlera", "6,00 kW / 8,66 A"],
    ["Grejanje rezervoara", "2,00 kW / 8,70 A"],
    ["Pumpa za pranje", "0,40 kW / 3,46 A"],
    ["Zaštitna klasa mašine", "IP X4"],
  ];

  const miCleanUMDetails = [
    ["Dimenzije korpe", "500 x 500 mm"],
    ["Visina ulaza", "315 mm"],
    ["Dimenzije (Š x V x D)", "600 x 700 x 600 mm"],
    ["Ciklus programa", "90 / 120 / 180 s"],
    ["Kapacitet korpe/h", "40 / 30 / 20 korpi/h"],
    ["Punjenje rezervoara", "11,0 l"],
    ["Zapremina vode za ispiranje", "2,4 l/ciklusu"],
    ["Ukupna priključena snaga", "6,7 kW"],
    ["Lokalna zaštita osigurača", "16 A"],
    ["Grejanje bojlera", "6,00 kW / 8,66 A"],
    ["Grejanje rezervoara", "2,00 kW / 8,70 A"],
    ["Pumpa za pranje", "0,40 kW / 3,46 A"],
    ["Zaštitna klasa mašine", "IP X4"],
  ];

  const miCleanUMPlusDetails = [
    ["Dimenzije korpe", "500 x 500 mm"],
    ["Visina ulaza", "435 mm"],
    ["Dimenzije (Š x V x D)", "600 x 820 x 600 mm"],
    ["Ciklus programa", "90 / 120 / 240 s"],
    ["Kapacitet korpe/h", "40 / 30 / 15 korpi/h"],
    ["Punjenje rezervoara", "11,0 l"],
    ["Zapremina vode za ispiranje", "2,4 l/ciklusu"],
    ["Ukupna priključena snaga", "6,7 kW"],
    ["Lokalna zaštita osigurača", "16 A"],
    ["Grejanje bojlera", "6,00 kW / 8,66 A"],
    ["Grejanje rezervoara", "2,00 kW / 8,70 A"],
    ["Pumpa za pranje", "0,40 kW / 3,46 A"],
    ["Zaštitna klasa mašine", "IP X4"],
  ];

  const miCleanULDetails = [
    ["Dimenzije korpe", "500 x 600 mm"],
    ["Visina ulaza", "435 mm"],
    ["Dimenzije (Š x V x D)", "600 x 820 x 680 mm"],
    ["Ciklus programa", "90 / 120 / 240 s"],
    ["Kapacitet korpe/h", "40 / 30 / 15 korpi/h"],
    ["Punjenje rezervoara", "11,0 l"],
    ["Zapremina vode za ispiranje", "2,8 l/ciklusu"],
    ["Ukupna priključena snaga", "6,7 kW"],
    ["Lokalna zaštita osigurača", "16 A"],
    ["Grejanje bojlera", "6,00 kW / 8,66 A"],
    ["Grejanje rezervoara", "2,00 kW / 8,70 A"],
    ["Pumpa za pranje", "0,40 kW / 3,46 A"],
    ["Zaštitna klasa mašine", "IP X4"],
  ];

  return (
    <div className="bg-mintCream text-night w-full">
      <PageHeader
        title={"M-iClean U - Tehnički podaci"}
        description={
          "Nova ugostiteljska mašina za pranje sudova: M-iClean U. Neverovatno brzo oprano i suvo posuđe"
        }
      />
      <div className="pt-[4rem] px-[2rem] md:px-[4rem] max-w">
        <section className="mb-8 md:mb-16">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            <h2 className="text-3xl md:text-3xl font-bold mb-4 md:mb-6">
              Sledeća generacija ugostiteljskih mašina za pranje sudova
            </h2>
            <p className="text-2xl md:text-lg leading-8 md:leading-[2.4rem] mb-6 md:mb-8">
              M-iClean U nudi čitav spektar inovativne tehnologije pranja
              posuđa. Na optimizovan način. Naziv i važne karakteristike, kao
              npr. intuitivni koncept rukovanja i inteligentna tehnika
              samonadzora, već su se dokazali pa su zadržani. Inače je mnogo
              toga novo. Modul GiO i sastavni delovi za odvajanje od mreže? Da,
              ali već ugrađeni u mašinu. Da bi se omogućilo najkraće trajanje
              instalacije i radova na održavanju. Rekuperacija toplote? Naravno!
              S novom tehnologijom i novim nazivom, ComfortAir, a tu su i
              mnogobrojne prednosti: pare je manje čak do 80%*, radni troškovi
              su niži čak do 21%*, rezultat sušenja je neverovatan, i sve to u
              rekordnom vremenu. Jer je mašina brža za 30 sekundi u odnosu na
              prethodni model*.
            </p>
            <h3 className="text-3xl md:text-3xl font-bold mb-4 md:mb-6">
              Nova serija ugradnih mašina M-iClean U
            </h3>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
              <div className="flex-1">
                <p className="text-2xl md:text-lg leading-8 md:leading-[2.4rem] mb-6 md:mb-8">
                  Nova serija ugradnih mašina M-iClean U postavlja nove
                  standarde kada su u pitanju brzina, smanjenje količine pare i
                  rezultati sušenja. Pri daljem razvoju mašine, naši inženjeri
                  su se posebno koncentrisali na sledeće tri tačke: rekuperaciju
                  toplote (novo: ComfortAir), uređaj za reverznu osmozu (modul
                  GiO) i opciju „Private Label” na displeju. Rezultat: Nova
                  ugostiteljska mašina za pranje sudova M-iClean U ima
                  jedinstvene karakteristike koje menjaju tržište, a korisna je
                  za sve grupe korisnika.
                </p>
                <p className="text-2xl md:text-lg leading-8 md:leading-[2.4rem] mb-6 md:mb-8">
                  MEIKO - The clean solution
                </p>
                <h3 className="text-xl md:text-3xl font-bold mb-4">
                  Prednosti
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-2xl md:text-lg mb-6 md:mb-8">
                  <li>Zbog nove rekuperacije toplote ComfortAir:</li>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Ne vidi se ispuštanje pare</li>
                    <li>
                      Izuzetno dobar rezultat sušenja – poliranje više nikada
                      neće biti potrebno!
                    </li>
                    <li>
                      Ušteda vremena od 30 sekundi* u odnosu na prethodni model
                    </li>
                    <li>Ušteda energije do čak 21 %*</li>
                  </ul>
                  <li>Zbog ugrađenog modula GiO:</li>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Nisu potrebne nikakve građevinske mere pregradnje</li>
                    <li>
                      Potrebno je manje mesta, a niži su i troškovi instalacije
                      i održavanja
                    </li>
                  </ul>
                  <li>
                    Vaš logotip na displeju mašine M-iClean U sa opcijom
                    „Private Label”
                  </li>
                  <li>
                    Optimalna lakoća upotrebe zbog jednostavnog koncepta
                    rukovanja
                  </li>
                  <li>
                    Održiva konstrukcija uređaja zahvaljujući dugotrajnim
                    materijalima – više inoksa, manje plastike, čak i kod vodova
                    za doziranje
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
            title="M-iClean US"
            titleDescription="Tako mala, a tako efikasna: sa dimenzijama korpe 400 x 400 mm, ova ugostiteljska mašina može da stane ispod svakog pulta i u svako područje za pranje posuđa – svuda gde je potrebna. Bez pare i bez naknadnog poliranja M-iClean US, zahvaljujući integrisanom GiO-MODUL-u i rekuperaciji toplote."
            table={miCleanUSDetails}
            imageUrl="https://www.soca.rs/public/images/m-iclean-us.jpg"
            dimennsionImageUrl="https://www.soca.rs/public/images/m-iclean-us-dimenzije.png"
            description={
              "Ugostiteljska mašina za pranje posuđa M-iClean US može brzo da se instalira i smesti, stoga u vrlo kratkom roku može da opere posuđe tako da bude higijenski savršeno. Sa svojom ulaznom visinom od 315 mm, mašina M-iClean US je pogodna i za pranje velikih pivskih čaša, a zahvaljujući dimenzijama korpe od 460 x 700 mm može da stane u svaki ćošak. Signalna ručka sa inteligentnim konceptom boja pokazuje šta M-iClean US upravo radi."
            }
            dimensionListUrl={
              "https://www.soca.rs/public/pdf/m-iclean-us-dimenzije.pdf"
            }
            technicalListUrl={
              "https://www.soca.rs/public/pdf/m-iclean-us-tehnicki.pdf"
            }
          />
          <FeatureProductAccordionItem
            title="M-iClean UM"
            titleDescription="Kada ima naročito puno sudova za pranje, dimenzije korpe 500 x 500 mm i ulazna visina od 315 mm čine M-iClean UM idealnom. Zahvaljujući svom integrisanom GiO MODUL-u i rekuperaciji toplote, ova mašina za pranje posuđa obezbeđuje rezultat pranja i sušenja bez fleka."
            table={miCleanUMDetails}
            imageUrl="https://www.soca.rs/public/images/m-iclean-um.jpg"
            dimennsionImageUrl="https://www.soca.rs/public/images/m-iclean-um-dimenzije.png"
            description={
              "M-iClean UM ugostiteljska mašina za pranje obogaćuje svako područje za pranje posuđa gde može da opere čak i veće posude. Zahvaljujući svojoj prostranosti, spoljnim dimenzijama 600 x 700 mm i ulaznoj visini od 315 mm, M-iClean UM je posebno pogodna za sve što je potrebno oprati. Dizajn očarava ne samo zbog signalne drške sa inteligentnim konceptom boja: dovoljan je samo jedan pogled na M-iClean UM da biste odmah znali šta trenutno radi. Čak i displej privlači pažnju, naročito kada uz pomoć opcije Private Label učitate svoj logotip."
            }
            dimensionListUrl={
              "https://www.soca.rs/public/pdf/m-iclean-um-dimenzije.pdf"
            }
            technicalListUrl={
              "https://www.soca.rs/public/pdf/m-iclean-um-tehnicki.pdf"
            }
          />
          <FeatureProductAccordionItem
            title="M-iClean UM+"
            titleDescription="Zahvaljujući dimenzijama korpe od 500 x 500 mm i ulaznoj visini od 435 mm, u ovu ugostiteljsku mašinu za pranje posuđa može da stane i veće posuđe koje će ona savršeno oprati. Uz to, zahvaljujući integrisanom GiO MODUL-u i rekuperaciji toplote, više nema ručnog poliranja i pare u kuhinji."
            table={miCleanUMPlusDetails}
            imageUrl="https://www.soca.rs/public/images/m-iclean-um-plus.jpg"
            dimennsionImageUrl="https://www.soca.rs/public/images/m-iclean-um-plus-dimenzije.png"
            description={
              "Osim tanjira, pribora za jelo i čaša, morate da perete i glomazno posuđe? Zahvaljujući dimenzijama 600 x 820 mm i ulaznoj visini od 435 mm, ni poslužavnici više ne predstavljaju problem! Inteligentan nadzor sa senzorima dodatno obezbeđuje pouzdanu kontrolu sistema za pranje i filtera, ugrađeni GiO MODUL obezbeđuje savršeno oprano posuđe, a optimizovana rekuperacija toplote ComfortAir ugodnu klimu u prostoriji, brze rezultate pranja i veću energetsku efikasnost."
            }
            dimensionListUrl={
              "https://www.soca.rs/public/pdf/m-iclean-um-plus-dimenzije.pdf"
            }
            technicalListUrl={
              "https://www.soca.rs/public/pdf/m-iclean-um-plus-tehnicki.pdf"
            }
          />
          <FeatureProductAccordionItem
            title="M-iClean UL"
            titleDescription="Najveća varijanta M-iClean ugostiteljskih mašina za pranje posuđa obezbeđuje maksimalan učinak: pri dimenzijama korpe 500 x 600 mm čak ni pranje korpi, GN posuda i plehova ne predstavlja problem. Za prijatnu klimu u prostoriji i rezultat pranja bez fleka zaduženi su GiO MODUL i rekuperacija toplote."
            table={miCleanULDetails}
            imageUrl="https://www.soca.rs/public/images/m-iclean-ul.jpg"
            dimennsionImageUrl="https://www.soca.rs/public/images/m-iclean-ul-dimenzije.png"
            description={
              "Svojim dimenzijama 600 x 820 mm i dubinom od 680 mm, ova ugostiteljska mašina za pranje posuđa može da se koristi i u mesarama i pekarama gde će savršeno oprati čak i glomazno posuđe. Inteligentna signalna drška i displej privlače pažnju svojim izgledom. A najbolje je što se, uprkos tim dimenzijama i efikasnosti, postiže ušteda energije do čak 21 %*. Za to je zaslužna nova rekuperacija toplote ComfortAir. Tako velika, a tako ekonomična!"
            }
            dimensionListUrl={
              "https://www.soca.rs/public/pdf/m-iclean-ul-dimenzije.pdf"
            }
            technicalListUrl={
              "https://www.soca.rs/public/pdf/m-iclean-ul-tehnicki.pdf"
            }
          />
        </section>
      </div>
    </div>
  );
}
