import Link from "next/link";
import type { Project } from "@/types/content";
import { TechTag } from "@/components/ui/TechTag";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_28px_70px_rgba(37,99,235,0.09)] sm:p-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 size-72 rounded-full bg-blue-200/0 blur-3xl transition duration-500 group-hover:bg-blue-200/35"
      />
      <div className="relative flex items-center justify-between gap-4 border-b border-slate-100 pb-5 font-mono text-xs text-slate-500">
        <span className="rounded-full bg-blue-50 px-3 py-1.5 text-blue-800">{project.category}</span>
        <span aria-hidden="true" className="text-sm text-slate-400">0{index + 1}</span>
      </div>
      <h3 className="relative mt-6 text-2xl font-semibold tracking-tight text-slate-950 sm:text-[1.7rem]">
        {project.title}
      </h3>
      <p className="relative mt-4 flex-1 leading-7 text-slate-600">{project.summary}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.slice(0, 5).map((technology) => (
          <TechTag key={technology}>{technology}</TechTag>
        ))}
      </div>
      <Link
        className="relative mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-blue-100 bg-blue-50/70 px-4 py-2.5 text-sm font-semibold text-blue-800 outline-none transition-all duration-300 group-hover:gap-3 group-hover:border-blue-200 group-hover:bg-blue-100 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4"
        href={`/projects/${project.slug}`}
      >
        查看项目详情
        <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
