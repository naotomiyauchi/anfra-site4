"use client";

import Section from "./Section";
import Container from "./Container";
import Card from "./Card";
import { motion } from "framer-motion";

const stats = [
  {
    value: "500+",
    label: "導入企業数",
    description: "様々な業界のお客様にご利用いただいています",
  },
  {
    value: "98%",
    label: "顧客満足度",
    description: "継続率の高さが信頼の証です",
  },
  {
    value: "10年",
    label: "運用年数",
    description: "長年の実績とノウハウで安心サポート",
  },
  {
    value: "24h",
    label: "サポート体制",
    description: "365日体制でお客様をサポート",
  },
];

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function TrustSection() {
  return (
    <Section id="trust" className="py-24 lg:py-32 bg-gray-50">
      <Container>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            数字で見る信頼
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            私たちの実績とお客様との信頼関係をご紹介します。
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              variants={itemVariants}
            >
              <Card className="p-8 lg:p-10 text-center">
                <p className="text-4xl lg:text-5xl font-bold text-indigo-600">
                  {stat.value}
                </p>
                <p className="mt-2 text-lg font-semibold text-gray-900">
                  {stat.label}
                </p>
                <p className="mt-2 text-sm text-gray-600">{stat.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
