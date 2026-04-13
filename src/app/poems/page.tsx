import type { Metadata } from "next";
import Link from "next/link";
import { myPoems } from "@/lib/myPoems";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "江东少女",
  description: "江东少女个人诗词展——原创诗稿",
};

export default function PoemsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-14">

      {/* ── 页头 ── */}
      <header className="mb-16">
        <p className="anim-up text-[10px] tracking-[0.5em] text-[var(--color-ink-muted)] mb-4"
           style={{ animationDelay: "0.05s" }}>
          个人诗词展
        </p>
        <h1 className="anim-up text-5xl md:text-6xl font-medium tracking-[0.15em] text-[var(--color-ink)] mb-4"
            style={{ animationDelay: "0.15s" }}>
          江东少女
        </h1>
        <div className="anim-line h-[2px] w-16 bg-[var(--color-vermillion)] mb-6"
             style={{ animationDelay: "0.3s" }} />
        <p className="anim-up text-sm text-[var(--color-ink-muted)] tracking-[0.1em] leading-loose max-w-lg"
           style={{ animationDelay: "0.4s" }}>
          天不生此ID，则万古如长夜
        </p>
      </header>

      {/* ── 诗词列表 ── */}
      <div className="space-y-8">
        {myPoems.map((poem, idx) => (
          <Reveal key={poem.id} delay={idx * 100}>
            <Link href={`/poems/${poem.id}`} className="group block card-lift">
              <article className="border border-[var(--color-border)] bg-[var(--color-paper-warm)] overflow-hidden">
                {/* 顶部色条 */}
                <div className="h-[2px] bg-[var(--color-border)] group-hover:bg-[var(--color-vermillion)] transition-colors duration-300" />

                <div className="p-8 md:p-10 grid md:grid-cols-[1fr_auto] gap-8 items-start">
                  {/* 左：标题 + 诗句 */}
                  <div>
                    {/* 标题行 */}
                    <div className="mb-2">
                      <h2 className="text-2xl font-medium tracking-[0.2em] text-[var(--color-ink)]
                                     group-hover:text-[var(--color-vermillion)] transition-colors duration-200">
                        {poem.title}{poem.subtitle ? `·${poem.subtitle}` : ""}
                      </h2>
                    </div>
                    {/* 印章 + 署名同行，署名偏右 */}
                    <div className="flex items-center gap-10 mb-6">
                      <span className="seal text-[9px] px-2 py-0.5 flex-shrink-0">{poem.form}</span>
                      <span className="text-sm tracking-[0.25em] text-[var(--color-vermillion)] font-medium whitespace-nowrap">
                        江东少女（原创）
                      </span>
                    </div>

                    <div className="space-y-2.5 mb-5">
                      {poem.lines.map((line, i) => (
                        <p key={i} className="text-lg md:text-xl font-medium tracking-[0.25em] text-[var(--color-ink-light)]">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* 右：序号 + 箭头 */}
                  <div className="hidden md:flex flex-col items-end justify-between h-full gap-8">
                    <span className="text-6xl font-light text-[var(--color-border)] leading-none select-none
                                     group-hover:text-[var(--color-vermillion)] transition-colors duration-300 opacity-30">
                      {["一", "二", "三", "四", "五"][idx]}
                    </span>
                    <span className="text-xs text-[var(--color-ink-muted)] tracking-widest
                                     translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100
                                     transition-all duration-300">
                      全文 →
                    </span>
                  </div>
                </div>

                {/* 标签 */}
                {poem.tags && poem.tags.length > 0 && (
                  <div className="px-8 md:px-10 pb-6 flex gap-2 flex-wrap">
                    {poem.tags.map((tag) => (
                      <span key={tag}
                        className="text-[10px] text-[var(--color-ink-muted)] tracking-widest
                                   border border-[var(--color-border)] px-2 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            </Link>
          </Reveal>
        ))}
      </div>

      {/* ── 底部提示 ── */}
      <Reveal delay={300} className="mt-16 text-center">
        <p className="text-xs text-[var(--color-border)] tracking-[0.3em]">
          · 持续更新 ·
        </p>
      </Reveal>
    </div>
  );
}
