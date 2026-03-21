"use client";

import Link from "next/link";
import Section from "./Section";
import Container from "./Container";
import { motion } from "framer-motion";

const newsItems = [
  { date: "2026-01-01", category: "お知らせ", title: "顧問弁護士変更のお知らせ", featured: false },
  { date: "2025-12-25", category: "お知らせ", title: "SESコンサルティング リニューアルのお知らせ", featured: true },
  { date: "2025-12-20", category: "お知らせ", title: "年末年始休業のお知らせ（2025年～2026年）", featured: false },
  { date: "2025-12-01", category: "お知らせ", title: "人事異動のお知らせ", featured: false },
  { date: "2025-11-25", category: "お知らせ", title: "コーポレートサイトリニューアルのお知らせ", featured: false },
];

export default function NewsSection() {
  return (
    <Section id="news" className="py-0">
      <div
        className="relative py-24 lg:py-32 overflow-hidden bg-slate-100"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #e2e8f0 0%, #f1f5f9 40%, #fecaca 100%), radial-gradient(circle at 10% 90%, rgba(220,38,38,0.12) 0%, transparent 45%)",
        }}
      >
        {/* 装飾：ドットグリッド */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.12) 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        />
        <Container className="relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row gap-12 lg:gap-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="lg:w-48 flex-shrink-0">
            <p className="text-gray-500 text-sm mb-2">【お知らせ】</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
              News
            </h2>
            <div className="mt-2 w-12 h-0.5 bg-red-600" />
            <Link
              href="#"
              className="mt-6 inline-flex items-center gap-2 group"
            >
              <span className="text-sm font-semibold text-gray-700 group-hover:text-red-600 transition-colors">
                お知らせ一覧へ
              </span>
              <span className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center flex-shrink-0 group-hover:bg-red-500 transition-colors">
                <span aria-hidden>›</span>
              </span>
            </Link>
          </div>
          <div className="flex-1 bg-white rounded-xl shadow-sm overflow-hidden">
            <ul className="divide-y divide-gray-400">
              {newsItems.map((item, i) => (
                <motion.li
                  key={`${item.date}-${item.title}`}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Link
                    href="#"
                    className="group flex items-center gap-4 px-6 py-4 bg-white hover:bg-red-600 transition-colors"
                  >
                    <span className="text-sm flex-shrink-0 text-gray-500 group-hover:text-white/90">
                      {item.date}
                    </span>
                    <span className="px-2.5 py-0.5 rounded text-xs font-semibold flex-shrink-0 bg-red-100 text-red-700 group-hover:bg-white/20 group-hover:text-white">
                      {item.category}
                    </span>
                    <span className="flex-1 font-medium text-gray-900 group-hover:text-white">
                      {item.title}
                    </span>
                    <span className="flex-shrink-0 text-gray-400 group-hover:text-white/80">
                      ›
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
        </Container>
      </div>
    </Section>
  );
}
