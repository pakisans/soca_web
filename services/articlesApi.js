export function fetchArticles() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/articles`;

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Failed to fetch articles:", error);
      throw error;
    });
}

export const fetchArticlesByCategory = async (
  category,
  group,
  page = 1,
  limit = 20
) => {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/articles/category`);
  if (category) {
    url.searchParams.append("kategorija", category);
  }
  if (group) {
    url.searchParams.append("grupa", group);
  }
  url.searchParams.append("page", page);
  url.searchParams.append("limit", limit);

  return fetch(url.toString())
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Failed to fetch articles:", error);
      throw error;
    });
};
