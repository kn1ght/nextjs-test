"use client";

import { Button } from "@/components/button/Button";
import { ResponsiveImage } from "@/components/responsive-image/ResponsiveImage";
import { graphql } from "@/gql";
import { useQuery } from "@urql/next";
import Link from "next/link";

export const articlesQuery = graphql(`
  query Articles($page: Int = 1) {
    Articles(limit: 3, page: $page) {
      docs {
        id
        title
        preview
        image {
          ...ResponsiveImageFragment
        }
      }
      totalPages
    }
  }
`);

type ArticlesPageProps = {
  page: number;
  isLastPage: boolean;
  onLoadMore: (page: number) => void;
};

export const ArticlesPage = (props: ArticlesPageProps) => {
  const { page, isLastPage, onLoadMore } = props;

  const [{ data, fetching, error }] = useQuery({
    query: articlesQuery,
    variables: { page },
  });

  if (error) {
    // log error (in sentry for example)
    return null;
  }

  const hasNextPage =
    data?.Articles?.totalPages && page < data?.Articles?.totalPages;

  return (
    <div>
      {fetching && <p>Loading...</p>}
      {data && (
        <>
          {data.Articles?.docs?.map((item) => {
            if (!item) {
              return null;
            }

            return (
              <Link
                href={`/articles/${item.id}`}
                key={item.id}
                className="block mt-10"
              >
                <article className="md:flex">
                  {item.image.url && (
                    <div className="w-full md:w-1/2 md:mr-5">
                      <ResponsiveImage
                        url={item.image.url}
                        alt={item.image.alt ?? item.title}
                        data={item.image}
                        height="300px"
                        objectFit="cover"
                        priority={page <= 1}
                      />
                    </div>
                  )}
                  <div className="w-full md:w-1/2">
                    <h2 className="text-3xl">{item.title}</h2>
                    <p className="mt-3">{item.preview}</p>
                    <div className="mt-3">
                      <Button type="alternative">Read article</Button>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
          {isLastPage && hasNextPage && (
            <div className="mt-5 flex justify-center">
              <Button onClick={() => onLoadMore(page)}>Load more</Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};
