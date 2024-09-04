"use client";
import { useState, useEffect, memo } from "react";
import Cookies from "js-cookie";
import Image from "next/image";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = Cookies.get("cookie_consent");
    if (!cookieConsent) {
      setIsVisible(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  const handleAccept = () => {
    Cookies.set("cookie_consent", "true", { expires: 365 });
    setIsVisible(false);
  };

  const handleDecline = () => {
    Cookies.set("cookie_consent", "false", { expires: 365 });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[99999] p-4 bg-black bg-opacity-50 animate-fade-in">
      <div className="bg-gray-900 text-mintCream py-[40px] px-[40px] rounded-lg shadow-lg max-w-xl mx-auto animate-bounce-in">
        <Image
          src="/images/logo_soca.png"
          alt="Logo"
          width={80}
          height={50}
          className="hover:scale-110 mx-auto"
        />
        <p className="text-lg mb-4 mt-[20px] text-center">
          Koristimo kolačiće kako bismo poboljšali korisničko iskustvo. <br />
          <br />
          Ako nastavite da koristite ovaj sajt, pretpostavićemo da ste saglasni
          sa našom
          <a
            href="/politika-privatnosti"
            className="underline ml-1 text-gold hover:text-tomato transition-colors duration-300 ease"
          >
            politikom privatnosti
          </a>
          .
        </p>
        <div className="flex justify-center space-x-4 mt-[20px]">
          <button
            onClick={handleAccept}
            className="text-white md:text-[1.4rem] px-6 py-2 rounded-md transition-all duration-600 ease hover:bg-offRed bg-green-700"
          >
            Prihvati
          </button>
          <button
            onClick={handleDecline}
            className="bg-gray-700 text-white md:text-[1.4rem] px-6 py-2 rounded-md transition-all duration-600 ease hover:bg-offRed"
          >
            Odbij
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(CookieBanner);
