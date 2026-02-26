import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}

export interface BlogPostDetail extends BlogPostMeta {
  contentHtml: string;
}

interface Frontmatter {
  title?: string;
  date?: string;
  excerpt?: string;
  tags?: string[];
}

async function getPostSlugs(): Promise<string[]> {
  try {
    const files = await fs.readdir(POSTS_DIR);
    return files
      .filter((file) => file.endsWith(".md"))
      .map((file) => file.replace(/\.md$/, ""));
  } catch {
    return [];
  }
}

export async function getSortedPostsData(): Promise<BlogPostMeta[]> {
  const slugs = await getPostSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const fullPath = path.join(POSTS_DIR, `${slug}.md`);
      const fileContents = await fs.readFile(fullPath, "utf8");
      const { data } = matter(fileContents);
      const frontmatter = data as Frontmatter;

      return {
        slug,
        title: frontmatter.title ?? slug,
        date: frontmatter.date ?? "1970-01-01",
        excerpt: frontmatter.excerpt ?? "",
        tags: frontmatter.tags ?? [],
      };
    })
  );

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(slug: string): Promise<BlogPostDetail | null> {
  try {
    const fullPath = path.join(POSTS_DIR, `${slug}.md`);
    const fileContents = await fs.readFile(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const frontmatter = data as Frontmatter;

    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    return {
      slug,
      title: frontmatter.title ?? slug,
      date: frontmatter.date ?? "1970-01-01",
      excerpt: frontmatter.excerpt ?? "",
      tags: frontmatter.tags ?? [],
      contentHtml,
    };
  } catch {
    return null;
  }
}
