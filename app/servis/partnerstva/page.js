import GoogleMapPartners from "@/components/global/GoogleMapPartners";
import PageHeader from "@/components/global/PageHeader";

export const metadata = {
  title: "Ovlašćeni Servisni Partneri - SOĆA Servis",
  description:
    "Pregledajte listu ovlašćenih servisnih partnera SOĆA Servis širom Srbije. Pronađite najbliži servis za popravku i održavanje bele tehnike. SOĆA Servis AD je partner ELECTROLUX grupe (ZANUSSI, ELECTROLUX, AEG).",
  keywords:
    "servis, ovlašćeni servisi, popravka bele tehnike, SOĆA Servis partneri, Frigoelektro, Elektroluks, Servis Stanić, Mizona, ELECTROLUX, ZANUSSI, AEG",
  author: "SOĆA Servis AD",
};

const partners = [
  {
    grad: "Bačka Palanka",
    servis: "Frigoelektro",
    adresa: "Partizanska 22",
    tel: "021/754300",
    lat: 45.2517,
    lng: 19.3981,
  },
  {
    grad: "Beograd",
    servis: "Elektroluks",
    adresa: "Ustanička 194",
    tel: "011/2881040",
    lat: 44.7866,
    lng: 20.4781,
  },
  {
    grad: "Beograd",
    servis: "AZE",
    adresa: "Danila Bojovića 23 lok.3",
    tel: "011/3971449",
    lat: 44.8025,
    lng: 20.4367,
  },
  {
    grad: "Bujanovac",
    servis: "Syla servis bele tehnike",
    adresa: "Karađorđa Petrovića 175",
    tel: "063/3457315",
    lat: 42.4567,
    lng: 21.7669,
  },
  {
    grad: "Čačak",
    servis: "Servis Stanić",
    adresa: "Šumadijska 17",
    tel: "064/1022726",
    lat: 43.8917,
    lng: 20.3492,
  },
  {
    grad: "Jagodina",
    servis: "Elektro",
    adresa: "Slave Đurđević B1",
    tel: "035/8245834",
    lat: 43.9759,
    lng: 21.2584,
  },
  {
    grad: "Kragujevac",
    servis: "COOL",
    adresa: "Kneza Mihaila 52",
    tel: "034/362942",
    lat: 44.0165,
    lng: 20.9114,
  },
  {
    grad: "Kraljevo",
    servis: "Beotehna",
    adresa: "Hajduk Veljkova 1",
    tel: "036/353373",
    lat: 43.7258,
    lng: 20.6897,
  },
  {
    grad: "Kruševac",
    servis: "Frigo Elektro",
    adresa: "Radomira Jakovljevića 48",
    tel: "037/490565",
    lat: 43.5808,
    lng: 21.326,
  },
  {
    grad: "Lazarevac",
    servis: "Marko Nikolić Servis",
    adresa: "Voke Savića 6a",
    tel: "065/4935285",
    lat: 44.385407,
    lng: 20.260059,
  },
  {
    grad: "Loznica",
    servis: "Manojlović",
    adresa: "Bosanska 13",
    tel: "015/897027",
    lat: 44.5308,
    lng: 19.2276,
  },
  {
    grad: "Negotin",
    servis: "PN servis bele tehnike",
    adresa: "Stefanije Mihajlović 19",
    tel: "019/549645",
    lat: 44.2288,
    lng: 22.5296,
  },
  {
    grad: "Niš",
    servis: "Dekster",
    adresa: "Vizanijski Bulevar 16",
    tel: "018/538490",
    lat: 43.3209,
    lng: 21.8958,
  },
  {
    grad: "Nova Pazova",
    servis: "Elektro",
    adresa: "Proleterska 45",
    tel: "022/328462",
    lat: 44.9495,
    lng: 20.2238,
  },
  {
    grad: "Novi Pazar",
    servis: "Rotor",
    adresa: "Stevana Nemanje lamela N",
    tel: "020/314862",
    lat: 43.1372,
    lng: 20.5147,
  },
  {
    grad: "Obrenovac",
    servis: "Šainović & Sinovi",
    adresa: "Belopoljska 1",
    tel: "011/8727737",
    lat: 44.6557,
    lng: 20.1997,
  },
  {
    grad: "Pirot",
    servis: "Frigoservis",
    adresa: "Hajduk Veljka 145",
    tel: "010/313255",
    lat: 43.1548,
    lng: 22.5856,
  },
  {
    grad: "Požarevac",
    servis: "Zener Servis",
    adresa: "Misarska 5",
    tel: "012/550536",
    lat: 44.6197,
    lng: 21.1878,
  },
  {
    grad: "Smederevska Palanka",
    servis: "Mizona",
    adresa: "Vuka Karadžića 81",
    tel: "026/311006",
    lat: 44.365361,
    lng: 20.963699,
  },
  {
    grad: "Sombor",
    servis: "Servis Dale",
    adresa: "Miladina i Nikole Kunić 7",
    tel: "063/554082",
    lat: 45.7722,
    lng: 19.1169,
  },
  {
    grad: "Sremska Mitrovica",
    servis: "Tesla",
    adresa: "Stari Šor 27",
    tel: "022/613792",
    lat: 44.9638,
    lng: 19.6189,
  },
  {
    grad: "Subotica",
    servis: "Kajdocsi",
    adresa: "Timočka 22",
    tel: "024/576433",
    lat: 46.1003,
    lng: 19.6659,
  },
  {
    grad: "Svilajnac",
    servis: "Duta",
    adresa: "Dimitrija Katica bb",
    tel: "035/311720",
    lat: 44.2276,
    lng: 21.1972,
  },
  {
    grad: "Šabac",
    servis: "Servis Stanković",
    adresa: "Doktora Dunjića 1",
    tel: "015/343420",
    lat: 44.7486,
    lng: 19.6912,
  },
  {
    grad: "Užice",
    servis: "Tehnoservis Dunjić",
    adresa: "Dušana Popovića 5",
    tel: "064/3202780",
    lat: 43.8586,
    lng: 19.845,
  },
  {
    grad: "Valjevo",
    servis: "Frigoelektro",
    adresa: "Čegrska 11",
    tel: "014/220839",
    lat: 44.2714,
    lng: 19.8867,
  },
  {
    grad: "Vršac",
    servis: "Beoservis",
    adresa: "Svetozara Miletića 84",
    tel: "013/824126",
    lat: 45.1221,
    lng: 21.2989,
  },
  {
    grad: "Zaječar",
    servis: "Ćure Elektro",
    adresa: "Hajduk Veljkova 73",
    tel: "019/426578",
    lat: 43.9047,
    lng: 22.2898,
  },
  {
    grad: "Zrenjanin",
    servis: "Five elektriK",
    adresa: "Patrijarha Pavla 41",
    tel: "023/511393",
    lat: 45.3843,
    lng: 20.3942,
  },
  {
    grad: "Novi Sad",
    servis: "SOĆA Servis AD",
    adresa: "Đorđa Zličića 9",
    tel: "021/6339731, 021/444147",
    lat: 45.26685248977331,
    lng: 19.836984219044385,
  },
];

export default function ServisPartneri() {
  return (
    <section className="bg-gray-50 w-full h-full pb-[4rem]">
      <PageHeader
        title={"Ovlašćeni Servisni Partneri"}
        description={
          "Pregledajte listu ovlašćenih servisnih partnera SOĆA Servis širom Srbije. Pronađite najbliži servis za popravku i održavanje bele tehnike."
        }
      />

      <div className="w-full pt-[4rem] px-[2rem] sm:px-[4rem] pb-[4rem]">
        <div className="mb-10 mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Naša Mreža Servisnih Partnera
          </h2>
          <p className="text-lg leading-relaxed  mb-4">
            SOĆA SERVIS AD je ekskluzivni partner ELECTROLUX grupe (ZANUSSI,
            ELECTROLUX, AEG) za sve postprodajne aktivnosti u Srbiji. Sa našom
            raširenom mrežom servisnih partnera, garantujemo brzo i efikasno
            servisiranje vaše bele tehnike. Naši ovlašćeni serviseri koriste
            originalne rezervne delove i pružaju vrhunsku uslugu, bilo da je vaš
            uređaj u garanciji ili van nje.
          </p>
          <p className="text-lg leading-relaxed ">
            Naši servisni partneri su strateški raspoređeni širom Srbije, kako
            bismo bili u mogućnosti da pokrijemo sve regione i osiguramo
            maksimalno zadovoljstvo naših korisnika. Pronađite najbliži servis i
            uživajte u bezbrižnom korišćenju svojih kućnih aparata.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1">
            <table className="min-w-full text-[14px] bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-offRed text-white">
                <tr>
                  <th className="px-4 py-2 text-left">Grad</th>
                  <th className="px-4 py-2 text-left">Servis</th>
                  <th className="px-4 py-2 text-left">Adresa</th>
                  <th className="px-4 py-2 text-left">Telefon</th>
                </tr>
              </thead>
              <tbody>
                {partners.map((partner, index) => (
                  <tr
                    key={index}
                    className="cursor-pointer hover:bg-gray-100 transition-all duration-200"
                    data-partner-index={index}
                  >
                    <td className="border px-4 py-2 text-offRed font-semibold">
                      {partner.grad}
                    </td>
                    <td className="border px-4 py-2">{partner.servis}</td>
                    <td className="border px-4 py-2">{partner.adresa}</td>
                    <td className="border px-4 py-2">{partner.tel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex-1">
            <GoogleMapPartners partners={partners} />
          </div>
        </div>
      </div>
    </section>
  );
}
