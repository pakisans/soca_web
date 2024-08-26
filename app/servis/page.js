import PageHeader from "@/components/global/PageHeader";
import Link from "next/link";

export const metadata = {
  title: "Servis bele tehnike - SOĆA Servis Novi Sad",
  description:
    "Soća Servis pruža održavanje, remont i servis bele tehnike, uključujući veš mašine, sušare, mašine za suđe, šporete i male kućne aparate. Nudimo kvalitetne usluge sa garancijom.",
  keywords:
    "servis bele tehnike, održavanje, popravka, veš mašina, sušara, mašina za suđe, šporet, mali kućni aparati",
};

const brands = [
  { name: "ELECTROLUX", search: "electrolux" },
  { name: "AEG", search: "aeg" },
  { name: "ZANUSSI", search: "zanussi" },
  { name: "TEFAL", search: "tefal" },
  { name: "ROWENTA", search: "rowenta" },
  { name: "KRUPS", search: "krups" },
  { name: "MOULINEX", search: "moulinex" },
  { name: "PRIMUS", search: "primus" },
];

export default function ServisBeleTehnike() {
  return (
    <div className=" bg-gray-50 text-night pb-[4rem]">
      <PageHeader title={"Servis bele tehnike"} />

      <div className="pt-[4rem] px-8 md:px-16 max-w">
        <section className="mb-8 md:mb-16">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
              Održavanje, remont i servis
            </h2>
            <p className="text-base md:text-lg leading-8 md:leading-[2.4rem] mb-6 md:mb-8">
              Soća Servis radi održavanje, remont i servis bele tehnike. Deo tog
              segmenta je samostojeća i ugradna bela tehnika (veš mašina, sušara
              veša, mašina za suđe, šporet, ugradna rerna, ugradna ploča,
              indukcijska ploča, frižider, zamrzivač, kombinovani frižider,
              frižider sa dvoje vrata side by side), kao i mali kućni aparati
              (pegla, usisivač, kućna pekara za hleb, sokovnik, multipraktik).
              Popravke podrazumevaju rad na terenu (dolazak na adresu,
              zakazivanje terenskih popravki), nakon što stranka ugovori
              odgovarajući termin. Servisna radionica je mesto gde se rade
              remonti i velike popravke aparata u domaćinstvu, gde je naša
              obaveza preuzimanje i dostava uređaja. Mali kućni aparati se
              takođe rade u servisnoj radionici (stranka donese uređaj u servis,
              ili ga uslužno dostavlja kurirska služba, odnosno brza pošta).
            </p>
            <p className="text-base md:text-lg leading-8 md:leading-[2.4rem]">
              Svi naši korisnici su navikli na visok stepen saradnje (preporuka
              za isplativost popravke, posao nakon predračuna, preporuke za
              kupovinu, kvalitetni tj. originalni rezervni delovi, povoljna cena
              rezervnih delova), kao i na zavidan nivo usluga (garancija na
              izvršeni rad, efikasni i obučeni majstori, povoljna popravka).
              Jednostavno, naš posao počinje onog trenutka kada vi kupite
              aparat, kako u garanciji, tako i kada garancija istekne – do kraja
              radnog veka aparata, omogućavamo korisniku da uživa u korišćenju
              bele tehnike, a ujedno omogućavamo da tehnička bezbednost po
              korisnika i okolinu bude na odgovarajućem nivou.
            </p>
          </div>
        </section>

        <section className="mb-8 md:mb-16">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
              Profesionalne mašine za pranje posuđa i čaša
            </h2>
            <p className="text-base md:text-lg leading-8 md:leading-[2.4rem] mb-6 md:mb-8">
              U sklopu asortimana usluga koje SZTR Soća servis AD pruža, posebna
              pažnja je posvećena profesionalnim mašinama za pranje posuđa i
              čaša – za koju sa ponosom ističemo da je naša uska
              specijalizacija. Zahvaljujući redovnim edukacijama i seminarima,
              naši tehničari su tu da se pobrinu da Vaša mašina ponovo bude
              operativna za najkraće moguće vreme. Postići higijenski ispravno
              oprano posuđe ili čaše je izuzetno veliki izazov i zahteva pre
              svega kvalitetno savetovanje od strane servisa. Naš tim se bavi
              celokupnim sistemom mašinskog pranja – od pripremanja uslova za
              pravilan rad aparata do isporuke neophodnih sredstava za pranje i
              ispiranje, a sve sa ciljem kako bismo pružili celokupnu uslugu
              tehničke podrške jednom ugostiteljskom objektu.
            </p>
            <p className="text-base md:text-lg leading-8 md:leading-[2.4rem] mb-6 md:mb-8">
              U mogućnosti smo da servisiramo gotovo sve proizvođače
              profesionalnih mašina za pranje posuđa i čaša. Samo neki od njih
              su: MEIKO, Hobart, Winterhalter, Silanos, ATA, MBM, Electrolux,
              Zanussi, Elframo, Kromo, Dihr, Comenda, Jemi, Krupps, Elettrobar,
              Colged i mnogi drugi...
            </p>
          </div>
        </section>

        <section className="mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            Rad u garanciji
          </h2>
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            <p className="text-base md:text-lg leading-8 md:leading-[2.4rem] mb-4">
              SOĆA SERVIS je centralni servis i nosilac servisne mreže za
              Republiku Srbiju za brendove:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-base md:text-lg">
              {brands.map((brand, index) => (
                <li key={index}>
                  <Link
                    href={`/proizvodi?pretraga=${brand.search}`}
                    passHref
                    legacyBehavior
                  >
                    <a className="text-blue-500 hover:text-blue-700 transition-colors duration-200">
                      {brand.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-base md:text-lg leading-8 md:leading-[2.4rem] mt-4 mb-8">
              Vrši se obuka tehničara, upoznavanje sa novim tehnologijama i
              procesima, upoznavanje i upotreba savremenih alata, kao i uvoz i
              distribucija originalnih rezervnih delova i prateće opreme.
            </p>
          </div>
        </section>

        <section className="mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            Rad van garancije
          </h2>
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            <p className="text-base md:text-lg leading-8 md:leading-[2.4rem] mb-4">
              Saradnja sa Gorenjem je odlično razvijena (edukacija, praćenje
              tehničkih novina). Ugovoreno se radi distribucija originalnih
              rezervnih delova Gorenje, kao i potrošni materijal za Gorenje
              aparate.
            </p>
            <p className="text-base md:text-lg leading-8 md:leading-[2.4rem] mb-4">
              Soća Servis radi i druge priznate brendove: Bosch, Siemens,
              Whirlpool, Ariston, Indesit, Hot Point, Beko, Arcelik, Altus,
              Elektrobregenz, Hisense, Privileg, LG, Samsung, Candy, Hansa,
              Midea, Amica...
            </p>
            <p className="text-base md:text-lg leading-8 md:leading-[2.4rem] mb-4">
              Većina potrebnih rezervnih delova se korisnicima isporučuje - sa
              lagera Soća Servisa. Ukoliko eventualno nedostaje potreban
              rezervni deo, ili nije dobavljiv u Srbiji, od inopartnera se
              poručuju delovi najdalje jednom nedeljno.
            </p>
            <p className="text-base md:text-lg leading-8 md:leading-[2.4rem] mb-4">
              Na ovaj način svaka prijava kvara (neispravna veš mašina, ako
              grejač ne radi na šporetu, mašina za suđe neispravna, kućna pekara
              za hleb loše peče hleb, ili bilo koji drugi aparat u domaćinstvu)
              se rešava maksimalno brzo, profesionalno i efikasno, majstori su
              stručni, koriste originalni rezervni deo, po povoljnoj ceni, a za
              ceo posao se obezbeđuje garancija na rad i garancija na ugrađeni
              deo.
            </p>
          </div>
        </section>

        <section className="mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            Oprema za vešeraje i ugostiteljstvo
          </h2>
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              Oprema za vešeraje
            </h3>
            <p className="text-base md:text-lg leading-8 md:leading-[2.4rem] mb-4">
              Prvi segment servisiranja u grupaciji profesionalni uređaji, je
              program opreme za vešeraje. Ona podrazumeva sledeće aparate:
              mašina za pranje veša, mašina za sušenje veša, valjak za sušenje i
              peglanje, valjak za peglanje, sto za peglanje i neutralna oprema.
              Program veš mašina kreće od uređaja kapaciteta 6 kg, za manje
              hotele i restorane, preko modela čiji je kapacitet od 7 do 120kg
              (u verzijama niske ili visoke centrifuge, sa više nivoa
              upravljanja, sve do „žeton sistema“ za samouslužne perionice
              veša), zaključno sa sistemima vešeraja za bolnice i slične
              ustanove sa uslovima higijenske barijere (tehnički i prostorno
              odvojena pripreme prljavog veša, od procesa sušenje i peglanje,
              kao i isporuka čistog veša), sa kapacitetima od 18 do 180kg.
              Popravka i održavanje opreme za vešeraje radi se u dogovoru sa
              korisnicima, kako po pozivu (jednokratna i kratkoročna saradnja)
              tako i ugovoreni sistem popravki i održavanja gde je tehnička
              podrška kompletnija (praćenje aparata, upoznavanje sa načinom
              korišćenja ...), a najpreporučljivije je pratiti opremu celi
              period eksploatacije (puštanje u rad opreme, održavanje, popravke,
              remonti, originalni rezervni delovi, kao i potrošni materijal).
            </p>
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              Oprema za ugostiteljstvo (gastronomska i HoReCa oprema)
            </h3>
            <p className="text-base md:text-lg leading-8 md:leading-[2.4rem] mb-4">
              I u ovom segmentu se korisnicima daje mogućnost više načina
              saradnje: od održavanja i popravke po pozivu (jednokratna
              saradnja), preko sezonske, sve do dugoročno ugovorene saradnje,
              gde Soća Servis preuzima obavezu organizacije i dinamike
              održavanja, i izvođenja neophodnih popravki u ime naručioca. Time
              se zapravo dolazi do maksimalne efikasnosti tehničke podrške, a sa
              druge strane korisnik ima maksimalnu efikasnost opreme uz,
              dugoročno gledano, minimalne troškove.
            </p>
            <p className="text-base md:text-lg leading-8 md:leading-[2.4rem] mb-4">
              Servis ugostiteljske opreme (HORECA) zahteva posebnu dimenziju
              profesionalnosti i posvećenosti. Utoliko pre jer se radi o
              uređajima čiji produkti su u domenu “javne upotrebe”, te utiču na
              zdravlje i bezbednost mnogo šireg kruga ljudi nego kod kućnih
              uređaja. U ovom segmentu neophodno je imati ozbiljnost pristupa, i
              profesionalnost, kako u kvalitetu pružanja usluge, tako u odabiru
              pratećih materijala, rezervnih delova, sve do protokola i
              standarda koji se primenjuju u poslu (norma i standard HACCP). U
              segmentu mašina za pranje suđa i čaša, Soća Servis nudi i održava
              opremu WINTERHALTER, MEIKO, HOBART, MBM, ARISTARCO, ATA, SILANOS,
              ELFRAMO sa kompletnim pratećim programom sredstava za održavanje i
              potrošnog materijala (sredstva za pranje, omekšavanje, čišćenje
              ...).
            </p>
          </div>
        </section>

        <div className="mx-auto w-fit flex flex-col md:flex-row items-center gap-y-8 gap-x-16 mt-16">
          <p className="text-night font-semibold text-xl md:text-2xl leading-8 bg-white shadow-lg rounded-lg p-6 md:p-8 text-center">
            Niste pronašli odgovor koji ste tražili? <br />
            Tu smo da pomognemo! <br /> Kontaktirajte nas za ličnu asistenciju i{" "}
            <br />
            odgovore na pitanja u vezi sa vašim uređajima.
          </p>
          <Link href="/o-nama-i-kontakt" passHref legacyBehavior>
            <a className="text-mintCream bg-gradient-to-r from-gray-700 rounded-tr-xl rounded-bl-xl to-gray-900 p-8 md:p-10 font-bold hover:text-offRed text-xl md:text-3xl transition-colors duration-200 text-center">
              Kontaktirajte nas
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
