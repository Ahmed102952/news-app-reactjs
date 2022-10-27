import { articleT } from "../services/fetchNewsData";
interface TopArticlesProps {
  topArticles: articleT[];
}

const TopArticles = ({ topArticles }: TopArticlesProps) => {
  return (
    <section className="gap-6  sm:col-span-3 sm:flex sm:items-center sm:justify-between sm:gap-8">
      {topArticles.map(({ title, image_url, link }, i) => {
        return (
          <div className="flex h-[150px] w-full gap-4 overflow-hidden" key={i}>
            <img
              src={image_url}
              alt={title}
              className="h-[150px] w-[120px] object-cover object-center"
            />
            <div className="flex flex-col gap-y-1 font-Tenor">
              <span className="text-3xl font-bold text-grayish-blue">
                {(i + 1).toLocaleString("en-US", { minimumIntegerDigits: 2 })}
              </span>
              <h3
                className="overflow-hidden text-ellipsis text-lg font-bold text-dark-blue line-clamp-4 hover:text-soft-orange"
                title={title}
              >
                <a href={link}>{title}</a>
              </h3>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default TopArticles;
