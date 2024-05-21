export async function getCategories() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/categories`
    );
    const categories = await response.json();
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}
