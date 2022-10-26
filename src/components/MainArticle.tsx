import { articleT } from "../services/fetchNewsData";
import ReadMoreBtn from "./ReadMoreBtn";

type MainArticleProps = articleT;
const MainArticle = ({
  title,
  excerpt,
  link,
  media,
}: MainArticleProps) => {
  return (
    <article className="sm:col-span-2 sm:grid sm:justify-between sm:gap-y-2">
      <img src={media} alt={title} className="" />
      <div className="sm:grid sm:grid-cols-2 sm:gap-8">
        <h1
          className="my-6 font-Tenor text-2xl font-bold text-dark-blue sm:my-0 sm:text-3xl overflow-hidden line-clamp-5 text-ellipsis"
          title={title}
        >
          {title}
        </h1>
        <div className="sm:flex sm:flex-col sm:justify-between sm:gap-4">
          <p
            className="my-6 font-Noto-Sans text-dark-grayish-blue sm:my-0 sm:text-lg"
            title={title}
          >
            {excerpt}
          </p>
          <ReadMoreBtn url={link} />
        </div>
      </div>
    </article>
  );
};

export default MainArticle;
