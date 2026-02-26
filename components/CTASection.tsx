"use client";

import Link from "next/link";
import Section from "./Section";
import Container from "./Container";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <Section id="contact" className="py-24 lg:py-40 bg-indigo-600">
      <Container>
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
            お気軽にご相談ください
          </h2>
          <p className="mt-6 text-xl text-indigo-100">
            プロジェクトのご相談、見積もりのお問い合わせ、
            まずはお話からお聞かせください。
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center mt-10 px-10 py-4 rounded-full text-lg font-semibold bg-white text-indigo-600 hover:bg-indigo-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            お問い合わせ
          </Link>
        </motion.div>
      </Container>
    </Section>
  );
}
