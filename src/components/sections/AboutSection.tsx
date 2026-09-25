import { education } from "@/content/education";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="scroll-mt-24" id="education">
          <Reveal>
            <SectionHeading eyebrow="Education" title="教育经历" />
            <p className="scroll-mt-24 mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg" id="about">
              从电子信息到智能系统，持续构建可落地的 AI 应用
            </p>
          </Reveal>
          <div className="mt-7 grid gap-5 md:mt-9 md:grid-cols-2">
            {education.map((item, index) => (
              <Reveal
                className={`h-full ${item.image ? "md:col-span-2" : ""}`}
                delay={index * 0.08}
                key={`${item.institution}-${item.degree}`}
              >
              <article className="group h-full w-full overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_16px_45px_rgba(15,23,42,0.045)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_65px_rgba(15,23,42,0.08)]">
                {item.image ? (
                  <div className="grid h-full lg:grid-cols-[minmax(19rem,0.82fr)_minmax(0,1.18fr)]">
                    <div className="relative z-10 flex items-center bg-white px-4 py-6 sm:px-6 sm:py-8 lg:bg-gradient-to-r lg:from-white lg:via-white lg:to-slate-50/70 lg:px-8 lg:py-10">
                      <div className="min-w-0">
                        <p className="mb-3 inline-flex rounded-full bg-slate-100 px-3 py-1.5 text-sm text-slate-500">
                          {item.location}
                        </p>
                        <p className="font-mono text-sm tracking-wider text-blue-700 uppercase">
                          {item.period}
                        </p>
                        <div className="mt-7 flex items-center gap-4">
                          {item.logo ? (
                            <span className="relative size-16 shrink-0 sm:size-20 md:size-24">
                              <Image
                                alt=""
                                aria-hidden="true"
                                className="object-contain"
                                fill
                                sizes="(min-width: 768px) 96px, 80px"
                                src={item.logo}
                              />
                            </span>
                          ) : null}
                          <div className="min-w-0">
                            <h3 className="text-3xl font-semibold tracking-tight text-slate-950 transition-colors group-hover:text-blue-800 sm:text-4xl">
                              {item.institution}
                            </h3>
                            <p className="mt-2 text-lg text-slate-600 sm:text-xl">{item.degree}</p>
                            {item.detail ? (
                              <p className="mt-3 inline-flex rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 font-mono text-sm text-slate-600">
                                {item.detail}
                              </p>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative min-h-64 overflow-hidden lg:min-h-[22rem]">
                      <Image
                        alt={`${item.institution}校园`}
                        className="object-cover object-center transition duration-700 group-hover:scale-[1.03]"
                        fill
                        sizes="(min-width: 768px) 55vw, 100vw"
                        src={item.image}
                      />
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-36 bg-gradient-to-r from-white via-white/75 to-transparent lg:block"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="p-6 sm:p-8">
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
                  </div>
                )}
              </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
