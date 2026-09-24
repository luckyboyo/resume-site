import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.14),transparent_38%)]" />
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-20">
          <div>
            <p className="font-mono text-sm font-semibold tracking-[0.18em] text-cyan-700 uppercase">
              AI Application Engineer
            </p>
            <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-[-0.045em] text-balance text-slate-950 sm:text-7xl lg:text-8xl">
              {site.name}
              <span className="mt-3 block text-slate-400">{site.role}</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              {site.description}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white outline-none transition hover:bg-cyan-800 focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-4"
                href="/#projects"
              >
                查看项目
              </Link>
              <a
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-800 outline-none transition hover:border-slate-400 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-4"
                href={site.resumeUrl}
                rel="noreferrer"
                target="_blank"
              >
                查看简历
              </a>
              <a
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-800 outline-none transition hover:border-slate-400 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-4"
                href={site.githubUrl}
                rel="noreferrer"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="mx-auto w-full max-w-72 lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.16)] ring-1 ring-slate-200">
              <Image
                fill
                priority
                sizes="(min-width: 1024px) 320px, 288px"
                className="object-cover object-top"
                src={site.profileImageUrl}
                alt={`${site.name}的证件照`}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
