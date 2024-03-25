import React from "react";
import { AiFillHome, AiTwotoneCalendar } from "react-icons/ai";
import PostMarkdownViewer from "./PostMarkdownViewer";
import { PT_Mono } from "next/font/google";
import { PostData } from "@/service/posts";

const pt_mono = PT_Mono({ weight: "400", subsets: ["latin"] });

export default function PostContent({ post }: { post: PostData }) {
  const { date, category, title, description, content, url } = post;

  return (
    <section className="flex flex-col p-4 gap-2">
      <div className="flex items-center self-end">
        <AiTwotoneCalendar />
        <p className={`${pt_mono.className} ml-2`}>{date.toString()}</p>
      </div>
      <div className="flex gap-1 items-center">
        <span
          className={`${pt_mono.className} text-neutral-50 py-1 px-4 h-fit ${cateBg[category]}`}>
          {category}
        </span>
        <h1 className="text-4xl font-bold">{title}</h1>
      </div>
      <h1 className="text-xl font-bold">{description}</h1>
      <div className="w-full h-px bg-neutral-700"></div>
      <PostMarkdownViewer content={content} />
      {url ? (
        <a
          href={url}
          target="_blank"
          className="ml-4 pr-4 w-fit flex items-center gap-2">
          <AiFillHome />
          Go to the web site
        </a>
      ) : null}
    </section>
  );
}

export type CateType = {
  [key: string]: string;
};
const cateBg: CateType = {
  Restaurant: "bg-rstr",
  Cafe: "bg-cafe",
  Sight: "bg-sght",
  Monument: "bg-mnmt",
  Hotel: "bg-hotl",
};
