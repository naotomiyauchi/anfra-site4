import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

export const metadata = {
  title: "会社概要 | 企業情報",
  description: "会社概要をご紹介します。",
};

export default function CompanyPage() {
  return (
    <>
      <Header />
      <main className="pt-16 xl:pt-20 py-24">
        <Container>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            会社概要
          </h1>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>（会社概要のコンテンツはこちらに記載します）</p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
