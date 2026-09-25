import { experience } from "@/content/experience";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechTag } from "@/components/ui/TechTag";

export function ExperienceSection() {
  return (
    <section className="scroll-mt-24 border-y border-slate-200 bg-white py-20 sm:py-28" id="experience">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="实习经历"
            description="聚焦企业文档知识库、GraphRAG 与混合检索服务的工程实现。"
          />
        </Reveal>
        <div className="mt-10 space-y-6 md:mt-14">
          {experience.map((item) => (
            <Reveal key={`${item.company}-${item.role}`}>
              <article className="relative grid gap-8 overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)] sm:p-8 lg:grid-cols-[0.72fr_2fr] lg:gap-12">
                <div className="relative border-b border-slate-200 pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
                  <span className="absolute -top-6 -left-6 size-24 rounded-full bg-blue-100/70 blur-2xl" />
                  <p className="relative font-mono text-xs tracking-wider text-blue-700 uppercase">
                    {item.period}
                  </p>
                  <h3 className="relative mt-5 text-2xl font-semibold tracking-tight text-slate-950">
                    {item.company}
                  </h3>
                  <p className="relative mt-2 font-medium text-slate-700">{item.role}</p>
                  <p className="relative mt-2 text-sm text-slate-500">{item.location}</p>
                </div>
                <div>
                  <p className="text-base leading-8 text-slate-700">{item.summary}</p>
                  <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
                    {item.highlights.map((highlight, index) => (
                      <li className="flex gap-3" key={highlight}>
                        <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-blue-50 font-mono text-[11px] text-blue-700">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 flex flex-wrap gap-2 border-t border-slate-100 pt-6">
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
