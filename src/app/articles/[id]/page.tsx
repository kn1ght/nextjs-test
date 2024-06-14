import { notFound } from "next/navigation";
import { graphql } from "@/gql";
import { getServerClient } from "@/urql-client/urql-server-client";
import { ResponsiveImage } from "@/components/responsive-image/ResponsiveImage";
import { AddComment } from "./_components/AddComment";

export const articleQuery = graphql(`
  query Article($id: String!, $articleId: JSON!) {
    Article(id: $id) {
      title
      content
      preview
      image {
        ...ResponsiveImageFragment
      }
    }
    Comments(where: { article: { equals: $articleId } }, limit: 100) {
      docs {
        content
        updatedAt
      }
    }
  }
`);

export const revalidate = 60;

export async function generateStaticParams() {
  // Here we can fetch our article ids to prerender at build time if needed
  return [].map((id) => ({
    id,
  }));
}

type PageProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata(props: PageProps) {
  const {
    params: { id },
  } = props;

  const { data } = await getServerClient().query(articleQuery, {
    id,
    articleId: id,
  });

  return {
    title: data?.Article?.title,
    description: data?.Article?.preview,
  };
}

export default async function Page(props: PageProps) {
  const {
    params: { id },
  } = props;

  const { data } = await getServerClient().query(articleQuery, {
    id,
    articleId: id,
  });
  const article = data?.Article;
  const comments = data?.Comments;

  if (!article) {
    return notFound();
  }

  const { title, image, content } = article;

  return (
    <main>
      {image.url && (
        <div className="mb-5">
          <ResponsiveImage
            url={image.url}
            data={image}
            alt={image.alt ?? title}
            height="450px"
            objectFit="cover"
            priority
          />
        </div>
      )}
      <h1 className="text-4xl">{title}</h1>
      {content && (
        <div className="mt-3 mb-10">
          <p className="whitespace-pre-line">{content}</p>
        </div>
      )}
      {comments?.docs?.map((item, index) => {
        if (!item) {
          return null;
        }

        const formattedDate = new Intl.DateTimeFormat("en-GB", {
          dateStyle: "medium",
          timeStyle: "short",
        }).format(new Date(item.updatedAt));

        return (
          <div key={index} className="mt-5">
            <div className="text-sm text-slate-400">{formattedDate}</div>
            {item.content}
          </div>
        );
      })}
      <AddComment articleId={id} />
    </main>
  );
}
