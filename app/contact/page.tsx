import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactPageContent from "@/components/ContactPageContent";

export const metadata = {
  title: "お問い合わせ | Corporate Site",
  description: "お問い合わせはこちらから。",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-16 xl:pt-20">
        <ContactPageContent />
      </main>
      <Footer />
    </>
  );
}
