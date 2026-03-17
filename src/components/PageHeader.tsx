"use client";

import { motion } from "framer-motion";

export default function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="pt-40 pb-20 px-6 bg-[#FFF7F3] text-center border-b border-foreground/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl lg:text-7xl font-serif font-bold text-foreground mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg lg:text-xl text-foreground/60 font-medium max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
}
