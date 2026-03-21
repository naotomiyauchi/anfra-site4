import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "会社概要 | 企業情報",
  description: "合同会社Anfraの会社概要・沿革をご紹介します。",
};

const companyInfo = [
  { label: "商号", value: "合同会社Anfra" },
  { label: "Office", value: "福岡市博多区中洲中島町4-9-402" },
  { label: "電話番号", value: "092-409-6294" },
  {
    label: "HP",
    value: (
      <a
        href="https://www.anfr-in.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-600 underline underline-offset-4 hover:text-red-700 transition-colors"
      >
        https://www.anfr-in.com/
      </a>
    ),
  },
  {
    label: "メールアドレス",
    value: (
      <a
        href="mailto:anfra.support-honbu@anfr-in.com"
        className="text-red-600 underline underline-offset-4 hover:text-red-700 transition-colors"
      >
        anfra.support-honbu@anfr-in.com
      </a>
    ),
  },
  { label: "創業", value: "2025年" },
  { label: "法人登記", value: "2025年7月" },
  { label: "取引銀行", value: "三井住友銀行 / 福岡銀行 / 福岡信用金庫" },
  {
    label: "事業内容",
    value: (
      <ul className="space-y-1">
        {[
          "DX・AIコンサル",
          "DX・AIワークショップ",
          "オリジナルDXツール・アプリ開発",
          "AIアプリ開発",
          "その他イベント開催",
          "ホームページ・LP・ECサイト制作",
        ].map((item) => (
          <li key={item} className="flex gap-2 text-slate-700">
            <span className="mt-1.5 h-1 w-1 rounded-full bg-red-500 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
];

const history = [
  {
    date: "2025.07",
    title: "合同会社Anfra設立",
    body: "福岡県福岡市にて法人設立。現場視点でDXを進めるパートナーとして活動を開始。",
  },
  {
    date: "2025.10",
    title: "内製RAG基盤とHPをフルリニューアル",
    body: "社内の知識循環を強化するためのRAGシステムと、パートナー向けコミュニケーション基盤としてのHPを刷新。",
  },
  {
    date: "2025.10",
    title: "営業活動を正式スタート",
    body: "現場伴走型分析、完全オリジナル開発、IT・AI法人研修の3軸で企業の変革を後押し。",
  },
  {
    date: "2025.12",
    title: "DXアドバイザー検定合格",
    body: "経済産業省が推進するDX認定制度に関連する専門知識の習得を証明。現場に立つ伴走者として、より確かな知見とともに支援できる体制を整えた。",
  },
];

export default function CompanyPage() {
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
                {`〈会社概要〉`}
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
                Company
              </h1>
              <p className="text-lg lg:text-xl font-semibold text-red-600 leading-relaxed max-w-2xl">
                福岡を拠点に、<br className="hidden lg:block" />
                企業の変革を現場から支えるパートナー。
              </p>
            </div>
          </Container>
        </section>

        {/* コンテンツエリア */}
        <section className="pb-24 lg:pb-32 bg-white">
          <Container>
            <div className="max-w-3xl mx-auto space-y-20">

              {/* INFORMATION */}
              <FadeIn>
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px flex-1 bg-slate-200" />
                  <p className="text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase">
                    Information
                  </p>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>

                <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                  <table className="w-full">
                    <tbody>
                      {companyInfo.map((row, i) => (
                        <tr
                          key={row.label}
                          className={`border-b border-slate-100 last:border-0 ${
                            i % 2 === 0 ? "bg-white" : "bg-slate-50/60"
                          }`}
                        >
                          <td className="px-6 py-5 text-xs font-semibold text-slate-500 uppercase tracking-wider w-32 lg:w-40 align-top">
                            {row.label}
                          </td>
                          <td className="px-6 py-5 text-sm text-slate-800 leading-relaxed">
                            {row.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </FadeIn>

              {/* HISTORY */}
              <div>
                <FadeIn>
                  <div className="flex items-center gap-3 mb-12">
                    <div className="h-px flex-1 bg-slate-200" />
                    <p className="text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase">
                      History
                    </p>
                    <div className="h-px flex-1 bg-slate-200" />
                  </div>
                </FadeIn>

                <div className="relative">
                  {/* タイムラインの縦線 */}
                  <div className="absolute left-[5.5rem] lg:left-28 top-0 bottom-0 w-px bg-slate-200" />

                  <div className="space-y-10">
                    {history.map((item, i) => (
                      <FadeIn key={item.date + item.title} delay={i * 100}>
                        <div className="flex gap-6 lg:gap-8 relative">
                          {/* 日付 */}
                          <div className="w-20 lg:w-24 flex-shrink-0 text-right">
                            <span className="text-xs font-semibold text-red-600 tracking-wide">
                              {item.date}
                            </span>
                          </div>

                          {/* ドット */}
                          <div className="relative flex-shrink-0">
                            <div className="w-3 h-3 rounded-full bg-red-600 mt-0.5 ring-4 ring-white" />
                          </div>

                          {/* 内容 */}
                          <div className="flex-1 pb-2">
                            <h3 className="text-sm lg:text-base font-bold text-slate-900 mb-1">
                              {item.title}
                            </h3>
                            <p className="text-xs lg:text-sm text-slate-600 leading-relaxed">
                              {item.body}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
