"use client";
import { useRef, useState } from "react";
import Settingsicon from "../icons/Settingsicon";
import useOutsideClick from "../hooks/useOutsideclick";
import Select from "react-select";
import usePreventBodyScroll from "../hooks/usePreventBodyScroll";
import customToast from "@/lib/config/toast-config";

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
    color: state.isFocused ? "#8E1B13" : "#000000",
    ":hover": {
      color: "#8E1B13",
    },
  }),
};

const manufacturers = [
  // { value: "Electrolux", label: "Electrolux" },
  // { value: "AEG", label: "AEG" },
  // { value: "Tefal", label: "Tefal" },
  // { value: "Moulinex", label: "Moulinex" },
  // { value: "Krups", label: "Krups" },
  // { value: "Rowenta", label: "Rowenta" },
  // { value: "Franke", label: "Franke" },
  // { value: "Liebherr", label: "Liebherr" },
  // { value: "Beko", label: "Beko" },
  // { value: "Whirlpool", label: "Whirlpool" },
  // { value: "Bosch", label: "Bosch" },
  // { value: "Siemens", label: "Siemens" },
  // { value: "Indesit", label: "Indesit" },
  // { value: "Ariston", label: "Ariston" },
  // { value: "Gorenje", label: "Gorenje" },
  // { value: "Candy", label: "Candy" },
  // { value: "IKEA", label: "IKEA" },
  {"value": "GORENJE/KERTING/SIDEX", "label": "GORENJE/KERTING/SIDEX"},
  {"value": "ELX ELECTROLUX", "label": "ELX ELECTROLUX"},
  {"value": "ARCELIK BEKO", "label": "ARCELIK BEKO"},
  {"value": "SEB TEFAL", "label": "SEB TEFAL"},
  {"value": "SEB ROWENTA", "label": "SEB ROWENTA"},
  {"value": "SEB KRUPS", "label": "SEB KRUPS"},
  {"value": "ELX ZANUSSI", "label": "ELX ZANUSSI"},
  {"value": "B/S/H BOSCH", "label": "B/S/H BOSCH"},
  {"value": "GIAS CANDY", "label": "GIAS CANDY"},
  {"value": "WHI WHIRLPOOL", "label": "WHI WHIRLPOOL"},
  {"value": "WHI INDESIT", "label": "WHI INDESIT"},
  {"value": "SEB MOULINEX", "label": "SEB MOULINEX"},
  {"value": "ELX AEG", "label": "ELX AEG"},
  {"value": "SAMSUNG", "label": "SAMSUNG"},
  {"value": "BAUER", "label": "BAUER"},
  {"value": "LG", "label": "LG"},
  {"value": "KONCAR", "label": "KONCAR"},
  {"value": "BIRA", "label": "BIRA"},
  {"value": "WHI ARISTON/HOTPOINT", "label": "WHI ARISTON/HOTPOINT"},
  {"value": "GREE", "label": "GREE"},
  {"value": "ARDO/MERLONI/EUROTECH/CONCORD/TEUTA/SERVIS", "label": "ARDO/MERLONI/EUROTECH/CONCORD/TEUTA/SERVIS"},
  {"value": "ALPINA", "label": "ALPINA"},
  {"value": "B/S/H SIEMENS", "label": "B/S/H SIEMENS"},
  {"value": "AMICA HANSA", "label": "AMICA HANSA"},
  {"value": "ELIN", "label": "ELIN"},
  {"value": "EI/EIDA/DELIGRAD", "label": "EI/EIDA/DELIGRAD"},
  {"value": "MIDEA", "label": "MIDEA"},
  {"value": "OBODIN", "label": "OBODIN"},
  {"value": "SENCOR", "label": "SENCOR"},
  {"value": "MBS/MILAN BLAGOJEVIC/SMEDEREVO", "label": "MBS/MILAN BLAGOJEVIC/SMEDEREVO"},
  {"value": "LIEBHERR", "label": "LIEBHERR"},
  {"value": "DAEWOO", "label": "DAEWOO"},
  {"value": "ELTA", "label": "ELTA"},
  {"value": "HOUSEL", "label": "HOUSEL"},
  {"value": "VOX ELECTRONICS", "label": "VOX ELECTRONICS"},
  {"value": "WHI BAUKNECHT", "label": "WHI BAUKNECHT"},
  {"value": "MIELE", "label": "MIELE"},
  {"value": "PRIMUS", "label": "PRIMUS"},
  {"value": "PRIVILEG", "label": "PRIVILEG"},
  {"value": "GALANTZ", "label": "GALANTZ"},
  {"value": "NEO", "label": "NEO"},
  {"value": "GIAS IBERNA", "label": "GIAS IBERNA"},
  {"value": "WHI IGNIS", "label": "WHI IGNIS"},
  {"value": "SLOBODA", "label": "SLOBODA"},
  {"value": "IGOTHERM", "label": "IGOTHERM"},
  {"value": "FAVORIT", "label": "FAVORIT"},
  {"value": "DELONGHI", "label": "DELONGHI"},
  {"value": "ROHNSON", "label": "ROHNSON"},
  {"value": "WINTERHALTER", "label": "WINTERHALTER"},
  {"value": "KAUFMAX", "label": "KAUFMAX"},
  {"value": "FRIGOZIKA", "label": "FRIGOZIKA"},
  {"value": "SEVERIN", "label": "SEVERIN"},
  {"value": "NARDI", "label": "NARDI"},
  {"value": "ATA", "label": "ATA"},
  {"value": "MEIKO", "label": "MEIKO"},
  {"value": "VINCHI", "label": "VINCHI"},
  {"value": "MATRIX", "label": "MATRIX"},
  {"value": "LTH", "label": "LTH"},
  {"value": "VIVAX", "label": "VIVAX"},
  {"value": "FRANKE", "label": "FRANKE"},
  {"value": "WHI PHILIPS", "label": "WHI PHILIPS"},
  {"value": "SLOBODA TARA", "label": "SLOBODA TARA"},
  {"value": "ISKRA/CORONA", "label": "ISKRA/CORONA"},
  {"value": "ELX IKEA", "label": "ELX IKEA"},
  {"value": "PANASONIC", "label": "PANASONIC"},
  {"value": "VENUS", "label": "VENUS"},
  {"value": "ALFA", "label": "ALFA"},
  {"value": "QUADRO", "label": "QUADRO"},
  {"value": "KRONUS", "label": "KRONUS"},
  {"value": "ARCELIK ALTUS", "label": "ARCELIK ALTUS"},
  {"value": "HAUSEL", "label": "HAUSEL"},
  {"value": "WEG", "label": "WEG"},
  {"value": "GRANDIMPIANTI", "label": "GRANDIMPIANTI"}
];

const devices = [
  {"value": "VES MASINA", "label": "VES MASINA"},
  {"value": "MASINA ZA SUDJE", "label": "MASINA ZA SUDJE"},
  {"value": "MKA PEGLA/PEGLA NA PARU", "label": "MKA PEGLA/PEGLA NA PARU"},
  {"value": "SPORET ELEKTRICNI", "label": "SPORET ELEKTRICNI"},
  {"value": "MKA KAPSULE/FILTER KAFE APARAT", "label": "MKA KAPSULE/FILTER KAFE APARAT"},
  {"value": "FR FRIZIDER KOMBINOVANI", "label": "FR FRIZIDER KOMBINOVANI"},
  {"value": "KLIMA UREDJAJ", "label": "KLIMA UREDJAJ"},
  {"value": "MKA USISIVAC", "label": "MKA USISIVAC"},
  {"value": "SPORET UGRADNA EL PLOCA", "label": "SPORET UGRADNA EL PLOCA"},
  {"value": "FR FRIZIDER", "label": "FR FRIZIDER"},
  {"value": "SUSARA VESA", "label": "SUSARA VESA"},
  {"value": "SPORET UGRADNA RERNA", "label": "SPORET UGRADNA RERNA"},
  {"value": "MKA FEN ZA KOSU", "label": "MKA FEN ZA KOSU"},
  {"value": "FR ZAMRZIVAC", "label": "FR ZAMRZIVAC"},
  {"value": "MKA TRIMER/MASINICA ZA SISANJE", "label": "MKA TRIMER/MASINICA ZA SISANJE"},
  {"value": "MKA MIKSER RUCNI/BEZ POSUDE", "label": "MKA MIKSER RUCNI/BEZ POSUDE"},
  {"value": "OSTALO", "label": "OSTALO"},
  {"value": "MKA PEGLA SA GENERATOROM PARE", "label": "MKA PEGLA SA GENERATOROM PARE"},
  {"value": "MKA MIKROTALASNA PECNICA", "label": "MKA MIKROTALASNA PECNICA"},
  {"value": "MKA AUTOMATSKI KAFE AP SA MLINOM", "label": "MKA AUTOMATSKI KAFE AP SA MLINOM"},
  {"value": "MKA PEKARA ZA HLEB", "label": "MKA PEKARA ZA HLEB"},
  {"value": "MKA GREJALICA/KALORIFER", "label": "MKA GREJALICA/KALORIFER"},
  {"value": "VES MASINA PRANJE I SUSENJE", "label": "VES MASINA PRANJE I SUSENJE"},
  {"value": "PRO MASINA ZA SUDJE", "label": "PRO MASINA ZA SUDJE"},
  {"value": "MKA KETLER/KUVALO VODE/DZEZVA", "label": "MKA KETLER/KUVALO VODE/DZEZVA"},
  {"value": "MKA RESO ELEKTRICNI", "label": "MKA RESO ELEKTRICNI"},
  {"value": "MKA BLENDER", "label": "MKA BLENDER"},
  {"value": "MKA SOKOVNIK", "label": "MKA SOKOVNIK"},
  {"value": "PRO FR RASHLADNA VITRINA", "label": "PRO FR RASHLADNA VITRINA"},
  {"value": "MKA TOSTER", "label": "MKA TOSTER"},
  {"value": "MKA GREJALICA/RADIJATOR ELEKTRIC", "label": "MKA GREJALICA/RADIJATOR ELEKTRIC"},
  {"value": "ASPIRATOR", "label": "ASPIRATOR"},
  {"value": "MKA SPORET MINI", "label": "MKA SPORET MINI"},
  {"value": "FR FRIZIDER SIDE BY SIDE", "label": "FR FRIZIDER SIDE BY SIDE"},
  {"value": "MKA MULTIPRAKTIK", "label": "MKA MULTIPRAKTIK"},
  {"value": "MKA ROSTILJ/PEKAC PREKLOPNI", "label": "MKA ROSTILJ/PEKAC PREKLOPNI"},
  {"value": "PRO FR LEDOMAT", "label": "PRO FR LEDOMAT"},
  {"value": "MKA DEPILATOR/EPILATOR", "label": "MKA DEPILATOR/EPILATOR"},
  {"value": "PRO MASINA ZA CASE", "label": "PRO MASINA ZA CASE"},
  {"value": "MKA SECKO/COPER", "label": "MKA SECKO/COPER"},
  {"value": "MKA VAGA KUHINJSKA", "label": "MKA VAGA KUHINJSKA"},
  {"value": "MKA MIKSER STAPNI", "label": "MKA MIKSER STAPNI"},
  {"value": "MKA STAJLER/CETKA/PEGLA ZA KOSU", "label": "MKA STAJLER/CETKA/PEGLA ZA KOSU"},
  {"value": "PRO VES MASINA", "label": "PRO VES MASINA"},
  {"value": "MKA MASINA ZA MLEVENJE MESA", "label": "MKA MASINA ZA MLEVENJE MESA"},
  {"value": "MKA USISIVAC KUHINJSKI/RUCNI", "label": "MKA USISIVAC KUHINJSKI/RUCNI"},
  {"value": "MKA PEGLA ZA USPRAVNO PEGLANJE", "label": "MKA PEGLA ZA USPRAVNO PEGLANJE"},
  {"value": "MKA MIKSER RUCNI SA POSUDOM", "label": "MKA MIKSER RUCNI SA POSUDOM"},
  {"value": "MKA RESO INDUKCIONI", "label": "MKA RESO INDUKCIONI"},
  {"value": "MKA USISIVAC STAPNI", "label": "MKA USISIVAC STAPNI"},
  {"value": "MKA FRITEZA", "label": "MKA FRITEZA"},
  {"value": "SPORET KOMBINOVANI", "label": "SPORET KOMBINOVANI"},
  {"value": "MKA SALAMOREZNICA", "label": "MKA SALAMOREZNICA"},
  {"value": "MKA APARAT ZA KUVANJE NA PARU", "label": "MKA APARAT ZA KUVANJE NA PARU"},
  {"value": "PRO SUSARA VESA", "label": "PRO SUSARA VESA"},
  {"value": "MKA MIKSER NES KAFE", "label": "MKA MIKSER NES KAFE"},
  {"value": "MKA MLIN ZA KAFU", "label": "MKA MLIN ZA KAFU"},
    {"value": "PRO NOZ ZA GiIROS", "label": "PRO NOZ ZA GiIROS"},
    {"value": "MKA EKSPRES/PRETIS LONAC", "label": "MKA EKSPRES/PRETIS LONAC"},
    {"value": "FR FRIZIDER UGRADNI", "label": "FR FRIZIDER UGRADNI"},
    {"value": "MKA GREJALICA/PANELNI RADIJATOR", "label": "MKA GREJALICA/PANELNI RADIJATOR"},
    {"value": "PRO STO ZA PEGLANJE SA PEGLOM", "label": "PRO STO ZA PEGLANJE SA PEGLOM"},
    {"value": "MKA VENTILATOR", "label": "MKA VENTILATOR"},
    {"value": "PRO RERNA KONVEKTOMAT", "label": "PRO RERNA KONVEKTOMAT"},
    {"value": "MKA USISIVAC ROBOT", "label": "MKA USISIVAC ROBOT"},
    {"value": "MKA SOKOVNIK/CITRUS/AGRUM PRESA", "label": "MKA SOKOVNIK/CITRUS/AGRUM PRESA"},
    {"value": "PRO KIPER ELEKTRICNI", "label": "PRO KIPER ELEKTRICNI"},
    {"value": "PRO FR RASHLADNA KOMORA", "label": "PRO FR RASHLADNA KOMORA"},
    {"value": "MKA MASAZER", "label": "MKA MASAZER"},
    {"value": "MKA VAKUM/APARAT ZA VARENJE", "label": "MKA VAKUM/APARAT ZA VARENJE"},
    {"value": "MKA PAROCISTAC", "label": "MKA PAROCISTAC"},
    {"value": "PRO FRITEZA", "label": "PRO FRITEZA"},
    {"value": "MKA VAGA ZA TELESNU TEZINU", "label": "MKA VAGA ZA TELESNU TEZINU"},
    {"value": "PRO SPORET ELEKTRICNI", "label": "PRO SPORET ELEKTRICNI"},
    {"value": "MKA ELEKTRICNI NOZ ZA HLEB", "label": "MKA ELEKTRICNI NOZ ZA HLEB"},
    {"value": "SPORET UGRADNA INDUKCIONA PLOCA", "label": "SPORET UGRADNA INDUKCIONA PLOCA"},
    {"value": "FR PRO HLADNI STO", "label": "FR PRO HLADNI STO"},
    {"value": "MKA FRITEZA/AIR FRYER", "label": "MKA FRITEZA/AIR FRYER"},
    {"value": "MKA ELEKTR EKSPRES LONAC/MULTIKU", "label": "MKA ELEKTR EKSPRES LONAC/MULTIKU"},
    {"value": "PRO KUTER/SECKALICA/UNIVERZALKA", "label": "PRO KUTER/SECKALICA/UNIVERZALKA"},
    {"value": "PRO CITRUS/AGRUM CEDILJKA", "label": "PRO CITRUS/AGRUM CEDILJKA"},
    {"value": "PRO FR HLADNJACA", "label": "PRO FR HLADNJACA"},
    {"value": "PRO FR FRIZIDER VINSKI", "label": "PRO FR FRIZIDER VINSKI"},
    {"value": "PRO KAFE APARAT", "label": "PRO KAFE APARAT"},
    {"value": "MKA MIKSER PLANETARNI I POSTOLJE", "label": "MKA MIKSER PLANETARNI I POSTOLJE"},
    {"value": "MKA MASINA ZA TESTO", "label": "MKA MASINA ZA TESTO"},
    {"value": "SPORET UGRAD ZAVISNI RERNA+PLOCA", "label": "SPORET UGRAD ZAVISNI RERNA+PLOCA"},
    {"value": "SPORET UGRADNA PLIN PLOCA", "label": "SPORET UGRADNA PLIN PLOCA"},
    {"value": "SPORET UGRADNA KOMB PLOCA", "label": "SPORET UGRADNA KOMB PLOCA"},
    {"value": "MKA APARAT ZA UKLANJANJE FLEKA", "label": "MKA APARAT ZA UKLANJANJE FLEKA"},
    {"value": "PRO TOSTER", "label": "PRO TOSTER"},
    {"value": "MKA APARAT ZA TURSKU KAFU", "label": "MKA APARAT ZA TURSKU KAFU"},
    {"value": "MKA MIKROTALASNA PECNICA UGRADNA", "label": "MKA MIKROTALASNA PECNICA UGRADNA"},
    {"value": "MKA PRECISTAC VAZDUHA", "label": "MKA PRECISTAC VAZDUHA"},
    {"value": "MKA RERNA HALOGENA", "label": "MKA RERNA HALOGENA"},
    {"value": "PRO TOPLI STO", "label": "PRO TOPLI STO"},
    {"value": "MKA TRIMER ZA NOS/USI", "label": "MKA TRIMER ZA NOS/USI"},
    {"value": "PRO KAZAN ZA KUVANJE POD PRITISK", "label": "PRO KAZAN ZA KUVANJE POD PRITISK"},
    {"value": "PRO DEPURATOR/OMEKSIVAC VODE", "label": "PRO DEPURATOR/OMEKSIVAC VODE"},
    {"value": "PRO MASINA ZA LJUSCENJE KROMPIRA", "label": "PRO MASINA ZA LJUSCENJE KROMPIRA"},
    {"value": "PRO MIKROTALASNA PECNICA", "label": "PRO MIKROTALASNA PECNICA"},
    {"value": "PRO VALJAK ZA PEGLANJE", "label": "PRO VALJAK ZA PEGLANJE"},
    {"value": "PRO BLENDER", "label": "PRO BLENDER"},
    {"value": "PRO PICA PEC", "label": "PRO PICA PEC"},
    {"value": "PRO ROSTILJ ELEKTRICNI", "label": "PRO ROSTILJ ELEKTRICNI"},
    {"value": "MKA APARAT ZA GALETE/BAKIN KOLAC", "label": "MKA APARAT ZA GALETE/BAKIN KOLAC"},
    {"value": "MKA APARAT ZA KOKICE", "label": "MKA APARAT ZA KOKICE"},
    {"value": "MKA APARAT ZA BRIJANJE", "label": "MKA APARAT ZA BRIJANJE"},
    {"value": "MKA RESO PLINSKI", "label": "MKA RESO PLINSKI"},
    {"value": "SPORET PLINSKI", "label": "SPORET PLINSKI"}
]

const ReportFault = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [files, setFiles] = useState([]);
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
  });
  const modalRef = useRef(null);
  usePreventBodyScroll(isModalOpen);

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

  const handleFileDrop = (e) => {
    e.preventDefault();
    const newFiles = Array.from(e.dataTransfer.files);
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
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

    files.forEach((file) => {
      if (file.type.startsWith("image/")) {
        formDataObj.append('image', file);
      } else if (file.type === "application/pdf") {
        formDataObj.append('pdf', file);
      }
    });

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/reportFault`,
        {
          method: "POST",
          body: formDataObj,
        }
      );

      if (response.ok) {
        customToast.success("Prijava kvara je uspešno poslata!");
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
        });
        setFiles([]);
        toggleModal();
      } else {
        customToast.error("Slanje prijave nije uspelo");
      }
    } catch (error) {
      console.error("Error reporting fault:", error);
      customToast.error("Došlo je do greške prilikom prijave kvara");
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
          <span className="mr-1 sm:mr-5 text-[1.2rem] sm:text-[1.6rem] group-hover:opacity-100 transition-opacity font-semibold duration-300">
            Prijavi kvar
          </span>
          <Settingsicon
            styles={"hidden sm:block"}
            width={35}
            height={35}
            color={"#F7F7FF"}
          />
          <Settingsicon
            styles={"block sm:hidden"}
            width={24}
            height={24}
            color={"#F7F7FF"}
          />
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
                </div>

                <div className="space-y-6">
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
                  <div
                    className="border-dashed border-4 border-gray-400 p-4 rounded-md"
                    onDrop={handleFileDrop}
                    onDragOver={(e) => e.preventDefault()}
                  >
                    <label
                      htmlFor="files"
                      className="block text-mintCream font-medium text-[1.6rem]"
                    >
                      Dodajte slike aparata, fabričke nalepnice, ili kvara (drag
                      & drop)
                    </label>
                    <input
                      type="file"
                      id="files"
                      name="files"
                      onChange={handleFileChange}
                      accept="image/*,application/pdf"
                      multiple
                      className="mt-1 block w-full px-3 py-[.7rem] bg-mintCream text-night rounded-md focus:outline-none text-[1.6rem] focus:border-offRed focus:ring focus:ring-offRed"
                    />
                    <div className="mt-2 text-mintCream">
                      {files.length > 0 && (
                        <ul>
                          {files.map((file, index) => (
                            <li key={index}>{file.name}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-davyGray text-mintCream rounded-md text-[1.6rem] hover:bg-offRed hover:transition-colors hover:transition-duration-600  focus:outline-none focus:ring focus:ring-offRed"
                disabled={isSubmitting}
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
