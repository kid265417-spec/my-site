"use client";
import { urlFor } from "@/lib/sanity-image";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Camera,
  Package,
  ArrowRight,
} from "lucide-react";
import { GlassCard } from "@/components/glass-card";
import { photos } from "@/lib/data";

const CAROUSEL_CATEGORIES = ["风景", "街拍", "建筑", "黑白"];

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
];

interface HomeClientProps {
  photos: any[];
}

export default function HomeClient({ photos: sanityPhotos }: HomeClientProps) {
  const heroImages = useMemo(() => {
    const sanityUrls = sanityPhotos
      .filter((photo) => photo?.image)
      .map((photo) => urlFor(photo.image).width(1920).height(1080).format('webp').url());
    const localUrls = photos
      .filter((p) => CAROUSEL_CATEGORIES.includes(p.category))
      .map((p) => p.image);
    const seen = new Set<string>();
    const combined: string[] = [];
    for (const url of [...sanityUrls, ...localUrls]) {
      if (!seen.has(url)) {
        seen.add(url);
        combined.push(url);
      }
    }
    return combined.length > 0 ? combined : localUrls.slice(0, 6);
  }, [sanityPhotos]);

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
              key={heroImages[heroIndex] || 'empty'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              {heroImages.length > 0 && heroImages[heroIndex] ? (
                <Image
                  src={heroImages[heroIndex]}
                  alt="Photography background"
                  fill
                  className="object-cover object-center"
                  quality={100}
                  priority={heroIndex === 0}
                  sizes="100vw"
                />
              ) : (
                <div className="w-full h-full bg-gray-800/50 flex items-center justify-center text-white/50">
                  加载中...
                </div>
              )}
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
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
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
