"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";

type NavItem = {
  href: string;
  label: string;
  dropdown?: { label: string; href: string; external?: boolean }[];
};

const navLinks: NavItem[] = [
  { href: "/", label: "トップ" },
  { href: "/about", label: "企業情報" },
  {
    href: "/business",
    label: "事業内容",
    dropdown: [
      { label: "SES事業", href: "/business" },
      { label: "SES特化型SaaS Fairgrit", href: "/business", external: true },
      { label: "SESコンサルティング", href: "/business", external: true },
    ],
  },
  { href: "/news", label: "お知らせ" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    if (isMenuOpen) {
      window.addEventListener("keydown", handleEscape);
      return () => window.removeEventListener("keydown", handleEscape);
    }
  }, [isMenuOpen]);

  const textColor = isScrolled ? "text-gray-800" : "text-gray-800";

  const overlay = mounted && typeof document !== "undefined" && createPortal(
    <>
      {/* ヘッダーホバー時：ヘッダー以外を暗くぼかす */}
      <div
        className={`pointer-events-none fixed left-0 right-0 bottom-0 top-16 xl:top-20 z-[9998] bg-black/55 backdrop-blur-md transition-opacity duration-300 ${
          isHeaderHovered ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden
      />
      {/* ハンバーガーメニュー開いている時：ナビ以外をクリックで閉じる */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 top-16 z-[9997] xl:top-20"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden
        />
      )}
    </>,
    document.body
  );

  return (
    <>
      {overlay}
      <header
        className={`group/header fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white"
        }`}
        onMouseEnter={() => setIsHeaderHovered(true)}
        onMouseLeave={() => setIsHeaderHovered(false)}
      >
        <Container className="relative z-10">
        <div className="flex items-center justify-between h-16 xl:h-20">
          {/* ロゴ */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Agent Grow"
              width={140}
              height={40}
              className="h-12 w-auto object-contain xl:h-11"
              priority
            />
          </Link>

          {/* デスクトップナビ */}
          <nav className="hidden xl:flex items-center gap-0 ml-80">
            {navLinks.map((link, i) => (
              <span key={link.label} className="relative flex items-center group/nav">
                <Link
                  href={link.href}
                  className="relative px-4 py-5 text-sm font-semibold text-gray-800 hover:text-red-600 transition-colors after:absolute after:left-4 after:right-4 after:bottom-0 after:h-0.5 after:bg-red-600 after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100"
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-200 z-50">
                    <div className="bg-white rounded-b-lg shadow-lg border border-t-0 border-gray-200 py-3 px-4">
                      <p className="mb-3 text-xs font-bold text-gray-500 uppercase tracking-wider">
                        {link.label}
                      </p>
                      <div className="flex flex-nowrap items-center gap-0">
                        {link.dropdown.map((item, idx) => (
                          <span key={item.label} className="flex items-center">
                            {idx > 0 && (
                              <>
                                <span className="mx-3 text-red-600 font-semibold">›</span>
                                <span className="w-px h-4 bg-gray-300 mr-3" aria-hidden />
                              </>
                            )}
                            <Link
                              href={item.href}
                              className="flex items-center gap-1.5 py-1 text-sm text-gray-800 hover:text-red-600 transition-colors whitespace-nowrap"
                            >
                              <span>{item.label.replace("Fairgrit", "[Fairgrit]")}</span>
                              {item.external && (
                                <svg className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              )}
                            </Link>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                {i < navLinks.length - 1 && (
                  <span className="w-px h-4 bg-gray-300" aria-hidden />
                )}
              </span>
            ))}
          </nav>

          {/* デスクトップCTA + ハンバーガー */}
          <div className="hidden xl:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold bg-red-600 text-white hover:bg-red-700 transition-colors"
            >
              カジュアル面談をする
            </Link>
          </div>

          {/* ハンバーガー（タブレット・狭いデスクトップ） */}
          <button
            type="button"
            className="flex xl:hidden items-center justify-center w-10 h-10 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニュー"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* ハンバーガーメニュー */}
        {isMenuOpen && (
          <nav
            className="xl:hidden py-4 border-t border-gray-400"
            aria-label="モバイルナビゲーション"
          >
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`block px-4 py-2 text-sm font-semibold ${textColor} hover:bg-gray-50`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="block mx-4 mt-2 py-2.5 text-center rounded-lg bg-red-600 text-white font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  カジュアル面談をする
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </Container>
    </header>
    </>
  );
}
