import ImageSlider from "@/components/global/ImageSlider";
import Faq from "@/components/home/Faq";
import Partners from "@/components/home/Partners";
import CardSection from "@/components/home/CardSection";
import Link from "next/link";

export const metadata = {
  title: "Početna - SOĆA Servis bele tehnike Novi Sad",
  description:
    "Dobrodošli na SOĆA Servis bele tehnike Novi Sad. Pregledajte našu ponudu proizvoda i usluga za vašu belu tehniku.",
  author: "SOĆA Servis bele tehnike Novi Sad",
  keywords:
    "servis bele tehnike, bela tehnika, rezervni delovi, popravka, Novi Sad, SOĆA",
};

export default function Home() {
  const cards = [
    {
      title: "Kako naručiti delove?",
      content:
        "Dodajte željene delove u korpu i pošaljite nam upit o trenutnoj ceni i dostupnosti. Naš tim će vam u najkraćem mogućem roku odgovoriti sa svim potrebnim informacijama.",
      link: { href: "/proizvodi", text: "Ovde izaberite proizvode" },
    },
    {
      title: "Zašto izabrati naše delove?",
      content:
        "Naši delovi su pažljivo odabrani kako bi pružili najbolji kvalitet i dugotrajnost. Kupovinom kod nas, možete biti sigurni da ćete dobiti originalne i pouzdane delove.",
    },
    {
      title: "Informacije o dostavi",
      content:
        "Nudimo brzu i pouzdanu dostavu na sve lokacije. Vaša narudžbina će biti pažljivo upakovana i isporučena u najkraćem mogućem roku. Za sve dodatne informacije o dostavi, slobodno nas kontaktirajte.",
      link: { href: "/o-nama-i-kontakt", text: "kontaktirajte" },
    },
    {
      title: "Prodajni program",
      content:
        "Pregledajte naš širok asortiman proizvoda i usluga koji su pažljivo odabrani kako bi zadovoljili sve vaše potrebe za belom tehnikom.",
      link: { href: "/prodajni-program", text: "Prodajni program" },
    },
    {
      title: "Servis bele tehnike",
      content:
        "Nudimo stručni servis i popravku svih vrsta bele tehnike. Naš tim profesionalaca je tu da vam pomogne u svakom trenutku.",
      link: { href: "/servis", text: "Saznajte više o servisu" },
    },
    {
      title: "Kontaktirajte nas",
      content:
        "Imate pitanja ili trebate savet? Naš tim je tu da vam pomogne. Slobodno nas kontaktirajte putem telefona ili email-a.",
      link: { href: "/o-nama-i-kontakt", text: "Kontaktirajte nas" },
    },
  ];

  return (
    <div className="flex flex-col items-center justify-between w-full">
      <ImageSlider
        images={[
          {
            src: "/images/banner3.png",
            alt: "servis i prodaja bele tehnike",
          },
          {
            src: "/images/banner1.png",
            alt: "servis i prodaja bele tehnike",
          },
        ]}
      />
      <CardSection cards={cards} />
      <Partners />
      <div className="bg-gradient-to-r from-blue-900 via-offRed to-blue-900 text-white py-20 w-full text-center">
    <h2 className="text-[2.4rem] md:text-[3.6rem] font-extrabold mb-6">
      Posetite naš izlog na KupujemProdajem
    </h2>
    <Link
      href="https://rezervni-delovi-bela-tehnika.kpizlog.rs/"
      target="_blank"
      className="inline-flex items-center px-10 py-6 mt-[1rem] bg-white text-[20px] text-blue-700 rounded-xl shadow-2xl hover:bg-gray-100 transition-transform transform hover:scale-110"
    >
      <img
        src="/images/kp-icon.png"
        alt="KupujemProdajem izlog"
        className="w-20 h-20 mr-4"
      />
        Link ka izlogu
    </Link>
  </div>

      <div className="p-16 w-full">
        <Faq />
      </div>
    </div>
  );
}
