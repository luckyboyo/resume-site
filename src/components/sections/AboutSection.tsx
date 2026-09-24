import { education } from "@/content/education";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  return (
    <section className="py-20 sm:py-28" id="about">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="About & Education"
            title="从电子信息到智能系统，持续构建可落地的 AI 应用"
            description="关注检索、智能体和工程系统之间的连接，希望把模型能力转化为稳定、透明且可验证的软件产品。"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {education.map((item, index) => (
            <Reveal
              className="h-full"
              delay={index * 0.08}
              key={`${item.institution}-${item.degree}`}
            >
              <article className="h-full rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-[0_16px_45px_rgba(15,23,42,0.05)] backdrop-blur transition duration-500 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_24px_65px_rgba(15,23,42,0.09)] sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <p className="font-mono text-xs tracking-wider text-cyan-700 uppercase">
                    {item.period}
                  </p>
                  <p className="text-sm text-slate-500">{item.location}</p>
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-slate-950">
                  {item.institution}
                </h3>
                <p className="mt-2 text-slate-600">{item.degree}</p>
                {item.detail ? (
                  <p className="mt-4 font-mono text-sm text-slate-500">
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
