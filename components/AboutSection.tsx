"use client";

import Link from "next/link";
import Section from "./Section";
import Container from "./Container";
import { motion } from "framer-motion";

const approachCards = [
  {
    descriptor: "お客様からの単金にもとづき評価",
    items: [
      { label: "昇給率", value: "4.3%", note: "2024年実績" },
      { label: "還元率", value: "76%", note: "2024年12月~" },
    ],
    bottomLabel: "単価評価制度",
    href: "#",
    icon: (
      <svg className="w-12 h-12 text-red-600/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    descriptor: "エンジニアが案件を選択できる",
    items: [{ label: "平均案件数", value: "28件", note: "（地域や市況により変動）" }],
    bottomLabel: "案件選択制度",
    href: "#",
    icon: (
      <svg className="w-12 h-12 text-red-600/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    descriptor: "残業が少なく、働きやすい労働環境",
    items: [{ label: "平均残業時間", value: "7.4時間", note: "2024年実績" }],
    bottomLabel: "福利厚生・働く環境",
    href: "#",
    icon: (
      <svg className="w-12 h-12 text-red-600/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
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
              新SES企業の
              <br />
              リーディングカンパニー
            </h2>
            <p className="mt-8 text-lg text-white/90 leading-relaxed max-w-xl">
              私たちは、「新しい働き方」を実現している「新SES企業」として業界全体を力強く牽引し、
              SES業界とそこで働くすべての人の未来を変えていきます。
            </p>
            <div className="mt-10 flex flex-wrap gap-4 mb-24 lg:mb-40">
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-red-700 text-white font-semibold hover:bg-red-600 transition-colors duration-300"
              >
                代表メッセージ
                <span className="text-white/90" aria-hidden>›</span>
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-red-700 text-white font-semibold hover:bg-red-600 transition-colors duration-300"
              >
                ミッション
                <span className="text-white/90" aria-hidden>›</span>
              </Link>
            </div>
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

        {/* 下部：エンジニアファースト + 3カード */}
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
              エンジニアファースト
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {approachCards.map((card, i) => (
              <motion.div
                key={card.bottomLabel}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="h-full bg-white rounded-xl shadow-lg p-6 lg:p-8 flex flex-col">
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    <span className="text-red-600 font-semibold">/</span>
                    {card.descriptor}
                  </p>
                  <div className="mt-4 flex items-center">{card.icon}</div>
                  <div className="mt-4 flex-1">
                    {card.items.map((item) => (
                      <div key={item.label} className="mb-4 last:mb-0">
                        <p className="text-lg font-bold text-gray-800">{item.label}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{item.note}</p>
                        <p className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">
                      {card.bottomLabel}
                    </span>
                    <Link
                      href={card.href}
                      className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-500 transition-colors"
                      aria-label={card.bottomLabel}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 認定カード3つ */}
          <div className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "安全衛生優良企業",
                description:
                  "労働者の安全や健康を確保するための対策に積極的に取り組み、高い安全衛生水準を維持・改善しているとして、厚生労働省から認定を受けています。",
                issuer: "厚生労働省",
                dateRange: "自: 2023年3月6日 至: 2026年3月5日",
              },
              {
                title: "健康経営優良法人",
                description:
                  "特に優良な健康経営を実践している法人を「見える化」することで、従業員や求職者、関係企業や金融機関などから社会的な評価を受けることができる環境を整備することを目的に、日本健康会議が認定する顕彰制度です。",
                issuer: "経済産業省",
                sublabel: "KENKO investment for Health 大規模法人部門",
              },
              {
                title: "経営労務診断実施企業",
                description:
                  "「職場環境改善宣言」を行った上で、「経営労務診断基準」に基づき所定の項目について社労士の確認を受けた企業に全国社会保険労務士会連合会よりマークを付与し、企業情報サイトにマーク情報を掲載できます。",
                issuer: "全国社会保険労務士会連合会",
              },
            ].map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="h-full bg-white rounded-xl shadow-lg p-6 lg:p-8 flex flex-col">
                  {cert.dateRange && (
                    <p className="text-xs text-gray-500 mb-4">{cert.dateRange}</p>
                  )}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-600 text-xl">✓</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{cert.title}</h4>
                      {cert.sublabel && (
                        <p className="text-xs text-red-600 mt-0.5">{cert.sublabel}</p>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed flex-1">
                    {cert.description}
                  </p>
                  <p className="text-xs text-gray-500 mt-4">
                    認定元: {cert.issuer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 企業情報 CTA バナー */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="#company"
              className="mt-12 lg:mt-16 flex items-center justify-between w-full px-6 py-5 bg-red-700 rounded-xl text-white hover:bg-red-600 transition-colors"
            >
              <span className="font-semibold">企業情報はこちら</span>
              <span className="flex items-center gap-1">
                View More
                <span className="text-white/90" aria-hidden>›››</span>
              </span>
            </Link>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
