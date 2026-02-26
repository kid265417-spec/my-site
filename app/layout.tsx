import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { GradientBackground } from "@/components/gradient-background";

export const metadata: Metadata = {
  title: "Kidd",
  description: "摄影师 × 资源分享者 - 一个融合摄影美学与创作思考的数字策展空间",
  keywords: ["摄影", "插件", "资源分享"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        <GradientBackground />
        <Navigation />
        <main className="min-h-screen pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
