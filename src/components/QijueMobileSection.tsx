"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import type { MyPoem } from "@/lib/myPoems";

export default function QijueMobileSection({ poem }: { poem: MyPoem }) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  return (
    <div
      className="block md:hidden relative min-h-[100svh] overflow-hidden cursor-pointer select-none"
      onClick={handleClick}
    >
      {/* 背景图满铺 */}
      <Image
        src="/tuibei-46.png"
        alt="推背图第四十六象"
        fill
        className="object-cover"
        style={{ filter: "sepia(0.22) contrast(1.06)", objectPosition: "center top" }}
        priority
      />

      {/* 纸色半透明遮罩 */}
      <div className="absolute inset-0 bg-[var(--color-paper-warm)]/70" />

      {/* 左侧朱砂线 */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[var(--color-vermillion)] opacity-80 z-10" />

      {/* 内容区 */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[100svh] px-8 py-20 text-center">

        {/* 近作小标 */}
        <p className="text-[9px] tracking-[0.55em] text-[var(--color-ink-muted)] uppercase mb-10">
          近作 · New Work
        </p>

        {/* 大标题 */}
        <h2
          className="text-[26vw] font-semibold leading-none tracking-[0.04em] text-[var(--color-ink)] mb-6"
          style={{
            textShadow:
              "0 0 14px rgba(245,237,224,0.95), 0 0 28px rgba(245,237,224,0.75), 0 2px 2px rgba(245,237,224,0.9)",
          }}
        >
          七绝
        </h2>

        {/* 形式印章 + 署名 */}
        <div className="flex items-center gap-5 mb-7">
          <span className="seal text-[9px] px-2 py-0.5">{poem.form}</span>
          <span
            className="text-sm tracking-[0.25em] text-[var(--color-vermillion)] font-semibold whitespace-nowrap"
            style={{
              textShadow:
                "0 0 8px rgba(245,237,224,0.95), 0 0 16px rgba(245,237,224,0.7)",
            }}
          >
            江东少女（原创）
          </span>
        </div>

        {/* 朱砂细线 */}
        <div className="w-14 h-[1.5px] bg-[var(--color-vermillion)] mb-10 opacity-70" />

        {/* 四行诗句 */}
        <div className="space-y-5 mb-14">
          {poem.lines.map((line, i) => (
            <p
              key={i}
              className="text-[6.8vw] font-semibold tracking-[0.28em] text-[var(--color-ink)]"
              style={{
                textShadow:
                  "0 0 10px rgba(245,237,224,0.98), 0 0 20px rgba(245,237,224,0.85), 0 0 4px rgba(245,237,224,1), 0 1px 2px rgba(245,237,224,0.9)",
              }}
            >
              {line}
            </p>
          ))}
        </div>

        {/* 播放提示 — 未播放时显示，播放后渐隐 */}
        <div className={`flex items-center gap-2 transition-opacity duration-700 ${playing ? "opacity-0" : "opacity-50"}`}>
          <span className="text-[10px] tracking-[0.4em] text-[var(--color-ink-muted)]">
            ▶ 点击画面 · 播放配乐
          </span>
        </div>

      </div>

      {/* 图片说明 */}
      <p className="absolute bottom-5 right-5 text-[9px] tracking-[0.4em] text-[var(--color-ink-muted)] z-10">
        推背图 · 第四十六象
      </p>

      {/* 音频 — 等MP3文件准备好后替换文件名 */}
      <audio ref={audioRef} src="/qijue.mp3" loop />
    </div>
  );
}
