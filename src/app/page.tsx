import Link from "next/link";
import Image from "next/image";
import { myPoems } from "@/lib/myPoems";
import { masters } from "@/lib/masters";
import MasterCard from "@/components/MasterCard";
import Reveal from "@/components/Reveal";
import QijueMobileSection from "@/components/QijueMobileSection";

const hero      = myPoems[0];             // 禅宗一（首屏）
const newWork   = myPoems[2];             // 七绝（第二屏）
const yuewang   = myPoems[3];             // 登会稽越王台（第三屏）
const jianhv    = myPoems[4];             // 七律·鉴湖女侠（第四屏）

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════
          第一屏 — 古典复兴 · 中华南社
      ══════════════════════════════════════ */}
      <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-[var(--color-paper)]">

        {/* 极淡背景字 */}
        <span aria-hidden="true"
          className="pointer-events-none select-none absolute right-[-2%] top-1/2 -translate-y-1/2
                     text-[38vw] font-light leading-none text-[var(--color-ink)] opacity-[0.025]">
          社
        </span>

        {/* 顶部朱砂线 */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[var(--color-vermillion)] anim-line"
             style={{ animationDelay: "0s" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-8 md:px-14 py-20">
          <p className="anim-up text-[10px] tracking-[0.5em] text-[var(--color-ink-muted)] mb-6 uppercase"
             style={{ animationDelay: "0.05s" }}>
            Chinese Classical Revival
          </p>
          <h1 className="anim-up font-light leading-[1.05] text-[var(--color-ink)]
                         text-[13vw] md:text-[11vw] lg:text-[9.5vw] tracking-[0.04em] mb-1"
              style={{ animationDelay: "0.12s" }}>
            古典复兴
          </h1>
          <h2 className="anim-up font-light leading-tight
                         text-[8vw] md:text-[6.5vw] lg:text-[5.5vw]
                         tracking-[0.12em] text-[var(--color-vermillion)] mb-10"
              style={{ animationDelay: "0.28s" }}>
            中华南社
          </h2>
          <div className="anim-line h-[1.5px] w-24 md:w-36 bg-[var(--color-ink)] mb-10"
               style={{ animationDelay: "0.38s" }} />

          <div className="space-y-3 mb-10">
            {[
              "心宇将灭万事休，",
              "天涯无处不怨尤。",
              "纵有先辈尝炎凉，",
              "谅无后人续春秋。",
            ].map((line, i) => (
              <p key={i}
                 className="anim-up text-xl md:text-2xl font-medium tracking-[0.25em] text-[var(--color-ink-light)]"
                 style={{ animationDelay: `${0.55 + i * 0.12}s` }}>
                {line}
              </p>
            ))}
          </div>

          <div className="anim-fade flex items-center gap-3"
               style={{ animationDelay: "1.05s" }}>
            <div className="w-6 h-px bg-[var(--color-border)]" />
            <span className="text-xs tracking-[0.3em] text-[var(--color-ink-muted)]">
              自嘲 ／ 汪兆铭
            </span>
          </div>
        </div>

        <div className="anim-fade absolute bottom-8 left-1/2 -translate-x-1/2
                        flex flex-col items-center gap-2 text-[var(--color-border)]"
             style={{ animationDelay: "1.3s" }}>
          <span className="text-[9px] tracking-[0.4em]">向下</span>
          <svg width="1" height="36" viewBox="0 0 1 36" aria-hidden="true">
            <line x1="0.5" y1="0" x2="0.5" y2="36" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════
          第二屏 — 江东少女 近作
      ══════════════════════════════════════ */}
      <section className="border-t border-[var(--color-border)]">

        {/* ── 桌面端（md+）：左文右图，原有布局 ── */}
        <div className="hidden md:block relative min-h-[100svh] overflow-hidden bg-[var(--color-paper-warm)]">

          {/* 左侧朱砂竖线装饰 */}
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[var(--color-vermillion)] opacity-70" />

          {/* 推背图 — 右侧绝对定位 */}
          <div className="absolute top-[18%] bottom-[4%] left-[45%] right-[3%] z-0">
            <Image
              src="/tuibei-46.png"
              alt="推背图第四十六象 — 有一军人身带弓"
              fill
              className="object-contain"
              style={{ filter: "sepia(0.08) contrast(1.03)", objectPosition: "left top" }}
              priority
            />
            <p className="absolute bottom-4 right-4 text-[9px] tracking-[0.4em] text-[var(--color-ink-muted)]">
              推背图 · 第四十六象
            </p>
          </div>

          {/* 极淡背景字 */}
          <span aria-hidden="true"
            className="pointer-events-none select-none absolute left-[6%] bottom-10
                       text-[28vw] font-light leading-none text-[var(--color-ink)] opacity-[0.025]">
            绝
          </span>

          {/* 诗词内容（左侧） */}
          <div className="relative z-10 flex flex-col justify-center min-h-[100svh] px-14 py-20 max-w-[58%]">

            <Reveal className="flex items-center gap-4 mb-8">
              <div className="w-6 h-px bg-[var(--color-border)]" />
              <span className="text-[10px] tracking-[0.5em] text-[var(--color-ink-muted)] uppercase">
                近作 · New Work
              </span>
            </Reveal>

            <Reveal delay={60}>
              <h2 className="text-[14vw] lg:text-[11vw] font-medium leading-none
                             tracking-[0.05em] text-[var(--color-ink)] mb-2">
                七绝
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <div className="flex items-center gap-28 mt-8 mb-12">
                <span className="seal text-[9px] px-2 py-0.5">{newWork.form}</span>
                <span className="text-sm tracking-[0.25em] text-[var(--color-vermillion)] font-medium whitespace-nowrap">
                  江东少女（原创）
                </span>
              </div>
            </Reveal>

            <div className="space-y-4 mb-12">
              {newWork.lines.map((line, i) => (
                <Reveal key={i} delay={180 + i * 100}>
                  <p className="text-3xl lg:text-4xl font-medium tracking-[0.2em] text-[var(--color-ink)]">
                    {line}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={600}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-[var(--color-border)]" />
                <div className="flex gap-2 flex-wrap">
                  {newWork.tags?.map((tag) => (
                    <span key={tag}
                      className="text-[10px] text-[var(--color-ink-muted)] tracking-widest
                                 border border-[var(--color-border)] px-2 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={700} className="mt-8">
              <Link href="/poems"
                className="inline-flex items-center gap-2 text-xs tracking-[0.25em] text-[var(--color-ink-muted)]
                           hover:text-[var(--color-vermillion)] transition-colors duration-200 group">
                查看全部诗稿
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </Link>
            </Reveal>
          </div>
        </div>

        {/* ── 手机端：全屏背景图叠层 + 点击播放 ── */}
        <QijueMobileSection poem={newWork} />

      </section>

      {/* ══════════════════════════════════════
          第三屏 — 登会稽越王台
      ══════════════════════════════════════ */}
      <section className="relative min-h-[100svh] overflow-hidden
                          bg-[var(--color-paper)] border-t border-[var(--color-border)]">

        {/* 配图 — 桌面显示，手机隐藏 */}
        <div className="hidden md:block absolute top-[30%] bottom-[4%] left-[48%] right-[3%] z-0">
          <Image
            src="/yuewang-tai.png"
            alt="登会稽越王台"
            fill
            className="object-contain"
            style={{ objectPosition: "left top", filter: "sepia(0.06) contrast(1.02)" }}
          />
          <p className="absolute bottom-0 right-0 text-[9px] tracking-[0.4em] text-[var(--color-ink-muted)]">
            越王台 · 配图
          </p>
        </div>

        {/* 极淡背景字 */}
        <span aria-hidden="true"
          className="pointer-events-none select-none absolute left-[5%] bottom-8
                     text-[22vw] font-light leading-none text-[var(--color-ink)] opacity-[0.025]">
          越
        </span>

        {/* 诗词内容 */}
        <div className="relative z-10 flex flex-col justify-center min-h-[100svh]
                        px-8 md:px-14 py-20 w-full md:max-w-[56%]">

          <Reveal className="flex items-center gap-4 mb-8">
            <div className="w-6 h-px bg-[var(--color-border)]" />
            <span className="text-[10px] tracking-[0.5em] text-[var(--color-ink-muted)] uppercase">
              怀古 · Huaigu
            </span>
          </Reveal>

          <Reveal delay={60}>
            <h2 className="text-[7vw] md:text-[5.5vw] lg:text-[4.5vw] font-medium leading-tight
                           tracking-[0.08em] text-[var(--color-ink)] mb-2">
              登会稽越王台
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex items-center gap-10 mt-4 mb-12">
              <span className="seal text-[9px] px-2 py-0.5">{yuewang.form}</span>
              <span className="text-sm tracking-[0.25em] text-[var(--color-vermillion)] font-medium">
                江东少女（原创）
              </span>
            </div>
          </Reveal>

          <div className="space-y-3 mb-12">
            {yuewang.lines.map((line, i) => (
              <Reveal key={i} delay={180 + i * 80}>
                <p className="text-xl md:text-2xl lg:text-3xl font-medium
                               tracking-[0.2em] text-[var(--color-ink)]">
                  {line}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={700} className="mt-4">
            <Link href={`/poems/${yuewang.id}`}
              className="inline-flex items-center gap-2 text-xs tracking-[0.25em] text-[var(--color-ink-muted)]
                         hover:text-[var(--color-vermillion)] transition-colors duration-200 group">
              查看注释 赏析
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Link>
          </Reveal>

          {/* 手机端配图 */}
          <Reveal delay={800} className="block md:hidden mt-10 relative w-full h-[80vw]">
            <Image
              src="/yuewang-tai.png"
              alt="登会稽越王台"
              fill
              className="object-contain"
              style={{ filter: "sepia(0.06) contrast(1.02)", objectPosition: "left top" }}
            />
            <p className="absolute bottom-0 right-0 text-[9px] tracking-[0.4em] text-[var(--color-ink-muted)]">
              越王台 · 配图
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════
          第四屏 — 七律·鉴湖女侠
      ══════════════════════════════════════ */}
      <section className="relative min-h-[100svh] overflow-hidden
                          bg-[var(--color-paper-warm)] border-t border-[var(--color-border)]">

        {/* 右侧朱砂竖线 */}
        <div className="absolute right-0 top-0 bottom-0 w-[3px] bg-[var(--color-vermillion)] opacity-60" />

        {/* 极淡背景字 */}
        <span aria-hidden="true"
          className="pointer-events-none select-none absolute right-[4%] bottom-8
                     text-[22vw] font-light leading-none text-[var(--color-ink)] opacity-[0.025]">
          侠
        </span>

        <div className="relative z-10 flex flex-col justify-center min-h-[100svh]
                        px-8 md:px-14 py-20 max-w-3xl">

          <Reveal className="flex items-center gap-4 mb-8">
            <div className="w-6 h-px bg-[var(--color-border)]" />
            <span className="text-[10px] tracking-[0.5em] text-[var(--color-ink-muted)] uppercase">
              怀人 · Huairen
            </span>
          </Reveal>

          <Reveal delay={60}>
            <h2 className="text-[7vw] md:text-[5.5vw] lg:text-[4.5vw] font-medium leading-tight
                           tracking-[0.08em] text-[var(--color-ink)] mb-2">
              七律·鉴湖女侠
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex items-center gap-10 mt-4 mb-12">
              <span className="seal text-[9px] px-2 py-0.5">{jianhv.form}</span>
              <span className="text-sm tracking-[0.25em] text-[var(--color-vermillion)] font-medium">
                江东少女（原创）
              </span>
            </div>
          </Reveal>

          {/* 八行律诗，左右两列紧排 */}
          <div className="grid grid-cols-1 md:grid-cols-[auto_auto] md:w-fit gap-x-2 gap-y-3 mb-12">
            {jianhv.lines.map((line, i) => (
              <Reveal key={i} delay={180 + i * 70}>
                <p className="text-xl md:text-2xl lg:text-3xl font-medium
                               tracking-[0.2em] text-[var(--color-ink)] whitespace-nowrap">
                  {line}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={750} className="mt-4">
            <Link href={`/poems/${jianhv.id}`}
              className="inline-flex items-center gap-2 text-xs tracking-[0.25em] text-[var(--color-ink-muted)]
                         hover:text-[var(--color-vermillion)] transition-colors duration-200 group">
              查看注释 赏析
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════
          第五屏 — 南社宣言条
      ══════════════════════════════════════ */}
      <section className="bg-[var(--color-vermillion)] py-6 px-6">
        <Reveal className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--color-paper)] tracking-[0.18em] leading-loose text-center md:text-left">
            以诗词为志，振兴古典，存续文脉——承南社精神，聚当代同道
          </p>
          <Link href="/about"
            className="flex-shrink-0 border border-[rgba(255,255,255,0.5)] text-[var(--color-paper)]
                       text-[11px] tracking-[0.25em] px-5 py-2
                       hover:bg-[var(--color-paper)] hover:text-[var(--color-vermillion)]
                       transition-colors duration-200">
            阅读社志
          </Link>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════
          第五屏 — 各室入口（三栏）
      ══════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[var(--color-paper-warm)]">
        <div className="max-w-5xl mx-auto">
          <Reveal className="mb-12">
            <div className="divider-plum">
              <span className="text-[10px] text-[var(--color-ink-muted)] tracking-[0.4em] px-3 flex-shrink-0">
                ✦ 各室入口 ✦
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { href: "/poems",               label: "江东少女",  sub: "个人诗词展",  delay: 0 },
              { href: "/master/wang-jingwei", label: "汪精卫",   sub: "双照楼诗词稿", delay: 100 },
              { href: "/master/zheng-xiaoxu", label: "郑孝胥",   sub: "海藏楼诗集",  delay: 200 },
            ].map((item) => (
              <Reveal key={item.href} delay={item.delay}>
                <Link href={item.href}
                  className="group flex flex-col items-center justify-center gap-3 py-14
                             border border-[var(--color-border)] bg-[var(--color-paper)]
                             card-lift">
                  <span className="text-xl tracking-[0.25em] text-[var(--color-ink)]
                                   group-hover:text-[var(--color-vermillion)] transition-colors duration-200">
                    {item.label}
                  </span>
                  <span className="text-[10px] tracking-widest text-[var(--color-ink-muted)]">
                    {item.sub}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          第五屏 — 大家专栏
      ══════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[var(--color-paper)]">
        <div className="max-w-5xl mx-auto">
          <Reveal className="mb-12 text-center">
            <p className="text-[10px] tracking-[0.5em] text-[var(--color-ink-muted)] mb-3">
              近现代 · 诗词宗匠
            </p>
            <h2 className="text-3xl font-light tracking-[0.25em] text-[var(--color-ink)]">
              大家专栏
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {masters.map((master, i) => (
              <Reveal key={master.id} delay={i * 120}>
                <MasterCard master={master} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          第六屏 — 《毛诗序》引语
      ══════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[var(--color-paper-dark)] border-t border-[var(--color-border)]">
        <Reveal className="max-w-xl mx-auto text-center">
          <p className="text-xl md:text-2xl font-light text-[var(--color-ink-light)]
                        tracking-[0.2em] leading-loose mb-5">
            「尚有后人续春秋。」
          </p>
          <p className="text-[10px] text-[var(--color-border)] tracking-[0.4em]">
            — 江东少女
          </p>
        </Reveal>
      </section>
    </>
  );
}
