import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main className="relative grid min-h-[70vh] place-items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-white py-20">
      <div className="pointer-events-none absolute -top-40 right-1/4 size-96 rounded-full bg-blue-100/60 blur-3xl" />
      <Container className="text-center">
        <p className="font-mono text-sm font-semibold tracking-[0.2em] text-blue-700 uppercase">
          404
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
          没有找到这个页面
        </h1>
        <p className="mt-5 text-slate-600">链接可能已失效，或者地址输入有误。</p>
        <Link
          className="mt-8 inline-flex rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-700/15 outline-none transition hover:-translate-y-0.5 hover:bg-blue-800 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4"
          href="/"
        >
          返回首页
        </Link>
      </Container>
    </main>
  );
}
