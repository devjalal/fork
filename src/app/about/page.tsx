import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import MobileStickyButton from "@/components/MobileStickyButton";
import Image from "next/image";

export const metadata = {
  title: "About Us | Fork Restaurant",
  description: "Learn more about Fork's mission to bring premium flavors and modern vibes to you.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <PageHeader 
        title="Our Story" 
        subtitle="Born out of a passion for great food and even better vibes." 
      />
      
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square rounded-[3rem] overflow-hidden premium-shadow">
            <Image 
              src="/images/hero.png" 
              alt="Our Story" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-serif font-bold text-foreground">A unique culinary journey</h2>
            <p className="text-lg text-foreground/60 leading-relaxed font-medium">
              At Fork, we believe that food should be an experience. We combine traditional techniques with modern aesthetics to create dishes that don&apos;t just taste amazing, but look stunning too. 
            </p>
            <p className="text-lg text-foreground/60 leading-relaxed font-medium">
              From our handcrafted momos to our signature smoothies and expertly brewed coffee, every item on our menu is a testament to our commitment to quality and innovation.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <p className="text-4xl font-serif font-bold text-primary mb-2">50+</p>
                <p className="text-sm font-bold text-foreground/40 uppercase tracking-widest">Unique Dishes</p>
              </div>
              <div>
                <p className="text-4xl font-serif font-bold text-primary mb-2">10k+</p>
                <p className="text-sm font-bold text-foreground/40 uppercase tracking-widest">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MobileStickyButton />
    </main>
  );
}
