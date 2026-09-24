import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

export function ContactSection() {
  return (
    <section className="py-20 sm:py-28" id="contact">
      <Container>
        <div className="rounded-[2rem] bg-cyan-50 p-8 sm:p-12 lg:flex lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-semibold tracking-[0.2em] text-cyan-800 uppercase">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              对项目或技术交流感兴趣？
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              当前公开联系方式仅保留 GitHub；邮箱和简历下载将在确认公开版本后补充。
            </p>
          </div>
          <a
            className="mt-8 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white outline-none transition hover:bg-cyan-800 focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-4 lg:mt-0"
            href={site.githubUrl}
            rel="noreferrer"
            target="_blank"
          >
            访问 GitHub
          </a>
        </div>
      </Container>
    </section>
  );
}
