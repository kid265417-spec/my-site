import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import type { Metadata } from "next";
import { getPostData, getSortedPostsData } from "@/lib/blog";

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = await getSortedPostsData();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostData(slug);

  if (!post) {
    return { title: "文章未找到" };
  }

  return {
    title: `${post.title} | 思考随笔`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = await getPostData(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link
        href="/blog"
        className="inline-flex items-center text-white/60 hover:text-white transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        返回博客
      </Link>

      <article className="glass-card p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{post.title}</h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-white/50 mb-6">
          <span className="inline-flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {post.date}
          </span>
          {post.tags.map((tag) => (
            <span key={tag} className="inline-flex items-center">
              <Tag className="w-4 h-4 mr-1" />
              {tag}
            </span>
          ))}
        </div>

        <div
          className="blog-content text-white/85"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </div>
  );
}
