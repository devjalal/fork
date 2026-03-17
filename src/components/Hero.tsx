"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const fullText = "Where vibe matches your cravings ✨";
  const [displayText, setDisplayText] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let currentIdx = 0;
    const interval = setInterval(() => {
      if (currentIdx <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIdx));
        currentIdx++;
      } else {
        clearInterval(interval);
        setTimeout(() => setIsDone(true), 1000); // 1s delay before removing cursor for a cleaner finish
      }
    }, 50); // Speed of typing

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10 text-center lg:text-left"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
          >
            Best Food Experience
          </motion.span>
          <h1 className="text-5xl lg:text-7xl font-serif font-bold text-foreground leading-[1.1] mb-6 min-h-[2.2em] lg:min-h-[3.3em]">
            {displayText}
            {!isDone && (
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="inline-block w-[4px] h-[0.9em] bg-primary ml-1 translate-y-[0.1em]"
              />
            )}
          </h1>
          <p className="text-lg lg:text-xl text-foreground/60 font-medium mb-10 max-w-xl mx-auto lg:mx-0">
            Momos | Smoothies | Desserts | Coffee
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-primary/30 transition-transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-2">
              <span>View Menu</span>
              <ArrowRight size={20} />
            </button>
            {/* <button className="w-full sm:w-auto bg-white text-foreground border-2 border-foreground/5 px-8 py-4 rounded-full font-bold text-lg transition-all hover:bg-foreground/5">
              Learn More
            </button> */}
          </div>
        </motion.div>

        {/* Right Content - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative aspect-square lg:aspect-auto h-[400px] lg:h-[600px] rounded-[3rem] overflow-hidden premium-shadow"
        >
          <Image
            src="/images/hero.png"
            alt="Fork Restaurant Premium Food Composition"
            fill
            className="object-cover"
            priority
          />
          {/* Subtle Floating Elements */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl z-20 hidden md:block"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                ★
              </div>
              <div>
                <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest">Rating</p>
                <p className="text-lg font-bold text-foreground">4.9/5 stars</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/2 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 -z-10 w-1/4 h-1/3 bg-orange-200/20 rounded-full blur-[100px]" />
    </section>
  );
}
