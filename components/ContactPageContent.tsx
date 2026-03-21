"use client";

import { useState, FormEvent } from "react";
import Section from "./Section";
import Container from "./Container";
import FadeIn from "./FadeIn";

export default function ContactPageContent() {
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSending) return;

    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    setIsSending(true);
    setSubmitted(false);
    const payload = {
      company: formData.get("company")?.toString() ?? "",
      name: formData.get("name")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
      subject: formData.get("subject")?.toString() ?? "",
      message: formData.get("message")?.toString() ?? "",
    };

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setSubmitted(true);
      formEl.reset();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Section id="contact" className="py-20 lg:py-28 bg-white">
      <Container>
        <FadeIn className="grid gap-12 lg:grid-cols-2 items-start">
          {/* 左カラム：テキスト */}
          <div>
            <p className="text-sm font-medium text-red-600 mb-2">{`〈お問い合わせ〉`}</p>
            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              まずは、今のお困りごとから
            </h1>
            <p className="text-sm lg:text-base leading-relaxed text-slate-700 mb-8 max-w-xl">
              DX 推進や業務改善、研修・ワークショップ、その他のご相談まで、
              小さな違和感レベルからでも歓迎です。1〜2 営業日以内を目安に、
              担当よりご連絡させていただきます。
            </p>

            <div className="space-y-6 text-sm text-slate-800">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase mb-2">
                  Mail
                </p>
                <p className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-slate-200 bg-slate-50">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-red-600 text-white text-xs font-semibold">
                    @
                  </span>
                  <a
                    href="mailto:anfra.support-honbu@anfr-in.com"
                    className="font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-red-500 transition-colors"
                  >
                    anfra.support-honbu@anfr-in.com
                  </a>
                </p>
                <p className="mt-2 text-xs text-slate-500">
                  ※ 実際の運用では、必要に応じて別の窓口アドレスへ変更してご利用ください。
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 pt-4 border-t border-slate-200">
                <div>
                  <p className="text-xs font-semibold text-slate-500 mb-1">
                    よくあるご相談
                  </p>
                  <ul className="space-y-1 text-xs leading-relaxed text-slate-700">
                    <li>・ DX の進め方を相談したい</li>
                    <li>・ 研修・ワークショップの企画相談</li>
                    <li>・ 新規事業・サービス立ち上げ</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 mb-1">
                    ご返信の目安
                  </p>
                  <p className="text-xs leading-relaxed text-slate-700">
                    平日 10:00〜18:00 のお問い合わせには、
                    原則として 1〜2 営業日以内にご返信いたします。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 右カラム：フォーム */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm px-5 py-6 lg:px-7 lg:py-7">
            <h2 className="text-base lg:text-lg font-semibold text-slate-900 mb-2.5">
              お問い合わせフォーム
            </h2>
            <p className="text-xs lg:text-sm text-slate-500 mb-5">
              下記の項目をご入力のうえ送信してください。内容を確認のうえ、
              担当よりご連絡いたします。
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                    貴社名
                  </label>
                  <input
                    name="company"
                    type="text"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="株式会社サンプル"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                    ご担当者名
                  </label>
                  <input
                    name="name"
                    type="text"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="山田 太郎"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                  メールアドレス
                </label>
                <input
                  name="email"
                  type="email"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="example@company.jp"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                  件名
                </label>
                <input
                  name="subject"
                  type="text"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="DX 推進に関するご相談 など"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                  お問い合わせ内容
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-none"
                  placeholder="ご相談の背景や、現在お困りのことについてご自由にご記入ください。"
                />
              </div>

              <div className="flex items-start gap-2 text-[11px] text-slate-500 leading-relaxed">
                <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded border border-slate-300 text-[9px] text-slate-400">
                  i
                </span>
                <p>
                  送信ボタンを押すことで、当社のプライバシーポリシーに同意したものとみなします。
                  個人情報は、お問い合わせ対応以外の目的では使用いたしません。
                </p>
              </div>

              <button
                type="submit"
                className="mt-1 inline-flex w-full items-center justify-center rounded-lg bg-red-600 px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 focus-visible:ring-offset-white disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={isSending}
              >
                {isSending ? "送信中..." : "送信する"}
              </button>

              {submitted && (
                <p className="text-[11px] text-center text-slate-500 mt-1.5">
                  送信を受け付けました。追って担当よりご連絡いたします。
                </p>
              )}
            </form>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
