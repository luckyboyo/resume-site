import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/content/site";

export function ContactSection() {
  return (
    <section className="py-20 sm:py-28" id="contact">
      <Container>
        <Reveal>
        <div className="relative overflow-hidden rounded-[2.25rem] border border-cyan-100/80 bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-8 shadow-[0_24px_80px_rgba(8,145,178,0.09)] sm:p-12 lg:flex lg:items-end lg:justify-between lg:gap-12">
          <div className="pointer-events-none absolute -top-36 -right-24 size-80 rounded-full bg-cyan-200/30 blur-3xl" />
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-semibold tracking-[0.2em] text-cyan-800 uppercase">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              对项目或技术交流感兴趣？
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              可以通过 GitHub 了解我的代码，也可以查看或下载完整 PDF 简历。
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 lg:mt-0 lg:justify-end">
            <a
              className="inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white outline-none transition hover:bg-cyan-800 focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-4"
              href={site.resumeUrl}
              download
            >
              下载 PDF 简历
            </a>
            <a
              className="inline-flex rounded-full border border-cyan-200 bg-white px-6 py-3 text-sm font-medium text-slate-800 outline-none transition hover:border-cyan-300 hover:bg-cyan-100 focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-4"
              href={site.githubUrl}
              rel="noreferrer"
              target="_blank"
            >
              访问 GitHub
            </a>
          </div>
        </div>
        </Reveal>
      </Container>
    </section>
  );
}
