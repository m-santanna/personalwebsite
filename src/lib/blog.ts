export type BlogSection = {
  heading: string
  paragraphs: string[]
}

export type BlogPost = {
  slug: string
  title: string
  tldr: string
  category: string[]
  date: string // ISO format: "2026-02-24"
  sections: BlogSection[]
}

export function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00")
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug)
}

// Ordered newest → oldest
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "hello-world",
    title: "Hello World!",
    tldr: "My first post on this blog. Talked about the general content that I wish to make, and my interest in posting once a month. Maybe more, maybe less.",
    category: ["note", "consistency", "concept"],
    date: "2026-02-25",
    sections: [
      {
        heading: "Blog concept",
        paragraphs: ["Having a blog sounds interesting. It is the kind of thing that you only see the value once you find a blog that you enjoy. As a reference, I only consume blog content when I am in need of some crazy niche technical knowledge that I don't possess, and a random person on the internet does. With LLMs, technical blogs are becoming more and more 'outdated'. That is a reason why I plan to only share opinions for the most part. If there is one thing I am better than these models, is having opinions lmao. I will still post technical stuff if I find something that may be interesting to share."]
      },
      {
        heading: "Consistency",
        paragraphs: [
          "Being consistent is my biggest challenge. As an example, when I decided to rebuild this portfolio website (this is my second iteration), it was a thursday. I basically didn't sleep, didn't eat, didn't live. Just because I was omega invested into building this. Some people may call this autism, some may call it hyperfocus, but I call it passion!! With so much passion, at 12:39 pm, on a Wednesday, I am writing this post as the finishing touch of the app's implementation. But the point is, this app was not built consistently. It was built during a spur of passion, inspiration and creativity.",
          "The issue is, when the passion runs out, the routine and consistency are what will keep us moving. I still lack them. Altough this is a major issue, being able to identify it is a start. I need to rewire my brain, and plan my day in a more manageable way. All this in order to build a routine. This is complicated, but I am working on it. My suggestion to you, my dear reader, is to also think about your lifestyle, and see if you can optimize your day. I will do my best, and hope you will too. With that being said, posting here won't be my priority, but I will try to write something cool once a month."
        ]
      }
    ]
  },
]
