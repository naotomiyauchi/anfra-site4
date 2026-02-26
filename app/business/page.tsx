import Header from "@/components/Header";
import BusinessSection from "@/components/BusinessSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "事業内容 | Corporate Site",
  description: "SES事業、Fairgrit、SESコンサルティングなど、私たちの事業をご紹介します。",
};

export default function BusinessPage() {
  return (
    <>
      <Header />
      <main className="pt-16 xl:pt-20">
        <BusinessSection />
      </main>
      <Footer />
    </>
  );
}
