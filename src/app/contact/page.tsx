import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "블로그 프로젝트에 궁금하시다면 연락주세요",
};

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl">Contact Me</h2>
      <a href="mailto: chaud1024@gmail.com">chaud1024@gmail.com</a>
      <ContactForm />
    </section>
  );
}
