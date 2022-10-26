import React from 'react'
import { articleT } from '../services/fetchNewsData';

interface TopArticlesProps {
  topArticles: articleT[]
}
const TopArticles = ({topArticles}: TopArticlesProps) => {
  return (
    <div className="gap-6  sm:col-span-3 sm:flex sm:gap-8 sm:justify-between sm:items-center">
        {topArticles.map(({ title, media, link }, i) => {
          return (
            <div className="flex h-[150px] w-full gap-4 overflow-hidden">
              <img
                src={media}
                alt={title}
                className="h-[150px] w-[120px] object-cover object-center"
              />
              <div className="flex flex-col gap-y-1 font-Tenor">
                <span className="text-3xl font-bold text-grayish-blue">
                  {(i + 1).toLocaleString("en-US", { minimumIntegerDigits: 2 })}
                </span>
                <h3 className="text-lg font-bold text-dark-blue hover:text-soft-orange text-ellipsis line-clamp-4 overflow-hidden" title={title}>
                  <a href={link}>{title}</a>
                </h3>
              </div>
            </div>
          );
        })}
      </div>
  )
}

export default TopArticles