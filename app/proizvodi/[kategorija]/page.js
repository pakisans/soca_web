import { getCategories } from "@/services/categoriesAPI";
import { fetchArticlesByCategory } from "@/services/articlesApi";
import CategoriesClientComponent from "@/components/categories/CategoriesClientComponent";

export async function generateMetadata({ params }) {
  const categoryName = params.kategorija;
  const categoryTitle = categoryName
    ? categoryName?.charAt(0).toUpperCase() +
      categoryName?.slice(1).toLowerCase()
    : "";

  return {
    title: `Proizvodi ${categoryTitle ? `$ - {categoryTitle}` : ""}`,
    description: `Pregledajte naše proizvode iz kategorije ${categoryTitle}. Otkrijte širok asortiman proizvoda u našoj ponudi.`,
  };
}

export default async function Proizvodi({ params, searchParams }) {
  const { kategorija } = params;
  const { pretraga, sifra } = searchParams;
  const page = parseInt(searchParams.page) || 1;
  const limit = parseInt(searchParams.limit) || 20;

  const categoriesPromise = getCategories();
  const articlesPromise = fetchArticlesByCategory(
    kategorija,
    page,
    limit,
    pretraga,
    sifra
  );

  const [categories, articlesData] = await Promise.all([
    categoriesPromise,
    articlesPromise,
  ]);

  const { articles, totalProducts } = articlesData;

  return (
    <main className="flex flex-col justify-center items-center md:justify-between md:pr-[4rem]">
      <CategoriesClientComponent
        articles={articles}
        categories={categories}
        currentPage={page}
        totalProducts={totalProducts}
      />
    </main>
  );
}
