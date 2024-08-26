"use client";

import { useState, useRef } from "react";
import usePreventBodyScroll from "../hooks/usePreventBodyScroll";
import useOutsideClick from "../hooks/useOutsideclick";
import customToast from "@/lib/config/toast-config";
import { sendInquiryEmail } from "@/services/articlesApi";

const InquiryModal = ({ article, onClose }) => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    name: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const modalRef = useRef(null);
  usePreventBodyScroll(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataObj = {
      ...formData,
      articleId: article.id,
      articleName: article.naziv,
      articleCode: article.sifra,
    };

    try {
      const response = await sendInquiryEmail(formDataObj);
      customToast.success("Upit je uspešno poslat!");
      setFormData({
        email: "",
        phone: "",
        name: "",
        description: "",
      });
      onClose();

      customToast.success("Upit je uspešno poslat!");
      setFormData({
        email: "",
        phone: "",
        name: "",
        description: "",
      });
      onClose();
    } catch (error) {
      console.error("Error sending inquiry:", error);
      alert("Dogodila se greška prilikom slanja upita, pokušajte ponovo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useOutsideClick(modalRef, onClose);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-auto z-[9999]">
      <div
        ref={modalRef}
        className="bg-gradient-to-r from-gray-700 rounded-tr-lg to-gray-900 p-10 rounded-lg shadow-lg w-[90%] max-w-[800px] max-h-[90%] md:max-h-[99%] overflow-y-auto"
      >
        <div className="flex items-center justify-center mb-6 relative">
          <h2 className="text-[2.2rem] font-bold text-mintCream">
            Pošaljite upit za
          </h2>
          <button
            onClick={onClose}
            className="text-mintCream hover:text-offRed text-[1.6rem] ml-auto absolute right-0"
          >
            Zatvori
          </button>
        </div>
        <h3 className="text-[1.8rem] font-semibold text-mintCream mb-6 uppercase text-center">
          {article.naziv}
        </h3>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-mintCream font-medium text-[1.6rem]"
                >
                  Ime i prezime
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Vaše ime i prezime"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-[.7rem] bg-mintCream text-night rounded-md focus:outline-none text-[1.6rem] focus:border-offRed focus:ring focus:ring-offRed"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-mintCream font-medium text-[1.6rem]"
                >
                  Telefon
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Vaš telefon"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-[.7rem] bg-mintCream text-night rounded-md focus:outline-none text-[1.6rem] focus:border-offRed focus:ring focus:ring-offRed"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-mintCream font-medium text-[1.6rem]"
                >
                  Email adresa
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Vaša email adresa"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-[.7rem] bg-mintCream text-night rounded-md focus:outline-none text-[1.6rem] focus:border-offRed focus:ring focus:ring-offRed"
                />
              </div>
            </div>

            <div className="space-y-6 h-full">
              <div className="h-full">
                <label
                  htmlFor="description"
                  className="block text-mintCream font-medium text-[1.6rem]"
                >
                  Opis upita
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="10"
                  placeholder="Detaljan opis upita..."
                  required
                  value={formData.description}
                  onChange={handleChange}
                  className="mt-1 block w-full h-[calc(100%-28px)] px-3 py-[.7rem] bg-mintCream text-night rounded-md focus:outline-none text-[1.6rem] focus:border-offRed focus:ring focus:ring-offRed"
                ></textarea>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-davyGray text-mintCream rounded-md text-[1.6rem] hover:bg-offRed hover:transition-colors hover:transition-duration-600  focus:outline-none focus:ring focus:ring-offRed"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Slanje..." : "Pošalji upit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default InquiryModal;
