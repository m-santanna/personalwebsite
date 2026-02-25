import Link from "next/link"
import { BookOpen } from "lucide-react"
import { BLOG_POSTS, formatDate } from "@/lib/blog"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MSS | Blog",
  description: "Matheus's blog, where his thoughts are kind of organized into text.",
};

function BlogPage() {
  return (
    <div className="space-y-10">
      {/* PAGE HEADER */}
      <div className="mt-6 flex flex-col items-center text-center gap-4">
        <div className="bg-accent/10 p-3 rounded-full">
          <BookOpen className="size-8 text-accent" />
        </div>
        <h1 className="text-primary font-bold text-4xl tracking-tight">
          Blog
        </h1>
        <p className="text-foreground/70 text-lg">
          Thoughts, notes, and things I felt like writing down.
        </p>
      </div>

      {/* POST LIST */}
      <div className="flex flex-col max-w-xl mx-auto">
        {BLOG_POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col gap-1.5 py-5 transition-colors duration-300"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-primary font-semibold text-lg group-hover:text-accent transition-colors duration-300">
                {post.title}
              </h2>
              <span className="text-xs font-mono text-primary/40 shrink-0">
                {formatDate(post.date)}
              </span>
            </div>
            <div className="flex items-center gap-2">
              {post.category.map((curr, idx) =>
                <p key={idx} className="text-[11px] font-mono uppercase tracking-wider text-accent/70 bg-accent/10 rounded-full px-2.5 py-0.5 w-fit">
                  {curr}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default BlogPage
