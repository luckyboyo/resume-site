import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/content/site";

export function ContactSection() {
  return (
    <section className="scroll-mt-24 py-20 sm:py-28" id="contact">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-7 shadow-[0_24px_80px_rgba(37,99,235,0.08)] sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-12">
            <div className="pointer-events-none absolute -top-36 -right-24 size-80 rounded-full bg-blue-200/30 blur-3xl" />
            <div className="relative max-w-2xl">
              <p className="font-mono text-xs font-semibold tracking-[0.2em] text-blue-700 uppercase">
                Contact
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                对项目或技术交流感兴趣？
              </h2>
              <p className="mt-4 leading-7 text-slate-600 sm:leading-8">
                可以通过 GitHub 了解我的代码，也可以查看或下载完整 PDF 简历。
              </p>
            </div>
            <div className="relative mt-7 flex flex-wrap gap-3 lg:mt-0 lg:shrink-0">
              <a
                className="inline-flex items-center rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-blue-700/15 outline-none transition hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4"
                href={site.resumeUrl}
                download
              >
                下载 PDF 简历
                <span aria-hidden="true" className="ml-2">↓</span>
              </a>
              <a
                className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-700 outline-none transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4"
                href={site.githubUrl}
                rel="noreferrer"
                target="_blank"
              >
                访问 GitHub
                <span aria-hidden="true" className="ml-2">↗</span>
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
