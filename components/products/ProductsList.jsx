import { memo } from "react";
import ImageWithFallback from "../global/ImageWithFallback";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/ShopCartContext";

const ProductsList = memo(({ articles }) => {
  const pathname = usePathname();
  const { addToCart } = useCart();
  const formatHrefUrl = (article) => {
    if (pathname == "/proizvodi") {
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
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-[1rem]">
      {articles.map((article) => (
        <Link
          scroll={false}
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
              <p className="text-green-600 font-bold text-[1.4rem] mb-2">
                Cena: {article.prodajna_cena} RSD
              </p>
            ) : (
              <p className="text-red-600 font-bold mb-2">Deo nije na stanju</p>
            )
          ) : (
            <p className="text-red-600 font-bold mb-2">Deo nije dobavljiv</p>
          )}
          <button
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              let extendedArticle = {
                ...article,
                kategorija: article.kategorija,
                grupa: article.grupa,
              };
              addToCart(extendedArticle);
            }}
            className="bg-offRed text-white py-4 px-4 text-[1.4rem] rounded hover:bg-red-700 transition duration-300 mt-auto"
          >
            Dodaj u korpu
          </button>
        </Link>
      ))}
    </div>
  );
});

ProductsList.displayName = "ProductsList";

export default ProductsList;
