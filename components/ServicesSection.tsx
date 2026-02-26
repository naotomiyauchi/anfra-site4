"use client";

import Section from "./Section";
import Container from "./Container";
import Card from "./Card";
import { motion } from "framer-motion";

const services = [
  {
    title: "システム開発",
    description:
      "Webアプリケーション、業務システムの設計・開発を一気通貫でサポート。スケーラブルで保守しやすいシステムを構築します。",
    icon: (
      <svg
        className="w-12 h-12 text-indigo-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    title: "クラウド導入",
    description:
      "AWS、Azure、GCPを活用したクラウド設計・構築・運用。コスト最適化とセキュリティを両立したインフラを提供します。",
    icon: (
      <svg
        className="w-12 h-12 text-indigo-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
        />
      </svg>
    ),
  },
  {
    title: "DX支援",
    description:
      "デジタル変革を推進。業務プロセスの分析から、最適なツール導入、人員育成まで、トータルでサポートします。",
    icon: (
      <svg
        className="w-12 h-12 text-indigo-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
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
          className="text-center mb-20"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Services
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
            サービス
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            お客様の課題に合わせた最適なソリューションを提供します。
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-80px" }}
              variants={itemVariants}
            >
              <Card className="p-10 lg:p-12 h-full flex flex-col">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-4 text-gray-600 leading-relaxed flex-grow">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
