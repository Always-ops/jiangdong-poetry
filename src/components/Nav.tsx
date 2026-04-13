"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "首页" },
  { href: "/poems", label: "江东少女" },
{ href: "/master/wang-jingwei", label: "汪精卫" },
  { href: "/master/zheng-xiaoxu", label: "郑孝胥" },
  { href: "/about", label: "社志" },
];

export default function Nav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-paper-warm)]/95 backdrop-blur-sm border-b border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        {/* Logo + 题注 同行 */}
        <Link href="/" className="flex items-center gap-4 flex-shrink-0 group">
          {/* 社 印章 — 更大更醒目 */}
          <div className="seal text-[13px] w-11 h-11 flex items-center justify-center writing-vertical leading-none
                          group-hover:bg-[var(--color-vermillion)] group-hover:text-[var(--color-paper)] transition-colors duration-200">
            社
          </div>
          {/* 主标题 */}
          <div className="leading-none">
            <div className="text-[16px] font-medium tracking-[0.3em] text-[var(--color-ink)]">古典复兴</div>
            <div className="text-[10px] tracking-[0.4em] text-[var(--color-vermillion)] mt-[5px]">中华南社</div>
          </div>
          {/* 竖分隔线 + 致敬真才子 */}
          <div className="hidden sm:flex items-center gap-3 pl-2">
            <div className="w-px h-8 bg-[var(--color-border)]" />
            <span className="text-[10px] tracking-[0.6em] text-[var(--color-ink-muted)] pl-[0.6em]">
              致敬真才子
            </span>
          </div>
        </Link>

        {/* Nav links */}
        <nav className="flex items-center gap-1 overflow-x-auto no-scrollbar">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap px-3 py-1.5 text-[11px] tracking-[0.12em] transition-colors duration-150 rounded-none ${
                isActive(link.href)
                  ? "text-[var(--color-vermillion)] border-b border-[var(--color-vermillion)]"
                  : "text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
