import { notFound } from "next/navigation";
import Link from "next/link";
import { getMasterById, masters } from "@/lib/masters";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return masters.map((m) => ({ id: m.id }));
}

export async function generateMetadata(
  props: PageProps<"/master/[id]">
): Promise<Metadata> {
  const { id } = await props.params;
  const master = getMasterById(id);
  if (!master) return {};
  return {
    title: `${master.name} · ${master.epithet}`,
    description: `${master.name}（${master.years}），${master.origin}。${master.bio.slice(0, 80)}……`,
  };
}

export default async function MasterPage(props: PageProps<"/master/[id]">) {
  const { id } = await props.params;
  const master = getMasterById(id);
  if (!master) notFound();

  const currentIndex = masters.findIndex((m) => m.id === id);
  const prevMaster = currentIndex > 0 ? masters[currentIndex - 1] : null;
  const nextMaster =
    currentIndex < masters.length - 1 ? masters[currentIndex + 1] : null;

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      {/* Back */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs text-[var(--color-ink-muted)] tracking-widest mb-10 hover:text-[var(--color-vermillion)] transition-colors duration-200 group"
      >
        <span className="group-hover:-translate-x-1 transition-transform duration-200">
          ←
        </span>
        返回首页
      </Link>

      {/* Master header */}
      <header className="mb-10 pb-8 border-b border-[var(--color-border)]">
        <div className="flex items-start gap-6">
          {/* Large name character */}
          <div className="hidden md:block flex-shrink-0 writing-vertical text-7xl font-light text-[var(--color-border)] leading-none select-none w-16 h-24 opacity-30">
            {master.name[0]}
          </div>

          <div className="flex-1">
            <div className="flex items-baseline gap-3 mb-2 flex-wrap">
              <h1 className="text-4xl font-light tracking-[0.2em] text-[var(--color-ink)]">
                {master.name}
              </h1>
              <span className="seal text-[10px] px-2 py-0.5 tracking-widest">
                {master.years}
              </span>
            </div>

            {/* Metadata */}
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-[var(--color-ink-muted)] tracking-widest mb-4">
              <span>字 {master.zi}</span>
              <span className="text-[var(--color-border)]">·</span>
              <span>号 {master.hao}</span>
              <span className="text-[var(--color-border)]">·</span>
              <span>{master.origin}</span>
              <span className="text-[var(--color-border)]">·</span>
              <span>{master.collection}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-[var(--color-vermillion)] tracking-widest border-b border-[var(--color-vermillion)] pb-px">
                {master.epithet}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Bio */}
      <section className="mb-12">
        <div className="divider-plum mb-6">
          <span className="text-xs text-[var(--color-ink-muted)] tracking-[0.3em] px-2 flex-shrink-0">
            ✦ 生平 ✦
          </span>
        </div>
        <p className="text-sm text-[var(--color-ink-light)] leading-loose tracking-[0.08em]">
          {master.bio}
        </p>
      </section>

      {/* Style */}
      <section className="mb-12">
        <div className="divider-plum mb-6">
          <span className="text-xs text-[var(--color-ink-muted)] tracking-[0.3em] px-2 flex-shrink-0">
            ✦ 诗风 ✦
          </span>
        </div>
        <div className="bg-[var(--color-paper-warm)] border border-[var(--color-border)] border-l-2 border-l-[var(--color-gold)] p-5">
          <p className="text-sm text-[var(--color-ink-light)] leading-loose tracking-[0.08em]">
            {master.style}
          </p>
        </div>
      </section>

      {/* Poems */}
      <section className="mb-12">
        <div className="divider-plum mb-8">
          <span className="text-xs text-[var(--color-ink-muted)] tracking-[0.3em] px-2 flex-shrink-0">
            ✦ 代表作 ✦
          </span>
        </div>

        <div className="space-y-12">
          {master.poems.map((poem, pIdx) => (
            <article key={poem.id}>
              {/* Poem header */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[var(--color-ink-muted)] font-light text-lg tracking-wider">
                  {["一", "二", "三", "四"][pIdx]}
                </span>
                <div className="w-px h-4 bg-[var(--color-border)]" />
                <h2 className="text-lg tracking-[0.15em] text-[var(--color-ink)]">
                  《{poem.title}
                  {poem.subtitle ? `·${poem.subtitle}` : ""}》
                </h2>
                <span className="seal text-[9px] px-1.5 py-0.5">{poem.form}</span>
                {poem.year && (
                  <span className="text-[10px] text-[var(--color-ink-muted)] tracking-widest">
                    {poem.year}
                  </span>
                )}
              </div>

              {/* Poem body */}
              <div className="flex gap-6 mb-5 ml-10">
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
                {/* Vertical accent */}
                <div className="hidden md:flex flex-col items-center w-5">
                  <div className="w-px flex-1 bg-[var(--color-border)]" />
                  <span className="writing-vertical text-[8px] text-[var(--color-border)] tracking-[0.3em] my-2">
                    {master.name}
                  </span>
                  <div className="w-px flex-1 bg-[var(--color-border)]" />
                </div>
              </div>

              {/* Annotation */}
              <div className="ml-10 bg-[var(--color-paper-warm)] border border-[var(--color-border)] border-l-2 border-l-[var(--color-vermillion)] p-5">
                <p className="text-sm text-[var(--color-ink-light)] leading-loose tracking-[0.06em]">
                  {poem.annotation}
                </p>
              </div>

              {pIdx < master.poems.length - 1 && (
                <div className="mt-10 border-b border-dashed border-[var(--color-border)]" />
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Navigation between masters */}
      <nav className="border-t border-[var(--color-border)] pt-8 flex items-center justify-between gap-4">
        {prevMaster ? (
          <Link href={`/master/${prevMaster.id}`} className="group flex-1 text-left">
            <div className="text-[10px] text-[var(--color-ink-muted)] tracking-widest mb-1.5 group-hover:text-[var(--color-vermillion)] transition-colors">
              ← 上一位
            </div>
            <div className="text-sm text-[var(--color-ink-light)] tracking-[0.1em] truncate group-hover:text-[var(--color-ink)] transition-colors">
              {prevMaster.name}
            </div>
          </Link>
        ) : (
          <div className="flex-1" />
        )}

        <Link
          href="/"
          className="flex-shrink-0 seal text-[10px] px-3 py-1.5 tracking-widest hover:bg-[var(--color-vermillion)] hover:text-[var(--color-paper)] transition-colors duration-200"
        >
          首页
        </Link>

        {nextMaster ? (
          <Link href={`/master/${nextMaster.id}`} className="group flex-1 text-right">
            <div className="text-[10px] text-[var(--color-ink-muted)] tracking-widest mb-1.5 group-hover:text-[var(--color-vermillion)] transition-colors">
              下一位 →
            </div>
            <div className="text-sm text-[var(--color-ink-light)] tracking-[0.1em] truncate group-hover:text-[var(--color-ink)] transition-colors">
              {nextMaster.name}
            </div>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </nav>
    </div>
  );
}
