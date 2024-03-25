import Image from "next/image";
import React from "react";
import { PT_Mono } from "next/font/google";
import { Post } from "@/service/posts";
import Link from "next/link";

const pt_mono = PT_Mono({ weight: "400", subsets: ["latin"] });

type Props = { post: Post };

export default function PostCard({
  post: { path, title, description, imgSrc, date, category },
}: Props) {
  return (
    <Link href={`/posts/${path}`}>
      <article className="grid grid-rows-auto shadow-md hover:shadow-xl">
        <div className="overflow-hidden relative sm:h-52 lg:h-44">
          <Image
            src={imgSrc}
            alt={title}
            width={640}
            height={500}
            style={imgStyles}
          />
          <span
            className={`${pt_mono.className} text-sm text-neutral-50 absolute top-0 end-0 px-2 py-1 ${cateBg[category]}`}>
            {category}
          </span>
        </div>
        <div className="p-4 flex flex-col bg-neutral-100">
          <time
            className={`${pt_mono.className} text-xs text-neutral-500 self-end`}>
            {date.toString()}
          </time>
          <h1 className="text-lg font-bold mb-2 line-clamp-2 h-14">{title}</h1>
          <p className="line-clamp-2 h-12">{description}</p>
        </div>
      </article>
    </Link>
  );
}

const imgStyles = {
  maxWidth: "inherit",
  width: "120%",
  height: "auto",
};

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
