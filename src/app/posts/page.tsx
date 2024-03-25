import PostsFilterable from "@/components/PostsFilterable";
import { getPosts } from "@/service/posts";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "All Ideas",
  description: "파리여행을 즐기기 위한 아이디어들",
};

export default async function PostsPage() {
  const posts = await getPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  // console.log("categories", categories);

  return (
    <section className="grid grid-cols-3 tablet:grid-cols-5">
      <PostsFilterable posts={posts} categories={categories} />
    </section>
  );
}
