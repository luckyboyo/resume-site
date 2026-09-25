import { education } from "@/content/education";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  return (
    <section className="scroll-mt-24 py-20 sm:py-28" id="about">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="About & Education"
            title="从电子信息到智能系统，持续构建可落地的 AI 应用"
            description="关注检索、智能体和工程系统之间的连接，希望把模型能力转化为稳定、透明且可验证的软件产品。"
          />
        </Reveal>
        <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-2">
          {education.map((item, index) => (
            <Reveal
              className="h-full"
              delay={index * 0.08}
              key={`${item.institution}-${item.degree}`}
            >
              <article className="group h-full rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_16px_45px_rgba(15,23,42,0.045)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_65px_rgba(15,23,42,0.08)] sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <p className="font-mono text-xs tracking-wider text-blue-700 uppercase">
                    {item.period}
                  </p>
                  <p className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500">
                    {item.location}
                  </p>
                </div>
                <h3 className="mt-7 text-2xl font-semibold tracking-tight text-slate-950 transition-colors group-hover:text-blue-800 sm:text-3xl">
                  {item.institution}
                </h3>
                <p className="mt-2 text-base text-slate-600">{item.degree}</p>
                {item.detail ? (
                  <p className="mt-5 inline-flex rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 font-mono text-sm text-slate-600">
                    {item.detail}
                  </p>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
