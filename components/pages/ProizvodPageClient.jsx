"use client";

import { useState } from "react";
import InquiryModal from "../global/InquryModal";

const ProizvodPageClient = ({ article }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="bg-yellow-500 text-white py-4 px-4 text-[1.4rem] rounded hover:bg-yellow-700 transition duration-300 mt-auto"
      >
        Pošaljite upit
      </button>
      {showModal && (
        <InquiryModal article={article} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

export default ProizvodPageClient;
