import dynamic from "next/dynamic";

const CartItems = dynamic(() => import("@/components/cart/CartItems"), {
  ssr: false,
});

export const metadata = {
  title: "Korpa - SOĆA Servis bele tehnike Novi Sad",
  description:
    "Pogledajte svoju korpu i nastavite sa kupovinom na SOĆA Servis bele tehnike Novi Sad. Pronađite najbolje proizvode za vas i vaše domaćinstvo.",
  author: "Servis bele tehnike, Novi Sad",
  keywords:
    "korpa, kupovina, proizvodi, bele tehnike, Novi Sad, SOĆA Servis, programatori, elektronike, upravljački elementi, Veš-mašine, Beko, PCB modul",
};

export default function Cart() {
  return (
    <section className="flex flex-col items-center justify-between px-[4rem] w-full h-full py-[4rem]">
      <h1 className="text-[3.6rem] leading-[3.6rem] font-bold text-center mb-10">
        Korpa
      </h1>
      <CartItems />
    </section>
  );
}
