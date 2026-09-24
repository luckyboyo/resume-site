export default function Home() {
  return (
    <main className="grid min-h-screen place-items-center bg-slate-950 px-6 text-slate-100">
      <section className="w-full max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-cyan-950/20 sm:p-12">
        <p className="font-mono text-sm tracking-[0.2em] text-cyan-300 uppercase">
          Next.js · TypeScript · Tailwind CSS
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
          项目结构已就绪
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
          当前页面用于验证 Tailwind CSS 已正确接入。下一步再开始搭建正式的个人简历与项目作品集。
        </p>
      </section>
    </main>
  );
}
