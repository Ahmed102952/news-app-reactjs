const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

export type articleT = {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
};

export const getNewsByCategory = async (category: string = "") => {
  const res = await fetch(
    `${API_URL}top-headlines?category=${category}&language=en&apiKey=${API_KEY}`
  );
  const data = await res.json();
  const news: articleT[] = await data.articles.map(filterNews);
  return news;
};

export const getAllHeadlineNews = async () => {
  const res = await fetch(
    `${API_URL}top-headlines?language=en&apiKey=${API_KEY}`
  );
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
  return news
};

const filterNews = (article: articleT) => {
  const { title, description, url, urlToImage } = article;
  return { title, description, url, urlToImage };
};


