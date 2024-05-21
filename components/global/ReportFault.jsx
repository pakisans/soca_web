"use client";
import { useRef, useState } from "react";
import Settingsicon from "../icons/Settingsicon";
import useOutsideClick from "../hooks/useOutsideclick";
import Select from "react-select";

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "#F7F7FF",
    color: "#000F08",
    fontSize: "1.6rem",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#000F08",
  }),
  input: (provided) => ({
    ...provided,
    color: "#000F08",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#718096",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#1C3738",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#8E1B13" : "#4D4847",
    color: state.isFocused ? "#F7F7FF" : "#F7F7FF",
    fontSize: "1.6rem",
  }),
  clearIndicator: (provided, state) => ({
    ...provided,
    color: state.isFocused ? "#8E1B13" : "#F7F7FF",
    ":hover": {
      color: "#8E1B13",
    },
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: state.isFocused ? "#8E1B13" : "#F7F7FF",
    ":hover": {
      color: "#8E1B13",
    },
  }),
};

const manufacturers = [
  { value: "Electrolux", label: "Electrolux" },
  { value: "AEG", label: "AEG" },
  { value: "Tefal", label: "Tefal" },
  { value: "Moulinex", label: "Moulinex" },
  { value: "Krups", label: "Krups" },
  { value: "Rowenta", label: "Rowenta" },
  { value: "Franke", label: "Franke" },
  { value: "Liebherr", label: "Liebherr" },
  { value: "Beko", label: "Beko" },
  { value: "Whirlpool", label: "Whirlpool" },
  { value: "Bosch", label: "Bosch" },
  { value: "Siemens", label: "Siemens" },
  { value: "Indesit", label: "Indesit" },
  { value: "Ariston", label: "Ariston" },
  { value: "Gorenje", label: "Gorenje" },
  { value: "Candy", label: "Candy" },
  { value: "IKEA", label: "IKEA" },
];

const devices = [
  { value: "Ves masina", label: "Ves masina" },
  { value: "Sporet", label: "Sporet" },
  { value: "Masina za sudje", label: "Masina za sudje" },
  { value: "Susara vesa", label: "Susara vesa" },
  { value: "Frizider kombinovani", label: "Frizider kombinovani" },
  { value: "Frizider", label: "Frizider" },
  { value: "Zamrzivac", label: "Zamrzivac" },
  { value: "Vitrina", label: "Vitrina" },
  { value: "Ledomat", label: "Ledomat" },
  { value: "Frizider side by side", label: "Frizider side by side" },
  { value: "PRO valjak peglac", label: "PRO valjak peglac" },
  { value: "PRO masina za sudje", label: "PRO masina za sudje" },
  { value: "PRO ves masina", label: "PRO ves masina" },
  { value: "PRO konvertor rerna", label: "PRO konvertor rerna" },
  { value: "Sporet kombinovani", label: "Sporet kombinovani" },
  {
    value: "Ves masina pranje i susenje",
    label: "Ves masina pranje i susenje",
  },
  { value: "Sto za peglanje", label: "Sto za peglanje" },
  { value: "Sporet ugradna ploca", label: "Sporet ugradna ploca" },
  { value: "Sporet ugradna rerna", label: "Sporet ugradna rerna" },
  { value: "Humidor", label: "Humidor" },
];

const ReportFault = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [isUploadingPdf, setIsUploadingPdf] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    address: "",
    city: "",
    phone: "",
    name: "",
    manufacturer: null,
    device: null,
    pnc: "",
    model: "",
    serialNumber: "",
    description: "",
    image: null,
    pdf: null,
  });
  const modalRef = useRef(null);

  const handleCloseModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  useOutsideClick(modalRef, handleCloseModal);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (selectedOption, actionMeta) => {
    const { name } = actionMeta;
    setFormData({
      ...formData,
      [name]: selectedOption,
    });
  };

  const handleFileChange = async (e) => {
    const { name, files } = e.target;
    if (name === "image") setIsUploadingImage(true);
    if (name === "pdf") setIsUploadingPdf(true);

    setTimeout(() => {
      setFormData({
        ...formData,
        [name]: files[0],
      });
      if (name === "image") setIsUploadingImage(false);
      if (name === "pdf") setIsUploadingPdf(false);
    }, 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formDataObj = new FormData();
    for (const key in formData) {
      if (formData[key]) {
        if (formData[key].value) {
          formDataObj.append(key, formData[key].value);
        } else {
          formDataObj.append(key, formData[key]);
        }
      }
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/reportFault`,
        {
          method: "POST",
          body: formDataObj,
        }
      );

      if (response.ok) {
        alert("Prijava kvara je uspešno poslata!");
        setFormData({
          email: "",
          address: "",
          city: "",
          phone: "",
          name: "",
          manufacturer: null,
          device: null,
          pnc: "",
          model: "",
          serialNumber: "",
          description: "",
          image: null,
          pdf: null,
        });
        toggleModal();
      } else {
        alert("Slanje prijave nije uspelo");
      }
    } catch (error) {
      console.error("Error reporting fault:", error);
      alert("Došlo je do greške prilikom prijave kvara");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div
        className="relative group"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <button
          onClick={toggleModal}
          className="flex items-center p-2 text-mintCream hover:text-mintCream"
        >
          <span className="mr-5 text-[1.6rem] group-hover:opacity-100 transition-opacity font-semibold duration-300">
            Prijavi kvar
          </span>
          <Settingsicon width={35} height={35} color={"#F7F7FF"} />
        </button>
      </div>

      {isModalOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-auto">
          <div
            ref={modalRef}
            className="bg-gradient-to-r from-gray-700 rounded-tr-lg to-gray-900 p-10 rounded-lg shadow-lg w-[90%] max-w-[800px] max-h-[90%] md:max-h-[99%] overflow-y-auto"
          >
            <div className="flex items-center justify-center mb-6 relative">
              <h2 className="text-[2.2rem] font-bold text-mintCream">
                Prijava kvara
              </h2>
              <button
                onClick={toggleModal}
                className="text-mintCream hover:text-offRed text-[1.6rem] ml-auto absolute right-0"
              >
                Zatvori
              </button>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    htmlFor="address"
                    className="block text-mintCream font-medium text-[1.6rem]"
                  >
                    Adresa
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Vaša adresa"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-[.7rem] bg-mintCream text-night rounded-md focus:outline-none text-[1.6rem] focus:border-offRed focus:ring focus:ring-offRed"
                  />
                </div>
                <div>
                  <label
                    htmlFor="city"
                    className="block text-mintCream font-medium text-[1.6rem]"
                  >
                    Mesto
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Vaše mesto"
                    required
                    value={formData.city}
                    onChange={handleChange}
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
                <div>
                  <label
                    htmlFor="manufacturer"
                    className="block text-mintCream font-medium text-[1.6rem]"
                  >
                    Proizvođač
                  </label>
                  <Select
                    id="manufacturer"
                    name="manufacturer"
                    options={manufacturers}
                    value={formData.manufacturer}
                    onChange={handleSelectChange}
                    className="mt-1"
                    placeholder="Izaberite proizvođača"
                    isSearchable
                    isClearable
                    styles={customStyles}
                  />
                </div>
                <div>
                  <label
                    htmlFor="device"
                    className="block text-mintCream font-medium text-[1.6rem]"
                  >
                    Aparat
                  </label>
                  <Select
                    id="device"
                    name="device"
                    options={devices}
                    value={formData.device}
                    onChange={handleSelectChange}
                    className="mt-1"
                    placeholder="Izaberite aparat"
                    isSearchable
                    isClearable
                    styles={customStyles}
                  />
                </div>
                <div>
                  <label
                    htmlFor="pnc"
                    className="block text-mintCream font-medium text-[1.6rem]"
                  >
                    PNC/Servisni broj/Ref Code
                  </label>
                  <input
                    type="text"
                    id="pnc"
                    name="pnc"
                    placeholder="PNC/Servisni broj/Ref Code"
                    required
                    value={formData.pnc}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-[.7rem] bg-mintCream text-night rounded-md focus:outline-none text-[1.6rem] focus:border-offRed focus:ring focus:ring-offRed"
                  />
                </div>
                <div>
                  <label
                    htmlFor="model"
                    className="block text-mintCream font-medium text-[1.6rem]"
                  >
                    Model
                  </label>
                  <input
                    type="text"
                    id="model"
                    name="model"
                    placeholder="Model"
                    required
                    value={formData.model}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-[.7rem] bg-mintCream text-night rounded-md focus:outline-none text-[1.6rem] focus:border-offRed focus:ring focus:ring-offRed"
                  />
                </div>
                <div>
                  <label
                    htmlFor="serialNumber"
                    className="block text-mintCream font-medium text-[1.6rem]"
                  >
                    Serijski broj
                  </label>
                  <input
                    type="text"
                    id="serialNumber"
                    name="serialNumber"
                    placeholder="Serijski broj"
                    required
                    value={formData.serialNumber}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-[.7rem] bg-mintCream text-night rounded-md focus:outline-none text-[1.6rem] focus:border-offRed focus:ring focus:ring-offRed"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-mintCream font-medium text-[1.6rem]"
                >
                  Opis kvara
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  placeholder="Detaljan opis kvara..."
                  required
                  value={formData.description}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-[.7rem] bg-mintCream text-night rounded-md focus:outline-none text-[1.6rem] focus:border-offRed focus:ring focus:ring-offRed"
                ></textarea>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="w-full lg:w-auto">
                  <label
                    htmlFor="image"
                    className="block text-mintCream font-medium text-[1.6rem]"
                  >
                    Dodajte sliku aparata, fabričke nalepnice, ili kvara
                  </label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    onChange={handleFileChange}
                    accept="image/*"
                    className="mt-1 block w-full px-3 py-[.7rem] bg-mintCream text-night rounded-md focus:outline-none text-[1.6rem] focus:border-offRed focus:ring focus:ring-offRed"
                  />
                  {isUploadingImage && (
                    <div className="text-offRed absolute">Učitavanje...</div>
                  )}
                </div>
                <div className="w-full lg:w-auto">
                  <label
                    htmlFor="pdf"
                    className="block text-mintCream font-medium text-[1.6rem]"
                  >
                    Dopunite prijavu PDF dokumnetom
                  </label>
                  <input
                    type="file"
                    id="pdf"
                    onChange={handleFileChange}
                    name="pdf"
                    accept="application/pdf"
                    className="mt-1 block w-full px-3 py-[.7rem] bg-mintCream text-night rounded-md focus:outline-none text-[1.6rem] focus:border-offRed focus:ring focus:ring-offRed"
                  />
                  {isUploadingPdf && (
                    <div className="text-offRed absolute">Učitavanje...</div>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-davyGray text-mintCream rounded-md text-[1.6rem] hover:bg-offRed focus:outline-none focus:ring focus:ring-offRed"
                disabled={isSubmitting || isUploadingImage || isUploadingPdf}
              >
                {isSubmitting ? "Slanje..." : "Pošalji nalog"}
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ReportFault;
