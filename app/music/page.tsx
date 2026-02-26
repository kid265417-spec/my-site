"use client";

import { Music, Heart, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/page-header";
import { GlassCard } from "@/components/glass-card";
import { musicList } from "@/lib/data";

export default function MusicPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PageHeader
        title="音乐分享"
        subtitle="由于很多问题，所以只分享歌名"
        icon={<Music className="w-8 h-8 text-white" />}
      />

      {/* Music List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold text-white mb-6">歌曲列表</h2>
        <div className="space-y-3">
          {musicList.map((music, index) => (
            <GlassCard key={music.id} delay={index * 0.06} className="p-4">
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-white truncate">{music.title}</h3>
                  <p className="text-white/60 text-sm">
                    {music.artist} · {music.album}
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </motion.div>

    </div>
  );
}
