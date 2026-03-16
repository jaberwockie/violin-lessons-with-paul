"use client";
// ============================================================
//  BLOG PAGE — Violin Lessons With Paul
//  To add a new post: add an entry to the POSTS array below,
//  then create a matching file at /pages/blog/[slug].js
// ============================================================

const POSTS = [

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
    <main className="bg-[#fdfaf6] text-gray-800 min-h-screen">

      {/* Header */}
      <section className="py-24 px-6 text-center border-b border-[#e8e0d4]">
       
        <h1 className="text-5xl md:text-6xl font-serif mb-6 tracking-tight">
          Perspectives On
        </h1>
        <p className="text-lg text-gray-500 max-w-xl mx-auto">
          Violin technique, practice habits, music, and the journey
          of learning an instrument.
        </p>
      </section>

      {/* Post List */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-0 divide-y divide-[#e8e0d4]">
          {POSTS.map((post) => (
            <article key={post.slug} className="py-12 group">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs uppercase tracking-widest text-[#c6a75e] font-medium">
                  {post.tag}
                </span>
                <span className="text-gray-300">·</span>
                <time className="text-sm text-gray-400">
                  {formatDate(post.date)}
                </time>
              </div>

              <h2 className="text-2xl md:text-3xl font-serif mb-3 leading-snug group-hover:text-[#c6a75e] transition-colors duration-200">
                <a href={`/blog/${post.slug}`}>{post.title}</a>
              </h2>

              <p className="text-[#4a4642] text-lg leading-relaxed mb-5">
                {post.excerpt}
              </p>

              <a
                href={`/blog/${post.slug}`}
                className="text-sm text-[#c6a75e] underline underline-offset-4 hover:opacity-70 transition"
              >
                Read article →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#f7f3ed] text-center border-t border-[#e8e0d4]">
        <p className="text-lg text-[#4a4642] mb-6 max-w-lg mx-auto">
          Interested in violin lessons? Start with a completely free trial session.
        </p>
        <a
          href="https://wa.me/919962448276"
          className="bg-[#c6a75e] text-white px-8 py-3 rounded-md text-lg hover:opacity-90 transition"
        >
          Book a Free Trial Lesson
        </a>
      </section>

    </main>
  );
}