"use client";

import { useParams } from "next/navigation";
import { menuData } from "@/data/menuData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import MobileStickyButton from "@/components/MobileStickyButton";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CategoryPage() {
  const params = useParams();
  const categoryId = params.category as string;
  const category = menuData[categoryId];

  if (!category) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="py-32 px-6 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Category Not Found</h1>
          <Link href="/menu" className="text-primary font-bold underline">Back to Menu</Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <PageHeader 
        title={category.name} 
        subtitle={category.description} 
      />
      
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <Link 
          href="/menu" 
          className="inline-flex items-center space-x-2 text-primary font-bold mb-12 hover:translate-x-[-4px] transition-transform"
        >
          <ArrowRight className="rotate-180" size={20} />
          <span>Back to Menu</span>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {category.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="premium-card bg-white group"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center space-x-1 shadow-lg">
                  <Star size={14} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-xs font-bold">{item.rating}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{item.name}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed mb-6 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">{item.price}</span>
                  <button className="bg-foreground text-white p-2 rounded-lg hover:bg-primary transition-colors">
                    <ShoppingBag size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
      <MobileStickyButton />
    </main>
  );
}
