import PageHeader from "@/components/global/PageHeader";
import Link from "next/link";

export const metadata = {
  title: "Prodajni Program - Industrijske i Profesionalne Mašine | SOĆA Servis",
  description:
    "Otkrijte naš prodajni program uključujući PRIMUS industrijske mašine za pranje veša, MEIKO profesionalne mašine za pranje posuđa i čaša. Nudimo vrhunske proizvode za industrijsku i komercijalnu upotrebu.",
  author: "SOĆA Servis AD",
  keywords:
    "PRIMUS, MEIKO, industrijske mašine, profesionalne mašine, pranje veša, sušenje veša, valjci za peglanje, pranje posuđa, pranje čaša, Novi Sad",
};

export default function ProdajniProgram() {
  return (
    <section className="flex flex-col bg-gray-50 items-center w-full h-full pb-[4rem]">
      <h1 className="sr-only">
        Prodajni Program - SOĆA Servis bele tehnike Novi Sad
      </h1>
      <PageHeader
        title={"Prodajni program"}
        description={
          "Dobrodošli u naš prodajni program gde možete pronaći najbolje industrijske i profesionalne mašine za pranje i sušenje veša, kao i mašine za pranje posuđa i čaša. Naša ponuda uključuje proizvode vrhunskog kvaliteta koji zadovoljavaju sve vaše potrebe."
        }
      />
      <div className="space-y-20 w-full pt-[4rem] px-[2rem] sm:px-[4rem] pb-[4rem] max-w">
        <div className="flex flex-col items-center space-y-10">
          <div className="w-full flex flex-col md:flex-row-reverse items-center justify-between space-y-6 md:space-y-0 md:space-x-10">
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl font-semibold mb-5">
                PRIMUS industrijske mašine za pranje veša, sušenje veša i valjci
                za peglanje
              </h3>
              <p className="text-lg leading-relaxed">
                PRIMUS je vodeći proizvođač industrijskih mašina za pranje veša,
                sušenje veša i valjke za peglanje. Naša ponuda uključuje visoko
                kvalitetne proizvode koji su dizajnirani da zadovolje sve
                potrebe profesionalnog pranja. PRIMUS mašine su poznate po
                svojoj pouzdanosti, dugotrajnosti i efikasnosti.
              </p>
              <p className="text-lg leading-relaxed">
                Nudimo razne modele industrijskih mašina za pranje veša koje se
                prilagođavaju različitim kapacitetima i zahtevima. Naše mašine
                za sušenje veša pružaju brzo i efikasno sušenje uz minimalnu
                potrošnju energije. Valjci za peglanje PRIMUS su savršeni za
                profesionalnu upotrebu, osiguravajući ravnomerno peglanje i
                odlične rezultate.
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center mt-6">
            <Link
              href="/prodajni-program/profesionalne-masine-za-veseraj"
              className="text-lg font-semibold text-white bg-offRed hover:bg-red-700 transition-all duration-300 py-3 px-6 rounded-md shadow-md"
            >
              Saznajte više
            </Link>
          </div>
          <hr className="w-full border-t-2 border-gray-300 my-10" />

          <div className="w-full flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-10">
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl font-semibold mb-5">
                MEIKO profesionalne mašine za pranje posuđa i čaša
              </h3>
              <p className="text-lg leading-relaxed">
                MEIKO nudi profesionalne mašine za pranje posuđa i čaša koje su
                poznate po svojoj pouzdanosti i efikasnosti. Naša ponuda
                uključuje razne modele koji odgovaraju različitim potrebama i
                kapacitetima. MEIKO mašine su dizajnirane da pruže vrhunske
                performanse i maksimalnu higijenu.
              </p>
              <p className="text-lg leading-relaxed">
                Bez obzira da li vam je potrebna podpultna mašina za pranje čaša
                ili velika mašina za pranje sa haubom, MEIKO ima rešenje za vas.
                Naše mašine su idealne za restorane, hotele i druge
                ugostiteljske objekte gde je neophodno brzo i efikasno pranje
                posuđa.
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center mt-6">
            <Link
              href="/prodajni-program/meiko-profesionalne-masine"
              className="text-lg font-semibold text-white bg-offRed hover:bg-red-700 transition-all duration-300 py-3 px-6 rounded-md shadow-md"
            >
              Saznajte više
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
