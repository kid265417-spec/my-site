"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Camera, ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { PageHeader } from "@/components/page-header";
import { GlassCard } from "@/components/glass-card";
import { photos } from "@/lib/data";

export default function PhotographyPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const totalPhotos = photos.length;

  const goToPrev = () => {
    setSelectedIndex((prev) => {
      if (prev === null) return prev;
      return prev === 0 ? totalPhotos - 1 : prev - 1;
    });
  };

  const goToNext = () => {
    setSelectedIndex((prev) => {
      if (prev === null) return prev;
      return prev === totalPhotos - 1 ? 0 : prev + 1;
    });
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }
      if (event.key === "ArrowLeft") {
        goToPrev();
      }
      if (event.key === "ArrowRight") {
        goToNext();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeydown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [goToNext, goToPrev, selectedIndex]);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PageHeader
          title="作品集"
          subtitle="时间会偷走一切，唯有文字和影像能抵抗它的掠夺"
          icon={<Camera className="w-8 h-8 text-white" />}
        />

        {/* Photo Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="columns-1 md:columns-2 lg:columns-3 [column-gap:1.5rem]"
        >
          {photos.map((photo, index) => (
            <div key={photo.id} className="mb-6 break-inside-avoid">
              <GlassCard delay={index * 0.05} className="overflow-hidden p-0">
                <button
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className="block w-full text-left focus:outline-none"
                  aria-label={`预览图片 ${photo.title}`}
                >
                  <img
                    src={photo.image}
                    alt={photo.title}
                    loading="lazy"
                    className="w-full h-auto block"
                  />
                </button>
              </GlassCard>
            </div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm p-4 md:p-8 flex items-center justify-center"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-6xl h-[75vh] md:h-[85vh]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full bg-black/50 text-white text-sm">
                {selectedIndex + 1} / {totalPhotos}
              </div>

              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                aria-label="关闭预览"
              >
                <X className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  goToPrev();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                aria-label="上一张"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  goToNext();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                aria-label="下一张"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <Image
                src={photos[selectedIndex].image}
                alt={photos[selectedIndex].title}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
