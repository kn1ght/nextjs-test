"use client";

import { Button } from "@/components/button/Button";
import { graphql } from "@/gql";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useMutation } from "urql";

const AddCommentMutation = graphql(`
  mutation AddComment($articleId: String!, $content: String!) {
    createComment(data: { article: $articleId, content: $content }) {
      content
    }
  }
`);

type AddCommentProps = {
  articleId: string;
};

export const AddComment = (props: AddCommentProps) => {
  const { articleId } = props;
  const [comment, setComment] = useState("");
  const [, addComment] = useMutation(AddCommentMutation);
  const router = useRouter();

  const handleCreateComment = async () => {
    await Promise.all([
      addComment({ articleId, content: comment }),
      fetch(`/api/revalidate?path=/articles/${articleId}`),
    ]);
    setComment("");
    router.refresh();
  };

  return (
    <div className="mt-10">
      <label>
        Comment
        <textarea
          className="block resize-none w-full outline-none border-solid border-2 border-indigo-600 rounded"
          placeholder="Your comment"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
      </label>
      <div className="mt-4">
        <Button onClick={handleCreateComment} disabled={!comment}>
          Submit
        </Button>
      </div>
    </div>
  );
};
