import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
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
      <section className="border-b border-slate-200 py-20 sm:py-28">
        <Container>
          <Link
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 outline-none transition hover:text-cyan-800 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-4"
            href="/#projects"
          >
            <span aria-hidden="true">←</span>
            返回项目列表
          </Link>
          <p className="mt-12 font-mono text-sm font-semibold tracking-[0.16em] text-cyan-700 uppercase">
            {project.category}
          </p>
          <h1 className="mt-5 max-w-5xl text-4xl font-semibold tracking-[-0.035em] text-balance text-slate-950 sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
            {project.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <TechTag key={technology}>{technology}</TechTag>
            ))}
          </div>
        </Container>
      </section>

      <Container className="grid gap-12 py-20 lg:grid-cols-[1.5fr_1fr] lg:gap-20 sm:py-28">
        <div>
          <section>
            <p className="font-mono text-xs font-semibold tracking-[0.2em] text-cyan-700 uppercase">
              Overview
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              项目概述
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              {project.overview}
            </p>
          </section>

          <section className="mt-14">
            <p className="font-mono text-xs font-semibold tracking-[0.2em] text-cyan-700 uppercase">
              Highlights
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              核心实现
            </h2>
            <ul className="mt-6 space-y-4">
              {project.highlights.map((highlight) => (
                <li
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 leading-7 text-slate-600"
                  key={highlight}
                >
                  <span className="mt-2.5 size-2 shrink-0 rounded-full bg-cyan-600" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside>
          <div className="sticky top-24 rounded-3xl bg-slate-950 p-6 text-white sm:p-8">
            <p className="font-mono text-xs font-semibold tracking-[0.2em] text-cyan-300 uppercase">
              Architecture
            </p>
            <h2 className="mt-3 text-2xl font-semibold">系统结构</h2>
            <ol className="mt-7 space-y-5">
              {project.architecture.map((item, index) => (
                <li className="flex gap-4 text-sm leading-6 text-slate-300" key={item}>
                  <span className="font-mono text-cyan-300">0{index + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
            {project.repositoryUrl ? (
              <a
                className="mt-8 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-950"
                href={project.repositoryUrl}
                rel="noreferrer"
                target="_blank"
              >
                查看代码
              </a>
            ) : (
              <p className="mt-8 border-t border-white/10 pt-6 text-sm leading-6 text-slate-400">
                项目仓库地址确认后将在这里公开。
              </p>
            )}
          </div>
        </aside>
      </Container>
    </main>
  );
}
