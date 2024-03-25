import { getEssentialPosts } from "@/service/posts";
import React from "react";
import PostsGrid from "./PostsGrid";

export default async function PostsEssential() {
  const posts = await getEssentialPosts();
  return (
    <section>
      <h2 className="text-2xl font-bold mt-24 mb-8">The Essentials</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
