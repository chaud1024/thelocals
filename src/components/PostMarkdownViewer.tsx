import Image from "next/image";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

export default function PostMarkdownViewer({ content }: { content: string }) {
  return (
    <ReactMarkdown
      className="py-6 prose lg:prose-xl max-w-none"
      remarkPlugins={[remarkGfm]}
      components={{
        img: (img) => (
          <Image
            src={img.src || ""}
            alt={img.title || ""}
            width={500}
            height={300}
          />
        ),
      }}>
      {content}
    </ReactMarkdown>
  );
}
