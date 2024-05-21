import { memo } from "react";
import ImageWithFallback from "../global/ImageWithFallback";

const ProductsList = memo(({ articles }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {articles.map((article) => (
      <div
        key={article.id}
        className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md"
      >
        <h3 className="text-lg font-semibold text-gray-800 mb-2 text-[1.8rem] uppercase min-h-[5.3rem] text-center">
          {article.naziv}
        </h3>
        <div className="lg:flex lg:items-center lg:justify-center xl:mb-4 lg:w-[200px] lg:h-[200px]">
          <ImageWithFallback
            src={`https://www.soca.rs/public${article.imageUrl}`}
            alt={article.naziv}
            width={200}
            height={200}
            className="object-cover w-full h-full"
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
        <button className="bg-offRed text-white py-4 px-4 text-[1.4rem] rounded hover:bg-red-700 transition duration-300 mt-auto">
          Dodaj u korpu
        </button>
      </div>
    ))}
  </div>
));

ProductsList.displayName = "ProductsList";

export default ProductsList;
