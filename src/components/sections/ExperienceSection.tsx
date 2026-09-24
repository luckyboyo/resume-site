import { experience } from "@/content/experience";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechTag } from "@/components/ui/TechTag";

export function ExperienceSection() {
  return (
    <section className="border-y border-slate-200 bg-white py-20 sm:py-28" id="experience">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="实习经历"
            description="聚焦企业文档知识库、GraphRAG 与混合检索服务的工程实现。"
          />
        </Reveal>
        <div className="mt-12 space-y-8">
          {experience.map((item) => (
            <Reveal key={`${item.company}-${item.role}`}>
            <article className="grid gap-8 rounded-[2rem] border border-slate-200/80 bg-gradient-to-br from-white to-slate-50 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:p-8 lg:grid-cols-[0.8fr_2fr]">
              <div>
                <p className="font-mono text-xs tracking-wider text-cyan-700 uppercase">
                  {item.period}
                </p>
                <h3 className="mt-5 text-2xl font-semibold text-slate-950">
                  {item.company}
                </h3>
                <p className="mt-2 text-slate-700">{item.role}</p>
                <p className="mt-1 text-sm text-slate-500">{item.location}</p>
              </div>
              <div>
                <p className="leading-8 text-slate-700">{item.summary}</p>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-600">
                  {item.highlights.map((highlight) => (
                    <li className="flex gap-3" key={highlight}>
                      <span className="mt-3 size-1.5 shrink-0 rounded-full bg-cyan-600" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-2">
                  {item.technologies.map((technology) => (
                    <TechTag key={technology}>{technology}</TechTag>
                  ))}
                </div>
              </div>
            </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
