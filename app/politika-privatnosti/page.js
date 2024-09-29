// pages/politika-privatnosti.js

import PageHeader from "@/components/global/PageHeader";
import Link from "next/link";

export const metadata = {
  title: "Politika privatnosti - SOĆA Servis Novi Sad",
  description:
    "Saznajte kako SOĆA Servis prikuplja, koristi i štiti vaše lične podatke. Pročitajte našu politiku privatnosti za više informacija.",
  keywords: "politika privatnosti, zaštita podataka, lični podaci, SOĆA Servis",
};

export default function PolitikaPrivatnosti() {
  return (
    <div className="bg-gray-50 text-night">
      <PageHeader title={"Politika privatnosti"} />
      <div className="py-[2rem] px-[2rem] sm:px-[4rem]">
        <section className="mb-16 bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
          <h2 className="text-3xl font-bold mb-6">Uvod</h2>
          <p className="text-lg leading-7 mb-8">
            SOĆA Servis poštuje vašu privatnost i posvećen je zaštiti vaših
            ličnih podataka. Ova politika privatnosti objašnjava kako
            prikupljamo, koristimo i štitimo vaše podatke.
          </p>
          <h2 className="text-3xl font-bold mb-6">Koje podatke prikupljamo</h2>
          <p className="text-lg leading-7 mb-8">
            Prikupljamo informacije koje nam dostavite direktno, kao što su vaše
            ime, adresa e-pošte i broj telefona. Takođe možemo automatski
            prikupljati podatke putem kolačića i drugih tehnologija.
          </p>
          <h2 className="text-3xl font-bold mb-6">
            Kako koristimo vaše podatke
          </h2>
          <p className="text-lg leading-7 mb-8">
            Koristimo vaše podatke za pružanje i poboljšanje naših usluga,
            komunikaciju s vama i poštovanje zakonskih obaveza.
          </p>
          <h2 className="text-3xl font-bold mb-6">Kako štitimo vaše podatke</h2>
          <p className="text-lg leading-7 mb-8">
            Preduzimamo tehničke i organizacione mere kako bismo zaštitili vaše
            podatke od neovlašćenog pristupa, gubitka ili zloupotrebe.
          </p>
          <h2 className="text-3xl font-bold mb-6">Kontakt</h2>
          <p className="text-lg leading-7">
            Ako imate pitanja o našoj politici privatnosti, kontaktirajte nas
            putem e-pošte na{" "}
            <Link
              href="mailto:servis@soca.rs "
              className="text-blue-500 hover:text-blue-700"
              target="_blank"
            >
              servis@soca.rs 
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
