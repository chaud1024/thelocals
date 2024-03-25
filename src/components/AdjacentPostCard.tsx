import { Post } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type Props = {
  post: Post;
  type: "prev" | "next";
};

export default function AdjacentPostCard({
  post: { path, imgSrc, title, description },
  type,
}: Props) {
  return (
    <Link
      href={`/posts/${path}`}
      className="relative w-full overflow-hidden bg-black group max-h-56">
      <Image
        src={imgSrc}
        alt={title}
        width={150}
        height={100}
        className="w-full opacity-40"
      />
      <div className="absolute flex items-center justify-around w-full p-6 text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        {type == "prev" && <FaArrowLeft className={ICON_CLASS} />}
        <div className="w-full">
          <h3 className="text-3xl font-bold">{title}</h3>
          <p>{description}</p>
        </div>
        {type == "next" && <FaArrowRight className={ICON_CLASS} />}
      </div>
    </Link>
  );
}

const ICON_CLASS = "text-5xl m-4 transition-all group-hover:text-6xl";
