import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/72 shadow-[0_1px_0_rgba(15,23,42,0.04)] backdrop-blur-2xl supports-[backdrop-filter]:bg-white/64">
      <Container className="flex min-h-16 items-center justify-between gap-6">
        <Link
          className="font-semibold tracking-tight text-slate-950 outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-4"
          href="/"
        >
          {site.name}
        </Link>
        <nav aria-label="主导航">
          <ul className="flex items-center gap-4 text-sm text-slate-600 sm:gap-6">
            {site.navigation.map((item) => (
              <li key={item.href}>
                <Link
                  className="outline-none transition hover:text-slate-950 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-4"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
