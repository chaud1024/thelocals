import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MainVisual() {
  return (
    <section className="mx-auto py-6">
      <div className="mx-auto w-44 h-44 overflow-hidden relative rounded-full mt-3">
        <Image
          src="https://images.unsplash.com/photo-1591948083708-6edc852d7275?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
          alt="profile image"
          fill
          priority
        />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold">{"Bonjour, Paris"}</h1>
        <h2 className="text-xl font-medium">Future Paris visitors, welcome.</h2>
        <p>Here you can see all information that I am curating.</p>
        <Link
          href="/contact"
          className="inline-block rounded-lg font-bold mt-3 py-2 px-4 bg-yellow-400 hover:bg-yellow-500">
          Contact Me
        </Link>
      </div>
    </section>
  );
}
