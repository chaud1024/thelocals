import MainVisual from "@/components/MainVisual";
import PostsEssential from "@/components/PostsEssential";
import PostsRecommend from "@/components/PostsRecommend";

export default function HomePage() {
  return (
    <>
      <MainVisual />
      {/* @ts-expect-error Async Server Component */}
      <PostsEssential />
      {/* @ts-expect-error Async Server Component */}
      <PostsRecommend />
    </>
  );
}
