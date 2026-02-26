import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BusinessSection from "@/components/BusinessSection";
import CaseStudySection from "@/components/CaseStudySection";
import NewsSection from "@/components/NewsSection";
import DownloadContactSection from "@/components/DownloadContactSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <BusinessSection />
        <CaseStudySection />
        <NewsSection />
        <DownloadContactSection />
        <Footer />
      </main>
    </>
  );
}
