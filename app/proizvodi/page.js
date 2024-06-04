import { getCategories } from "@/services/categoriesAPI";
import { fetchAllArticles } from "@/services/articlesApi";
import CategoriesClientComponent from "@/components/categories/CategoriesClientComponent";
import Script from "next/script";

const Proizvodi = async (context) => {
  const { page = 1, limit = 20 } = context.searchParams;

  const categoriesPromise = getCategories();
  const articlesPromise = fetchAllArticles(page, limit);

  const [categories, articlesData] = await Promise.all([
    categoriesPromise,
    articlesPromise,
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
      <Script
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
        />
      </main>
    </>
  );
};

export default Proizvodi;
