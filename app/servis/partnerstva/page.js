import GoogleMapPartners from '@/components/global/GoogleMapPartners';
import PageHeader from '@/components/global/PageHeader';
import Image from 'next/image';

export const metadata = {
  title: 'Ovlašćeni Servisni Partneri - SOĆA Servis',
  description:
    'Pregledajte listu ovlašćenih servisnih partnera SOĆA Servis širom Srbije. Pronađite najbliži servis za popravku i održavanje bele tehnike. SOĆA Servis AD je partner ELECTROLUX grupe (ZANUSSI, ELECTROLUX, AEG).',
  keywords:
    'servis, ovlašćeni servisi, popravka bele tehnike, SOĆA Servis partneri, Frigoelektro, Elektroluks, Servis Stanić, Mizona, ELECTROLUX, ZANUSSI, AEG',
  author: 'SOĆA Servis AD',
};

const partners = [
  {
    grad: 'Bačka Palanka',
    servis: 'Frigoelektro',
    adresa: 'Partizanska 22',
    tel: '021/754300',
    lat: 45.24844735316703,
    lng: 19.389006221290547,
  },
  {
    grad: 'Beograd',
    servis: 'Elektroluks',
    adresa: 'Ustanička 194',
    tel: '011/2881040',
    lat: 44.78249419252231,
    lng: 20.507250167953895,
  },
  {
    grad: 'Beograd',
    servis: 'AZE',
    adresa: 'Danila Bojovića 23 lok.3',
    tel: '011/3971449',
    lat: 44.77295190414021,
    lng: 20.481224712514756,
  },
  {
    grad: 'Bujanovac',
    servis: 'Syla servis bele tehnike',
    adresa: 'Karađorđa Petrovića 175',
    tel: '063/3457315',
    lat: 42.4567,
    lng: 21.7669,
  },
  {
    grad: 'Čačak',
    servis: 'Servis Stanić',
    adresa: 'Šumadijska 17',
    tel: '064/1022726',
    lat: 43.8917,
    lng: 20.3492,
  },
  {
    grad: 'Jagodina',
    servis: 'Elektro',
    adresa: 'Slave Đurđević B1',
    tel: '035/8245834',
    lat: 43.9759,
    lng: 21.2584,
  },
  {
    grad: 'Kragujevac',
    servis: 'COOL',
    adresa: 'Kneza Mihaila 52',
    tel: '034/362942',
    lat: 44.0165,
    lng: 20.9114,
  },
  {
    grad: 'Kraljevo',
    servis: 'Beotehna',
    adresa: 'Hajduk Veljkova 1',
    tel: '036/353373',
    lat: 43.7258,
    lng: 20.6897,
  },
  {
    grad: 'Kruševac',
    servis: 'Frigo Elektro',
    adresa: 'Radomira Jakovljevića 48',
    tel: '037/490565',
    lat: 43.5808,
    lng: 21.326,
  },
  {
    grad: 'Lazarevac',
    servis: 'Marko Nikolić Servis',
    adresa: 'Voke Savića 6a',
    tel: '065/4935285',
    lat: 44.385407,
    lng: 20.260059,
  },
  {
    grad: 'Loznica',
    servis: 'Manojlović',
    adresa: 'Bosanska 13',
    tel: '015/897027',
    lat: 44.5308,
    lng: 19.2276,
  },
  {
    grad: 'Negotin',
    servis: 'PN servis bele tehnike',
    adresa: 'Stefanije Mihajlović 19',
    tel: '019/549645',
    lat: 44.2288,
    lng: 22.5296,
  },
  {
    grad: 'Niš',
    servis: 'Dekster',
    adresa: 'Vizanijski Bulevar 16',
    tel: '018/538490',
    lat: 43.3209,
    lng: 21.8958,
  },
  {
    grad: 'Nova Pazova',
    servis: 'Elektro',
    adresa: 'Proleterska 45',
    tel: '022/328462',
    lat: 44.9495,
    lng: 20.2238,
  },
  {
    grad: 'Novi Pazar',
    servis: 'Rotor',
    adresa: 'Stevana Nemanje lamela N',
    tel: '020/314862',
    lat: 43.1372,
    lng: 20.5147,
  },
  {
    grad: 'Obrenovac',
    servis: 'Šainović & Sinovi',
    adresa: 'Belopoljska 1',
    tel: '011/8727737',
    lat: 44.6557,
    lng: 20.1997,
  },
  {
    grad: 'Pirot',
    servis: 'Frigoservis',
    adresa: 'Hajduk Veljka 145',
    tel: '010/313255',
    lat: 43.1548,
    lng: 22.5856,
  },
  {
    grad: 'Požarevac',
    servis: 'Zener Servis',
    adresa: 'Misarska 5',
    tel: '012/550536',
    lat: 44.6197,
    lng: 21.1878,
  },
  {
    grad: 'Smederevska Palanka',
    servis: 'Mizona',
    adresa: 'Vuka Karadžića 81',
    tel: '026/311006',
    lat: 44.365361,
    lng: 20.963699,
  },
  {
    grad: 'Sombor',
    servis: 'Servis Dale',
    adresa: 'Miladina i Nikole Kunić 7',
    tel: '063/554082',
    lat: 45.7722,
    lng: 19.1169,
  },
  {
    grad: 'Sremska Mitrovica',
    servis: 'Tesla',
    adresa: 'Stari Šor 27',
    tel: '022/613792',
    lat: 44.9638,
    lng: 19.6189,
  },
  {
    grad: 'Subotica',
    servis: 'Kajdocsi',
    adresa: 'Timočka 22',
    tel: '024/576433',
    lat: 46.1003,
    lng: 19.6659,
  },
  {
    grad: 'Svilajnac',
    servis: 'Duta',
    adresa: 'Dimitrija Katica bb',
    tel: '035/311720',
    lat: 44.2276,
    lng: 21.1972,
  },
  {
    grad: 'Šabac',
    servis: 'Servis Stanković',
    adresa: 'Doktora Dunjića 1',
    tel: '015/343420',
    lat: 44.7486,
    lng: 19.6912,
  },
  {
    grad: 'Užice',
    servis: 'Tehnoservis Dunjić',
    adresa: 'Dušana Popovića 5',
    tel: '060/3242070',
    lat: 43.8586,
    lng: 19.845,
  },
  {
    grad: 'Valjevo',
    servis: 'Frigoelektro',
    adresa: 'Čegrska 11',
    tel: '014/220839',
    lat: 44.2714,
    lng: 19.8867,
  },
  {
    grad: 'Vršac',
    servis: 'Beoservis',
    adresa: 'Svetozara Miletića 84',
    tel: '013/824126',
    lat: 45.1221,
    lng: 21.2989,
  },
  {
    grad: 'Zaječar',
    servis: 'Ćure Elektro',
    adresa: 'Hajduk Veljkova 73',
    tel: '019/426578',
    lat: 43.9047,
    lng: 22.2898,
  },
  {
    grad: 'Zrenjanin',
    servis: 'Five elektriK',
    adresa: 'Patrijarha Pavla 41',
    tel: '023/511393',
    lat: 45.3843,
    lng: 20.3942,
  },
  {
    grad: 'Novi Sad',
    servis: 'SOĆA Servis AD',
    adresa: 'Đorđa Zličića 9',
    tel: '021/6339731, 021/444147',
    lat: 45.26685248977331,
    lng: 19.836984219044385,
  },
];

export default function ServisPartneri() {
  return (
    <section className="bg-gray-50 w-full h-full pb-[4rem]">
      <PageHeader
        title={'Ovlašćeni Servisni Partneri'}
        description={
          'Pregledajte listu ovlašćenih servisnih partnera SOĆA Servis širom Srbije. Pronađite najbliži servis za popravku i održavanje bele tehnike.'
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

      <div className="w-full flex flex-col items-center py-16 px-[2rem] md:px-[4rem] bg-gradient-to-r from-gray-600 to-black text-white rounded-lg shadow-lg border-t border-t-white mt-10">
        <h2 className="text-4xl md:text-6xl text-center sm:text-left leading-[3.6rem] font-bold animate-fade-in">
          Partnerstvo Electrolux/Aeg/Zanussi
        </h2>

        <p className="text-[1.8rem] 2xl mt-8 text-left animate-slide-down">
          SOĆA SERVIS AD je partner ELECTROLUX grupe (ZANUSSI, ELECTROLUX, AEG)
          za postprodajne aktivnosti u garanciji i van garancije za teritoriju
          Republike Srbije. Naš zadatak je da korisnici proizvoda ELECTROLUX
          grupe potvrde maksimalno poverenje i uživaju u ovim tehničkim
          rešenjima. Pronađite uređaje i delove koji vam trebaju i uživajte u
          bezbrižnom korišćenju.
        </p>

        <div className="flex flex-col lg:flex-row items-start gap-10 mt-[40px]">
          <div className="lg:w-1/5 w-[50%] mx-auto h-[100px] relative">
            <Image
              src="https://www.soca.rs/public/images/soca/electrolux.jpg"
              alt="Electrolux"
              className="lg:w-1/5 w-full rounded-md shadow-md"
              fill
            />
          </div>
          <div className="lg:w-4/5">
            <strong className="text-xl">ELECTROLUX</strong>
            <p className="mt-2 text-lg">
              je brend više klase koji je spreman da zadovolji potrebe zahtevnih
              korisnika, kako u smislu dizajna, tako i u smislu korišćenja, a
              pogotovo u smislu tehnoloških inovacija. Sve inovacije i
              proizvodna rešenja su bazirana na visokim ekološkim standardima.
            </p>
            <p className="mt-2 text-[1.4rem]">
              Za više detalja idite na:{' '}
              <a
                href="http://www.electrolux.rs/"
                target="_blank"
                className="text-offRed hover:underline text-[1.6rem]"
              >
                www.electrolux.rs
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10 mt-[20px]">
          <div className="lg:w-1/5 w-[50%] mx-auto h-[100px] relative">
            <Image
              src="https://www.soca.rs/public/images/soca/aeg.jpg"
              alt="AEG"
              className="lg:w-1/5 w-full rounded-md shadow-md"
              fill
            />
          </div>
          <div className="lg:w-4/5">
            <strong className="text-xl">AEG</strong>
            <p className="mt-2 text-lg">
              je brend premium tehnologije koji korisnicima nudi ultimativno
              visok nivo korišćenja i efikasnosti sa estetski uzvišenim
              tehnološkim dizajnom aparata. Pripada retkoj grupi svetskih
              proizvođača ultimativne tehnike.
            </p>
            <p className="mt-2 text-[1.4rem]">
              Za više detalja idite na:{' '}
              <a
                href="http://www.aeg.com/en/AEG_Products/Home_products/"
                target="_blank"
                className="text-offRed hover:underline text-[1.6rem]"
              >
                www.aeg.com
              </a>
            </p>
          </div>
        </div>

        {/** Zanussi */}
        <div className="flex flex-col lg:flex-row items-start gap-10 mt-[20px]">
          <img
            src="https://www.soca.rs/public/images/soca/zanussi.jpg"
            alt="Zanussi"
            className="lg:w-1/5 w-[50%] mx-auto rounded-md shadow-md"
          />
          <div className="lg:w-4/5">
            <strong className="text-xl">ZANUSSI</strong>
            <p className="mt-2 text-lg">
              je brend koji mami svojom pouzdanošću i postojanošću, namenjen za
              široke narodne mase, veoma pristupačnog cenovnog razreda. Njegova
              tehnička rešenja su jednostavna, efikasna i ekološki usklađena.
            </p>
            <p className="mt-2 text-[1.4rem]">
              Za više detalja idite na:{' '}
              <a
                href="http://zanussi.com/"
                target="_blank"
                className="text-offRed hover:underline text-[1.6rem]"
              >
                www.zanussi.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center py-16 px-[2rem] md:px-[4rem] bg-mintCream text-black rounded-lg shadow-lg border-t border-t-gray-300">
        <h3 className="text-4xl md:text-6xl text-center sm:text-left leading-[3.6rem] font-bold animate-fade-in">
          Partnerstvo Tefal, Krups, Rowenta, Moulinex
        </h3>

        <p className="text-[1.8rem] mt-8 text-left animate-slide-down">
          SOĆA SERVIS se trudi da svi korisnici proizvoda Tefal, Moulinex,
          Rowenta i Krups imaju maksimalni doživljaj kvaliteta i konfora. U
          saradnji sa našim servis partnerima, obezbeđujemo efikasno rešavanje
          problema i originalne delove za vaše uređaje.
        </p>

        {/** Tefal */}
        <div className="flex flex-col lg:flex-row items-start gap-10 mt-[40px] w-full">
          <div className="lg:w-1/5 w-[50%] mx-auto h-[100px] relative">
            <Image
              src="https://www.soca.rs/public/images/soca/tefal.jpg"
              alt="Tefal"
              className="rounded-md shadow-md"
              fill
            />
          </div>
          <div className="flex flex-col w-full">
            <strong className="text-xl">TEFAL</strong>
            <p className="mt-2 text-lg">
              Tefal proizvodi male kućne aparate i posuđe sa površinama koje se
              ne lepe, idealne za pripremanje hrane. Ovi proizvodi garantuju
              kvalitet i jednostavnost korišćenja.
            </p>
            <p className="mt-2 text-[1.4rem]">
              Za više detalja idite na:{' '}
              <a
                href="http://www.tefal.co.rs/"
                target="_blank"
                className="text-offRed hover:underline text-[1.6rem]"
              >
                www.tefal.co.rs
              </a>
            </p>
          </div>
        </div>

        {/** Krups */}
        <div className="flex flex-col lg:flex-row items-start gap-10 mt-[20px] w-full">
          <div className="lg:w-1/5 w-[50%] mx-auto h-[100px] relative">
            <Image
              src="https://www.soca.rs/public/images/soca/krups.jpg"
              alt="Krups"
              className="rounded-md shadow-md"
              fill
            />
          </div>
          <div className="flex flex-col w-full">
            <strong className="text-xl">KRUPS</strong>
            <p className="mt-2 text-lg">
              Krups je nemački proizvođač poznat po svojim kućnim aparatima,
              uključujući kafe aparate i multipraktike, koji su sinonim za
              kvalitet i inovaciju.
            </p>
            <p className="mt-2 text-[1.4rem]">
              Za više detalja idite na:{' '}
              <a
                href="http://www.krups.co.rs/"
                target="_blank"
                className="text-offRed hover:underline text-[1.6rem]"
              >
                www.krups.co.rs
              </a>
            </p>
          </div>
        </div>

        {/** Moulinex */}
        <div className="flex flex-col lg:flex-row items-start gap-10 mt-[20px] w-full">
          <div className="lg:w-1/5 w-[50%] mx-auto h-[100px] relative">
            <Image
              src="https://www.soca.rs/public/images/soca/moulinex.jpg"
              alt="Moulinex"
              className="rounded-md shadow-md"
              fill
            />
          </div>
          <div className="flex flex-col w-full">
            <strong className="text-xl">MOULINEX</strong>
            <p className="mt-2 text-lg">
              Moulinex je poznat po kuhinjskim aparatima jednostavnim za
              korišćenje i pristupačnim rešenjima koja su omiljena među mladima.
            </p>
            <p className="mt-2 text-[1.4rem]">
              Za više detalja idite na:{' '}
              <a
                href="http://www.moulinex.co.rs/"
                target="_blank"
                className="text-offRed hover:underline text-[1.6rem]"
              >
                www.moulinex.co.rs
              </a>
            </p>
          </div>
        </div>

        {/** Rowenta */}
        <div className="flex flex-col lg:flex-row items-start gap-10 mt-[20px] w-full">
          <div className="lg:w-1/5 w-[50%] mx-auto h-[100px] relative">
            <Image
              src="https://www.soca.rs/public/images/soca/rowenta.jpg"
              alt="Rowenta"
              className="rounded-md shadow-md"
              fill
            />
          </div>
          <div className="flex flex-col w-full">
            <strong className="text-xl">ROWENTA</strong>
            <p className="mt-2 text-lg">
              Rowenta je lider u proizvodnji pegli, usisivača i uređaja za ličnu
              higijenu. Njihovi proizvodi se ističu funkcionalnošću i
              ergonomijom.
            </p>
            <p className="mt-2 text-[1.4rem]">
              Za više detalja idite na:{' '}
              <a
                href="http://www.rowenta.co.rs/"
                target="_blank"
                className="text-offRed hover:underline text-[1.6rem]"
              >
                www.rowenta.co.rs
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
