import MainVisual from "@/components/MainVisual";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About",
  description: "블로그 프로젝트 소개",
};

export default function AboutPage() {
  return (
    <div>
      <MainVisual />
    </div>
  );
}
