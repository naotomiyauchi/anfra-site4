"use client";

import Image from "next/image";
import Link from "next/link";
import Section from "./Section";
import Container from "./Container";
import { motion } from "framer-motion";

const aboutItems = [
  { id: "message", title: "代表メッセージ", image: "/749DD9DD-387C-40B5-B7A1-6488B6F2CC31.JPG", href: "/about/message" },
  { id: "mission", title: "ミッション・ビジョン・バリュー", image: "/1B71609F-C570-494E-8F77-6BC4D7035398.JPG", href: "/about/mission" },
  { id: "company", title: "会社概要", image: "/2BF304E7-6E69-4F67-9681-C707E346DA19.JPG", href: "/about/company" },
];

export default function AboutPageContent() {
  return (
    <Section
      id="about"
      className="relative py-24 lg:py-32 overflow-hidden bg-white"
    >
      {/* 右上：赤い斜めオーバーレイ */}
      <div
        className="absolute top-0 right-0 w-1/2 lg:w-2/5 h-96 pointer-events-none"
        aria-hidden
      >
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(185, 28, 28, 0.95) 0%, rgba(153, 27, 27, 0.9) 100%)",
            clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0 100%)",
          }}
        />
      </div>

      <Container className="relative z-10">
        <motion.div
          className="mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-400 text-sm mb-2">{`企業情報`}</p>
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900">
            Company
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {aboutItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={item.href}
                className="group block w-full text-left bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-4 lg:p-5 flex items-center justify-between">
                  <h2 className="text-sm lg:text-base font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h2>
                  <span
                    className="flex-shrink-0 w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center group-hover:bg-red-500 transition-colors"
                    aria-hidden
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
