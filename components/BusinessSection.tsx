"use client";

import Image from "next/image";
import Link from "next/link";
import Section from "./Section";
import Container from "./Container";
import { motion } from "framer-motion";

const businessItems = [
  {
    number: "01",
    title: "DX研修・ワークショップ",
    subtitle: "組織変革プログラム",
    lead: "DXを推進できる組織を構築します",
    description: "実践型ワークショップを通じて、現場と経営が業務課題を構造的に理解し、自ら改善できる状態を構築します。",
  },
  {
    number: "02",
    title: "業務分析・DX診断",
    subtitle: "業務構造分析",
    lead: "業務の構造を可視化し、本質的な課題を特定します",
    description: "現場ヒアリングと業務分析により、業務・判断・情報の流れを整理し、DXの成功に必要な改善ポイントを明確にします。",
  },
  {
    number: "03",
    title: "オリジナルDXツール開発",
    subtitle: "専用システム開発",
    lead: "貴社の業務に完全最適化されたDXツールを開発します",
    description: "業務分析とワークショップで明らかになった課題をもとに、現場で実際に使われ、定着する専用DXツールを設計・開発します。",
  },
];

export default function BusinessSection() {
  return (
    <Section
      id="business"
      className="relative py-24 lg:py-32 overflow-hidden bg-white"
    >
      {/* 右側の薄いグレー斜めグラデーション */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, transparent 45%, rgba(248, 250, 252, 0.9) 55%, rgba(241, 245, 249, 0.95) 100%)",
        }}
        aria-hidden
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* 左：コンテンツ */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-400 text-sm mb-2">{`{サービス}`}</p>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Our
                <br />
                Service
              </h2>
            </motion.div>

            <div className="mt-10 space-y-10">
              {businessItems.map((item, i) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-red-600 text-white text-sm font-semibold mb-3">
                    {item.number}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-0.5">
                    （{item.subtitle}）
                  </p>
                  <p className="text-gray-800 font-semibold mt-3">
                    {item.lead}
                  </p>
                  <p className="text-gray-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded border-2 border-gray-800 text-gray-800 font-semibold hover:bg-gray-800 hover:text-white transition-colors"
                  >
                    詳しく見る
                    <span aria-hidden>›</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 右：画像 */}
          <motion.div
            className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[500px] rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/749DD9DD-387C-40B5-B7A1-6488B6F2CC31.JPG"
              alt="DX研修・ワークショップ"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
