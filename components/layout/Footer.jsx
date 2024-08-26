import Image from "next/image";
import ClockIcon from "../icons/ClockIcon";
import LocationIcon from "../icons/LocationIcon";
import MailIcon from "../icons/MailIcon";
import OfficePhoneIcon from "../icons/OfficePhoneIcon";
import PhoneIcon from "../icons/PhoneIcon";
import PhoneComponent from "../phone/PhoneComponent";
import Link from "next/link";
import { footerSchemaData } from "@/lib/SEO/schemaData";

const Footer = () => {
  return (
    <>
      <script
        id="application/ld+json-footer"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(footerSchemaData) }}
      />
      <footer className="bg-gradient-to-r from-gray-800 to-black text-white py-14 mt-auto w-full">
        <div className="px-[2rem] sm:px-[4rem] w-full">
          <div className="flex flex-col md:flex-row items-center justify-between mb-10">
            <div className="flex items-center mb-6 md:mb-0">
              <Image
                src="/images/logo_soca.png"
                alt="Logo"
                width={80}
                height={80}
                className="mr-4"
              />
              <div>
                <h1 className="text-2xl font-bold">Soća Servis AD</h1>
                <p className="text-sm text-gray-400">Vaš pouzdani partner</p>
              </div>
            </div>
            <nav className="flex flex-col md:flex-row gap-4 text-center md:text-left">
              <Link href="/proizvodi" passHref legacyBehavior>
                <a className="text-lg uppercase hover:text-offRed font-bold">
                  Prodaja
                </a>
              </Link>
              <Link href="/prodajni-program" passHref legacyBehavior>
                <a className="text-lg uppercase hover:text-offRed font-bold">
                  Prodajni program
                </a>
              </Link>
              <Link href="/servis" passHref legacyBehavior>
                <a className="text-lg uppercase hover:text-offRed font-bold">
                  Servis
                </a>
              </Link>
              <Link href="/o-nama-i-kontakt" passHref legacyBehavior>
                <a className="text-lg uppercase hover:text-offRed font-bold">
                  Kontakt
                </a>
              </Link>
            </nav>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 hover:text-offRed group">
                <LocationIcon
                  width={24}
                  height={24}
                  color={"#F7F7FF"}
                  styles={"group-hover:fill-offRed"}
                />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Đorđa Zličića 9, 21000 Novi Sad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-bold"
                >
                  Đorđa Zličića 9, 21000 Novi Sad
                </a>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon width={24} height={24} color={"#F7F7FF"} />
                <p className="text-xl font-bold">
                  Ponedeljak - petak: 9:00 - 17:00h, Subota: 9:00 - 13:00h
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <a
                  href="mailto:servis@soca.rs"
                  className="flex items-center gap-2  mt-2 xsm:mt-0 group"
                >
                  <MailIcon
                    width={25}
                    height={25}
                    color={"#F7F7FF"}
                    styles={"group-hover:fill-offRed"}
                  />
                  <p className="text-mintCream text-[1.4rem] font-bold  group-hover:text-offRed">
                    servis@soca.rs
                  </p>
                </a>
                <PhoneComponent
                  phoneNumber={"(+381) 021 444 147"}
                  Icon={<OfficePhoneIcon />}
                />
                <PhoneComponent
                  phoneNumber={"(+381) 021 6339 731"}
                  Icon={<OfficePhoneIcon />}
                />
                <PhoneComponent
                  phoneNumber={"(+381) 063 444 085"}
                  Icon={<PhoneIcon />}
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
              <div className="flex flex-col items-center lg:items-start">
                <h3 className="text-lg font-bold mb-2">Korisni linkovi</h3>
                <nav className="flex flex-col gap-2 text-center lg:text-left">
                  <Link href="/politika-privatnosti" passHref legacyBehavior>
                    <a className="hover:text-offRed">Politika privatnosti</a>
                  </Link>
                  <Link href="/uslovi-koriscenja" passHref legacyBehavior>
                    <a className="hover:text-offRed">Uslovi korišćenja</a>
                  </Link>
                  <Link href="/pitanja" passHref legacyBehavior>
                    <a className="hover:text-offRed">FAQ</a>
                  </Link>
                </nav>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <h3 className="text-lg font-bold mb-2">Kontaktirajte nas</h3>
                <p className="text-center lg:text-left">
                  Ukoliko imate pitanja, slobodno nas kontaktirajte putem emaila
                  ili telefona.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-gray-600 pt-5 text-center text-sm text-gray-400">
            <p>&copy; 2024 Soća Servis AD. Sva prava zadržana.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
