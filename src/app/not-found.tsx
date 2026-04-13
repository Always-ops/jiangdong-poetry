import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-lg mx-auto px-6 py-24 text-center">
      <div className="writing-vertical text-6xl font-light text-[var(--color-border)] mx-auto mb-8 h-32 leading-none select-none">
        無
      </div>
      <h1 className="text-xl font-light tracking-[0.3em] text-[var(--color-ink)] mb-3">
        此页不存在
      </h1>
      <p className="text-sm text-[var(--color-ink-muted)] tracking-widest mb-10">
        如烟往事俱忘却，心底无私天地宽
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 seal text-xs px-5 py-2.5 tracking-widest hover:bg-[var(--color-vermillion)] hover:text-[var(--color-paper)] transition-colors duration-200"
      >
        ← 返回诗集
      </Link>
    </div>
  );
}
