import { skillGroups } from "@/content/skills";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SkillsSection() {
  return (
    <section className="border-y border-slate-200 bg-slate-950 py-20 text-white sm:py-28" id="skills">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities"
            title="技术能力"
            description="以 Python 和检索增强生成技术为核心，同时覆盖数据服务、部署与机器人开发基础。"
            tone="dark"
          />
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal delay={index * 0.06} key={group.label}>
            <article className="group h-full bg-slate-950 p-6 transition duration-500 hover:bg-slate-900 sm:p-8">
              <h3 className="font-mono text-sm font-semibold text-cyan-300">
                {group.label}
              </h3>
              <ul className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300"
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
