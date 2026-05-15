"use client";
// ============================================================
//  BLOG PAGE — Violin Lessons With Paul
//  To add a new post: add an entry to the POSTS array below,
//  then create a matching file at /pages/blog/[slug].js
// ============================================================

const POSTS = [

  {
  slug: "astral-travelling-technique",
  title: "Start Astral Travelling for Better Musical Perception",
  date: "2025-06-15",
  excerpt: "This is a woo-woo-free insight.",
  tag: "Technique",
},

{
  slug: "start-practicing-the-violin-with-your-ears",
  title: "Start Listening To Great Violinists if You Want To Progress Faster",
  date: "2025-06-15",
  excerpt: "It's the biggest secret that's hiding in plain sight.",
  tag: "Technique",
},

{
  slug: "why-don't-I-sound-like-the-pros",
  title: "Why Don't You Sound Like A Pro Yet?",
  date: "2026-03-09",
  excerpt: "40 hours a day isn't the answer.",
  tag: "Insight"
},

];

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Blog() {
  return (
    <main className="bg-[#f8f7f4] text-[#1a1a18] min-h-screen">

      {/* Header */}
      <section className="py-24 px-6 text-center border-b border-[#deded8]">
        <h1 className="text-5xl md:text-6xl font-serif mb-6 tracking-tight">
          Perspectives On
        </h1>
        <p className="text-lg text-[#5a5a56] max-w-xl mx-auto font-sans leading-relaxed">
          Violin technique, practice habits, music, and the journey
          of learning an instrument.
        </p>
      </section>

      {/* Post List */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-0 divide-y divide-[#deded8]">
          {POSTS.map((post) => (
            <article key={post.slug} className="py-12 group">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs uppercase tracking-widest text-[#27b56e] font-medium font-sans">
                  {post.tag}
                </span>
                <span className="text-[#deded8]">·</span>
                <time className="text-sm text-[#888884] font-sans">
                  {formatDate(post.date)}
                </time>
              </div>

              <h2 className="text-2xl md:text-3xl font-serif mb-3 leading-snug group-hover:text-[#27b56e] transition-colors duration-200">
                <a href={`/blog/${post.slug}`}>{post.title}</a>
              </h2>

              <p className="text-[#5a5a56] text-lg leading-relaxed mb-5 font-sans">
                {post.excerpt}
              </p>

              <a
                href={`/blog/${post.slug}`}
                className="text-sm text-[#27b56e] underline underline-offset-4 hover:text-[#185c3a] transition-colors font-sans"
              >
                Read article →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-white text-center border-t border-[#deded8]">
        <p className="text-lg text-[#5a5a56] mb-6 max-w-lg mx-auto font-sans leading-relaxed">
          Interested in violin lessons? Start with a completely free trial session.
        </p>
        <a
          href="https://wa.me/919962448276"
          className="bg-[#27b56e] text-white px-8 py-3 rounded-lg text-base font-sans font-medium hover:bg-[#22a062] transition-colors"
        >
          Book a Free Trial Lesson
        </a>
      </section>

    </main>
  );
}
