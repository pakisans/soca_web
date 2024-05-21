import ContactForm from "@/components/forms/ContactForm";
import GoogleMap from "@/components/global/GoogleMap";
import Image from "next/image";

export const metadata = {
  title: "Kontakt - SOĆA Servis bele tehnike Novi Sad",
  description:
    "Kontaktirajte nas za servis i popravku bele tehnike u Novom Sadu. Nudimo remont, održavanje i prodaju rezervnih delova za kućne aparate. Dostupni smo za sve informacije vezane za naš profesionalni program opreme za belu tehinku.",
  author: "Servis bele tehnike, Novi Sad",
  keywords:
    "kontakt servis bele tehnike, bela tehnika rezervni delovi, bela tehnika, rezervni delovi bele tehnike, popravka, popravak, popravka bele tehnike, uredjaji popravka, uređaji popravka, rezervni delovi, rezervni delovi za belu tehniku, sporet, šporet, masina, mašina, ves, veš, sudove, sudo, frizider, frižider, bojler, elektricni uredjaji, električni uređaji, Novi Sad, u Novom Sadu, Srbija, Tefal, Krups, Rowenta, Moulinex, Electrolux, AEG, Zanussi, Primus, Liebherr, Franke",
};

export default function Contact() {
  return (
    <main className="flex flex-col items-center justify-between p-[4rem] w-full h-full">
      <h1 className="text-[3.6rem] leading-[3.6rem] font-bold text-night mx-auto mb-10">
        Kontakt
      </h1>
      <div className="flex flex-col lg:flex-row justify-between items-stretch w-full my-10 gap-y-10">
        <div className="bg-gradient-to-r from-gray-700 rounded-tr-lg to-gray-900 text-mintCream p-10 rounded-lg shadow-lg lg:w-[45%] ">
          <h2 className="text-mintCream text-center md:text-left text-[2.4rem] md:text-[2.8rem] mb-6">
            Soća Servis AD, Identifikacioni podaci
          </h2>
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
                  <a href="tel:+381021444147" className="hover:text-offRed">
                    (+381) 021 444 147
                  </a>
                </p>
                <p>
                  <a href="tel:+3810216339731" className="hover:text-offRed">
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
                <a href="mailto:servis@soca.rs" className="hover:text-offRed">
                  servis@soca.rs
                </a>
              </p>
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
    </main>
  );
}
