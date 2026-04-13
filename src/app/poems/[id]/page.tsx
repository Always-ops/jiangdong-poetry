import { notFound } from "next/navigation";
import Link from "next/link";
import { myPoems } from "@/lib/myPoems";
import type { Metadata } from "next";

export function generateStaticParams() {
  return myPoems.map((p) => ({ id: p.id }));
}

export async function generateMetadata(
  props: PageProps<"/poems/[id]">
): Promise<Metadata> {
  const { id } = await props.params;
  const poem = myPoems.find((p) => p.id === id);
  if (!poem) return {};
  return {
    title: `${poem.title}·${poem.subtitle ?? ""} — 江东少女`,
    description: poem.lines.join(""),
  };
}

export default async function PoemDetailPage(props: PageProps<"/poems/[id]">) {
  const { id } = await props.params;
  const poem = myPoems.find((p) => p.id === id);
  if (!poem) notFound();

  const idx = myPoems.findIndex((p) => p.id === id);
  const prev = idx > 0 ? myPoems[idx - 1] : null;
  const next = idx < myPoems.length - 1 ? myPoems[idx + 1] : null;

  return (
    <div className="min-h-[80vh] flex flex-col">
      <div className="max-w-2xl mx-auto px-6 py-14 flex-1 w-full">

        {/* 返回 */}
        <Link href="/poems"
          className="inline-flex items-center gap-2 text-xs text-[var(--color-ink-muted)]
                     tracking-widest mb-12 group hover:text-[var(--color-vermillion)] transition-colors">
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          江东少女诗词展
        </Link>

        {/* 诗头 */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="seal text-[9px] px-2 py-0.5">{poem.form}</span>
            {poem.tags?.map((t) => (
              <span key={t} className="text-[10px] text-[var(--color-ink-muted)] tracking-widest
                                       border border-[var(--color-border)] px-1.5 py-0.5">
                {t}
              </span>
            ))}
          </div>
          <h1 className="anim-up text-4xl md:text-5xl font-light tracking-[0.2em] text-[var(--color-ink)] mb-2"
              style={{ animationDelay: "0.1s" }}>
            {poem.title}
          </h1>
          {poem.subtitle && (
            <p className="anim-up text-lg text-[var(--color-ink-muted)] tracking-[0.3em] mb-2"
               style={{ animationDelay: "0.15s" }}>
              （{poem.subtitle}）
            </p>
          )}
          {/* 印章 + 署名同行，署名偏右 */}
          <div className="anim-fade flex items-center gap-10 mt-4"
               style={{ animationDelay: "0.2s" }}>
            <span className="seal text-[9px] px-2 py-0.5">{poem.form}</span>
            <span className="text-sm font-medium tracking-[0.25em] text-[var(--color-vermillion)] whitespace-nowrap">
              江东少女（原创）
            </span>
          </div>
        </header>

        {/* 诗体 */}
        <div className="mb-14">
          <div
            className="anim-line h-[1.5px] bg-[var(--color-vermillion)] mb-10 w-20"
            style={{ animationDelay: "0.3s" }}
          />
          <div className="space-y-4">
            {poem.lines.map((line, i) => (
              <p key={i}
                className="anim-up text-3xl md:text-4xl font-medium tracking-[0.3em] text-[var(--color-ink)]"
                style={{ animationDelay: `${0.4 + i * 0.1}s` }}>
                {line}
              </p>
            ))}
          </div>

          {/* 注解 — 直接显示 */}
          {poem.note && (
            <div className="mt-12 border-t border-[var(--color-border)] pt-8">
              <div className="flex items-center gap-2 mb-5">
                <span className="seal text-[9px] px-2 py-0.5 tracking-widest">注</span>
              </div>
              <div className="pl-4 border-l-2 border-[var(--color-vermillion)]/30 space-y-4">
                {poem.note.split("\n\n").map((para, i) => (
                  <p key={i}
                     className="text-sm text-[var(--color-ink-light)] leading-loose tracking-[0.08em]">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* 赏析 */}
          {poem.appreciation && (
            <div className="mt-10 border-t border-[var(--color-border)] pt-8">
              <div className="flex items-center gap-2 mb-6">
                <span className="seal text-[9px] px-2 py-0.5 tracking-widest">赏析</span>
              </div>
              <div className="space-y-5">
                {poem.appreciation.split("\n\n").map((para, i) => (
                  <p key={i}
                     className="text-sm text-[var(--color-ink-light)] leading-loose tracking-[0.08em]">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 上下篇导航 */}
        <nav className="border-t border-[var(--color-border)] pt-8 flex items-center justify-between gap-4">
          {prev ? (
            <Link href={`/poems/${prev.id}`} className="group flex-1 text-left">
              <div className="text-[10px] text-[var(--color-ink-muted)] tracking-widest mb-1
                              group-hover:text-[var(--color-vermillion)] transition-colors">← 上一首</div>
              <div className="text-sm text-[var(--color-ink-light)] tracking-[0.1em] truncate
                              group-hover:text-[var(--color-ink)] transition-colors">
                {prev.title}·{prev.subtitle}
              </div>
            </Link>
          ) : <div className="flex-1" />}

          <Link href="/poems"
            className="flex-shrink-0 seal text-[10px] px-3 py-1.5 tracking-widest">
            诗集
          </Link>

          {next ? (
            <Link href={`/poems/${next.id}`} className="group flex-1 text-right">
              <div className="text-[10px] text-[var(--color-ink-muted)] tracking-widest mb-1
                              group-hover:text-[var(--color-vermillion)] transition-colors">下一首 →</div>
              <div className="text-sm text-[var(--color-ink-light)] tracking-[0.1em] truncate
                              group-hover:text-[var(--color-ink)] transition-colors">
                {next.title}·{next.subtitle}
              </div>
            </Link>
          ) : <div className="flex-1" />}
        </nav>
      </div>
    </div>
  );
}
