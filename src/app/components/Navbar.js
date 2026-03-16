"use client";

import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isArticle = pathname.startsWith("/blog/") && pathname !== "/blog";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex ${isArticle ? "justify-between" : "justify-end"} items-center px-8 py-4 bg-[#fdfaf6] border-b border-[#e8e0d4]`}>
      <div>
        {pathname !== "/" && (
          <a href="/" className="text-sm text-gray-600 hover:text-[#c6a75e] transition">
            Home
          </a>
        )}
      </div>
      <div>
        {pathname !== "/blog" && (
          <a href="/blog" className="text-sm text-gray-600 hover:text-[#c6a75e] transition">
            Blog
          </a>
        )}
      </div>
    </nav>
  );
}