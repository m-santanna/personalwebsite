import { notFound } from "next/navigation"
import { BLOG_POSTS, getPostBySlug, formatDate } from "@/lib/blog"
import type { Metadata } from "next"

type Params = { slug: string }

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: "MSS | Blog" }
  return {
    title: `MSS | ${post.title}`,
    description: post.tldr,
  }
}

export default async function BlogPostPage(
  { params }: { params: Promise<Params> }
) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  return (
    <div className="space-y-10 mb-6 max-w-2xl mx-auto">
      {/* POST HEADER */}
      <div className="mt-10 md:mt-22 flex flex-col gap-3">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
          {post.title}
        </h1>
        <span className="text-xs font-mono text-primary/60">
          {formatDate(post.date)}
        </span>
        <p className="text-base sm:text-lg text-primary/80">
          <span className="text-primary font-semibold">TL;DR:</span> {post.tldr}
        </p>
      </div>

      {/* SECTIONS */}
      <div className="space-y-10">
        {post.sections.map((section, idx) => (
          <section key={idx} className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary">
              {section.heading}
            </h2>
            {section.paragraphs.map((paragraph, pIdx) => (
              <p
                key={pIdx}
                className="max-w-2xl text-base sm:text-lg text-foreground leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>
    </div>
  )
}
