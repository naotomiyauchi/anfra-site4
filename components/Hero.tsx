"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const heroImages = [
  "/01F931B4-BC67-42C1-9780-BCB55BCDA230.JPG",
  "/1B71609F-C570-494E-8F77-6BC4D7035398.JPG",
  "/2BF304E7-6E69-4F67-9681-C707E346DA19.JPG",
  "/590E57AC-AFF9-4942-B6CF-BF5902DDF269.JPG",
  "/749DD9DD-387C-40B5-B7A1-6488B6F2CC31.JPG",
  "/D3E20871-845C-45FA-894B-C8CE5833212F.JPG",
  "/D94CBA56-69B1-4E0A-9471-2BF595B4E1C4.JPG",
  "/FCF0B3E7-8A30-4797-9730-08416339D4B1.JPG",
];

const INTERVAL_MS = 5000;
const FADE_DURATION = 1.2;

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-end lg:items-center pt-20 lg:pt-0 overflow-hidden bg-gray-100"
    >
      {/* メイン画像：ふわっと切り替え */}
      <div className="absolute inset-0">
        {heroImages.map((src, i) => (
          <motion.div
            key={src}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: i === currentIndex ? 1 : 0 }}
            transition={{ duration: FADE_DURATION, ease: "easeInOut" }}
          >
            <Image
              src={src}
              alt="効率化じゃない。変革だ。"
              fill
              className="object-cover object-center"
              priority={i === 0}
              sizes="100vw"
            />
          </motion.div>
        ))}
        {/* 左下を中心に広がる白いモヤ */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 120% 100% at -10% 110%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 30%, rgba(255,255,255,0.4) 55%, transparent 80%)",
          }}
        />
      </div>

      {/* 左下に配置：見出し（やや右上寄りに微調整） */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-10 pb-20 lg:pl-20 lg:pr-20 lg:pb-16">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-8xl font-bold leading-tight tracking-tight drop-shadow-sm">
            <span className="text-gray-700 text-[0.85em]">効率化じゃない。</span>
            <br />
            <span className="text-red-600 text-[1.15em]">変革だ。</span>
          </h1>

          {/* カルーセルインジケーター */}
          <div className="flex gap-2 mt-6">
            {heroImages.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  i === currentIndex ? "bg-red-600" : "bg-gray-400"
                }`}
              />
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
