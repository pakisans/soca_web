import { memo, useState } from "react";
import ImageWithFallback from "../global/ImageWithFallback";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/ShopCartContext";
import InquiryModal from "../global/InquryModal";

const ProductsList = memo(({ articles }) => {
  const pathname = usePathname();
  const { addToCart } = useCart();
  const [showModal, setShowModal] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const formatHrefUrl = (article) => {
    if (pathname === "/proizvodi") {
      return `${pathname}/${article.kategorija?.toLowerCase()}/${
        article.grupa
      }/${article.naziv
        .toLowerCase()
        .replace(/\//g, "_")
        .replace(/[^a-z0-9_]+/g, "-")
        .replace(/^-+|-+$/g, "")}?id=${article.id}`;
    }
    return `${pathname}/${article.naziv
      .toLowerCase()
      .replace(/\//g, "_")
      .replace(/[^a-z0-9_]+/g, "-")
      .replace(/^-+|-+$/g, "")}?id=${article.id}`;
  };

  const handleAddToCart = (e, article) => {
    e.stopPropagation();
    e.preventDefault();
    let extendedArticle = {
      ...article,
      kategorija: article.kategorija,
      grupa: article.grupa,
    };
    addToCart(extendedArticle);
  };

  const handleSendInquiry = (e, article) => {
    e.stopPropagation();
    e.preventDefault();
    setSelectedArticle(article);
    setShowModal(true);
  };

  return (
    <>
      {showModal ? (
        <InquiryModal
          article={selectedArticle}
          onClose={() => setShowModal(false)}
        />
      ) : null}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-[1rem]">
        {articles.map((article) => (
          <Link
            scroll={true}
            href={decodeURIComponent(formatHrefUrl(article))}
            key={article.id}
            className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:outline outline-4 hover:outline-gray-800 transition-outline duration-600 ease cursor-pointer"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2 lg:text-[1.5rem] uppercase min-h-[5.3rem] text-center">
              {article.naziv}
            </h3>
            <div className="lg:flex lg:items-center lg:justify-center xl:mb-4 w-[10rem] h-[10rem] lg:w-[20rem] lg:h-[20rem]">
              <ImageWithFallback
                src={`https://www.soca.rs/public${article.imageUrl}`}
                alt={article.naziv}
                width={200}
                height={200}
                styles="w-full h-full"
              />
            </div>
            <p className="text-gray-600 mb-2 text-[1.4rem]">
              Šifra: {article.sifra}
            </p>
            {article.aktivan === 1 ? (
              article.kolicina > 0 ? (
                <>
                  <p className="text-green-600 font-bold text-[1.4rem] mb-2">
                    Cena:{" "}
                    {article.prodajna_cena.toLocaleString("sr-RS", {
                      style: "currency",
                      currency: "RSD",
                    })}
                  </p>
                  <button
                    onClick={(e) => handleAddToCart(e, article)}
                    className="bg-offRed text-white py-4 px-4 text-[1.4rem] rounded hover:bg-red-700 transition duration-300 mt-auto"
                  >
                    Dodaj u korpu
                  </button>
                </>
              ) : (
                <>
                  <p className="text-red-600 font-bold mb-2">
                    Deo nije na stanju
                  </p>
                  <button
                    onClick={(e) => handleSendInquiry(e, article)}
                    className="bg-yellow-500 text-white py-4 px-4 text-[1.4rem] rounded hover:bg-yellow-700 transition duration-300 mt-auto"
                  >
                    Pošaljite upit
                  </button>
                </>
              )
            ) : (
              <button
                disabled
                className="bg-gray-500 text-white py-4 px-4 text-[1.4rem] rounded mt-auto cursor-not-allowed"
              >
                Nabavka nije moguća
              </button>
            )}
          </Link>
        ))}
      </div>
    </>
  );
});

ProductsList.displayName = "ProductsList";

export default ProductsList;
