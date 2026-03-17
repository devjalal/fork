import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import PopularDishes from "@/components/PopularDishes";
import Footer from "@/components/Footer";
import MobileStickyButton from "@/components/MobileStickyButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <MenuSection />
      <PopularDishes />
      <Footer />
      <MobileStickyButton />
    </main>
  );
}
