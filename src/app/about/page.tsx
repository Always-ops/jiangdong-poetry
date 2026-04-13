import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "社志",
  description: "古典复兴·中华南社社志，缘起与宗旨",
};

const sections = [
  {
    title: "南社溯源",
    body: "南社，创立于清光绪三十五年（1909年），发起人为柳亚子、高旭、陈去病三君。初会于苏州虎丘，以诗词文章鼓吹革命、抗清兴汉为志。「南」字取意「操南音，不忘本也」，以楚辞南风之气自命。全盛时期社员逾千，汇聚革命志士与文学英才，出版《南社丛刻》，蔚为近代诗界盛事。",
  },
  {
    title: "古典复兴之旨",
    body: "百年之后，白话大兴，古典式微。然诗词之道，非徒形式，乃中华文明精神之载体。一字一韵，藏千年山河；一吟一咏，系万古文脉。古典复兴·中华南社，承南社之志，以当代之眼观千古之诗，以古典之笔写今人之心，志在存续汉字诗学的生命力。",
  },
  {
    title: "同人与诗稿",
    body: "本社广纳以古典诗词为志同道合者。同人诗稿栏目收录当代诗人原创之作，不论名位，惟以诗论诗。大家专栏重点介绍近现代诗词宗匠，深析其人其作，以史为鉴。",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-14">
      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-5">
          <span className="seal text-[9px] px-2 py-1 tracking-widest">社志</span>
          <span className="text-[10px] text-[var(--color-ink-muted)] tracking-widest">
            古典复兴 · 中华南社
          </span>
        </div>
        <h1 className="text-3xl font-light tracking-[0.25em] text-[var(--color-ink)] mb-2">
          社志
        </h1>
        <p className="text-xs text-[var(--color-ink-muted)] tracking-[0.2em]">
          缘起、宗旨与同人
        </p>
      </header>

      <div className="divider-plum mb-10">
        <span className="text-[var(--color-border)] px-3 text-xs">✦</span>
      </div>

      {/* Main sections */}
      <div className="space-y-10 mb-14">
        {sections.map((s, i) => (
          <section key={i}>
            <div className="flex items-center gap-3 mb-4">
              <span className="writing-vertical text-lg font-light text-[var(--color-border)] leading-none w-5 select-none">
                {["一", "二", "三"][i]}
              </span>
              <h2 className="text-base tracking-[0.2em] text-[var(--color-ink)]">{s.title}</h2>
            </div>
            <p className="text-sm text-[var(--color-ink-light)] leading-loose tracking-[0.08em] pl-8">
              {s.body}
            </p>
          </section>
        ))}
      </div>

      <div className="divider-plum mb-10">
        <span className="text-[var(--color-border)] px-3 text-xs">✦</span>
      </div>

      {/* 南社精神 quote */}
      <blockquote className="bg-[var(--color-paper-warm)] border border-[var(--color-border)] border-l-2 border-l-[var(--color-vermillion)] px-6 py-5 mb-12">
        <p className="text-sm text-[var(--color-ink-light)] tracking-[0.15em] leading-loose">
          「陈涉世家有言：王侯将相，宁有种乎？
          <br />
          吾辈诗家亦然：古典诗词，岂独古人之专利？」
        </p>
        <footer className="mt-3 text-[10px] text-[var(--color-ink-muted)] tracking-widest">
          — 古典复兴·中华南社 社志
        </footer>
      </blockquote>

      {/* CTA */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/poems"
          className="seal text-xs px-5 py-2.5 tracking-widest hover:bg-[var(--color-vermillion)] hover:text-[var(--color-paper)] transition-colors duration-200"
        >
          同人诗稿 →
        </Link>
      </div>
    </div>
  );
}
