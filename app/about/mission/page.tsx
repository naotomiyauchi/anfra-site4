import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "ミッション・ビジョン・バリュー | 企業情報",
  description: "Anfraのミッション・ビジョン・バリューをご紹介します。",
};

const values = [
  {
    num: "01",
    title: "業務が先、システムは後",
    items: [
      "要件定義は机上ではなく現場から始める",
      "整理できないものは実装しない",
    ],
  },
  {
    num: "02",
    title: "既存ツールの導入だけはしない",
    items: [
      "RPA・SaaSは部品",
      "主役は業務オペレーション",
    ],
  },
  {
    num: "03",
    title: "顧客ごとの正解を尊重する",
    items: [
      "テンプレートに当てはめない",
      "既存システム・ツール・業務フローを尊重する",
      "業務の癖・例外を前提に設計する",
    ],
  },
  {
    num: "04",
    title: "無理な案件はやらない",
    items: [
      "「全部作り直す」DXをしない",
      "今の運用がベストという選択肢を持つ",
    ],
  },
  {
    num: "05",
    title: "信頼の積み重ね",
    items: [
      "技術力だけでなく、説明責任・誠実さを重視",
      "中小企業の「相談相手」であり続ける",
    ],
  },
];

export default function MissionPage() {
  return (
    <>
      <Header />
      <main className="bg-slate-50">
        {/* ヒーロー */}
        <section className="relative overflow-hidden pt-20 lg:pt-24 pb-12 lg:pb-16">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute inset-0 bg-slate-50" />
            <div
              className="absolute -top-32 right-0 w-[70%] h-64 lg:h-80"
              style={{
                background:
                  "linear-gradient(135deg, rgba(220,38,38,0.96), rgba(190,24,24,0.98))",
                clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0 100%)",
              }}
            />
          </div>
          <Container>
            <div className="relative z-10 max-w-5xl mx-auto">
              <p className="text-xs lg:text-sm font-medium text-slate-600 mb-2">
                {`〈ミッション・ビジョン・バリュー〉`}
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
                Mission / Vision / Value
              </h1>
              <p className="text-lg lg:text-xl font-semibold text-red-600 leading-relaxed max-w-2xl">
                現場に根ざし、<br className="hidden lg:block" />
                中小企業の変革を構造から支える。
              </p>
            </div>
          </Container>
        </section>

        {/* Mission */}
        <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden
            style={{
              background: "linear-gradient(135deg, transparent 45%, rgba(248,250,252,0.9) 55%, rgba(241,245,249,0.95) 100%)",
            }}
          />
          <div className="absolute bottom-6 right-10 lg:bottom-10 lg:right-16 pointer-events-none select-none" aria-hidden>
            <p className="text-6xl lg:text-8xl font-bold text-slate-100 tracking-widest">MISSION</p>
          </div>

          <Container className="relative z-10">
            <FadeIn direction="left">
              <p className="text-red-600 text-xs font-semibold uppercase tracking-widest mb-3">01 — Mission</p>
              <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 leading-tight mb-8">
                存在意義
              </h2>
            </FadeIn>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <FadeIn direction="left">
                <div className="bg-gray-900 rounded-2xl p-8 lg:p-10">
                  <p className="text-xl lg:text-2xl font-bold text-white leading-relaxed">
                    現場に根ざしたDXとAI活用により、<br />
                    中小企業の「非効率」を<br />構造から解消する。
                  </p>
                </div>
              </FadeIn>

              <FadeIn direction="right">
                <ul className="space-y-5">
                  {[
                    { label: "一気通貫の支援", desc: "多くの中小企業に残るアナログ業務を、単なるツール導入ではなく「業務実態の理解 → 最適化 → システム化」まで一気通貫で支援する" },
                    { label: "持続的成長への貢献", desc: "生産性向上とコスト削減を通じ、企業の持続的成長に貢献する" },
                  ].map((item, i) => (
                    <li key={item.label} className="flex gap-4 items-start">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-0.5">{item.label}</p>
                        <p className="text-sm lg:text-base text-slate-700 leading-relaxed">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* Vision */}
        <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden
            style={{
              background: "linear-gradient(135deg, transparent 45%, rgba(248,250,252,0.9) 55%, rgba(241,245,249,0.95) 100%)",
            }}
          />
          <div className="absolute bottom-6 left-10 lg:bottom-10 lg:left-16 pointer-events-none select-none" aria-hidden>
            <p className="text-6xl lg:text-8xl font-bold text-slate-100 tracking-widest">VISION</p>
          </div>

          <Container className="relative z-10">
            <FadeIn direction="right">
              <p className="text-red-600 text-xs font-semibold uppercase tracking-widest mb-3">02 — Vision</p>
              <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 leading-tight mb-8">
                目指す姿
              </h2>
            </FadeIn>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <FadeIn direction="left">
                <div className="bg-gray-900 rounded-2xl p-8 lg:p-10">
                  <p className="text-xl lg:text-2xl font-bold text-white leading-relaxed">
                    「業務が複雑になったら、<br />
                    まずAnfraに相談する」
                  </p>
                  <p className="mt-3 text-white/60 text-sm lg:text-base">
                    そんなポジションを確立する
                  </p>
                </div>
              </FadeIn>

              <FadeIn direction="right">
                <ul className="space-y-5">
                  {[
                    { label: "独自のポジション", desc: "SaaSでもRPAでもない選択肢として認知される" },
                    { label: "翻訳者としての信頼", desc: "業務×システムの翻訳者として信頼される" },
                    { label: "業務設計パートナー", desc: "受託開発会社ではなく「業務設計パートナー」" },
                  ].map((item, i) => (
                    <li key={item.label} className="flex gap-4 items-start">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-0.5">{item.label}</p>
                        <p className="text-sm lg:text-base text-slate-700 leading-relaxed">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* Value */}
        <section className="relative bg-slate-50 py-20 lg:py-28 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
            aria-hidden
          />

          <Container className="relative z-10">
            <FadeIn>
              <p className="text-red-600 text-xs font-semibold uppercase tracking-widest mb-3">03 — Value</p>
              <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
                行動指針
              </h2>
              <p className="text-slate-500 text-sm lg:text-base mb-12 max-w-xl">
                Anfraが日々の判断・行動において大切にしている5つの指針。
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {values.map((v, i) => (
                <FadeIn key={v.num} delay={i * 80}>
                  <div className={`group relative rounded-2xl overflow-hidden h-full ${
                    i === 4 ? "md:col-span-2 lg:col-span-1" : ""
                  }`}>
                    {/* 背景 */}
                    <div className="absolute inset-0 bg-white border border-slate-200 rounded-2xl group-hover:border-red-200 transition-colors duration-300" />
                    {/* 左上のアクセントライン */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative p-6 lg:p-7">
                      <div className="flex items-start justify-between mb-4">
                        <span className="text-4xl lg:text-5xl font-bold text-slate-100 leading-none select-none">
                          {v.num}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
                      </div>
                      <h3 className="text-base lg:text-lg font-bold text-slate-900 mb-4 leading-snug">
                        {v.title}
                      </h3>
                      <ul className="space-y-2 border-t border-slate-100 pt-4">
                        {v.items.map((item) => (
                          <li key={item} className="flex gap-2 text-xs lg:text-sm text-slate-600 leading-relaxed">
                            <span className="mt-1.5 h-1 w-1 rounded-full bg-red-400 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
