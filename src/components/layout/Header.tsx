import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/78 shadow-[0_1px_0_rgba(15,23,42,0.04)] backdrop-blur-2xl supports-[backdrop-filter]:bg-white/68">
      <Container className="flex min-h-16 items-center justify-between gap-3 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-6">
        <div aria-hidden="true" className="hidden md:block" />

        <nav aria-label="主导航">
          <ul className="font-yahei flex items-center gap-3 text-sm font-semibold text-slate-600 sm:gap-5 sm:text-base lg:gap-7 lg:text-lg">
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

        <a
          className="font-yahei shrink-0 justify-self-end rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-xs text-slate-700 shadow-sm outline-none transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700 hover:shadow-md focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4 sm:px-5 sm:text-sm"
          href={site.githubUrl}
          rel="noreferrer"
          target="_blank"
        >
          GitHub
        </a>
      </Container>
    </header>
  );
}
