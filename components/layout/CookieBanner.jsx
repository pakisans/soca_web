'use client';
import { useState, useEffect, memo } from 'react';
import Cookies from 'js-cookie';
import Image from 'next/image';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = Cookies.get('cookie_consent');
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
    Cookies.set('cookie_consent', 'true', { expires: 365 });
    setIsVisible(false);
  };

  const handleDecline = () => {
    Cookies.set('cookie_consent', 'false', { expires: 365 });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center px-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in" />

      {/* Modal */}
      <div
        className="
        relative
        w-full
        max-w-[520px]
        rounded-[20px]
        bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#020617]
        border border-white/10
        shadow-[0_25px_80px_rgba(0,0,0,0.65)]
        px-6 py-8 sm:px-10 sm:py-10
        text-mintCream
        animate-modal-in
      "
      >
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/images/logo_soca.png"
            alt="Soća Servis"
            width={85}
            height={50}
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Title */}
        <h2 className="mt-6 text-center text-[21px] sm:text-[23px] font-semibold tracking-wide">
          Kolačići (Cookies)
        </h2>

        {/* Divider */}
        <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        {/* Message */}
        <p className="mt-6 text-center text-[15.5px] sm:text-[16.5px] leading-relaxed text-white/90">
          Koristimo kolačiće kako bismo unapredili korisničko iskustvo,
          analizirali saobraćaj i poboljšali funkcionalnost sajta.
          <br />
          <br />
          Nastavkom korišćenja sajta prihvatate našu
          <a
            href="/politika-privatnosti"
            className="ml-1 underline text-gold hover:text-tomato transition-colors duration-300"
          >
            politiku privatnosti
          </a>
          .
        </p>

        {/* CTA */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleAccept}
            className="
            px-8 py-3
            rounded-[14px]
            bg-emerald-600
            text-white
            text-[16px]
            font-medium
            transition-all duration-300
            hover:scale-[1.03]
            hover:shadow-[0_0_0_4px_rgba(16,185,129,0.35)]
            active:scale-[0.98]
          "
          >
            Prihvati
          </button>

          <button
            onClick={handleDecline}
            className="
            px-8 py-3
            rounded-[14px]
            bg-white/10
            text-white
            text-[16px]
            font-medium
            border border-white/15
            transition-all duration-300
            hover:bg-white/20
            hover:scale-[1.03]
            active:scale-[0.98]
          "
          >
            Odbij
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(CookieBanner);
