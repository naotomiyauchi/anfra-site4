"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

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

type SlotItem = { src: string; key: number; fading: boolean };

export default function Hero() {
  const [slots, setSlots] = useState<SlotItem[]>([
    { src: heroImages[0], key: 0, fading: false },
  ]);
  const indexRef = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % heroImages.length;
      const nextSrc = heroImages[indexRef.current];
      const nextKey = indexRef.current;

      setSlots((prev) => [
        ...prev.map((s) => ({ ...s, fading: true })),
        { src: nextSrc, key: nextKey, fading: false },
      ]);

      setTimeout(() => {
        setSlots([{ src: nextSrc, key: nextKey, fading: false }]);
      }, 1300);
    }, INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  const currentIndex = indexRef.current;

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-end lg:items-center pt-20 lg:pt-0 overflow-hidden bg-gray-100"
    >
      {/* 画像：現在の1〜2枚のみDOMに存在 */}
      <div className="absolute inset-0">
        {slots.map(({ src, key, fading }) => (
          <div
            key={key}
            className={`absolute inset-0 ${fading ? "" : "hero-image-enter"}`}
            style={fading ? { opacity: 0, transition: "opacity 1.2s ease-in-out" } : undefined}
          >
            <Image
              src={src}
              alt="効率化じゃない。変革だ。"
              fill
              className="object-cover object-center"
              priority={key === 0}
              sizes="100vw"
            />
          </div>
        ))}
        {/* 左下を中心に広がる白いモヤ */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 120% 100% at -10% 110%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 30%, rgba(255,255,255,0.4) 55%, transparent 80%)",
          }}
        />
      </div>

      {/* 左下に配置：見出し */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-10 pb-20 lg:pl-20 lg:pr-20 lg:pb-16">
        <div className="max-w-2xl hero-heading-enter">
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
        </div>
      </div>
    </section>
  );
}
