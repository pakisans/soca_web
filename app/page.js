import ImageSlider from "@/components/global/ImageSlider";
import Faq from "@/components/home/Faq";
import Partners from "@/components/home/Partners";

export const metadata = {
  title: "Početna - SOĆA Servis bele tehnike Novi Sad",
  description:
    "Dobrodošli na SOĆA Servis bele tehnike Novi Sad. Pregledajte našu ponudu proizvoda i usluga za vašu belu tehniku.",
  author: "SOĆA Servis bele tehnike Novi Sad",
  keywords:
    "servis bele tehnike, bela tehnika, rezervni delovi, popravka, Novi Sad, SOĆA",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between">
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

      <Partners />
      <div className="p-[4rem] w-full">
        <Faq />
      </div>
    </div>
  );
}
