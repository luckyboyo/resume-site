"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

const entrance = {
  hidden: { opacity: 0, y: 28, filter: "blur(7px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 72]);
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);

  const initial = shouldReduceMotion ? false : "hidden";
  const animate = shouldReduceMotion ? undefined : "visible";
  const transition = (delay: number) => ({
    duration: 0.82,
    delay,
    ease: [0.22, 1, 0.36, 1] as const,
  });

  return (
    <section
      className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden border-b border-slate-200/80 py-20 sm:py-28"
      ref={sectionRef}
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_75%_24%,rgba(125,211,252,0.22),transparent_32%),radial-gradient(circle_at_12%_78%,rgba(186,230,253,0.34),transparent_30%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]" />
      <div className="ambient-orb absolute -top-40 right-[5%] -z-10 size-[32rem] rounded-full bg-cyan-200/25 blur-3xl" />
      <div className="ambient-orb ambient-orb-delayed absolute -bottom-48 -left-32 -z-10 size-[28rem] rounded-full bg-blue-200/25 blur-3xl" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.025)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-20">
          <div>
            <motion.p
              animate={animate}
              className="font-mono text-sm font-semibold tracking-[0.18em] text-cyan-700 uppercase"
              initial={initial}
              variants={entrance}
              transition={transition(0.05)}
            >
              AI Application Engineer
            </motion.p>
            <motion.h1
              animate={animate}
              className="mt-6 max-w-5xl text-5xl font-semibold tracking-[-0.055em] text-balance text-slate-950 sm:text-7xl lg:text-8xl"
              initial={initial}
              variants={entrance}
              transition={transition(0.14)}
            >
              {site.name}
              <span className="mt-3 block bg-gradient-to-r from-slate-400 via-slate-600 to-cyan-700 bg-clip-text text-transparent">
                {site.role}
              </span>
            </motion.h1>
            <motion.p
              animate={animate}
              className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl"
              initial={initial}
              variants={entrance}
              transition={transition(0.23)}
            >
              {site.description}
            </motion.p>
            <motion.div
              animate={animate}
              className="mt-10 flex flex-wrap gap-4"
              initial={initial}
              variants={entrance}
              transition={transition(0.32)}
            >
              <Link
                className="group relative overflow-hidden rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-slate-950/15 outline-none transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-4"
                href="/#projects"
              >
                <span className="relative z-10">查看项目</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </Link>
              <a
                className="rounded-full border border-slate-300/80 bg-white/70 px-6 py-3 text-sm font-medium text-slate-800 shadow-sm outline-none backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white hover:shadow-md focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-4"
                href={site.resumeUrl}
                rel="noreferrer"
                target="_blank"
              >
                查看简历
              </a>
              <a
                className="rounded-full border border-slate-300/80 bg-white/70 px-6 py-3 text-sm font-medium text-slate-800 shadow-sm outline-none backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white hover:shadow-md focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-4"
                href={site.githubUrl}
                rel="noreferrer"
                target="_blank"
              >
                GitHub
              </a>
            </motion.div>
          </div>

          <motion.div
            animate={animate}
            className="mx-auto w-full max-w-72 lg:max-w-none"
            initial={initial}
            style={
              shouldReduceMotion
                ? undefined
                : { y: portraitY, scale: portraitScale }
            }
            variants={entrance}
            transition={transition(0.2)}
          >
            <div className="glass-highlight group relative aspect-[4/5] overflow-hidden rounded-[2.25rem] border border-white/80 bg-white/70 p-2 shadow-[0_30px_90px_rgba(15,23,42,0.18)] ring-1 ring-slate-200/70 backdrop-blur-xl">
              <div className="relative size-full overflow-hidden rounded-[1.8rem] bg-slate-100">
                <Image
                  fill
                  priority
                  sizes="(min-width: 1024px) 320px, 288px"
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
