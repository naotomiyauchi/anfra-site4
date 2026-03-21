import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "プライバシーポリシー | 合同会社Anfra",
  description: "合同会社Anfraの個人情報の取り扱いに関するプライバシーポリシーです。",
};

const sections = [
  {
    title: "第1条　個人情報の定義",
    body: `本プライバシーポリシーにおける「個人情報」とは、個人情報の保護に関する法律（以下「個人情報保護法」）に定める個人情報、すなわち、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの（他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものを含む）を指します。`,
  },
  {
    title: "第2条　個人情報の取得",
    body: `当社は、以下の場合に個人情報を取得することがあります。

・お問い合わせフォームからのご連絡の際（氏名、会社名、メールアドレス、電話番号、お問い合わせ内容 等）
・サービス提供・業務委託契約の締結および履行の際（担当者氏名、所属・役職、連絡先 等）
・セミナー・ワークショップへのお申し込みの際（氏名、会社名、連絡先 等）
・当社ウェブサイトへのアクセスの際（IPアドレス、Cookieによるアクセス情報 等）

当社は、不正・不法な手段によって個人情報を取得しません。`,
  },
  {
    title: "第3条　個人情報の利用目的",
    body: `当社が取得した個人情報は、以下の目的の範囲内でのみ利用します。

・お問い合わせ・ご相談へのご回答およびご連絡
・DX支援・AIコンサルティング・システム開発等のサービス提供
・業務委託契約の締結・管理・履行
・セミナー・ワークショップ・イベントの運営および案内
・請求書・見積書等の書類の作成・送付
・当社サービスに関するご案内・情報提供（ご同意をいただいた場合）
・法令上の義務の履行
・上記に付随する業務

取得した個人情報は、上記目的の達成に必要な範囲を超えて利用しません。`,
  },
  {
    title: "第4条　個人情報の第三者提供",
    body: `当社は、以下のいずれかに該当する場合を除き、ご本人の同意を得ることなく個人情報を第三者に提供しません。

・法令に基づく場合
・人の生命、身体または財産の保護のために必要がある場合であって、ご本人の同意を得ることが困難な場合
・国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、ご本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがある場合
・業務の遂行に必要な範囲で業務委託先に個人情報を提供する場合（この場合、当社は委託先に対して適切な監督を行います）`,
  },
  {
    title: "第5条　個人情報の管理・安全対策",
    body: `当社は、個人情報の紛失・破壊・改ざん・漏洩等を防止するため、以下の安全管理措置を講じます。

・個人情報へのアクセスを業務上必要な担当者に限定する
・個人情報を取り扱う機器・システムへの不正アクセス防止対策を実施する
・個人情報を書類で管理する場合は、施錠可能な場所に保管し、不要になった場合は速やかに廃棄する
・従業員に対して個人情報保護に関する教育・啓発を定期的に実施する`,
  },
  {
    title: "第6条　個人情報の保存期間",
    body: `当社は、個人情報の利用目的を達成した後は、関連する法令に定める保存期間または業務上必要な期間を経過した後、速やかに当該個人情報を削除または匿名化します。`,
  },
  {
    title: "第7条　個人情報の開示・訂正・削除等のご請求",
    body: `ご本人またはその代理人（以下「ご本人等」）からの個人情報の開示・訂正・追加・削除・利用停止・消去・第三者提供の停止のご請求（以下「開示等のご請求」）には、個人情報保護法の定めに従い、誠実に対応します。

開示等のご請求を行う場合は、下記お問い合わせ窓口までご連絡ください。本人確認のための書類のご提示をお願いする場合があります。なお、法令上開示等に応じられない場合や、開示等のご請求に対応するために過大な費用を要する場合は、その理由を説明した上でご請求に応じない場合があります。`,
  },
  {
    title: "第8条　Cookieおよびアクセス解析ツールの利用",
    body: `当社ウェブサイトでは、サービス向上およびアクセス状況の分析を目的として、Cookieおよびアクセス解析ツールを使用することがあります。これらのツールが収集する情報には、特定の個人を識別できる情報は含まれません。

ブラウザの設定によりCookieの受け入れを拒否することができますが、一部のサービスが正常に機能しない場合があります。`,
  },
  {
    title: "第9条　未成年者の個人情報",
    body: `当社は、16歳未満の方の個人情報を取得する場合には、保護者の同意を得た上で取得します。`,
  },
  {
    title: "第10条　プライバシーポリシーの変更",
    body: `当社は、法令の改正や事業内容の変更等に応じて、本プライバシーポリシーを予告なく変更する場合があります。変更後のプライバシーポリシーは、当社ウェブサイトに掲載した時点から効力を生じるものとします。重要な変更を行う場合は、ウェブサイト上でお知らせします。`,
  },
  {
    title: "第11条　お問い合わせ窓口",
    body: `個人情報の取り扱いに関するご質問・ご相談・開示等のご請求は、以下の窓口までお申し付けください。

　会社名：合同会社Anfra
　住　所：福岡市博多区中洲中島町4-9-402
　電　話：092-409-6294
　メール：anfra.support-honbu@anfr-in.com
　受付時間：平日 10:00〜18:00（土日祝・年末年始を除く）`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-slate-50">
        {/* ヒーロー */}
        <section className="relative overflow-hidden pt-28 lg:pt-36 pb-16 lg:pb-24">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute inset-0 bg-slate-50" />
            <div
              className="absolute -top-32 right-0 w-[70%] h-44 lg:h-52"
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
                {`〈プライバシーポリシー〉`}
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
                Privacy Policy
              </h1>
              <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
                合同会社Anfra（以下「当社」）は、お客様の個人情報の保護を重要な責務と認識し、
                個人情報の保護に関する法律およびその他の関連法令を遵守します。
              </p>
            </div>
          </Container>
        </section>

        {/* 本文 */}
        <section className="pb-24 lg:pb-32 bg-white">
          <Container>
            <div className="max-w-3xl mx-auto">

              {/* 制定日 */}
              <FadeIn>
                <div className="flex justify-end mb-10 pt-2">
                  <p className="text-xs text-slate-400">制定日：2025年7月1日</p>
                </div>
              </FadeIn>

              {/* 条文 */}
              <div className="space-y-10">
                {sections.map((section, i) => (
                  <FadeIn key={section.title} delay={i * 40}>
                    <div className="border-b border-slate-100 pb-10 last:border-0">
                      <h2 className="text-base lg:text-lg font-bold text-slate-900 mb-4 flex items-start gap-3">
                        <span className="flex-shrink-0 mt-0.5 w-1 h-5 rounded-full bg-red-600" />
                        {section.title}
                      </h2>
                      <div className="pl-4 text-sm lg:text-base text-slate-700 leading-loose whitespace-pre-line">
                        {section.body}
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>

              {/* 署名 */}
              <FadeIn>
                <div className="mt-12 pt-8 border-t border-slate-200 text-right">
                  <p className="text-sm text-slate-500">以上</p>
                  <p className="mt-4 text-sm font-semibold text-slate-800">合同会社Anfra</p>
                  <p className="text-xs text-slate-500 mt-1">代表社員</p>
                </div>
              </FadeIn>

            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
