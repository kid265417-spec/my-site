import Link from "next/link";
import { PenTool, Calendar, Tag, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { GlassCard } from "@/components/glass-card";
import { getSortedPostsData } from "@/lib/blog";

export default async function BlogPage() {
  const posts = await getSortedPostsData();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PageHeader
        title="思考随笔"
        subtitle="瞎写，不必当真"
        icon={<PenTool className="w-8 h-8 text-white" />}
      />

      {posts.length === 0 ? (
        <div className="text-center text-white/60 py-10">
          还没有发布文章。你可以在 `content/blog/` 新建 Markdown 文件发布第一篇。
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <GlassCard key={post.slug} delay={index * 0.08}>
              <div className="flex items-center space-x-3 mb-3">
                <div className="flex items-center text-white/50 text-xs">
                  <Calendar className="w-3 h-3 mr-1" />
                  {post.date}
                </div>
              </div>

              <h2 className="text-xl font-bold text-white mb-2">{post.title}</h2>
              <p className="text-white/60 mb-4">{post.excerpt}</p>

              <div className="flex items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center text-xs text-white/40"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="glass-btn flex items-center space-x-1 text-sm whitespace-nowrap"
                >
                  <span>阅读全文</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>
      )}
    </div>
  );
}
