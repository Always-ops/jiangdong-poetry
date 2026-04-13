import Link from "next/link";
import type { Poem } from "@/lib/poems";

interface PoemCardProps {
  poem: Poem;
  index: number;
}

// Subtle accent colors cycling per card
const accents = [
  "border-l-[var(--color-vermillion)]",
  "border-l-[var(--color-jade)]",
  "border-l-[var(--color-gold)]",
];

export default function PoemCard({ poem, index }: PoemCardProps) {
  const accent = accents[index % accents.length];
  // Preview: first two lines
  const preview = poem.lines.slice(0, 2);

  return (
    <Link href={`/poem/${poem.id}`} className="group block">
      <article
        className={`
          relative h-full
          bg-[var(--color-paper-warm)]
          border border-[var(--color-border)] border-l-2 ${accent}
          p-6
          transition-all duration-300 ease-out
          hover:shadow-[4px_4px_0_var(--color-border)]
          hover:-translate-y-0.5
          hover:-translate-x-0.5
        `}
      >
        {/* Dynasty & form badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="seal text-[9px] px-1.5 py-0.5">{poem.dynasty}</span>
          <span className="text-[10px] text-[var(--color-ink-muted)] tracking-widest">
            {poem.form}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-lg font-medium tracking-[0.1em] text-[var(--color-ink)] mb-1 group-hover:text-[var(--color-vermillion)] transition-colors duration-200 leading-snug">
          {poem.title}
        </h2>

        {/* Author */}
        <p className="text-xs text-[var(--color-ink-muted)] tracking-[0.2em] mb-5">
          {poem.author}
        </p>

        {/* Preview lines */}
        <div className="space-y-1 border-t border-[var(--color-border)] pt-4">
          {preview.map((line, i) => (
            <p
              key={i}
              className="text-sm text-[var(--color-ink-light)] leading-relaxed tracking-[0.08em] truncate"
            >
              {line}
            </p>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {poem.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] text-[var(--color-ink-muted)] tracking-widest border border-[var(--color-border)] px-1.5 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Read more indicator */}
        <div className="absolute bottom-5 right-5 text-xs text-[var(--color-ink-muted)] tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          展开 →
        </div>
      </article>
    </Link>
  );
}
