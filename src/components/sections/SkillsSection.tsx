import { skillGroups } from "@/content/skills";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SkillsSection() {
  return (
    <section className="scroll-mt-16 border-y border-slate-200 bg-slate-950 py-20 text-white sm:py-28" id="skills">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities"
            title="技术能力"
            description="以 Python 和检索增强生成技术为核心，同时覆盖数据服务、部署与机器人开发基础。"
            tone="dark"
          />
        </Reveal>
        <div className="mt-10 grid gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4">
          {skillGroups.map((group, index) => (
            <Reveal className="h-full" delay={index * 0.06} key={group.label}>
              <article className="group h-full rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:border-cyan-300/30 hover:bg-white/[0.07] sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="h-px w-7 bg-cyan-300/80 transition-all duration-300 group-hover:w-10" />
                  <h3 className="font-mono text-sm font-semibold text-cyan-200">
                    {group.label}
                  </h3>
                </div>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1.5 text-sm text-slate-300 transition-colors group-hover:border-white/15"
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
