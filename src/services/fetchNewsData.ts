const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

export type articleT = {
  title: string;
  excerpt: string;
  link: string;
  media: string;
};

const HEADERS = {
  origin: API_URL,
  
  
}

export const getNewsByCategory = async (category: string = "") => {
  const res = await fetch(
    `${API_URL}/top-headlines?category=${category}&language=en&apiKey=${API_KEY}`
  );
  const data = await res.json();
  const news: articleT[] = await data.articles.map(filterNews);
  return news;
};

export const getAllHeadlineNews = async () => {
  const res = await fetch(`${API_URL}/v2/latest_headlines?lang=en&when=1h`, {
    headers: {
      "x-api-key": API_KEY,
      Referer: API_URL
    },
  });
  const data = await res.json();
  const news: articleT[] = await data.articles.map(filterNews);
  return news;
};

export const SearchNews = async (search: string) => {
  const res = await fetch(
    `${API_URL}top-headlines?language=en&q=${search}&apiKey=${API_KEY}`
  );
  const data = await res.json();
  const news: articleT = data.articles.map(filterNews);
  return news;
};

const filterNews = (article: articleT) => {
  const { title, excerpt, link, media } = article;
  return { title, excerpt, link, media };
};
