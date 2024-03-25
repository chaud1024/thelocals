"use client";
import React, { useState } from "react";
import PostsGrid from "./PostsGrid";
import { Post } from "@/service/posts";
import PostsCategory from "./PostsCategory";

type Props = {
  posts: Post[];
  categories: string[];
};
const ALL_POSTS = "All Posts";

export default function PostsFilterable({ posts, categories }: Props) {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filteredPosts =
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selected);
  return (
    <>
      <div className="grid col-start-1 col-end-3 tablet:col-end-5 m-2">
        <PostsGrid posts={filteredPosts} />
      </div>
      <div className="grid col-start-3 col-end-4 tablet:col-start-5 tablet:col-end-6 ">
        <PostsCategory
          categories={[ALL_POSTS, ...categories]}
          selected={selected}
          onClick={(selected) => setSelected(selected)}
        />
      </div>
    </>
  );
}
