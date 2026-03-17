import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import MenuSection from "@/components/MenuSection";
import PopularDishes from "@/components/PopularDishes";
import MobileStickyButton from "@/components/MobileStickyButton";

export const metadata = {
  title: "Menu | Fork Restaurant",
  description: "Explore our premium selection of Momos, Smoothies, Desserts, and Coffee.",
};

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <PageHeader 
        title="Check Our Full Menu" 
        subtitle="Handcrafted flavors using the finest ingredients. Fresh, authentic, and delicious." 
      />
      <MenuSection />
      <PopularDishes />
      <Footer />
      <MobileStickyButton />
    </main>
  );
}
