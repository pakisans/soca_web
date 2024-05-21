import { Kanit } from "next/font/google";
import "./globals.css";
import Foooter from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ReportFault from "@/components/global/ReportFault";

const font = Kanit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "800", "700", "900"],
});

export const metadata = {
  title:
    "SOĆA - Servis bele tehnike Novi Sad - Prodaja rezervnih delova za belu tehniku i kućne aparate Novi Sad",
  description:
    "Servis bele tehnike Novi Sad. Servis i popravka veš mašina, frižidera, zamrzivača, šporeta i kućnih aparata u Novom Sadu. Prodaja rezervnih delova za belu tehniku, veš mašine, frižidere, zamrzivače, šporete i kućne aparate - Novi Sad. Popravka električnih uređaja. Distribucija HORECA programa u normi HACC. Partneri Tefal, Krups, Rowenta, Moulinex, Electrolux, AEG, Zanussi, Primus, Liebherr, Franke.",
  author: "Servis bele tehnike",
  keywords:
    "servis bele tehnike, bela tehnika rezervni delovi, bela tehnika, rezervni delovi bele tehnike, popravka, popravak, popravka bele tehnike, uredjaji popravka, uređaji popravka, rezervni delovi, rezervni delovi za belu tehniku, sporet, šporet, masina, mašina, ves, veš, sudove, sudo, frizider, frižider, bojler, elektricni uredjaji, električni uređaji, Novi Sad, u Novom Sadu, Srbija, Tefal, Krups, Rowenta, Moulinex, Electrolux, AEG, Zanussi, Primus, Liebherr, Franke",
  openGraph: {
    title: "SOĆA - Servis bele tehnike Novi Sad",
    type: "website",
    url: "https://www.soca.rs/",
    image: "https://www.soca.rs/og-image.jpg",
    site_name: "SOĆA",
    description:
      "Servis bele tehnike Novi Sad. Servis i popravka veš mašina, frižidera, zamrzivača, šporeta i kućnih aparata u Novom Sadu.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@soca",
    title: "SOĆA - Servis bele tehnike Novi Sad",
    description:
      "Servis bele tehnike Novi Sad. Servis i popravka veš mašina, frižidera, zamrzivača, šporeta i kućnih aparata u Novom Sadu.",
    image: "https://www.soca.rs/public/images/logo.jpg",
  },
  // robots: "index, follow",
  charset: "UTF-8",
  language: "Serbian",
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${font.className} flex flex-col min-h-screen bg-mintCream`}
      >
        <Header />
        <Breadcrumbs />
        <main className="flex flex-grow">
          <>
            <div className="fixed bottom-[10rem] right-0 mt-5 pr-[2rem] py-5 pl-4 bg-offRed rounded-tl-2xl rounded-bl-2xl z-[9999]">
              <ReportFault />
            </div>
            {children}
          </>
        </main>
        <Foooter />
      </body>
    </html>
  );
}
