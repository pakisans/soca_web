"use client";

import { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import XIcon from "../icons/XIcon";
import CartForm from "../forms/CartForm";
import { useCart } from "@/context/ShopCartContext";
import ImageWithFallback from "../global/ImageWithFallback";

const CartItems = () => {
  const { cartItems, removeFromCart } = useCart();
  const [artikalPodaci, setArtikalPodaci] = useState(
    cartItems.map((item) => ({
      id: item.id,
      kolicina: 1,
      name: item.naziv,
      category: item.kategorija?.replace("-", " "),
      grupa: item.grupa?.replace("-", " "),
      price: item.prodajna_cena,
      sifra: item.sifra,
    }))
  );

  const handleArtikalChange = (id, type, value) => {
    setArtikalPodaci((prevState) =>
      prevState.map((artikal) =>
        artikal.id === id ? { ...artikal, [type]: value } : artikal
      )
    );
  };

  const ukupnaCena = artikalPodaci.reduce(
    (total, artikal) => total + artikal.kolicina * artikal.price,
    0
  );

  useEffect(() => {
    setArtikalPodaci(
      cartItems.map((item) => ({
        id: item.id,
        kolicina: 1,
        name: item.naziv,
        grupa: item.grupa,
        category: item.kategorija,
        price: item.prodajna_cena,
        sifra: item.sifra,
      }))
    );
  }, [cartItems]);

  return (
    <section className="w-full px-[4rem] pt-10 bg-gray-100 animate-fade-in mb-[4rem]">
      <div className="mb-10">
        <h2 className="text-4xl font-bold text-night mb-4 text-left">
          Kako funkcioniše naša usluga?
        </h2>
        <p className="text-xl text-night text-left">
          Pošaljite nam upit za željene proizvode, a naš tim će vam brzo i
          profesionalno odgovoriti sa svim potrebnim informacijama.
        </p>
        <p className="text-xl text-night mt-4 text-left">
          Kupovina kod nas je brza i laka. Dodajte željene proizvode u korpu,
          pošaljite nam upit, a mi ćemo vam se javiti u najkraćem mogućem roku
          sa detaljima o dostupnosti, ceni i roku isporuke. Uvek smo tu da vam
          pomognemo sa svim vašim pitanjima i potrebama.
        </p>
      </div>

      <div className="border-b border-gray-300 mb-10"></div>

      <div className="flex flex-col lg:flex-row lg:space-x-[4rem] space-y-6 lg:space-y-0 pb-[2rem]">
        <div className="flex-grow space-y-6">
          {cartItems.map((item, index) => {
            const artikal = artikalPodaci.find((art) => art.id === item.id);
            return (
              <Fragment key={`fragment-proizvod-${index}`}>
                <div className="w-full flex flex-col lg:flex-row items-center gap-6 p-6 bg-white shadow-md rounded-lg transition-all transform hover:scale-105">
                  <ImageWithFallback
                    src={`https://www.soca.rs/public/${item.imageUrl}`}
                    alt={item.naziv}
                    width={150}
                    height={150}
                    styles="rounded-lg mx-auto"
                  />
                  <div className="flex flex-col gap-2 flex-grow">
                    <div className="flex items-center gap-4">
                      <p className="text-night text-lg">{item.kategorija}</p>
                      <p className="text-night text-lg first-letter:uppercase">
                        {item.grupa}
                      </p>
                    </div>
                    <p className="text-night text-2xl md:text-xl font-semibold first-letter:uppercase">
                      {item.naziv}
                    </p>
                    <p className="text-night text-2xl md:text-xl font-semibold first-letter:uppercase">
                      Sifra: {item.sifra}
                    </p>

                    <p className="text-xl font-bold text-green-600">
                      {item.prodajna_cena} RSD
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 items-end">
                    <div className="flex items-center gap-2">
                      <label className="text-night text-lg">Količina</label>
                      <input
                        type="number"
                        value={artikal?.kolicina || ""}
                        onChange={(e) =>
                          handleArtikalChange(
                            item.id,
                            "kolicina",
                            parseInt(e.target.value)
                          )
                        }
                        className="w-16 p-2 border border-gray-300 rounded-lg text-night text-lg"
                      />
                    </div>
                    <button
                      type="button"
                      aria-label="Obriši iz korpe"
                      className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <XIcon width={20} height={20} color={"#fff"} />
                    </button>
                  </div>
                </div>
              </Fragment>
            );
          })}

          {cartItems?.length === 0 && (
            <p className="text-center text-2xl md:text-4xl text-night mt-10">
              Vaša korpa je prazna
            </p>
          )}

          {cartItems?.length > 0 && (
            <div className="w-full flex justify-end p-6 bg-white shadow-md rounded-lg transition-all transform mt-6">
              <p className="text-night text-2xl md:text-xl font-semibold">
                Ukupna cena:{" "}
                <span className="font-bold text-green-600">
                  {ukupnaCena.toFixed(2)} RSD
                </span>
              </p>
            </div>
          )}
        </div>

        {cartItems?.length > 0 && (
          <div className="flex-shrink-0 lg:w-[40%]">
            <CartForm
              artikalPodaci={artikalPodaci}
              ukupnaCena={ukupnaCena.toFixed(2)}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default CartItems;
