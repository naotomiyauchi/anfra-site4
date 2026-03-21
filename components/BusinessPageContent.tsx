import Section from "./Section";
import Container from "./Container";
import Link from "next/link";
import FadeIn from "./FadeIn";

const services = [
  {
    id: "01",
    label: "DX研修・ワークショップ",
    description:
      "現場と経営が同じテーブルにつき、業務の棚卸しから課題整理、アクション設計までを一気通貫で行う実践型プログラムです。",
    points: [
      "オンライン / オフラインいずれも対応",
      "1 回の研修だけで終わらないフォロー設計",
      "現場の言葉で議論できるファシリテーション",
    ],
  },
  {
    id: "02",
    label: "業務分析・DX診断",
    description:
      "ヒアリングと業務フロー整理を通じて、データ・業務・組織構造を可視化し、DXの本当の出発点を明らかにします。",
    points: [
      "As-Is / To-Be の業務フロー整理",
      "ボトルネックとリスクポイントの可視化",
      "優先順位付きの改善テーマをご提案",
    ],
  },
  {
    id: "03",
    label: "オリジナルDXツール開発",
    description:
      "既存ツールでは届かない\u201cあと一歩\u201dを埋める、現場業務にフィットした専用ツールを設計・開発します。",
    points: [
      "業務要件から一緒にすり合わせ",
      "小さく作って育てるアジャイル開発",
      "運用・定着フェーズまで伴走支援",
    ],
  },
];

export default function BusinessPageContent() {
  return (
    <Section id="business" className="py-20 lg:py-28 bg-white">
      <Container>
        <FadeIn className="max-w-3xl mb-12 lg:mb-16">
          <p className="text-sm font-medium text-red-600 mb-2">{`{事業内容}`}</p>
          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 mb-3">
            Business
          </h1>
          <p className="text-sm lg:text-base leading-relaxed text-slate-700">
            Anfra は、組織が自走して変革し続けるための「人・業務・ツール」の 3 つの
            レイヤーから、DX 推進を支援しています。
          </p>
        </FadeIn>

        <div className="grid gap-6 lg:gap-8">
          {services.map((service, index) => (
            <FadeIn
              key={service.id}
              as="section"
              className="rounded-2xl border border-slate-200 bg-slate-50/80 px-5 py-6 lg:px-7 lg:py-7"
              delay={index * 60}
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-white text-sm font-semibold">
                  {service.id}
                </span>
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg lg:text-xl font-semibold text-slate-900 mb-1">
                    {service.label}
                  </h2>
                  <p className="text-xs lg:text-sm text-slate-700 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-1.5 text-[11px] lg:text-xs text-slate-700">
                    {service.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="mt-1 h-1 w-1 rounded-full bg-red-500 flex-shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6" delay={200}>
          <p className="text-xs lg:text-sm text-slate-600">
            「どれに当てはまるか分からない」という段階でも、お気軽にご相談ください。
          </p>
          <Link
            href="/contact#contact"
            className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-red-700 transition-colors"
          >
            お問い合わせへ
            <span aria-hidden>›</span>
          </Link>
        </FadeIn>
      </Container>
    </Section>
  );
}
