"use client";

import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isBlog = pathname === "/blog" || pathname.startsWith("/blog/");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f8f7f4]/90 backdrop-blur-sm border-b border-black/[0.06]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="/"
          className="font-serif text-lg text-[#1a1a18] tracking-tight hover:text-[#27b56e] transition-colors"
        >
          Paul Lazarus · Violin
        </a>
        <nav className="flex items-center gap-6">
          {!isHome && (
            <a
              href="/"
              className="text-sm text-[#5a5a56] font-sans hover:text-[#1a1a18] transition-colors"
            >
              Home
            </a>
          )}
          {!isBlog && (
            <a
              href="/blog"
              className="text-sm text-[#5a5a56] font-sans hover:text-[#1a1a18] transition-colors"
            >
               Insights, Techniques, and Tips for Improvement
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}
