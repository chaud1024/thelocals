import { Post } from "@/service/posts";
import React from "react";
import PostCard from "./PostCard";

type Props = { posts: Post[] };

export default function PostsGrid({ posts }: Props) {
  return (
    <ul className="grid grid-flow-row auto-rows-min grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-4">
      {posts.map((post, idx) => (
        <li key={idx}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
