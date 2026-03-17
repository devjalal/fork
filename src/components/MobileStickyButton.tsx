"use client";

import { ShoppingBag } from "lucide-react";

export default function MobileStickyButton() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 md:hidden w-[calc(100%-48px)]">
      <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold shadow-2xl shadow-primary/40 flex items-center justify-center space-x-2 active:scale-95 transition-transform">
        <ShoppingBag size={20} />
        <span>Order Now</span>
      </button>
    </div>
  );
}
