import { getNonEssentialPosts } from "@/service/posts";
import React from "react";
import PostCard from "./PostCard";
import PostCarousel from "./PostCarousel";

export default async function PostsRecommend() {
  const posts = await getNonEssentialPosts();

  return (
    <section>
      <h2 className="text-2xl font-bold mt-24 mb-8">You May Like</h2>
      <PostCarousel>
        {posts.map((post, idx) => (
          <PostCard key={idx} post={post} />
        ))}
      </PostCarousel>
    </section>
  );
}
