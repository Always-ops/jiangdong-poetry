import type { Metadata } from "next";
import { Noto_Serif_SC, Noto_Sans_SC } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const notoSerifSC = Noto_Serif_SC({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s · 古典复兴",
    default: "古典复兴 · 中华南社",
  },
  description:
    "古典复兴·中华南社。以古典诗词为志，存诗人风骨，振中华文脉。收录近现代诗词大家汪精卫、郑孝胥代表作，兼载同人原创诗稿。",
  keywords: ["南社", "古典复兴", "汪精卫", "郑孝胥", "近现代诗词", "古典诗词", "中华文脉"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="zh-Hans"
      className={`${notoSerifSC.variable} ${notoSansSC.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-[var(--color-paper)]">
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-[var(--color-border)] bg-[var(--color-paper-warm)] py-10">
          <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="seal text-[9px] w-9 h-9 flex items-center justify-center writing-vertical leading-none">
                社
              </div>
              <div>
                <div className="text-sm tracking-[0.3em] text-[var(--color-ink)]">古典复兴</div>
                <div className="text-[10px] tracking-[0.35em] text-[var(--color-ink-muted)] mt-0.5">中华南社</div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-xs text-[var(--color-ink-muted)] tracking-[0.25em]">
                振兴古典，存续文脉，诗以言志
              </p>
            </div>
            <div className="text-[10px] text-[var(--color-border)] tracking-widest">
              南社 · 己酉以降
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
