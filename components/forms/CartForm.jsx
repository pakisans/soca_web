import { useCart } from "@/context/ShopCartContext";
import customToast from "@/lib/config/toast-config";
import { sendCartEmail } from "@/services/articlesApi";
import { useState } from "react";

const CartForm = ({ artikalPodaci, ukupnaCena }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { clearCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await sendCartEmail(formData, artikalPodaci, ukupnaCena);
      clearCart();
      customToast.success("Porudžbina uspešno poslata!");
    } catch (error) {
      console.error("Error sending email:", error);
      customToast.error("Greška pri slanju porudžbine.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mx-auto p-8 bg-white shadow-lg rounded-lg transition-all transform hover:scale-105"
    >
      <h2 className="text-3xl font-bold text-center mb-6">
        Pošaljite nam upit
      </h2>
      <div className="space-y-6">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg font-medium text-night">
            Ime i Prezime
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg text-[1.6rem]"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg font-medium text-night">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg text-[1.6rem]"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone" className="text-lg font-medium text-night">
            Telefon
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg text-[1.6rem]"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="text-lg font-medium text-night">
            Poruka
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg text-[1.6rem]"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-6 w-full py-3 bg-night text-white text-lg rounded-lg hover:bg-gunMetal transition-all"
        disabled={isLoading}
      >
        {isLoading ? "Slanje..." : "Pošalji"}
      </button>
    </form>
  );
};

export default CartForm;
