import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "企業情報 | Corporate Site",
  description: "企業情報、代表メッセージ、ミッション・ビジョンをご紹介します。",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-16 xl:pt-20">
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
