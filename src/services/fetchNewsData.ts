const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

export type articleT = {
  title: string;
  description: string;
  link: string;
  image_url: string;
};

export const getNewsByCategory = async (category: string = "") => {
  const res = await fetch(
    `${API_URL}/news?category=${category}&language=en&apiKey=${API_KEY}`
  );
  const data = await res.json();
  const news: articleT[] = await data.results.map(filterNews);
  return news;
};

export const getAllHeadlineNews = async () => {
  const res = await fetch(`${API_URL}news?language=en&apiKey=${API_KEY}`);
  const data = await res.json();
  const news: articleT[] = await data.results.map(filterNews);
  return news;
};

// export const SearchNews = async (search: string) => {
//   const res = await fetch(
//     `${API_URL}top-headlines?language=en&q=${search}&apiKey=${API_KEY}`
//   );
//   const data = await res.json();
//   const news: articleT = data.results.map(filterNews);
//   return news;
// };

const filterNews = (article: articleT) => {
  const { title, description, link, image_url } = article;
  return { title, description, link, image_url };
};
