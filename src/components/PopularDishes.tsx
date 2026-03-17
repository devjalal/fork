"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const dishes = [
  {
    name: "Classic Steam Momos",
    description: "Authentic Himalayan steamed dumplings with spicy tomato chutney.",
    image: "/images/momos.png",
    price: "$12.99",
    rating: 4.9,
  },
  {
    name: "Tropical Sunrise Smoothie",
    description: "Fresh mango, pineapple, and coconut milk blend.",
    image: "/images/smoothies.png",
    price: "$8.50",
    rating: 4.8,
  },
  {
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a gooey center and vanilla bean ice cream.",
    image: "/images/desserts.png",
    price: "$10.99",
    rating: 5.0,
  },
];

export default function PopularDishes() {
  return (
    <section className="py-24 px-6 bg-[#FFF7F3]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
              Popular Dishes
            </h2>
            <p className="text-foreground/60 font-medium">Our most loved creations, picked by you.</p>
          </div>
          <button className="hidden md:block text-primary font-bold border-b-2 border-primary pb-1 transition-all hover:pr-2">
            View All
          </button>
        </div>

        {/* Mobile Horizontal Scroll / Desktop Grid */}
        <div className="flex overflow-x-auto pb-8 -mx-6 px-6 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-3 lg:overflow-visible gap-8 snap-x">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="min-w-[300px] lg:min-w-0 snap-center premium-card bg-white p-4"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-6">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center space-x-1 shadow-sm">
                  <Star size={14} className="fill-primary text-primary" />
                  <span className="text-sm font-bold">{dish.rating}</span>
                </div>
              </div>
              <div className="px-2 pb-2">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif font-bold text-foreground">
                    {dish.name}
                  </h3>
                  <span className="text-primary font-bold">{dish.price}</span>
                </div>
                <p className="text-sm text-foreground/60 leading-relaxed mb-6">
                  {dish.description}
                </p>
                {/* <button className="w-full bg-foreground text-white py-3 rounded-xl font-bold transition-transform hover:scale-[1.02] active:scale-95">
                  Add to Cart
                </button> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
