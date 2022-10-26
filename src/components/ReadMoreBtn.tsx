import React from "react";

interface ReadMoreBtnProps {
  url: string;
}
const ReadMoreBtn = ({ url }: ReadMoreBtnProps) => {
  return (
    <a
      href={url}
      className="flex h-[52px] w-[185px] items-center justify-center bg-soft-red font-Tenor text-lg font-bold uppercase text-off-white hover:bg-dark-blue hover:text-white"
      target={"_blank"}
    >
      Read More
    </a>
  );
};

export default ReadMoreBtn;
