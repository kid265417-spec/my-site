"use client";

import { useState } from "react";
import { Package, ExternalLink, Tag, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHeader } from "@/components/page-header";
import { GlassCard } from "@/components/glass-card";
import { resources, resourceCategories } from "@/lib/data";

const categoryColors: Record<string, string> = {
  AI: "from-cyan-500 to-blue-500",
  软件: "from-blue-500 to-cyan-500",
  插件: "from-pink-500 to-rose-500",
  网站: "from-purple-500 to-violet-500",
  知识: "from-amber-500 to-orange-500",
};

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState("全部");

  const filteredResources =
    selectedCategory === "全部"
      ? resources
      : selectedCategory === "AI"
        ? resources.filter((item) => item.tags.includes("AI栏"))
        : resources.filter((item) => item.category === selectedCategory);
  const podcastResources = filteredResources.filter((item) => item.tags.includes("播客"));
  const bookResources = filteredResources.filter((item) => item.tags.includes("书单"));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PageHeader
        title="资源宝库"
        subtitle="精选工具、插件、软件、网站·持续更新中～"
        icon={<Package className="w-8 h-8 text-white" />}
      />

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="sticky top-20 z-40 flex flex-wrap justify-center gap-3 mb-12 py-3 px-2 rounded-2xl glass-dark"
      >
        {resourceCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === category
                ? "bg-white text-black"
                : "glass-btn text-white hover:bg-white/20"
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Resources Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {selectedCategory === "知识" ? (
            <div className="space-y-10">
              <section>
                <h3 className="text-xl font-semibold text-white mb-4">🎙️ 播客</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {podcastResources.map((resource, index) => (
                    <GlassCard key={resource.id} delay={index * 0.1}>
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${
                            categoryColors[resource.category] || "from-gray-500 to-gray-600"
                          } flex items-center justify-center text-2xl`}
                        >
                          {resource.icon}
                        </div>
                        <span className="text-xs text-white/50 px-2 py-1 rounded-full bg-white/10">
                          {resource.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{resource.name}</h3>
                      <p className="text-white/50 mb-4">{resource.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {resource.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center text-xs text-white/40"
                          >
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      {resource.url && !resource.tags.includes("播客") ? (
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="glass-btn w-full flex items-center justify-center space-x-2"
                        >
                          <span>访问网站</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ) : null}
                    </GlassCard>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-white mb-4">📖 书单</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {bookResources.map((resource, index) => (
                    <GlassCard key={resource.id} delay={index * 0.1}>
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${
                            categoryColors[resource.category] || "from-gray-500 to-gray-600"
                          } flex items-center justify-center text-2xl`}
                        >
                          {resource.icon}
                        </div>
                        <span className="text-xs text-white/50 px-2 py-1 rounded-full bg-white/10">
                          {resource.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{resource.name}</h3>
                      <p className="text-white/50 mb-4">{resource.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {resource.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center text-xs text-white/40"
                          >
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </section>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource, index) => (
                <GlassCard key={resource.id} delay={index * 0.1}>
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${
                        categoryColors[resource.category] || "from-gray-500 to-gray-600"
                      } flex items-center justify-center text-2xl`}
                    >
                      {resource.icon}
                    </div>
                    <span className="text-xs text-white/50 px-2 py-1 rounded-full bg-white/10">
                      {resource.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{resource.name}</h3>
                  <p className="text-white/50 mb-4">{resource.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {resource.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center text-xs text-white/40"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  {resource.url &&
                  !resource.tags.includes("书单") &&
                  !resource.tags.includes("播客") ? (
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-btn w-full flex items-center justify-center space-x-2"
                    >
                      <span>访问网站</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : null}
                </GlassCard>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Submit Resource CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-16 text-center"
      >
        <GlassCard className="inline-block">
          <div className="flex items-center space-x-3">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-white/80">有好的资源想要分享？</span>
            <a
              href="mailto:kidd265417@gmail.com"
              className="text-white hover:text-purple-300 font-medium transition-colors underline"
            >
              kidd265417@gmail.com
            </a>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}
