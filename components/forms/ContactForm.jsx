"use client";
import customToast from "@/lib/config/toast-config";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        customToast.success("Email sent successfully");
        setFormData({
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("Failed to send email");
        customToast.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Failed to send email");
      customToast.error("Failed to send email");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mx-auto p-8 bg-white shadow-lg rounded-lg transition-all transform hover:scale-105"
    >
      <h2 className="text-3xl font-bold text-center mb-6 text-night">
        Kontaktirajte nas
      </h2>
      <div className="space-y-6">
        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg font-medium text-night">
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
            className="p-3 border border-gray-300 rounded-lg bg-mintCream text-night focus:outline-none focus:border-offRed focus:ring text-[1.6rem] focus:ring-offRed"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="subject" className="text-lg font-medium text-night">
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
            className="p-3 border border-gray-300 rounded-lg bg-mintCream text-night focus:outline-none focus:border-offRed focus:ring text-[1.6rem] focus:ring-offRed"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="text-lg font-medium text-night">
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
            className="p-3 border border-gray-300 rounded-lg bg-mintCream text-night focus:outline-none focus:border-offRed focus:ring text-[1.6rem] focus:ring-offRed"
          ></textarea>
        </div>
      </div>
      <button
        type="submit"
        className="mt-6 w-full py-3 bg-night text-white text-lg rounded-lg hover:bg-gray-800 transition-all"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Slanje..." : "Pošalji"}
      </button>
      {status && (
        <p
          className={`mt-2 text-center ${
            status.includes("successfully") ? "text-green-500" : "text-red-500"
          }`}
        >
          {status}
        </p>
      )}
    </form>
  );
}
