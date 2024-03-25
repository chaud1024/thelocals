import { getEssentialPosts, getPostData } from "@/service/posts";
import Image from "next/image";
import React from "react";
import { PT_Mono } from "next/font/google";
import PostContent from "@/components/PostContent";
import AdjacentPostCard from "@/components/AdjacentPostCard";
import { Metadata } from "next";

const pt_mono = PT_Mono({ weight: "400", subsets: ["latin"] });

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const { title, description } = await getPostData(slug);
  return {
    title,
    description,
  };
}

export default async function page({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  const { title, imgSrc, next, prev, path } = post;
  return (
    <article className="m-4">
      <Image
        src={imgSrc}
        alt={title}
        width={760}
        height={402}
        className="w-full h-1/5 max-h-[500px] object-cover"
      />
      <PostContent post={post} />
      <section className="flex shadow-md">
        {prev && <AdjacentPostCard post={prev} type="prev" />}
        {next && <AdjacentPostCard post={next} type="next" />}
      </section>
    </article>
  );
}

export async function generateStaticParams() {
  const posts = await getEssentialPosts();
  return posts.map((post) => {
    slug: post.path;
  });
}
