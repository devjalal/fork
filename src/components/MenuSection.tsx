"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  {
    id: "momos",
    name: "Momos",
    image: "/images/momos.png",
    count: "12 Items",
    color: "bg-orange-50",
  },
  {
    id: "smoothies",
    name: "Smoothies",
    image: "/images/smoothies.png",
    count: "08 Items",
    color: "bg-blue-50",
  },
  {
    id: "desserts",
    name: "Desserts",
    image: "/images/desserts.png",
    count: "15 Items",
    color: "bg-pink-50",
  },
  {
    id: "coffee",
    name: "Coffee",
    image: "/images/coffee.png",
    count: "10 Items",
    color: "bg-yellow-50",
  },
];

export default function MenuSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4"
          >
            Explore Our Menu
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="h-1 bg-primary mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {categories.map((category, index) => (
            <Link key={category.id} href={`/menu/${category.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="premium-card group cursor-pointer h-full"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm font-medium text-foreground/40">{category.count}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
