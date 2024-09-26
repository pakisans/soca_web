// /app/sitemap.js ili /pages/sitemap.js
import { fetchAllArticles } from "@/services/articlesApi";
import { getCategories } from "@/services/categoriesAPI";

export default async function sitemap() {
  const baseUrl = "https://www.soca.rs";

  // Staticke rute
  const staticRoutes = [
    "",
    "o-nama-i-kontakt",
    "korpa",
    "politika-privatnosti",
    "prijava",
    "prodajni-program",
    "prodajni-program/profesionalne-masine-za-veseraje",
    "prodajni-program/meiko-profesionalne-masine",
    "prodajni-program/meiko-profesionalne-masine/podpultne-masine",
    "prodajni-program/meiko-profesionalne-masine/podpultne-masine/upster-u",
    "prodajni-program/meiko-profesionalne-masine/podpultne-masine/m-iclean-u",
    "prodajni-program/meiko-profesionalne-masine/masine-za-pranje-sa-haubom",
    "prodajni-program/meiko-profesionalne-masine/masine-za-pranje-sa-haubom/m-iclean-h",
    "prodajni-program/meiko-profesionalne-masine/masine-za-pranje-sa-haubom/upster-h500",
    "prodajni-program/meiko-profesionalne-masine/masine-za-pranje-crnog-posudja",
    "prodajni-program/meiko-profesionalne-masine/masine-za-pranje-crnog-posudja/dv-fv-serije",
    "servis",
    "uslovi-koriscenja",
    "pitanja"
  ];

  const staticUrls = staticRoutes.map(route => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Dinamicke rute za kategorije
  const categories = await getCategories();
  const categoryUrls = categories.map(category => ({
    url: `${baseUrl}/proizvodi/${category.naziv.toLowerCase()
      .replace(/ /g, "-")
      .replace(/č/g, "c")
      .replace(/ć/g, "c")
      .replace(/š/g, "s")
      .replace(/Š/g, "s")
      .replace(/đ/g, "dj")
      .replace(/ž/g, "z")}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // Paginacija za artikle
  let page = 1;
  const limit = 1000; // Broj artikala po stranici, možete smanjiti ukoliko API ima ograničenja
  let allArticles = [];
  let hasMore = true;

  while (hasMore) {
    try {
      const { articles, totalProducts } = await fetchAllArticles(page, limit);
      allArticles = [...allArticles, ...articles];

      // Provera da li je ostalo još artikala
      hasMore = allArticles.length < totalProducts;
      page += 1; // Povećavanje broja stranice za sledeći iteraciju
    } catch (error) {
      console.error("Error fetching articles during pagination:", error);
      break;
    }
  }

  // Generisanje URL-ova za artikle
  const articleUrls = allArticles.map((article) => {
    const kategorija = article.kategorija ? article.kategorija.toLowerCase() : "default-category";
    const grupa = article.grupa ? article.grupa : "default-group";
    const formattedName = article.naziv
      .toLowerCase()
      .replace(/\//g, "_")
      .replace(/[^a-z0-9_]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .replace(/š/g, "s")
      .replace(/Š/g, "s");

    return {
      url: `${baseUrl}/proizvodi/${kategorija?.toLowerCase()
      .replace(/š/g, "s")
      .replace(/Š/g, "s")}/${grupa}/${formattedName}?id=${article.id}`,
      lastModified: '2024-09-26T15:02:24.021Z',
      changeFrequency: 'yearly',
      priority: 0.6,
    };
  });

  // Kombinacija svih URL-ova za sitemap
  return [...staticUrls, ...categoryUrls, ...articleUrls];
}
