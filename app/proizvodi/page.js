import { getCategories } from "@/services/categoriesAPI";
import { fetchAllArticles } from "@/services/articlesApi";
import CategoriesClientComponent from "@/components/categories/CategoriesClientComponent";
import { fetchAllManufacturers } from "@/services/manufacturersApi";

const Proizvodi = async (context) => {
  const {
    page = 1,
    limit = 20,
    pretraga,
    sort,
    partner,
  } = context.searchParams;
  const utilizedSearchParams = {
    page,
    limit,
    pretraga,
    sort,
  };

  const categoriesPromise = getCategories();
  const manufacturersPromies = fetchAllManufacturers();
  const articlesPromise = fetchAllArticles(
    page,
    limit,
    pretraga,
    sort,
    partner
  );

  const [categories, articlesData, manufacturersData] = await Promise.all([
    categoriesPromise,
    articlesPromise,
    manufacturersPromies,
  ]);

  const { articles, totalProducts, totalPages } = articlesData;

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "ItemList",
    itemListElement: articles.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://www.soca.rs/proizvodi/${article.id}`,
      name: article.naziv,
      image: `https://www.soca.rs/public${article.imageUrl}`,
      description: article.naziv || "Opis proizvoda nije dostupan.",
    })),
  };
  return (
    <>
      <script
        id="application/ld+json-product-list"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="beforeInteractive"
      />
      <main className="flex flex-col justify-center items-center md:justify-between w-full">
        <CategoriesClientComponent
          articles={articles}
          categories={categories}
          currentPage={page}
          totalProducts={totalProducts}
          totalPages={totalPages}
          manufacturers={manufacturersData}
          utilizedSearchParams={utilizedSearchParams}
        />
      </main>
    </>
  );
};

export default Proizvodi;
