import React from "react";

type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};
export default function PostsCategory({
  categories,
  selected,
  onClick,
}: Props) {
  return (
    <section className="pl-6 py-4 px-6">
      <h3 className="pb-4 mb-2 shadow-under-line font-bold">Category</h3>
      <ul className="flex flex-col items-start gap-y-1">
        {categories.map((category) => (
          <li key={category}>
            <button
              className={`py-1 px-2 hover:shadow-under-line ${
                category === selected && "bg-neutral-300"
              }`}
              onClick={() => onClick(category)}>
              {category}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
