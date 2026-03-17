import Link from "next/link";
import { Instagram, Twitter, Facebook, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 px-6 border-t border-foreground/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="text-3xl font-serif font-bold text-primary tracking-tight">
              Fork
            </Link>
            <p className="text-foreground/60 leading-relaxed">
              Experience the perfect blend of modern aesthetics and authentic flavors. Your destination for premium momos, smoothies, and more.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary transition-all hover:bg-primary hover:text-white"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-foreground/60 font-medium">
              <li><Link href="/menu" className="hover:text-primary transition-colors">Our Menu</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Locations</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-foreground/60 font-medium">
              <li className="flex items-center space-x-3">
                <MapPin size={18} className="text-primary" />
                <span>123 Vibe Street, Foodie City</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary" />
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary" />
                <span>hello@fork.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Opening Hours</h4>
            <ul className="space-y-4 text-foreground/60 font-medium">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span className="text-foreground">09:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-foreground">10:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-foreground">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-foreground/5 flex flex-col md:row items-center justify-between text-sm text-foreground/40 font-medium">
          <p>© 2024 Fork Restaurant. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
