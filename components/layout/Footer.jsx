import Image from "next/image";
import ClockIcon from "../icons/ClockIcon";
import LocationIcon from "../icons/LocationIcon";
import MailIcon from "../icons/MailIcon";
import OfficePhoneIcon from "../icons/OfficePhoneIcon";
import PhoneIcon from "../icons/PhoneIcon";
import PhoneComponent from "../phone/PhoneComponent";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-700 to-gray-900 w-full py-14 mt-auto">
      <Image
        src="/images/logo_soca.png"
        alt="Logo"
        width={80}
        height={80}
        className="bg-transparent w-fit mx-auto mb-10"
      />

      <div className="flex gap-10 xl:gap-5 flex-col xl:flex-row items-center mx-auto w-fit mt-[1rem]">
        <div className="flex items-center gap-2 ml-[2rem] hover:text-offRed">
          <LocationIcon width={20} height={20} color={"#F7F7FF"} />
          <a
            href={
              "https://www.google.com/maps/search/?api=1&query=Đorđa Zličića 9, 21000 Novi Sad"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="text-mintCream text-[1.4rem] font-bold hover:text-offRed"
          >
            Đorđa Zličića 9, 21000 Novi Sad
          </a>
        </div>
        <div className="flex items-center gap-2 ml-[2rem]">
          <ClockIcon width={20} height={20} color={"#F7F7FF"} />
          <p className="text-mintCream text-[1.4rem] font-bold text-center">
            Ponedeljak - petak: 9:00 - 17:00h, Subota: 9:00 - 13:00h
          </p>
        </div>
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
        <a
          href="mailto:servis@soca.rs"
          className="flex items-center gap-2 ml-[2rem]"
        >
          <MailIcon width={30} height={30} color={"#F7F7FF"} />
          <p className="text-mintCream text-[1.4rem] font-bold hover:text-offRed">
            servis@soca.rs
          </p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
