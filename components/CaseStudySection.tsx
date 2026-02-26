"use client";

import Image from "next/image";
import Link from "next/link";
import Section from "./Section";
import Container from "./Container";
import { motion } from "framer-motion";

const caseStudies = [
  {
    industry: "製造業",
    title: "生産管理システムのDX推進",
    result: "業務効率 40% 向上",
    image: "/2BF304E7-6E69-4F67-9681-C707E346DA19.JPG",
  },
  {
    industry: "金融・ FinTech",
    title: "顧客基盤システムの刷新",
    result: "運用コスト 30% 削減",
    image: "/590E57AC-AFF9-4942-B6CF-BF5902DDF269.JPG",
  },
  {
    industry: "小売・ EC",
    title: "オムニチャネル基盤構築",
    result: "売上 25% 増加",
    image: "/D3E20871-845C-45FA-894B-C8CE5833212F.JPG",
  },
];

export default function CaseStudySection() {
  return (
    <Section
      id="case-study"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* 背景写真 */}
      <div className="absolute inset-0">
        <Image
          src="/1B71609F-C570-494E-8F77-6BC4D7035398.JPG"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* 黒いモヤオーバーレイ */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "rgba(0, 0, 0, 0.5)",
          }}
        />
      </div>

      <Container className="relative z-10">
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 -mt-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p className="text-red-400 font-semibold text-sm uppercase tracking-widest mb-2">
              Case Study
            </p>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
              導入事例
            </h2>
          </div>
          <Link
            href="#"
            className="text-sm font-semibold text-gray-300 hover:text-white transition-colors flex items-center gap-1"
          >
            事例一覧を見る
            <span aria-hidden>›</span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href="#"
                className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-400"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/90 text-xs font-semibold text-gray-800 backdrop-blur-sm">
                    {item.industry}
                  </span>
                </div>
                <div className="p-6 lg:p-7">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-red-600">
                    {item.result}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
