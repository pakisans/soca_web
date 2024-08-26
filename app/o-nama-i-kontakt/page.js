/* eslint-disable react/no-unescaped-entities */
import ContactForm from "@/components/forms/ContactForm";
import GoogleMap from "@/components/global/GoogleMap";
import PageHeader from "@/components/global/PageHeader";
import Image from "next/image";

export const metadata = {
  title: "O nama i Kontakt - SOĆA Servis bele tehnike Novi Sad",
  description:
    "Kontaktirajte nas za servis i popravku bele tehnike u Novom Sadu. Saznajte više o istoriji i delatnostima SOĆA Servis AD, uključujući remont, održavanje i prodaju rezervnih delova za kućne aparate.",
  author: "Servis bele tehnike, Novi Sad",
  keywords:
    "kontakt servis bele tehnike, bela tehnika rezervni delovi, bela tehnika, rezervni delovi bele tehnike, popravka, popravak, popravka bele tehnike, uredjaji popravka, uređaji popravka, rezervni delovi, rezervni delovi za belu tehniku, sporet, šporet, masina, mašina, ves, veš, sudove, sudo, frizider, frižider, bojler, elektricni uredjaji, električni uređaji, Novi Sad, u Novom Sadu, Srbija, Tefal, Krups, Rowenta, Moulinex, Electrolux, AEG, Zanussi, Primus, Liebherr, Franke, usluge servisiranja, profesionalna oprema, oprema za vešeraje, ventilacija, ekološki proizvodi, higijena, održavanje, HORECA sistemi, industrijske veš mašine, sušare, valjci za peglanje",
};

export default function AboutAndContact() {
  return (
    <section className="flex flex-col items-center justify-between  w-full h-full">
      <h1 className="sr-only">
        O nama i Kontakt - SOĆA Servis bele tehnike Novi Sad
      </h1>

      <PageHeader title={"O nama"} />

      <div className="px-[2rem] py-[4rem] sm:px-[4rem]">
        <div className="space-y-20 w-full mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-10 lg:space-y-0 lg:space-x-10">
            <div className="w-full lg:w-1/2">
              <Image
                src="https://www.soca.rs/public/images/soca/o_nama.jpg"
                alt="O nama"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-[2.4rem] md:text-[2.8rem] font-semibold mb-5">
                ISTORIJAT
              </h3>
              <p className="text-[1.6rem] leading-relaxed">
                "Soća servis AD" je osnovan 1990. godine, na "Salajki", jednom
                od dva najstarija dela grada Novog Sada, na tačnoj lokaciji, gde
                su događaji i fakti od pre par vekova dali priču i osnov za
                naziv servisa - Soća.
              </p>
              <p className="text-[1.6rem] leading-relaxed">
                Izvorna delatnost je bila popravka veš mašina, bojlera i
                termičkih uređaja. Kao i svaka mlada firma, proteklo je nekoliko
                godina u "traženju svog mesta na tržištu", što je dovelo do
                razvoja i širenja delatnosti i na druge tehnike (mašine za suđe,
                sušare, ugradna tehnika, frigomehanika).
              </p>
              <h3 className="text-[2.4rem] md:text-[2.8rem] font-semibold mt-10 mb-5">
                ISTORIJA
              </h3>
              <div className="timeline space-y-5">
                {[
                  {
                    year: 1990,
                    text: "Osnivanje 'Soća servis AD' na Salajki.",
                  },
                  {
                    year: 1995,
                    text: "Proširenje delatnosti na trgovinu rezervnim delovima.",
                  },
                  {
                    year: 1997,
                    text: "Potpisivanje prvih ugovora kao garancijski ovlašćen servis.",
                  },
                  {
                    year: 1998,
                    text: "Implementacija prve elektronske obrade podataka.",
                  },
                  {
                    year: 2000,
                    text: "Pokretanje prve web prezentacije.",
                  },
                  {
                    year: 2005,
                    text: "Ugovor sa grupacijom ELECTROLUX.",
                  },
                  {
                    year: 2007,
                    text: "Direktni ugovor sa SEB grupom i FRANKE.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="text-[1.8rem] min-w-[5rem] md:text-[2.0rem] font-bold">
                      {item.year}
                    </div>
                    <div className="flex-1 p-4 bg-gradient-to-r from-gray-600 to-black md:text-[1.6rem] text-mintCream rounded-lg shadow-lg">
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-[2.4rem] md:text-[2.8rem] font-semibold mb-5">
              DELATNOST
            </h3>
            <p className="text-[1.6rem] leading-relaxed">
              "Soća servis AD" se bavi ugradnjom, popravkom i održavanjem
              samostojećih i ugradnih aparata za domaćinstvo, bele tehnike,
              profesionalne ugostiteljske opreme, opreme za vešeraje.
              Servisiranje se radi po ugovoru, u garanciji i van garancije, za
              autorizovane brendove, kao i samostalno, po zahtevu korisnika.
            </p>
          </div>

          <div className="space-y-10">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-[2.4rem] md:text-[2.8rem] font-semibold mb-5">
                VIZIJA
              </h3>
              <p className="text-[1.6rem] leading-relaxed">
                Pružiti premium uslugu - kako u domenu servisiranja aparata bele
                tehnike, profesionalnih uređaja i gastro opreme, tako i u domenu
                prodaje rezervnih delova bele tehnike i aksesoara za male kućne
                aparate, a sve to kroz pružanje kvalitetnih i tačnih informacija
                kupcima.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-[2.4rem] md:text-[2.8rem] font-semibold mb-5">
                MISIJA
              </h3>
              <p className="text-[1.6rem] leading-relaxed">
                Misija "Soća servis AD" jeste da na teritoriji Republike Srbije
                postigne kompletno zaokružen nivo usluge ka korisnicima bele
                tehnike, profesionalnih uređaja ugostiteljstva i gastro opreme.
              </p>
              <p className="text-[1.6rem] leading-relaxed">
                Počevši od preporuka kupovine (asisitiranje u odabiru,
                planiranju i projektovanju uređaja i njegovog okruženja, sistema
                i procesa), preko isporuka, montaže i puštanja u rad, zatim
                preporuke korišćenja, praćenje rada uređaja i opreme, kako za
                vreme garancije, tako i u preostalom životnom veku korišćenja
                uređaja i opreme uz posebno obraćanje pažnje na tehničku
                funkcionalnost, bezbednost korisnika i okoline, ekonomičnog
                korišćenja i upravljanja istima, preko prijava eventualnih
                kvarova, obezbeđivanja delova uz kompletnu uslugu popravke i
                održavanja, do obezbeđivanja prateće opreme i svih sredstava za
                održavanje uređaja u širokom smislu. Tendendcija saradnje je ka
                ugovorenim partnerima i dugoročna saradnja, koja svakako daje
                najbolje rezultate - kako po brzini reagovanja i minimalnim
                brojem kvarova/nedostataka, do najmanjih troškova održavanja i
                maksimalne efikasnosti samih uređaja, što je verujemo cilj
                svakog korisnika. Namera je da se uz kontinualno obrazovanje i
                unapređenje stručne spreme tehničkih lica, kroz korišćenje
                kvalitetnih alata, opreme i savremenih tehnologija - svi procesi
                podignu na nivo visoke efikasnosti i efektivnosti u odnosu na
                cenu pružene usluge, a sve u korist kupca uz poštovanje vremena
                i dogovorenih obaveza, kako od strane prodavca tako i od strane
                kupca.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-20 w-full mx-auto mt-20">
          <div className="text-center">
            <h2 className="text-[3.6rem] leading-[3.6rem] font-bold text-night mx-auto mb-10">
              Kontakt
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-stretch w-full my-10 gap-y-10">
            <div className="bg-gradient-to-r from-gray-700 rounded-tr-lg to-gray-900 text-mintCream p-10 rounded-lg shadow-lg lg:w-[45%] ">
              <div>
                <h3 className="text-mintCream text-center md:text-left text-[2.4rem] md:text-[2.8rem] mb-6">
                  Soća Servis AD, Identifikacioni podaci
                </h3>
                <div className="space-y-6 text-[1.6rem]">
                  <div className="flex flex-col">
                    <div className="flex items-center">
                       <span className="icon text-3xl mr-2">🏠</span>
                      <strong className="text-[1.8rem]">Adresa:</strong>
                    </div>
                    <a
                      href={
                        "https://www.google.com/maps/search/?api=1&query=Đorđa Zličića 9, 21000 Novi Sad"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-11 hover:text-offRed"
                    >
                      Đorđa Zličića 9, 21000 Novi Sad
                    </a>
                  </div>
                  <div>
                    <span className="icon text-3xl mr-2">⏰</span>
                    <strong className="text-[1.8rem]">Radno vreme:</strong>
                    <div className="ml-10">
                      <p>Ponedeljak - petak: 9:00-17:00h</p>
                      <p>Subota: 9:00-13:00h</p>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <span className="icon text-3xl mr-2">📞</span>
                      <strong className="text-[1.8rem]">Tel / Fax:</strong>
                    </div>
                    <div className="ml-10">
                      <p>
                        <a
                          href="tel:+381021444147"
                          className="hover:text-offRed"
                        >
                          (+381) 021 444 147
                        </a>
                      </p>
                      <p>
                        <a
                          href="tel:+3810216339731"
                          className="hover:text-offRed"
                        >
                          (+381) 021 6339 731
                        </a>
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <span className="icon text-3xl mr-2">📱</span>
                      <strong className="text-[1.8rem]">Mobilni:</strong>
                    </div>

                    <p className="ml-10">
                      <a href="tel:+381063444085" className="hover:text-offRed">
                        (+381) 063 444 085
                      </a>
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <span className="icon text-3xl mr-2">📧</span>
                      <strong className="text-[1.8rem]">Email:</strong>
                    </div>

                    <p className="ml-10">
                      <a
                        href="mailto:servis@soca.rs"
                        className="hover:text-offRed"
                      >
                        servis@soca.rs
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-700 rounded-tr-lg to-gray-900 text-mintCream p-10 rounded-lg shadow-lg lg:w-[45%] text-[2.2rem]">
              <ContactForm />
            </div>
          </div>

          <div className="w-full h-full flex flex-col lg:flex-row items-center justify-between gap-y-10 my-10">
            <div className="w-full lg:w-[45%] h-full">
              <p className="mx-auto w-fit mb-10 text-[2.4rem] leading-[3.2rem]">
                Gde se nalazimo?
              </p>
              <GoogleMap />
            </div>
            <div className="w-full lg:w-[45%]">
              <p className="mx-auto w-fit mb-10 text-[2.4rem] leading-[3.2rem]">
                Kako do nas?
              </p>
              <a
                href="https://www.soca.rs/public/images/karta2.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-full h-[30rem] md:h-[40rem] 2xl:h-[50rem] 3xl:h-[60rem] relative">
                  <Image
                    alt="soca mapa"
                    src={"/images/mapa.jpg"}
                    fill
                    className="w-full h-full rounded-[1rem]"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
