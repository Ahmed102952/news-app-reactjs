import React from "react";
import { articleT } from "../services/fetchNewsData";

interface NewArticlesProps {
  newArticles: articleT[];
}
const NewArticles = ({ newArticles }: NewArticlesProps) => {
  return (
    <div className="w-full bg-dark-blue p-6">
      <h2 className="font-Tenor text-3xl font-bold text-soft-orange">New</h2>
      {newArticles?.slice(0, 3).map(({ title, description, url }, i, a) => {
        return (
          <article
            className={`${
              i === a.length - 1 ? "" : "border-b border-b-dark-grayish-blue"
            } py-4 space-y-2`}
          >
            <h3
              className="font-Tenor text-base font-semibold text-white hover:text-soft-orange overflow-hidden line-clamp-3 text-ellipsis"
              title={title}
            >
              <a href={url} target="_blank">
                {title}
              </a>
            </h3>
            <p
              className="text-sm overflow-hidden text-ellipsis font-Noto-Sans text-off-white line-clamp-3"
              title={description}
            >
              {description}
            </p>
          </article>
        );
      })}
    </div>
  );
};

export default NewArticles;
