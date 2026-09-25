"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-white/70 bg-white/78 shadow-[0_1px_0_rgba(15,23,42,0.04)] backdrop-blur-2xl supports-[backdrop-filter]:bg-white/68"
      onKeyDown={(event) => {
        if (event.key === "Escape") setIsMenuOpen(false);
      }}
    >
      <Container className="flex min-h-16 items-center justify-between gap-3 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-6">
        <div aria-hidden="true" className="hidden md:block" />

        <nav aria-label="主导航" className="hidden md:block">
          <ul className="font-yahei flex items-center gap-7 text-base font-semibold text-slate-600 lg:gap-7 lg:text-lg">
            {site.navigation.map((item) => (
              <li key={item.href}>
                <Link
                  className="outline-none transition duration-300 hover:text-blue-700 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 md:ml-0 md:justify-self-end">
          <a
            className="font-yahei shrink-0 rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-xs text-slate-700 shadow-sm outline-none transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700 hover:shadow-md focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4 sm:px-5 sm:text-sm"
            href={site.githubUrl}
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <button
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "关闭导航菜单" : "打开导航菜单"}
            className="inline-flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 outline-none transition hover:border-blue-200 hover:text-blue-700 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            type="button"
          >
            <svg aria-hidden="true" className="size-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path d="m6 6 12 12M18 6 6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {isMenuOpen ? (
        <nav
          aria-label="窄屏导航"
          className="absolute inset-x-0 top-full border-t border-slate-200/80 bg-white/95 px-6 py-3 shadow-lg shadow-slate-900/5 backdrop-blur-2xl md:hidden"
          id="mobile-navigation"
        >
          <ul className="font-yahei mx-auto flex max-w-6xl flex-col divide-y divide-slate-100 text-base font-semibold text-slate-700">
            {site.navigation.map((item) => (
              <li key={item.href}>
                <Link
                  className="block rounded-md py-3 outline-none transition hover:text-blue-700 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
