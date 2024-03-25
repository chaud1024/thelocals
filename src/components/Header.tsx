import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-2">
      <Link href="/" className="text-xl p-2 font-bold">
        The Locals
      </Link>
      <nav className="flex gap-2">
        {menus.map((menu, idx) => (
          <Link key={idx} href={`${menu.path}`} className="p-2">
            {menu.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}

const menus = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Posts",
    path: "/posts",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];
