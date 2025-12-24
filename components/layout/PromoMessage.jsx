'use client';
import { useState, useEffect, memo } from 'react';
import Cookies from 'js-cookie';
import Image from 'next/image';

const PromoMessage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = Cookies.get('promo_mesage');
    if (!cookieConsent) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isVisible]);

  const handleAccept = () => {
    Cookies.set('promo_mesage', 'true', { expires: 365 });
    setIsVisible(false);
  };

  const handleDecline = () => {
    Cookies.set('promo_mesage', 'false', { expires: 365 });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100000] pointer-events-auto flex items-center justify-center px-4">
      <div
        role="dialog"
        aria-modal="true"
        className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto animate-fade-in"
      />

      <div
        className="
        relative
        w-full
        max-w-[560px]
        rounded-[20px]
        bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#020617]
        border border-white/10
        shadow-[0_25px_80px_rgba(0,0,0,0.65)]
        px-6 py-8 sm:px-10 sm:py-10
        text-mintCream
        animate-modal-in
      "
      >
        <div className="flex justify-center">
          <Image
            src="/images/logo_soca.png"
            alt="Soća Servis"
            width={90}
            height={55}
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>

        <h2 className="mt-6 text-center text-[22px] sm:text-[24px] font-semibold tracking-wide">
          Obaveštenje o radu
        </h2>

        <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        <p className="mt-6 text-center text-[16px] sm:text-[17px] leading-relaxed text-white/90">
          Poštovani,
          <br />
          <br />
          usled Novogodišnjih i Božićnih praznika
          <strong className="block mt-2 text-white">SZTR SOĆA SERVIS AD</strong>
          neće raditi u periodu
          <span className="block mt-2 text-[17px] text-mintCream font-medium">
            29.12.2025 – 08.01.2026.
          </span>
        </p>

        <p className="mt-6 text-center text-[15px] sm:text-[16px] text-tomato">
          Kolektiv Soća servisa Vam želi srećne praznike 🎄
        </p>

        <div className="mt-8 flex justify-center">
          <button
            onClick={handleDecline}
            className="
            px-10 py-3
            rounded-[14px]
            bg-offRed
            text-white
            text-[16px] sm:text-[17px]
            font-medium
            transition-all duration-300
            hover:scale-[1.03]
            hover:shadow-[0_0_0_4px_rgba(255,80,80,0.25)]
            active:scale-[0.98]
          "
          >
            Zatvori
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(PromoMessage);
