import { useState } from "react";
import MainArticle from "../components/MainArticle";
import NewArticles from "../components/NewArticles";
import TopArticles from "../components/Top3Articles";
import { articleT } from "../services/fetchNewsData";

interface HomeProps {
  articles: articleT[];
}
const Home = ({ articles }: HomeProps) => {
  const [mainArticle] = useState(articles[0]);
  const [top3Articles] = useState(articles.slice(1, 4));
  const [new3Articles] = useState(articles.slice(4, 7));

  return (
    <main className="container mx-auto my-6 grid gap-y-14 px-4 sm:mt-10 sm:grid-cols-3 sm:gap-x-12 sm:gap-y-20">
      <MainArticle {...mainArticle} />
      <NewArticles newArticles={new3Articles} />
      <TopArticles topArticles={top3Articles} />
    </main>
  );
};

export default Home;
