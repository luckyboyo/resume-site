import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main className="grid min-h-[70vh] place-items-center py-20">
      <Container className="text-center">
        <p className="font-mono text-sm font-semibold tracking-[0.2em] text-cyan-700 uppercase">
          404
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
          没有找到这个页面
        </h1>
        <p className="mt-5 text-slate-600">链接可能已失效，或者地址输入有误。</p>
        <Link
          className="mt-8 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white"
          href="/"
        >
          返回首页
        </Link>
      </Container>
    </main>
  );
}
