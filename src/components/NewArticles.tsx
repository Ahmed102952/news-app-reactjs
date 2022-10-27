import React from "react";
import { articleT } from "../services/fetchNewsData";

interface NewArticlesProps {
  newArticles: articleT[];
}
const NewArticles = ({ newArticles }: NewArticlesProps) => {
  return (
    <section className="w-full bg-dark-blue p-6">
      <h2 className="font-Tenor text-3xl font-bold text-soft-orange">New</h2>
      {newArticles?.slice(0, 3).map(({ title, description, link }, i, a) => {
        return (
          <article
            className={`${
              i === a.length - 1 ? "" : "border-b border-b-dark-grayish-blue"
            } space-y-2 py-4`}
            key={i}
          >
            <h3
              className="overflow-hidden text-ellipsis font-Tenor text-base font-semibold text-white line-clamp-3 hover:text-soft-orange"
              title={title}
            >
              <a href={link} target="_blank">
                {title}
              </a>
            </h3>
            <p
              className="overflow-hidden text-ellipsis font-Noto-Sans text-sm text-off-white line-clamp-3"
              title={description}
            >
              {description}
            </p>
          </article>
        );
      })}
    </section>
  );
};

export default NewArticles;
