import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/70 py-7 text-sm text-slate-500">
      <Container className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <p>Built with Next.js, TypeScript and Tailwind CSS.</p>
          <Link className="font-medium text-slate-600 outline-none transition hover:text-blue-700 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2" href="/">
            返回首页 ↑
          </Link>
        </div>
      </Container>
    </footer>
  );
}
