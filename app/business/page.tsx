import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BusinessPageContent from "@/components/BusinessPageContent";

export const metadata = {
  title: "事業内容 | Corporate Site",
  description:
    "DX研修・ワークショップ、業務分析・DX診断、オリジナルDXツール開発など、Anfraの事業内容をご紹介します。",
};

export default function BusinessPage() {
  return (
    <>
      <Header />
      <main className="pt-16 xl:pt-20">
        <BusinessPageContent />
      </main>
      <Footer />
    </>
  );
}
