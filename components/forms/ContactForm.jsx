"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/sendEmail`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatus("Email sent successfully");
        setFormData({
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("Failed to send email");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Failed to send email");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block font-medium text-[2.2rem]">
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
          className="mt-1 block w-full px-3 py-2 bg-mintCream placeholder:text- rounded-md focus:outline-none focus:border-offRed focus:ring focus:ring-offRed text-night"
        />
      </div>
      <div>
        <label htmlFor="subject" className="block font-medium">
          Tema upita
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Upit o proizvodu"
          required
          value={formData.subject}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 bg-mintCream rounded-md focus:outline-none focus:border-offRed focus:ring focus:ring-offRed text-night"
        />
      </div>
      <div>
        <label htmlFor="message" className="block font-medium">
          Tekst poruke
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder="Napišite svoju poruku ovde..."
          required
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 bg-mintCream rounded-md focus:outline-none focus:border-offRed focus:ring focus:ring-offRed text-night"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full py-2 bg-davyGray rounded-md text-3xl hover:bg-offRed focus:outline-none focus:ring focus:ring-offRed mt-auto"
      >
        Pošalji
      </button>
      {status && <p className="mt-2 text-center text-red-500">{status}</p>}
    </form>
  );
}
