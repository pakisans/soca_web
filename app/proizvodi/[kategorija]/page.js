import { getCategories } from "@/services/categoriesAPI";
import { fetchArticlesByCategory } from "@/services/articlesApi";
import CategoriesClientComponent from "@/components/categories/CategoriesClientComponent";

export async function generateMetadata({ params }) {
  const { kategorija, grupa } = params;
  const decodedKategorija = kategorija ? decodeURIComponent(kategorija) : "";
  const decodedGrupa = grupa ? decodeURIComponent(grupa) : "";

  const categoryTitle = decodedKategorija
    ? decodedKategorija.charAt(0).toUpperCase() +
      decodedKategorija.slice(1).toLowerCase()
    : "";
  const groupTitle = decodedGrupa
    ? decodedGrupa.charAt(0).toUpperCase() + decodedGrupa.slice(1).toLowerCase()
    : "";

  return {
    title: `Proizvodi${categoryTitle ? ` - ${categoryTitle}` : ""}${
      groupTitle ? ` - ${groupTitle}` : ""
    }`,
    description: `Pregledajte naše proizvode iz kategorije ${categoryTitle} i grupe ${groupTitle}. Otkrijte širok asortiman proizvoda u našoj ponudi.`,
  };
}

export default async function Proizvodi({ params, searchParams }) {
  const { kategorija, grupa } = params;
  const decodedKategorija = kategorija ? decodeURIComponent(kategorija) : "";
  const decodedGrupa = grupa ? decodeURIComponent(grupa) : "";
  const page = parseInt(searchParams.page) || 1;
  const limit = parseInt(searchParams.limit) || 20;
  const sort = searchParams.sort;

  const categoriesPromise = getCategories();
  const articlesPromise = fetchArticlesByCategory(
    decodedKategorija,
    decodedGrupa,
    page,
    limit,
    sort
  );

  const [categories, articlesData] = await Promise.all([
    categoriesPromise,
    articlesPromise,
  ]);

  const { articles, count, totalPages } = articlesData;
  return (
    <div className="w-full flex flex-col justify-center items-center md:justify-between">
      <CategoriesClientComponent
        articles={articles}
        categories={categories}
        currentPage={page}
        totalProducts={count}
        totalPages={totalPages}
      />
    </div>
  );
}
