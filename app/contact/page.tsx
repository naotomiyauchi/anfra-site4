import Header from "@/components/Header";
import DownloadContactSection from "@/components/DownloadContactSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "お問い合わせ | Corporate Site",
  description: "お問い合わせ、資料ダウンロードはこちらから。",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-16 xl:pt-20">
        <DownloadContactSection />
      </main>
      <Footer />
    </>
  );
}
