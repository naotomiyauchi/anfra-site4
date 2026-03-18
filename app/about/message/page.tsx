import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Image from "next/image";

export const metadata = {
  title: "代表メッセージ | 企業情報",
  description: "代表メッセージをご紹介します。",
};

export default function MessagePage() {
  return (
    <>
      <Header />
      <main className="bg-slate-50">
        {/* ヒーローエリア */}
        <section className="relative overflow-hidden pt-20 lg:pt-24 pb-12 lg:pb-16">
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden
          >
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
                {`〈代表メッセージ〉`}
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
                Message
              </h1>
              <p className="text-lg lg:text-xl font-semibold text-red-600 leading-relaxed max-w-2xl">
                この業界の未来を、<br className="hidden lg:block" />
                自分たちの手で切り開いていく。
              </p>
            </div>
          </Container>
        </section>

        {/* 写真＋本文エリア */}
        <section className="pb-20 lg:pb-28 bg-white">
          <Container>
            <div className="max-w-5xl mx-auto">
              <div className="mb-10 lg:mb-12">
                <div className="relative mx-auto h-80 lg:h-96 w-full max-w-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
                  <Image
                    src="/749DD9DD-387C-40B5-B7A1-6488B6F2CC31.JPG"
                    alt="代表写真"
                    fill
                    sizes="100vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              <div className="grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,0.9fr)] items-start">
                <article className="space-y-6 text-sm lg:text-base leading-relaxed text-slate-800">
                  <p>
                    多くの企業が「DXをやらなければならない」と感じています。しかし実際には、ツールを導入しただけで終わってしまったり、現場に定着しなかったりするケースも少なくありません。
                  </p>
                  <p>
                    その理由は、DXが単なるシステムの入れ替えではなく、
                    <span className="font-semibold">
                      会社の考え方や業務の進め方そのものを見直す取り組み
                    </span>
                    だからです。
                  </p>

                  <div className="rounded-xl bg-slate-50 border border-slate-200 px-4 py-4 lg:px-5 lg:py-5 space-y-3">
                    <p className="text-xs font-semibold text-slate-500 tracking-[0.18em] uppercase">
                      Anfra が大切にしていること
                    </p>
                    <ul className="space-y-1.5 text-xs lg:text-sm text-slate-800 mt-1.5">
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500 flex-shrink-0" />
                        <span className="font-semibold">
                          DXが「システム導入」ではなく、会社の考え方や業務の進め方そのものを見直す取り組み
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500 flex-shrink-0" />
                        <span>
                          <span className="font-semibold">
                            お客様の会社が自分たちの力でDXを進められる状態
                          </span>
                          をつくること
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500 flex-shrink-0" />
                        <span>
                          <span className="font-semibold">
                            企業が継続的に成長できる仕組みづくり
                          </span>
                          に最後まで寄り添うこと
                        </span>
                      </li>
                    </ul>
                  </div>

                  <p>
                    私たちは、単にシステムを作る会社ではありません。経営と現場の両方に向き合いながら、業務を丁寧に読み解き、本当に役立つ仕組みを一緒にデザインしていくことを大切にしています。
                  </p>
                  <p>
                    そして最終的な目標は、「Anfra に頼らなくても、自分たちでDXを進め続けられる状態」をつくることです。外部パートナーに依存するのではなく、社内に変革を回し続けるための土台を残すことを目指しています。
                  </p>
                  <p>
                    DXは一度のプロジェクトで終わるものではありません。課題を見つけ、改善し、また次の課題を解決する。このサイクルを日々の業務の中で回し続けていくことが重要です。
                  </p>
                  <p>
                    私たちはその最初の一歩を支え、企業が継続的に成長できる仕組みづくりをお手伝いしていきます。これからも、企業の未来を共に創るパートナーとして、価値を提供し続けてまいります。
                  </p>
                </article>

                <aside className="lg:pl-10 border-t lg:border-t-0 lg:border-l border-slate-200 pt-6 lg:pt-0 lg:mt-0">
                  <div className="space-y-5">
                    <div>
                      <p className="text-xs font-semibold text-slate-500 tracking-[0.18em] uppercase mb-1">
                        Anfra
                      </p>
                      <p className="text-sm font-semibold text-slate-900">
                        Anfra が大切にしていること
                      </p>
                    </div>
                    <div className="text-xs text-slate-600 space-y-1.5">
                      <p>
                        DXが「システム導入」ではなく、会社の考え方や業務の進め方そのものを見直す取り組み
                      </p>
                      <p>
                        お客様の会社が自分たちの力でDXを進められる状態をつくること
                      </p>
                      <p>
                        企業が継続的に成長できる仕組みづくりに最後まで寄り添うこと
                      </p>
                    </div>
                    <div className="pt-4 border-t border-slate-200 mt-4">
                      <p className="text-xs text-slate-500 mb-1">代表</p>
                      <p className="text-sm font-semibold text-slate-900">
                        合同会社Anfra
                      </p>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

