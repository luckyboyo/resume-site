import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 text-sm text-slate-500">
      <Container className="flex flex-col justify-between gap-3 sm:flex-row">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <p>Built with Next.js, TypeScript and Tailwind CSS.</p>
      </Container>
    </footer>
  );
}
