import { getCategories } from "@/services/categoriesAPI";
import { fetchArticlesByCategory } from "@/services/articlesApi";
import CategoriesClientComponent from "@/components/categories/CategoriesClientComponent";

const Proizvodi = async (context) => {
  const { params } = context;
  const { kategorija, pretraga, sifra } = params;
  const { page = 1, limit = 20 } = context.searchParams;
  console.log(context);
  const categoriesPromise = getCategories();
  const articlesPromise = fetchArticlesByCategory(kategorija, page, limit);

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
};

export default Proizvodi;
