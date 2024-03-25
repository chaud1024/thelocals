import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "The Locals",
    template: "The Locals | %s",
  },
  description: "Local처럼 파리를 여행하기 위한 아이디어 컬렉션.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.className}>
      <body className="flex flex-col w-full mx-auto max-w-max">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
