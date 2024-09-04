export const fetchArticles = () => {
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
};

export const fetchArticlesByCategory = async (
  category,
  group,
  page = 1,
  limit = 20,
  sort,
  partner = ""
) => {
  const url = new URL(
    `${process.env.NEXT_PUBLIC_API_URL}/articles/category/group`
  );
  if (category) {
    url.searchParams.append("kategorija", category);
  }
  if (group) {
    url.searchParams.append("grupa", group);
  }
  url.searchParams.append("page", page);
  url.searchParams.append("limit", limit);
  if (sort) {
    url.searchParams.append("sort", sort);
  }

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

export const fetchArticlesByCategoryAll = async (
  category,
  page = 1,
  limit = 20,
  sort
) => {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/articles/category`);
  if (category) {
    url.searchParams.append("kategorija", category);
  }
  url.searchParams.append("page", page);
  url.searchParams.append("limit", limit);
  if (sort) {
    url.searchParams.append("sort", sort);
  }

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

export async function getArticleByName(name) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/article/${encodeURIComponent(
    name
  ).replace(/%2F/g, "_")}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
}

export async function getArticleById(id) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/article?id=${id}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch article with id: ${id}`);
  }
  return response.json();
}

export const fetchAllArticles = async (page, limit, search, sort, partner) => {
  try {
    const searchQuery = search ? `&search=${encodeURIComponent(search)}` : "";
    const sortQuery = sort ? `&sort=${encodeURIComponent(sort)}` : "";
    const partnerQuery = partner
      ? `&partner=${encodeURIComponent(partner)}`
      : "";
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/articles?page=${page}&limit=${limit}${searchQuery}${sortQuery}${partnerQuery}`
    );
    console.log("alo debilu", response);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};

export const sendCartEmail = async (formData, artikalPodaci, ukupnaCena) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/sendCartEmail`;

  const payload = {
    ...formData,
    artikalPodaci,
    ukupnaCena,
  };

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Failed to send cart email:", error);
      throw error;
    });
};

export const sendInquiryEmail = async (formData) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/sendInquiry`;

  const payload = {
    ...formData,
  };

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Failed to send inquiry email:", error);
      throw error;
    });
};
