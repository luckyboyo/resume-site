import Link from "next/link";
import type { Project } from "@/types/content";
import { TechTag } from "@/components/ui/TechTag";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.06)] transition duration-500 hover:-translate-y-1.5 hover:border-cyan-200/80 hover:shadow-[0_28px_80px_rgba(8,145,178,0.12)] sm:p-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 size-72 rounded-full bg-cyan-200/0 blur-3xl transition duration-700 group-hover:bg-cyan-200/45"
      />
      <div className="flex items-center justify-between gap-4 font-mono text-xs text-slate-500">
        <span>{project.category}</span>
        <span aria-hidden="true">0{index + 1}</span>
      </div>
      <h3 className="mt-6 text-2xl font-semibold tracking-tight text-slate-950">
        {project.title}
      </h3>
      <p className="mt-4 flex-1 leading-7 text-slate-600">{project.summary}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.slice(0, 5).map((technology) => (
          <TechTag key={technology}>{technology}</TechTag>
        ))}
      </div>
      <Link
        className="relative mt-8 inline-flex w-fit items-center gap-2 font-medium text-cyan-800 outline-none transition-all duration-300 group-hover:gap-3 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-4"
        href={`/projects/${project.slug}`}
      >
        查看项目详情
        <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
