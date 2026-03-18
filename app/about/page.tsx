import Header from "@/components/Header";
import AboutPageContent from "@/components/AboutPageContent";
import Footer from "@/components/Footer";

export const metadata = {
  title: "企業情報 | Corporate Site",
  description: "代表メッセージ、ミッション・ビジョン・バリュー、会社概要、沿革をご紹介します。",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-16 xl:pt-20">
        <AboutPageContent />
      </main>
      <Footer />
    </>
  );
}
