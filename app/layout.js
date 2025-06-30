import { Kanit } from 'next/font/google';
import './globals.css';
import Foooter from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import ReportFault from '@/components/global/ReportFault';
import { Toaster } from 'react-hot-toast';
import { ShopCartWrapper } from '@/context/ShopCartContext';
import Link from 'next/link';
import SearchIcon from '@/components/icons/SearchIcon';
import CookieBanner from '@/components/layout/CookieBanner';

const font = Kanit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '800', '700', '900'],
});

export const metadata = {
  title:
    'SOĆA - Servis bele tehnike Novi Sad - Prodaja rezervnih delova za belu tehniku i kućne aparate Novi Sad',
  description:
    'Servis bele tehnike Novi Sad. Servis i popravka veš mašina, frižidera, zamrzivača, šporeta i kućnih aparata u Novom Sadu. Prodaja rezervnih delova za belu tehniku, veš mašine, frižidere, zamrzivače, šporete i kućne aparate - Novi Sad. Popravka električnih uređaja. Distribucija HORECA programa u normi HACC. Partneri Tefal, Krups, Rowenta, Moulinex, Electrolux, AEG, Zanussi, Primus, Liebherr, Franke.',
  author: 'SOĆA - Servis bele tehnike Novi Sad',
  keywords:
    'servis bele tehnike, bela tehnika rezervni delovi, bela tehnika, rezervni delovi bele tehnike, popravka, popravak, popravka bele tehnike, uredjaji popravka, uređaji popravka, rezervni delovi, rezervni delovi za belu tehniku, sporet, šporet, masina, mašina, ves, veš, sudove, sudo, frizider, frižider, bojler, elektricni uredjaji, električni uređaji, Novi Sad, u Novom Sadu, Srbija, Tefal, Krups, Rowenta, Moulinex, Electrolux, AEG, Zanussi, Primus, Liebherr, Franke',
  openGraph: {
    title: 'SOĆA - Servis bele tehnike Novi Sad',
    type: 'website',
    url: 'https://www.soca.rs/',
    image: 'https://www.soca.rs/og-image.jpg',
    site_name: 'SOĆA',
    description:
      'Servis bele tehnike Novi Sad. Servis i popravka veš mašina, frižidera, zamrzivača, šporeta i kućnih aparata u Novom Sadu.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@soca',
    title: 'SOĆA - Servis bele tehnike Novi Sad',
    description:
      'Servis bele tehnike Novi Sad. Servis i popravka veš mašina, frižidera, zamrzivača, šporeta i kućnih aparata u Novom Sadu.',
    image: 'https://www.soca.rs/public/images/logo.jpg',
  },
  robots: 'index, follow',
  charset: 'UTF-8',
  language: 'Serbian',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export default function RootLayout({ children }) {
  return (
    <html lang="sr-Latn" className="scroll-smooth">
      <head>
        {/* Google Tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ED6QP8ZGP2"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ED6QP8ZGP2');
            `,
          }}
        />
      </head>
      <body
        className={`${font.className} flex flex-col min-h-screen bg-mintCream`}
      >
        <ShopCartWrapper>
          <Header />
          <Breadcrumbs />
          <main className="flex flex-grow">
            <>
              <div className="fixed bottom-[5.6rem] xl:bottom-[2rem] left-0 mt-5 pl-[.5rem] sm:pl-[2rem]  sm:py-5 pr-2 sm:pr-4 bg-offRed rounded-tr-2xl rounded-br-2xl z-[9999]">
                <Link
                  href={'/proizvodi'}
                  passHref
                  legacyBehavior
                  className="flex items-center p-2"
                >
                  <a className="flex items-center text-white  text-[1.2rem] p-4 sm:text-[1.6rem] group-hover:opacity-100 transition-opacity font-semibold duration-300">
                    <SearchIcon
                      width={24}
                      height={24}
                      color={'#fff'}
                      styles={'mr-1 sm:mr-5'}
                    />
                    Pronađi deo
                  </a>
                </Link>
              </div>
              <div className="fixed bottom-[5.9rem] xl:bottom-[2rem] right-0 mt-5 pr-[.5rem] sm:pr-[2rem] py-2 sm:py-5 pl-2 sm:pl-4 bg-offRed rounded-tl-2xl rounded-bl-2xl z-[9999]">
                <ReportFault />
              </div>
              {children}
            </>
          </main>
          <CookieBanner />
          <Foooter />
          <Toaster position="bottom-right" />
        </ShopCartWrapper>
      </body>
    </html>
  );
}
