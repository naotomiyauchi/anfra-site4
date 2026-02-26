"use client";

import Image from "next/image";
import Link from "next/link";
import Section from "./Section";
import Container from "./Container";
import { motion } from "framer-motion";

const businessItems = [
  {
    number: "01",
    title: "SES事業",
    subtitle: "システムエンジニアリングサービス",
    description: "お客様のご要望にマッチしたエキスパートをご提案します",
  },
  {
    number: "02",
    title: "SES特化型SaaS「Fairgrit」",
    subtitle: "SES業務支援ツール",
    description: "SES業務を劇的に効率化させる業務支援ツール",
  },
  {
    number: "03",
    title: "SESコンサルティング",
    subtitle: "経営支援",
    description: "制度設計や組織づくりなど、SESビジネスの立ち上げ・改善をトータルで支援します",
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
              <p className="text-gray-400 text-sm mb-2">{`{事業内容}`}</p>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Our
                <br />
                Business
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
                  <p className="text-gray-700 mt-3 leading-relaxed">
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
              alt="SES事業 - チームでの協業"
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
