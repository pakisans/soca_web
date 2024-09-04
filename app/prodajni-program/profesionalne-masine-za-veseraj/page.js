import PageHeader from "@/components/global/PageHeader";
import Link from "next/link";

export const metadata = {
  title: "Profesionalne mašine za vešeraj | SOĆA Servis",
  description:
    "Otkrivamo visokokvalitetne profesionalne mašine za vešeraj, partneri smo proizvođača PRIMUS. Oprema, tehnologija i prateća sredstva koja omogućuju visoku efikasnost, niske troškove i dugotrajnu pouzdanost.",
  author: "SOĆA Servis AD",
  keywords:
    "PRIMUS, profesionalne mašine, vešeraj, oprema za vešeraj, efikasnost, niske troškove, dugotrajna pouzdanost, Novi Sad",
};

export default function ProfesionlneMasineVeseraj() {
  return (
    <section className="bg-mintCream w-full">
      <h1 className="sr-only">Profesionalne mašine za vešeraj - SOĆA Servis</h1>
      <PageHeader title={"Profesionalne mašine za vešeraj"} />
      <div className="py-16 px-[2rem] sm:px-[4rem]">
        <div className="text-left mb-12 w-full">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Današnja dinamika, uslovi življenja i poslovanja, zahteva detaljno
              definisanje i upravljanje poslova vešeraja kako fizičkim licima,
              HORECA sistemima (Hoteli-Restorani-Caffe-i), bolnicama, staračkim
              domovima i drugim korisnicima. Utoliko, traži se oprema,
              tehnologija i prateća sredstva koja će omogućiti visoku
              efikasnost, niske troškove procesa i dugogodišnju pouzdanost.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Partneri smo proizvođača PRIMUS, jednog od lidera u rešenjima,
              proizvodima i sistemima vešeraja i opreme, koji pažljivo prati i
              ispunjava zahteve tržišta.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Da biste definisali, odabrali opremu i efikasno uredili vešeraj,
              neophodno je da se uputite bar u osnovne principe, a u slučaju
              većeg obima poželjna je konsultacija da se dobije detaljan
              proračun, kako bi uložen novac bio investicija, a ne trošak.
            </p>
          </div>
        </div>

        <section className="flex flex-col items-center py-16 px-4 sm:px-8 bg-white w-full mx-auto my-[2rem]">
          <h2 className="text-3xl sm:text-5xl font-bold text-night mb-12">
            Pogledajte dokumente
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <Link
              href="https://www.soca.rs/public/pdf/PrimusSusare.pdf"
              passHref
              className="text-lg font-semibold text-white bg-offRed hover:bg-red-700 transition-all duration-300 py-3 px-6 rounded-md shadow-md text-center"
              rel="noopener noreferrer"
              target="_blank"
            >
              Primus Sušare
            </Link>
            <Link
              href="https://www.soca.rs/public/pdf/PrimusKomercijalniAparati.pdf              "
              passHref
              className="text-lg font-semibold text-white bg-offRed hover:bg-red-700 transition-all duration-300 py-3 px-6 rounded-md shadow-md text-center"
              rel="noopener noreferrer"
              target="_blank"
            >
              Primus Komercijalni Aparati
            </Link>
            <Link
              href="https://www.soca.rs/public/pdf/PrimusValjciZaPeglanje.pdf"
              passHref
              className="text-lg font-semibold text-white bg-offRed hover:bg-red-700 transition-all duration-300 py-3 px-6 rounded-md shadow-md text-center"
              rel="noopener noreferrer"
              target="_blank"
            >
              Primus Valjci za Peglanje
            </Link>
            <Link
              href="https://www.soca.rs/public/pdf/PrimusVesMasine.pdf"
              passHref
              rel="noopener noreferrer"
              target="_blank"
              className="text-lg font-semibold text-white bg-offRed hover:bg-red-700 transition-all duration-300 py-3 px-6 rounded-md shadow-md text-center"
            >
              Primus Veš Mašine
            </Link>
          </div>
        </section>
        <section className="space-y-20 w-full">
          <div className="space-y-10">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="p-8 bg-gunMetal text-mintCream rounded-lg shadow-md transition-transform transform duration-600 md:w-[49%] ease">
                <h3 className="text-2xl sm:text-3xl font-semibold mb-5">
                  Zašto i kada odabrati profesionalne umesto kućnih uređaja?
                </h3>
                <ul className="text-lg leading-relaxed list-disc list-inside ml-5">
                  <li>Kada se prevaziđe radna efikasnost/dnevni kapacitet</li>
                  <li>
                    Kada vek trajanja (par godina) i zastoji u radu zbog
                    popravki + troškovi, prevaziđu posao
                  </li>
                  <li>
                    Ekonomska vrednost po 1kg kapaciteta pranja na nivou 10
                    godina investicije (kupovina opreme + održavanje + popravke)
                    je približno jednaka za sve uređaje
                  </li>
                  <li>
                    Na ciklusu 10 god. upotrebe – 4-5 kom. kućnih veš mašina sa
                    vekom od OKO 3 godine = 1 kom. profesionalne veš mašine
                  </li>
                  <li>
                    Treba birati opremu na nivou dnevnog kapaciteta pranja (što
                    manje zastoja zbog održavanja i kvarova) i optimalnog
                    investiranja
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-davyGray text-mintCream rounded-lg shadow-md transition-transform transform duration-600 md:w-[49%] ease">
                <h3 className="text-2xl sm:text-3xl font-semibold mb-5">
                  Profesionalna oprema vešeraja se deli po efikasnosti rada
                </h3>
                <ul className="text-lg leading-relaxed list-disc list-inside ml-5">
                  <li>
                    Komercijalne (u punom kapacitetu rade 5-7 ciklusa dnevno ili
                    oko 8h rada)
                  </li>
                  <li>
                    Industrijske (u punom kapacitetu rade 10-15 ciklusa dnevno
                    ili oko 16h rada)
                  </li>
                  <li>
                    Aparati sa higijenskom barijerom (bolnice, infektivna
                    odeljenja - odvojen unos prljavog veša u kontaminiranoj
                    prostoriji – iznos čistog veša sa daljom obradom u čistoj
                    prostoriji, kapaciteti i efikasnost na nivou industrijske
                    mašine)
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-8 bg-gunMetal text-mintCream rounded-lg shadow-md transition-transform transform duration-600 ease">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-5">
                Razlika kućnih i profesionalnih (komercijalnih i industrijskih)
                uređaja (primer - veš mašina kapaciteta 10kg)
              </h3>
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-10">
                  <div className="bg-gray-700 p-4 rounded-lg md:w-[49%]">
                    <h4 className="text-xl font-semibold mb-2">Kućna mašina</h4>
                    <ul className="text-lg leading-relaxed list-disc list-inside ml-5">
                      <li>
                        Ne postoji kućna mašina 10 kg – sve su realnog
                        kapaciteta 5-7kg bez obzira na nazivne oznake
                      </li>
                      <li>
                        Svi prozviđači kućnih mašina projektuju radni vek na
                        bazi upotrebe od par ciklusa nedeljno (ne dnevno)
                      </li>
                      <li>
                        Pranje na 90° traje OKO 150 min (aparat se priključuje
                        na monofazni priključak)
                      </li>
                      <li>
                        Izbacivanje vode - pumpom (odvod u zidu u približnoj
                        visini vrata aparata)
                      </li>
                      <li>Nema opcije uzimanja tople vode</li>
                      <li>
                        Prosečna težina (konstruktivna specifičnost) – OKO 70kg
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-lg md:w-[49%]">
                    <h4 className="text-xl font-semibold mb-2">
                      Komercijalna mašina
                    </h4>
                    <ul className="text-lg leading-relaxed list-disc list-inside ml-5">
                      <li>
                        Projektovana za rad do 8h dnevno (oko 10 god. bez
                        velikih remonta)
                      </li>
                      <li>
                        Pranje na 90°C traje OKO 90 min sa hladnom vodom, a sa
                        toplom vodom OKO 70 min (topla voda ubrzava proces, kao
                        i trofazni priključak)
                      </li>
                      <li>
                        Izbacivanje vode – ispusnim ventilom (odvod u nivou poda
                        – brže i efikasnije izbacivanje, bolje ispiranje,
                        OPCIONO zbog uslova rada postoji mogućnost dodavanja
                        pumpe za izbacivanje)
                      </li>
                      <li>Prosečna težina – OKO 120kg</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="text-xl font-semibold mb-2">
                    Industrijska mašina
                  </h4>
                  <ul className="text-lg leading-relaxed list-disc list-inside ml-5">
                    <li>
                      Projektovana za rad do 16h dnevno (oko 10 god. bez velikih
                      remonta)
                    </li>
                    <li>
                      Pranje na 90°C traje oko 90 min sa hladnom vodom, a sa
                      toplom vodom OKO 70 min (topla voda ubrzava proces, kao i
                      trofazni priključak)
                    </li>
                    <li>
                      Izbacivanje vode – ispusnim ventilom (odvod u nivou poda –
                      brže i efikasnije izbacivanje, bolje ispiranje)
                    </li>
                    <li>Prosečna težina – OKO 220kg</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gunMetal text-mintCream rounded-lg shadow-md transition-transform transform duration-600 ease">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-5">
                Specifičnosti profesionalnih mašina za pranje veša
              </h3>
              <ul className="text-lg leading-relaxed list-disc list-inside ml-5">
                <li>
                  Zagarantovani kapacitet
                  <ul className="list-disc list-inside ml-5">
                    <li>
                      Za razliku od kućnih mašina, kod profesionalnih se
                      kapacitet meri realnom zapreminom bubnja u proporciji 1:10
                      (100l bubanj=10kg veša), kod kućnih je to po EU normama
                      koje ne odgovaraju realnoj upotrebi
                    </li>
                  </ul>
                </li>
                <li>
                  Vrste centrifuga
                  <ul className="list-disc list-inside ml-5">
                    <li>
                      Nisko obrtajna centrifuga (veći nivo zaostale vlage, više
                      troškova za proces sušenja), sidre se (čvrsto
                      vezivanje/ankerisanje za podlogu)
                    </li>
                    <li>
                      Visoko obrtajna centifuga (nizak nivo zaostale vlage posle
                      centrifuge, niži trošak u ciklusu sušenja, samostojeće (ne
                      pričvršćuju se za podlogu)
                    </li>
                  </ul>
                </li>
                <li>
                  Energenti (izvor zagrevanja)
                  <ul className="list-disc list-inside ml-5">
                    <li>Električno, trofazni priključak</li>
                    <li>Para pod visokim pritiskom</li>
                  </ul>
                </li>
                <li>
                  Brzo uzimanje vode
                  <ul className="list-disc list-inside ml-5">
                    <li>Više ulaznih priključaka</li>
                    <li>
                      Opcino uzimanje omekšane vode (manje kamenca i mehaničkih
                      ostataka u vodi)
                    </li>
                    <li>
                      Opciono uzimanje pripremljene tople vode (povećana
                      ekonomska i vremenska efikasnost)
                    </li>
                  </ul>
                </li>
                <li>
                  Opciono izdvajanje i prečišćavanje otpadne vode (eko procesi
                  izdvajanja hemije iz vode nakon pranja)
                </li>
                <li>Više ispusnih ventila</li>
                <li>
                  Deterdženti
                  <ul className="list-disc list-inside ml-5">
                    <li>Puder prašak, ili</li>
                    <li>
                      Centralizovano, koncentrivani tečni deterdženti preko
                      sistema pumpi
                    </li>
                  </ul>
                </li>
                <li>Optiload - automatsko merenje količine veša</li>
                <li>
                  Tilt system – hidrauličko naginjanje aparata za lakši
                  unos/iznos veša (za velike kapacitete)
                </li>
                <li>Samouslužne perionice – žeton sistem</li>
                <li>
                  Soft wash – mokro čišćenje (uz upotrebu definisanih sredstava
                  čišćenja, u okviru ciklusa pranja „hemijsko čišćenje“ veša –
                  ne za sve nečistoće)
                </li>
              </ul>
            </div>

            <div className="p-8 bg-offRed text-mintCream rounded-lg shadow-md transition-transform transform duration-600 ease">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-5">
                Specifičnosti valjka za peglanje veša
              </h3>
              <ul className="text-lg leading-relaxed list-disc list-inside ml-5">
                <li>
                  Energenti (izvor zagrevanja)
                  <ul className="list-disc list-inside ml-5">
                    <li>Električno, trofazni priključak</li>
                    <li>Para pod visokim pritiskom</li>
                    <li>Zemni gas</li>
                  </ul>
                </li>
                <li>
                  Način zagrevanja – opciono peglanje uz sušenje
                  <ul className="list-disc list-inside ml-5">
                    <li>
                      Zagrevanje korita (okretanjem valjka se pokreće peglanje,
                      korito se zagreva - površinsko naleganja veša na valjak
                      pri peglanju oko 100°)
                      <ul className="list-disc list-inside ml-5">
                        <li>
                          Peglanje uz delimično sušenje (od 5% do 20% preostale
                          vlage)
                        </li>
                      </ul>
                    </li>
                    <li>
                      Zagrevanje cilindra (trake pokreću peglanje,
                      cilindar/valjak se zagreva - površinsko naleganja veša na
                      valjak pri peglanju preko 200°)
                      <ul className="list-disc list-inside ml-5">
                        <li>
                          Peglanje uz sušenje od 5% do 40% preostale vlage
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  Regulacija temperature i brzine peglanja
                  <ul className="list-disc list-inside ml-5">
                    <li>Fiksna</li>
                    <li>
                      Promenljivi broj obrtaja i temperature – veća efikasnost
                    </li>
                  </ul>
                </li>
                <li>
                  Način ulaganja veša
                  <ul className="list-disc list-inside ml-5">
                    <li>Ručno</li>
                    <li>Automatski</li>
                  </ul>
                </li>
                <li>
                  Izlaz peglanog veša
                  <ul className="list-disc list-inside ml-5">
                    <li>Prolazno/Nazad</li>
                    <li>Povratno/Napred</li>
                  </ul>
                </li>
                <li>
                  Slaganje peglanog veša
                  <ul className="list-disc list-inside ml-5">
                    <li>
                      Opciono
                      <ul className="list-disc list-inside ml-5">
                        <li>Poluautomatsko</li>
                        <li>Automatsko</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-gunMetal text-mintCream rounded-lg shadow-md transition-transform transform duration-600 ease">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-5">
                Za vešeraje kapaciteta do 50-tak kg dnevno, gornje informacije
                su dovoljne za odabir opreme.
              </h3>
              <p className="text-lg leading-relaxed">
                Za velike kapacitete vešeraja je neophodno da korisnik isplanira
                dnevne količine veša, da li će vešeraj biti zatvorenog ili
                otvorenog tipa, koja je pretežna vrsta veša (posteljina se pegla
                na valjku, frotiri se suše u sušari, uniforme se ručno peglaju
                ili automatizovanim finišerima ... ) – tek nakon toga se može
                birati oprema. Svaka greška u dimenzionisanju (davanju podataka
                za vrstu i obim rada) će ili dati nedovoljan kapacitet rada ili
                preveliku investiciju.
              </p>
              <p className="text-lg leading-relaxed">
                Opremu različitih ponuđača treba finansijski porediti isključivo
                ako su istih tehničkih karakteristika – različite karakteristike
                opreme traže dodatno tehničko znanje za finansijsko poređenje.
              </p>
              <p className="text-lg leading-relaxed">
                Našim kupcima, sa zadovoljstvom smo na raspolaganju, da se
                odabere najoptimalnija oprema i investicija za zadati obim rada
                vešeraja, kao i praćenje rada i održavanje opreme.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
