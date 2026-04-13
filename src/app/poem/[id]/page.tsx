import { notFound } from "next/navigation";
import Link from "next/link";
import { getPoemById, poems } from "@/lib/poems";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return poems.map((poem) => ({ id: poem.id }));
}

export async function generateMetadata(props: PageProps<"/poem/[id]">): Promise<Metadata> {
  const { id } = await props.params;
  const poem = getPoemById(id);
  if (!poem) return {};
  return {
    title: poem.title,
    description: `${poem.dynasty} · ${poem.author} · ${poem.lines[0]}`,
  };
}

export default async function PoemPage(props: PageProps<"/poem/[id]">) {
  const { id } = await props.params;
  const poem = getPoemById(id);
  if (!poem) notFound();

  // Find prev/next poems
  const currentIndex = poems.findIndex((p) => p.id === id);
  const prevPoem = currentIndex > 0 ? poems[currentIndex - 1] : null;
  const nextPoem = currentIndex < poems.length - 1 ? poems[currentIndex + 1] : null;

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      {/* Back link */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs text-[var(--color-ink-muted)] tracking-widest mb-10 hover:text-[var(--color-vermillion)] transition-colors duration-200 group"
      >
        <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span>
        返回诗集
      </Link>

      {/* Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="seal text-[9px] px-1.5 py-0.5">{poem.dynasty}</span>
          <span className="text-[10px] text-[var(--color-ink-muted)] tracking-widest">
            {poem.form}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-light tracking-[0.2em] text-[var(--color-ink)] mb-3 leading-snug">
          {poem.title}
        </h1>

        <div className="flex items-center gap-2">
          <span className="text-sm text-[var(--color-ink-muted)] tracking-[0.2em]">
            {poem.author}
          </span>
          <span className="text-[var(--color-border)]">·</span>
          <div className="flex gap-1.5">
            {poem.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] text-[var(--color-ink-muted)] tracking-widest border border-[var(--color-border)] px-1.5 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Decorative line */}
      <div className="divider-plum mb-10">
        <span className="text-xs text-[var(--color-border)] px-3 flex-shrink-0 tracking-widest">
          ✦
        </span>
      </div>

      {/* Poem body */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Horizontal reading (default) */}
          <div className="flex-1">
            <div className="space-y-2">
              {poem.lines.map((line, i) => (
                <p
                  key={i}
                  className="poem-line text-[var(--color-ink)]"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>

          {/* Vertical accent column */}
          <div className="hidden md:flex flex-col items-center gap-1 w-6">
            <div className="w-px flex-1 bg-[var(--color-border)]" />
            <div className="writing-vertical text-[9px] text-[var(--color-ink-muted)] tracking-[0.4em]">
              {poem.author}
            </div>
            <div className="w-px flex-1 bg-[var(--color-border)]" />
          </div>
        </div>
      </section>

      {/* Annotation */}
      {poem.annotation && (
        <section className="mb-12">
          <div className="divider-plum mb-6">
            <span className="text-xs text-[var(--color-ink-muted)] tracking-[0.3em] px-2 flex-shrink-0">
              ✦ 赏析 ✦
            </span>
          </div>
          <div className="bg-[var(--color-paper-warm)] border border-[var(--color-border)] border-l-2 border-l-[var(--color-gold)] p-6">
            <p className="text-sm text-[var(--color-ink-light)] leading-loose tracking-[0.08em]">
              {poem.annotation}
            </p>
          </div>
        </section>
      )}

      {/* Navigation between poems */}
      <nav className="border-t border-[var(--color-border)] pt-8 flex items-center justify-between gap-4">
        {prevPoem ? (
          <Link
            href={`/poem/${prevPoem.id}`}
            className="group flex-1 text-left"
          >
            <div className="text-[10px] text-[var(--color-ink-muted)] tracking-widest mb-1.5 group-hover:text-[var(--color-vermillion)] transition-colors">
              ← 上一首
            </div>
            <div className="text-sm text-[var(--color-ink-light)] tracking-[0.1em] truncate group-hover:text-[var(--color-ink)] transition-colors">
              {prevPoem.title}
            </div>
          </Link>
        ) : (
          <div className="flex-1" />
        )}

        <Link
          href="/"
          className="flex-shrink-0 seal text-[10px] px-3 py-1.5 tracking-widest hover:bg-[var(--color-vermillion)] hover:text-[var(--color-paper)] transition-colors duration-200"
        >
          诗集
        </Link>

        {nextPoem ? (
          <Link
            href={`/poem/${nextPoem.id}`}
            className="group flex-1 text-right"
          >
            <div className="text-[10px] text-[var(--color-ink-muted)] tracking-widest mb-1.5 group-hover:text-[var(--color-vermillion)] transition-colors">
              下一首 →
            </div>
            <div className="text-sm text-[var(--color-ink-light)] tracking-[0.1em] truncate group-hover:text-[var(--color-ink)] transition-colors">
              {nextPoem.title}
            </div>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </nav>
    </div>
  );
}
