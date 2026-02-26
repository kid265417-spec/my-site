"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Camera,
  Package,
  PenTool,
  Music,
  ArrowRight,
} from "lucide-react";
import { GlassCard } from "@/components/glass-card";
import { photos } from "@/lib/data";

const LANDSCAPE_HERO_IMAGES = new Set([
  "/images/photos/photo-1.png",
  "/images/photos/photo-2.png",
  "/images/photos/photo-7.png",
  "/images/photos/photo-11.png",
  "/images/photos/photo-13.png",
  "/images/photos/photo-18.png",
  "/images/photos/photo-19.png",
  "/images/photos/photo-21.png",
  "/images/photos/photo-25.png",
  "/images/photos/photo-27.png",
  "/images/photos/photo-28.png",
  "/images/photos/photo-31.png",
  "/images/photos/photo-35.png",
  "/images/photos/photo-36.png",
  "/images/photos/photo-43.png",
  "/images/photos/photo-48.png",
  "/images/photos/photo-52.png",
  "/images/photos/photo-54.png",
  "/images/photos/photo-56.png",
]);

const features = [
  {
    href: "/photography",
    icon: Camera,
    title: "作品集",
    description: "用镜头捕捉世界的光影之美",
    delay: 0.1,
  },
  {
    href: "/resources",
    icon: Package,
    title: "资源分享",
    description: "精选工具、插件、软件与网站",
    delay: 0.2,
  },
  {
    href: "/blog",
    icon: PenTool,
    title: "思考随笔",
    description: "技术思考与生活感悟",
    delay: 0.3,
  },
  {
    href: "/music",
    icon: Music,
    title: "音乐分享",
    description: "旋律中的情感与故事",
    delay: 0.4,
  },
];

const recentPosts = [
  {
    category: "知识",
    title: "深度学习中的注意力机制解析",
    date: "2024-12-15",
    preview: "注意力机制是近年来深度学习领域最重要的创新之一...",
  },
  {
    category: "摄影",
    title: "城市夜景摄影技巧分享",
    date: "2024-12-10",
    preview: "夜景摄影需要掌握长曝光、ISO控制和构图技巧...",
  },
  {
    category: "资源",
    title: "2024年度开发者工具推荐",
    date: "2024-12-05",
    preview: "精选今年最实用的开发工具和资源...",
  },
];

export default function HomePage() {
  const heroImages = useMemo(() => {
    const landscapeImages = photos
      .map((photo) => photo.image)
      .filter((image) => LANDSCAPE_HERO_IMAGES.has(image));

    return landscapeImages.length > 0
      ? landscapeImages
      : photos.slice(0, 10).map((photo) => photo.image);
  }, []);
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    if (heroImages.length <= 1) return;

    const timer = window.setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [heroImages]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Hero Section */}
      <section className="min-h-[60vh] py-10">
        <div className="relative min-h-[60vh] rounded-3xl overflow-hidden border border-white/20">
          <AnimatePresence mode="wait">
            <motion.div
              key={heroImages[heroIndex]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <Image
                src={heroImages[heroIndex]}
                alt="Photography background"
                fill
                className="object-cover object-center"
                quality={100}
                priority={heroIndex === 0}
                sizes="100vw"
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-black/28" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f23]/35 via-transparent to-[#0f0f23]/25" />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative z-10 min-h-[60vh] flex items-center justify-center text-center px-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-wide">
              Hello, I&apos;m Kidd
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center justify-center glass-strong px-6 py-3 rounded-2xl border border-white/35">
            <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-wide">
              Less Is More
            </h2>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <Link key={feature.href} href={feature.href}>
              <GlassCard delay={feature.delay} className="h-full group p-7">
                <div className="flex flex-col h-full">
                  <div
                    className="w-14 h-14 rounded-2xl glass-strong border border-white/35 flex items-center justify-center mb-4 shadow-[0_8px_24px_rgba(31,38,135,0.2)] group-hover:scale-110 transition-transform duration-300"
                  >
                    <feature.icon className="w-7 h-7 text-white/95" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
                    {feature.title}
                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-1 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                  </h3>
                </div>
              </GlassCard>
            </Link>
          ))}
        </motion.div>
      </section>

      {/* Recent Updates */}
      <section className="py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-gradient">最新动态</h2>
            <Link href="/blog" className="text-white/60 hover:text-white flex items-center space-x-1 transition-colors">
              <span>查看全部</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentPosts.map((post, index) => (
              <GlassCard key={index} delay={1.2 + index * 0.1}>
                <div className="flex flex-col h-full">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/15 border border-white/20 text-xs text-white/80 mb-3 w-fit">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-2">{post.title}</h3>
                  <p className="text-white/60 text-sm mb-4 flex-grow">{post.preview}</p>
                  <span className="text-white/30 text-xs">{post.date}</span>
                </div>
              </GlassCard>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link href="/photography" className="text-white/40 hover:text-white text-sm transition-colors">
              摄影
            </Link>
            <Link href="/resources" className="text-white/40 hover:text-white text-sm transition-colors">
              资源
            </Link>
            <Link href="/blog" className="text-white/40 hover:text-white text-sm transition-colors">
              博客
            </Link>
            <Link href="/music" className="text-white/40 hover:text-white text-sm transition-colors">
              音乐
            </Link>
            <a
              href="mailto:kidd265417@gmail.com"
              className="text-white/40 hover:text-white text-sm transition-colors"
            >
              kidd265417@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
