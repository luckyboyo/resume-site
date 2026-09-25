import { skillGroups } from "@/content/skills";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SkillsSection() {
  return (
    <section className="relative isolate scroll-mt-16 overflow-hidden border-y border-slate-200/70 bg-slate-50 py-20 sm:py-28" id="skills">
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 right-[8%] size-96 rounded-full bg-blue-200/35 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-48 -left-24 size-96 rounded-full bg-cyan-100/55 blur-3xl" />
      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities"
            title="技术能力"
            description="以 Python 和检索增强生成技术为核心，同时覆盖数据服务、部署与机器人开发基础。"
          />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:gap-5">
          {skillGroups.map((group, index) => (
            <Reveal className="h-full" delay={index * 0.06} key={group.label}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_14px_42px_rgba(15,23,42,0.045)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_60px_rgba(37,99,235,0.09)] sm:p-8">
                <span aria-hidden="true" className="pointer-events-none absolute -top-12 -right-12 size-36 rounded-full bg-gradient-to-br from-blue-100/80 to-cyan-100/20 blur-2xl transition duration-500 group-hover:scale-125" />
                <div className="relative flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span aria-hidden="true" className="size-2 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 shadow-[0_0_0_5px_rgba(219,234,254,0.7)]" />
                    <h3 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
                      {group.label}
                    </h3>
                  </div>
                  <span className="font-mono text-xs tracking-[0.16em] text-slate-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div aria-hidden="true" className="relative mt-5 h-px bg-gradient-to-r from-blue-100 via-slate-100 to-transparent" />
                <ul className="relative mt-5 flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <li
                      className="rounded-xl border border-slate-200/90 bg-slate-50/80 px-3.5 py-2 text-sm font-medium text-slate-600 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-800 hover:shadow-md"
                      key={skill}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
