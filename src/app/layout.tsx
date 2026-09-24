import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "方子悦｜AI 应用开发",
    template: "%s｜方子悦",
  },
  description: "方子悦的个人简历与项目作品集，聚焦 RAG、GraphRAG 与多智能体应用。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-CN">
      <body className="bg-slate-50 text-slate-950">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
