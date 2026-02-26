"use client";

import Link from "next/link";
import Section from "./Section";
import Container from "./Container";
import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "DX研修・ワークショップ",
    subtitle: "組織変革プログラム",
    lead: "DXを推進できる組織を構築します",
    description:
      "実践型ワークショップを通じて、現場と経営が業務課題を構造的に理解し、自ら改善できる状態を構築します。",
    href: "#",
  },
  {
    number: "02",
    title: "業務分析・DX診断",
    subtitle: "業務構造分析",
    lead: "業務の構造を可視化し、本質的な課題を特定します",
    description:
      "現場ヒアリングと業務分析により、業務・判断・情報の流れを整理し、DXの成功に必要な改善ポイントを明確にします。",
    href: "#",
  },
  {
    number: "03",
    title: "オリジナルDXツール開発",
    subtitle: "専用システム開発",
    lead: "貴社の業務に完全最適化されたDXツールを開発します",
    description:
      "業務分析とワークショップで明らかになった課題をもとに、現場で実際に使われ、定着する専用DXツールを設計・開発します。",
    href: "#",
  },
];

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

export default function ServicesSection() {
  return (
    <Section id="services" className="py-24 lg:py-40 bg-white">
      <Container>
        <motion.div
          className="mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-2">
            Our Service
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
            サービス
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              custom={i}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-80px" }}
              variants={itemVariants}
            >
              <div className="h-full bg-white rounded-2xl border border-gray-200 p-8 lg:p-10 flex flex-col shadow-sm hover:shadow-md transition-shadow">
                <span className="inline-block px-3 py-1 rounded-full bg-red-600 text-white text-sm font-bold mb-6 w-fit">
                  {service.number}
                </span>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  （{service.subtitle}）
                </p>
                <p className="mt-4 text-base font-semibold text-gray-800">
                  {service.lead}
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed flex-1">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded border-2 border-gray-800 text-gray-800 font-semibold hover:bg-gray-800 hover:text-white transition-colors w-fit"
                >
                  詳しく見る
                  <span aria-hidden>›</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
