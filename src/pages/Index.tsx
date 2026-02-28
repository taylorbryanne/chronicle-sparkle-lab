import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedArticles from "@/components/FeaturedArticles";
import CategoryShowcase from "@/components/CategoryShowcase";
import TrendingSection from "@/components/TrendingSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedArticles />
        <TrendingSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
