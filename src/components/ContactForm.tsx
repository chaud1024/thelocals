"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import Banner, { BannerData } from "./Banner";
import { sendContactEmail } from "@/service/contact";

type Form = {
  from: string;
  subject: string;
  message: string;
};

const DEFAULT_DATA = {
  from: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<Form>(DEFAULT_DATA);

  const [banner, setBanner] = useState<BannerData | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    sendContactEmail(form)
      .then(() => {
        setBanner({ message: "메일 보내기 성공!", state: "success" });
        setForm(DEFAULT_DATA);
      })
      .catch(() => {
        setBanner({
          message: "메일 보내기 실패ㅠㅠ 다시 시도해 주세요",
          state: "error",
        });
      })
      .finally(() => {
        setTimeout(() => {
          setBanner(null);
        }, 3000);
      });
  };

  return (
    <section className="max-w-lg w-full">
      {banner && <Banner banner={banner} />}
      <form onSubmit={onSubmit} className="flex flex-col gap-2 w-full my-4">
        <label htmlFor="from" className="font-semibold">
          Your email
        </label>
        <input
          type="email"
          id="from"
          name="from"
          required
          autoFocus
          value={form.from}
          onChange={onChange}
          className="p-2"
        />

        <label htmlFor="subject" className="font-semibold">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={onChange}
          className="p-2"
        />

        <label htmlFor="message" className="font-semibold">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={10}
          required
          value={form.message}
          onChange={onChange}
          className="p-2"
        />

        <button className="bg-yellow-300 font-blod hover:bg-yellow-400 p-4">
          Submit
        </button>
      </form>
    </section>
  );
}
