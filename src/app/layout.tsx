import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Resume Site",
  description: "个人简历与项目作品集",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
