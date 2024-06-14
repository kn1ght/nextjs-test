"use client";

import { useState } from "react";
import { ArticlesPage } from "./ArticlesPage";

export const HomePage = () => {
  const [pages, setPages] = useState([1]);

  return (
    <>
      {pages.map((page, i) => (
        <ArticlesPage
          key={page}
          isLastPage={i === pages.length - 1}
          page={page}
          onLoadMore={(prevPage) => setPages((prev) => [...prev, prevPage + 1])}
        />
      ))}
    </>
  );
};
