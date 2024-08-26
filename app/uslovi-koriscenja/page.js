import PageHeader from "@/components/global/PageHeader";

export const metadata = {
  title: "Uslovi korišćenja - SOĆA Servis Novi Sad",
  description:
    "Pročitajte uslove korišćenja SOĆA Servis sajta. Saznajte više o našim pravilima i odgovornostima.",
  keywords: "uslovi korišćenja, pravila, odgovornosti, SOĆA Servis",
};

export default function UsloviKoriscenja() {
  return (
    <div className="w-full  bg-gray-50 text-night">
      <PageHeader title={`Uslovi korišćenja`} />
      <div className="py-[2rem] px-[2rem] sm:px-[4rem]">
        <section className="mb-16 bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
          <h2 className="text-3xl font-bold mb-6">Uvod</h2>
          <p className="text-lg leading-7 mb-8">
            Dobrodošli na SOĆA Servis sajt. Korišćenjem našeg sajta, pristajete
            na sledeće uslove korišćenja.
          </p>
          <h2 className="text-3xl font-bold mb-6">Prihvatljiva upotreba</h2>
          <p className="text-lg leading-7 mb-8">
            Slažete se da ćete koristiti naš sajt samo za zakonite svrhe i na
            način koji ne narušava prava drugih korisnika.
          </p>
          <h2 className="text-3xl font-bold mb-6">
            Prava intelektualne svojine
          </h2>
          <p className="text-lg leading-7 mb-8">
            Sav sadržaj na sajtu je zaštićen autorskim pravima. Ne smete
            reprodukovati, distribuirati ili koristiti sadržaj bez našeg pisanog
            odobrenja.
          </p>
          <h2 className="text-3xl font-bold mb-6">Ograničenje odgovornosti</h2>
          <p className="text-lg leading-7 mb-8">
            SOĆA Servis neće biti odgovoran za bilo kakvu štetu koja proizilazi
            iz korišćenja sajta.
          </p>
          <h2 className="text-3xl font-bold mb-6">Izmene uslova</h2>
          <p className="text-lg leading-7">
            Zadržavamo pravo da izmenimo ove uslove korišćenja u bilo kom
            trenutku. Izmene će stupiti na snagu odmah nakon objavljivanja na
            sajtu.
          </p>
        </section>
      </div>
    </div>
  );
}
