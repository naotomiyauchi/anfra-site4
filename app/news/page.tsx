import Header from "@/components/Header";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "お知らせ | Corporate Site",
  description: "最新のお知らせ・ニュースをお届けします。",
};

export default function NewsPage() {
  return (
    <>
      <Header />
      <main className="pt-16 xl:pt-20">
        <NewsSection />
      </main>
      <Footer />
    </>
  );
}
