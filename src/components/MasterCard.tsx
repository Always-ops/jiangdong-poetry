import Link from "next/link";
import type { Master } from "@/lib/masters";

export default function MasterCard({ master }: { master: Master }) {
  const featured = master.poems[0];

  return (
    <Link href={`/master/${master.id}`} className="group block h-full card-lift">
      <article className="h-full border border-[var(--color-border)] bg-[var(--color-paper-warm)] overflow-hidden">

        {/* 顶部色条 — hover 时展开 */}
        <div className="h-[3px] bg-[var(--color-border)] group-hover:bg-[var(--color-vermillion)] transition-colors duration-300" />

        <div className="p-7">
          {/* 头部 */}
          <div className="flex items-start justify-between mb-5">
            <div>
              <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                <h3 className="text-2xl font-light tracking-[0.15em] text-[var(--color-ink)]
                               group-hover:text-[var(--color-vermillion)] transition-colors duration-200">
                  {master.name}
                </h3>
                <span className="seal text-[9px]">{master.years.split("—")[0]}s</span>
              </div>
              <p className="text-[10px] text-[var(--color-ink-muted)] tracking-widest">
                字{master.zi} · 号{master.hao} · {master.origin}
              </p>
            </div>
            {/* 大字背景 */}
            <span className="text-5xl font-light text-[var(--color-border)] leading-none select-none
                             group-hover:text-[var(--color-vermillion)] transition-colors duration-300 opacity-30">
              {master.name[0]}
            </span>
          </div>

          {/* 标签行 */}
          <div className="flex items-center gap-2 mb-5">
            <span className="text-[10px] text-[var(--color-vermillion)] border-b border-[var(--color-vermillion)] tracking-widest pb-px">
              {master.epithet}
            </span>
            <span className="text-[var(--color-border)] text-xs">·</span>
            <span className="text-[10px] text-[var(--color-ink-muted)] tracking-widest">
              {master.collection}
            </span>
          </div>

          {/* 简介 */}
          <p className="text-xs text-[var(--color-ink-muted)] tracking-[0.06em] leading-relaxed mb-6 line-clamp-2">
            {master.bio}
          </p>

          {/* 代表作预览 */}
          <div className="border-t border-[var(--color-border)] pt-5">
            <p className="text-[10px] text-[var(--color-ink-muted)] tracking-widest mb-3">
              《{featured.title}》 {featured.year && `· ${featured.year}`}
            </p>
            <div className="space-y-1.5">
              {featured.lines.slice(0, 4).map((line, i) => (
                <p key={i} className="text-sm text-[var(--color-ink-light)] tracking-[0.12em] leading-snug">
                  {line}
                </p>
              ))}
            </div>
          </div>

          {/* 底部 CTA */}
          <div className="mt-6 flex items-center justify-between">
            <span className="text-[10px] text-[var(--color-border)] tracking-widest">
              {master.poems.length} 首代表作
            </span>
            <span className="text-[10px] text-[var(--color-ink-muted)] tracking-widest
                             translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100
                             transition-all duration-300">
              入室观诗 →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
