import React from "react";

export type BannerData = {
  message: string;
  state: "success" | "error";
};

export default function Banner({
  banner: { message, state },
}: {
  banner: BannerData;
}) {
  const isSuccess = state === "success";
  const icon = isSuccess ? "💚" : "💔";
  return (
    <p
      className={`p-2 w-full text-center ${
        isSuccess ? "bg-emerald-200" : "bg-rose-200"
      }`}>{`${icon} ${message}`}</p>
  );
}
