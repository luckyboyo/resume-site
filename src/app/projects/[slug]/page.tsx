import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { TechTag } from "@/components/ui/TechTag";
import { getProjectBySlug, projects } from "@/content/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "项目未找到" };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-blue-50/80 via-white to-white py-16 sm:py-24">
        <div className="pointer-events-none absolute -top-48 right-0 size-[32rem] rounded-full bg-blue-100/60 blur-3xl" />
        <Container>
          <Reveal>
            <Link
              className="relative inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm outline-none transition hover:border-blue-200 hover:text-blue-700 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4"
              href="/#projects"
            >
              <span aria-hidden="true">←</span>
              返回项目列表
            </Link>
            <p className="mt-12 font-mono text-xs font-semibold tracking-[0.18em] text-blue-700 uppercase sm:text-sm">
              {project.category}
            </p>
            <h1 className="mt-5 max-w-5xl text-4xl font-semibold tracking-[-0.045em] text-balance text-slate-950 sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
              {project.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <TechTag key={technology}>{technology}</TechTag>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <Container className="grid items-start gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.45fr)_minmax(18rem,0.75fr)] lg:gap-16">
        <div>
          <Reveal>
            <section aria-labelledby="project-overview">
              <p className="font-mono text-xs font-semibold tracking-[0.2em] text-blue-700 uppercase">
                Overview
              </p>
              <h2 id="project-overview" className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                项目概述
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                {project.overview}
              </p>
            </section>
          </Reveal>

          <section aria-labelledby="project-highlights" className="mt-14 sm:mt-20">
            <Reveal>
              <p className="font-mono text-xs font-semibold tracking-[0.2em] text-blue-700 uppercase">
                Highlights
              </p>
              <h2 id="project-highlights" className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                核心实现
              </h2>
            </Reveal>
            <div className="mt-6 space-y-3">
              {project.highlights.map((highlight, index) => (
                <Reveal delay={index * 0.04} key={highlight}>
                  <div className="group flex gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 leading-7 text-slate-600 shadow-[0_8px_28px_rgba(15,23,42,0.035)] transition duration-300 hover:border-blue-200 hover:shadow-[0_14px_36px_rgba(37,99,235,0.07)] sm:p-6">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-blue-50 font-mono text-xs font-semibold text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="pt-0.5">{highlight}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        </div>

        <aside className="lg:sticky lg:top-24">
          <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-6 text-white shadow-[0_24px_70px_rgba(2,6,23,0.18)] sm:p-8">
            <div className="pointer-events-none absolute -top-28 -right-28 size-64 rounded-full bg-blue-500/20 blur-3xl" />
            <Reveal>
              <p className="relative font-mono text-xs font-semibold tracking-[0.2em] text-cyan-200 uppercase">
                Architecture
              </p>
              <h2 className="relative mt-3 text-2xl font-semibold">系统结构</h2>
              <ol className="relative mt-7 space-y-0">
                {project.architecture.map((item, index) => (
                  <li className="relative flex gap-4 pb-5 text-sm leading-6 text-slate-300 last:pb-0" key={item}>
                    {index < project.architecture.length - 1 ? (
                      <span aria-hidden="true" className="absolute top-8 bottom-0 left-[15px] w-px bg-white/10" />
                    ) : null}
                    <span className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border border-cyan-300/25 bg-slate-900 font-mono text-xs text-cyan-200">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="pt-1">{item}</span>
                  </li>
                ))}
              </ol>
              {project.repositoryUrl ? (
                <a
                  className="relative mt-8 inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 outline-none transition hover:bg-cyan-50 focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  href={project.repositoryUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  查看代码
                  <span aria-hidden="true" className="ml-2">↗</span>
                </a>
              ) : null}
            </Reveal>
          </div>
        </aside>
      </Container>
    </main>
  );
}
