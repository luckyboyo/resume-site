"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

const entrance = {
  hidden: { opacity: 0, y: 26, filter: "blur(7px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 56]);
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);

  const initial = shouldReduceMotion ? false : "hidden";
  const animate = shouldReduceMotion ? undefined : "visible";
  const transition = (delay: number) => ({
    duration: 0.78,
    delay,
    ease: [0.22, 1, 0.36, 1] as const,
  });

  return (
    <section
      className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden border-b border-slate-200/70 py-16 sm:py-20 lg:py-24"
      ref={sectionRef}
    >
      <div className="absolute inset-0 -z-20 bg-white" />
      <div className="absolute inset-y-0 left-0 -z-10 w-[58%] bg-[radial-gradient(circle_at_18%_34%,rgba(191,219,254,0.68),transparent_44%),linear-gradient(90deg,rgba(239,246,255,0.9),transparent)]" />
      <div className="ambient-orb absolute -top-56 -left-44 -z-10 size-[34rem] rounded-full bg-blue-200/30 blur-3xl" />
      <div aria-hidden="true" className="hero-linework pointer-events-none absolute inset-0 z-0" />

      <Container>
        <div className="relative z-10 grid items-center gap-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:gap-12">
          <div className="relative z-10">
            <motion.p
              animate={animate}
              className="text-4xl font-semibold tracking-[-0.04em] text-slate-700 sm:text-5xl"
              initial={initial}
              variants={entrance}
              transition={transition(0.04)}
            >
              你好 <span aria-hidden="true">👋</span>
            </motion.p>

            <motion.h1
              animate={animate}
              className="mt-8 flex flex-wrap items-baseline gap-x-8 gap-y-2 pr-24 text-5xl font-bold tracking-[-0.065em] text-slate-950 sm:gap-x-10 sm:pr-36 sm:text-7xl md:pr-44 lg:pr-0 lg:text-[5.75rem] lg:leading-none"
              initial={initial}
              variants={entrance}
              transition={transition(0.13)}
            >
              <span>我是</span>
              <span className="inline-block bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 bg-clip-text pr-2 tracking-[-0.035em] text-transparent">
                {site.name}
              </span>
            </motion.h1>

            <motion.div
              animate={animate}
              className="mt-9"
              initial={initial}
              variants={entrance}
              transition={transition(0.22)}
            >
              <p className="font-yahei text-base font-semibold tracking-wide text-slate-700 sm:text-lg">
                {site.role}
              </p>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                {site.description}
              </p>
            </motion.div>

            <motion.div
              animate={animate}
              className="mt-9 flex flex-wrap gap-3"
              initial={initial}
              variants={entrance}
              transition={transition(0.31)}
            >
              <a
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-blue-700 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-700/20 outline-none transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-700/25 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4"
                href={site.githubUrl}
                rel="noreferrer"
                target="_blank"
              >
                <span className="relative z-10">GitHub 主页</span>
                <span className="relative z-10" aria-hidden="true">↗</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </a>
              <Link
                className="inline-flex items-center rounded-lg border border-slate-200 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm outline-none backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:shadow-md focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4"
                href="/#contact"
              >
                联系我
              </Link>
            </motion.div>

            <motion.div
              animate={animate}
              className="mt-8 flex items-center gap-5 text-slate-600"
              initial={initial}
              variants={entrance}
              transition={transition(0.39)}
            >
              <a
                aria-label="访问 GitHub"
                className="rounded-md outline-none transition duration-300 hover:-translate-y-1 hover:text-blue-700 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4"
                href={site.githubUrl}
                rel="noreferrer"
                target="_blank"
              >
                <svg aria-hidden="true" className="size-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.04 1.77 2.72 1.26 3.38.96.1-.75.4-1.26.74-1.55-2.57-.3-5.27-1.29-5.27-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.05 0 0 .97-.31 3.16 1.18a10.9 10.9 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.71 5.39-5.29 5.68.42.36.79 1.06.79 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
                </svg>
              </a>
              <a
                aria-label="查看 PDF 简历"
                className="rounded-md outline-none transition duration-300 hover:-translate-y-1 hover:text-blue-700 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4"
                href={site.resumeUrl}
                rel="noreferrer"
                target="_blank"
              >
                <svg aria-hidden="true" className="size-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path d="M6.75 2.75h7.1L19.25 8v13.25H6.75z" strokeLinejoin="round" />
                  <path d="M13.5 2.75V8h5.75M9.5 13h7M9.5 16.5h5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <Link
                aria-label="前往联系区域"
                className="rounded-md outline-none transition duration-300 hover:-translate-y-1 hover:text-blue-700 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4"
                href="/#contact"
              >
                <svg aria-hidden="true" className="size-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <rect height="15" rx="2" width="19" x="2.5" y="4.5" />
                  <path d="m4.5 7 7.5 6 7.5-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </motion.div>
          </div>

          <motion.div
            animate={animate}
            className="absolute top-20 right-0 w-24 sm:top-24 sm:w-32 md:w-40 lg:relative lg:top-auto lg:right-auto lg:mx-auto lg:w-full lg:max-w-sm"
            initial={initial}
            style={shouldReduceMotion ? undefined : { y: portraitY, scale: portraitScale }}
            variants={entrance}
            transition={transition(0.18)}
          >
            <div className="absolute inset-2 hidden rotate-3 rounded-xl border border-slate-200 bg-white/55 shadow-xl shadow-slate-900/5 lg:block" />
            <div className="glass-highlight group relative aspect-square overflow-hidden rounded-lg border border-slate-200/80 bg-white p-1 shadow-[0_10px_28px_rgba(15,23,42,0.12)] ring-1 ring-slate-200/70 lg:rounded-xl lg:border-white/90 lg:bg-white/75 lg:p-0.5 lg:shadow-[0_30px_90px_rgba(15,23,42,0.16)] lg:backdrop-blur-xl">
              <div className="relative size-full overflow-hidden rounded-md bg-slate-100 lg:rounded-xl">
                <Image
                  fill
                  priority
                  sizes="(min-width: 1024px) 420px, (min-width: 768px) 160px, 128px"
                  className="object-cover object-top transition duration-700 ease-out group-hover:scale-[1.025]"
                  src={site.profileImageUrl}
                  alt={`${site.name}的证件照`}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
