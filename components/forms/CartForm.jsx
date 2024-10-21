"use client";
import { useState, useEffect } from "react";
import Select from "react-select";

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "#F7F7FF",
    fontSize: "1.6rem",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#8E1B13" : "#4D4847",
    color: "#F7F7FF",
  }),
};

const CartForm = ({ artikalPodaci, ukupnaCena }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: null,
  });
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch(
          // "https://www.soca.rs/public/json/srbija-svi-gradovi.json"
          'https://raw.githubusercontent.com/stefancode/Srbija-gradovi/master/srbija-svi-gradovi.json'
        );
        const data = await response.json();
        console.log('aa',data)
        const cityOptions = data.map((city) => ({
          value: city.city,
          label: `${city.city} (${city.zip})`,
          zip: city.zip
        }));
        setCities(cityOptions);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };
    fetchCities();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCityChange = (selectedOption) => {
    setFormData({ ...formData, city: selectedOption });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Implementiraj slanje podataka ovde
      console.log("Podaci za slanje:", formData);
      // await sendCartEmail(formData, artikalPodaci, ukupnaCena);
      // clearCart();
      // customToast.success("Porudžbina uspešno poslata!");
    } catch (error) {
      console.error("Error submitting form:", error);
      console.error("Error sending email:", error);
      customToast.error("Greška pri slanju porudžbine.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log(cities)
  },[cities]) 

  return (
    <form onSubmit={handleSubmit} className="w-full p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Pošaljite nam upit</h2>

      <div className="space-y-6">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg font-medium">Ime i Prezime</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-lg text-[1.6rem]"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-lg text-[1.6rem]"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="phone" className="text-lg font-medium">Telefon</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-lg text-[1.6rem]"
          />
        </div>
    
        <div className="flex flex-col">
          <label htmlFor="city" className="text-lg font-medium">Grad</label>
          <Select
            options={cities}
            value={formData.city}
            onChange={handleCityChange}
            placeholder="Izaberite grad"
            styles={customStyles}
            isSearchable
            isClearable
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="address" className="text-lg font-medium">Adresa</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-lg text-[1.6rem]"
          />
        </div>

      </div>

      <button
        type="submit"
        className="mt-6 w-full py-3 bg-blue-500 text-white rounded-lg"
        disabled={isLoading}
      >
        {isLoading ? "Slanje..." : "Pošalji"}
      </button>
    </form>
  );
};

export default CartForm;
