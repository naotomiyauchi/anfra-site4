"use client";

import Link from "next/link";
import Section from "./Section";
import Container from "./Container";
import { motion } from "framer-motion";

const phaseCards = [
  {
    phase: "01",
    title: "構造を解き明かす",
    subtitle: "Structure Analysis",
    paragraphs: [
      "私たちは、ツールの導入からは始めません。",
      "まず現場と経営の両面から業務を分析し、業務の流れ・責任・データの実態を構造レベルで可視化します。",
    ],
    highlight: "問題の「症状」ではなく、本質的な「原因」を特定します。",
  },
  {
    phase: "02",
    title: "変革できる組織をつくる",
    subtitle: "Organization Transformation",
    paragraphs: [
      "DXはシステムではなく、組織の力です。",
      "実践型ワークショップと研修を通じて、現場と経営が同じ視点で課題を理解し、自ら改善できる状態を構築します。",
    ],
    highlight: '変革を"外部依存"から"内部能力"へ変えます。',
  },
  {
    phase: "03",
    title: "実行と定着を支援する",
    subtitle: "Execution & Implementation",
    paragraphs: [
      "分析と研修で終わらせません。",
      "優先順位の決定、改善の実行、そして定着までを継続的に支援します。",
    ],
    highlight: "企業が自ら改善し続けられる基盤を構築します。",
  },
];

export default function AboutSection() {
  return (
    <Section
      id="about"
      className="relative py-24 lg:py-40 overflow-hidden bg-gray-900"
    >
      {/* 斜めの赤いオーバーレイ（右上→左下） */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(160deg, transparent 35%, rgba(185, 28, 28, 0.95) 35%, rgba(153, 27, 27, 0.98) 100%)",
            clipPath: "polygon(100% 0, 100% 100%, 0 100%, 45% 0)",
          }}
        />
      </div>

      {/* 右上：About Us のゴースト文字（狭い画面では上余白を抑える） */}
      <div
        className="absolute top-4 right-12 lg:top-16 lg:right-20 pointer-events-none select-none z-10"
        aria-hidden
      >
        <p
          className="text-5xl lg:text-7xl xl:text-6xl font-bold text-gray-500/30"
          style={{ letterSpacing: "0.05em" }}
        >
          About Us
        </p>
      </div>

      <Container className="relative z-10">
        {/* 上部：2カラム（テキスト + アウトライン文字） */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-400 text-sm uppercase tracking-widest mb-4">
              About
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              <span className="whitespace-nowrap">“自走できる組織”を育てる</span>
              <br />
              DX変革支援企業
              <br />
            </h2>
            <p className="mt-16 text-l text-white/90 leading-relaxed max-w-xl">
              DXを内製的に推進できる組織へと進化する支援しています。<br /><br />
              現場の業務の課題のあぶり出すための研修やワークショップ、<br />
              業務フローを構造的に分析する伴走型分析持続的に改善が回り続ける仕組みを構築します。<br /><br />
              一時的な改革ではなく、企業に変革の力そのものを根付かせます。
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-900 transition-colors duration-300"
              >
                代表メッセージ
                <span className="text-white/90" aria-hidden>›</span>
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-900 transition-colors duration-300"
              >
                ミッション
                <span className="text-white/90" aria-hidden>›</span>
              </Link>
            </div>
            <Link
              href="/about"
              className="mt-6 flex items-center justify-between w-full px-6 py-5 bg-red-600 rounded-xl text-white hover:bg-red-900 transition-colors"
            >
              <span className="font-semibold">企業情報はこちら</span>
              <span className="flex items-center gap-1">
                View More
                <span className="text-white/90" aria-hidden>›››</span>
              </span>
            </Link>
          </motion.div>

          <motion.div
            className="hidden lg:flex order-1 lg:order-2 relative items-center justify-end"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
          </motion.div>

        </div>

        {/* 下部：Phase 01 / 02 / 03 */}
        <div className="mt-24 lg:mt-32">
          <motion.div
            className="mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">
              Our Approach
            </p>
            <h3 className="text-3xl lg:text-5xl font-bold text-white">
              DX推進を成功に導く ３フェーズ
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {phaseCards.map((card, i) => (
              <motion.div
                key={card.phase}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="h-full bg-white rounded-xl shadow-lg p-6 lg:p-8 flex flex-col">
                  <span className="inline-block px-3 py-1 rounded-full bg-red-600 text-white text-sm font-bold mb-5">
                    Phase {card.phase}
                  </span>
                  <h4 className="text-xl lg:text-2xl font-bold text-gray-900 mb-1">
                    {card.title}
                  </h4>
                  <p className="text-xs text-red-600 font-semibold uppercase tracking-wider mb-6">
                    {card.subtitle}
                  </p>
                  <div className="flex-1 space-y-4">
                    {card.paragraphs.map((para, j) => (
                      <p
                        key={j}
                        className="text-[15px] lg:text-base text-gray-700 leading-loose"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-base font-semibold text-gray-900 leading-relaxed">
                      {card.highlight}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
