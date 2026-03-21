"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

const blogCards = [
  {
    title: "CEO Blog",
    subtitle: "河井智也note（社長ブログ）",
    href: "#",
    icon: (
      <span className="w-10 h-10 rounded bg-red-600 text-white flex items-center justify-center font-bold text-lg">n</span>
    ),
  },
  {
    title: "Official YouTube",
    subtitle: "エージェントグローCh",
    href: "#",
    icon: (
      <svg className="w-10 h-10 text-red-600" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    title: "Staff Blog",
    subtitle: "自主的20%るぅる（社員ブログ）",
    href: "#",
    icon: (
      <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Tech Blog",
    subtitle: "技術ブログ",
    href: "#",
    icon: (
      <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-400">
      {/* ブログ・チャンネルカード（流れるアニメーション + 写真背景） */}
      <div className="relative border-b border-gray-400 overflow-hidden">
        {/* 背景写真 + モヤ */}
        <div className="absolute inset-0">
          <Image
            src="/D94CBA56-69B1-4E0A-9471-2BF595B4E1C4.JPG"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "rgba(255, 255, 255, 0.85)" }}
          />
        </div>
        <div className="relative py-6 overflow-hidden">
          <div
            className="flex gap-0 w-max"
            style={{ animation: "marquee-flow 30s linear infinite" }}
          >
            {[...blogCards, ...blogCards].map((card, i) => (
              <Link
                key={`${card.title}-${i}`}
                href={card.href}
                className="flex items-center gap-4 px-8 py-4 min-w-[260px] border-r border-gray-400 last:border-r-0 hover:bg-white/60 transition-colors flex-shrink-0"
              >
                {card.icon}
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-gray-900">{card.title}</p>
                  <p className="text-sm text-gray-600 truncate">{card.subtitle}</p>
                </div>
                <span className="text-gray-400 flex-shrink-0">›</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ナビゲーション */}
      <Container>
        <div className="py-12 lg:py-16 grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* TOP */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="font-bold text-gray-900 hover:text-red-600 transition-colors flex items-center gap-1">
              TOP <span>›</span>
            </Link>
          </div>

          {/* 企業情報 */}
          <nav>
            <Link href="/about" className="font-bold text-gray-900 hover:text-red-600 transition-colors mb-3 flex items-center gap-1">
              企業情報 <span>›</span>
            </Link>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/about/message" className="hover:text-red-600 flex items-center gap-1">
                  <span className="text-red-600">・</span>代表メッセージ
                </Link>
              </li>
              <li>
                <Link href="/about/mission" className="hover:text-red-600 flex items-center gap-1">
                  <span className="text-red-600">・</span>ミッション・ビジョン・バリュー
                </Link>
              </li>
              <li>
                <Link href="/about/company" className="hover:text-red-600 flex items-center gap-1">
                  <span className="text-red-600">・</span>会社概要
                </Link>
              </li>
            </ul>
          </nav>

          {/* 事業内容 */}
          <nav>
            <Link href="/business" className="font-bold text-gray-900 hover:text-red-600 transition-colors mb-3 flex items-center gap-1">
              事業内容 <span>›</span>
            </Link>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/business" className="hover:text-red-600 flex items-center gap-1">
                  <span className="text-red-600">・</span>DX研修・ワークショップ
                </Link>
              </li>
              <li>
                <Link href="/business" className="hover:text-red-600 flex items-center gap-1">
                  <span className="text-red-600">・</span>業務分析・DX診断
                </Link>
              </li>
              <li>
                <Link href="/business" className="hover:text-red-600 flex items-center gap-1">
                  <span className="text-red-600">・</span>オリジナルDXツール開発
                </Link>
              </li>
            </ul>
          </nav>

          {/* お知らせ・お問い合わせ */}
          <nav className="space-y-4">
            <div>
              <Link href="/news" className="font-bold text-gray-900 hover:text-red-600 transition-colors flex items-center gap-1">
                お知らせ <span>›</span>
              </Link>
            </div>
            <div>
              <Link href="/contact" className="font-bold text-gray-900 hover:text-red-600 transition-colors flex items-center gap-1">
                お問い合わせ <span>›</span>
              </Link>
            </div>
          </nav>
        </div>

        <div className="py-6 border-t border-gray-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} 合同会社Anfra. All rights reserved.
          </p>
          <Link href="/privacy" className="text-xs text-gray-400 hover:text-red-600 transition-colors">
            プライバシーポリシー
          </Link>
        </div>
      </Container>
    </footer>
  );
}
