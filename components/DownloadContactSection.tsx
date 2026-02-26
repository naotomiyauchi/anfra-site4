"use client";

import Link from "next/link";
import Section from "./Section";
import { motion } from "framer-motion";

export default function DownloadContactSection() {
  return (
    <Section id="download-contact" className="py-0">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* 左：白 - 資料ダウンロード */}
        <motion.div
          className="flex flex-col justify-center px-8 py-16 lg:py-24 lg:px-16 bg-white"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-500 text-sm mb-2">〈資料ダウンロード〉</p>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Download
          </h2>
          <div className="mt-2 w-12 h-0.5 bg-red-600" />
          <Link
            href="#"
            className="mt-8 inline-flex items-center gap-2 w-fit px-6 py-3 rounded border-2 border-gray-800 text-gray-800 font-semibold hover:bg-gray-900 hover:text-white transition-colors"
          >
            資料ダウンロード
            <span aria-hidden>›</span>
          </Link>
        </motion.div>

        {/* 右：赤 - お問い合わせ */}
        <motion.div
          id="contact"
          className="flex flex-col justify-center px-8 py-16 lg:py-24 lg:px-16 bg-red-600"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-white/80 text-sm mb-2">〈お問い合わせ〉</p>
          <h2 className="text-2xl lg:text-3xl font-bold text-white">
            Contact
          </h2>
          <div className="mt-2 w-12 h-0.5 bg-white" />
          <Link
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 w-fit px-6 py-3 rounded border-2 border-white text-white font-semibold hover:bg-white hover:text-red-600 transition-colors"
          >
            お問い合わせする
            <span aria-hidden>›</span>
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}
