"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const whatsappNumber = "917907343387";

export default function ContactPage() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const whatsappMessage = [
      "New contact message from Fork website",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Subject: ${subject}`,
      "",
      `Message: ${message}`,
    ].join("\n");

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <PageHeader 
        title="Get in Touch" 
        subtitle="We&apos;d love to hear from you. Visit us or drop a message." 
      />
      
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Location</h3>
                    <p className="text-foreground/60 font-medium">malappuram,kerala,india</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Phone</h3>
                    <p className="text-foreground/60 font-medium">+91 7907343387</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="text-foreground/60 font-medium">jalalkp047@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Opening Hours</h3>
                    <p className="text-foreground/60 font-medium">Mon - Fri: 09:00 - 22:00</p>
                    <p className="text-foreground/60 font-medium">Sat: 10:00 - 23:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp Form */}
          <div className="premium-card bg-white p-8 md:p-12 rounded-[2rem] border border-primary/10">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8">Send a WhatsApp Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground/40 uppercase tracking-widest">Full Name</label>
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full bg-[#FFF7F3] border border-primary/10 rounded-[1.25rem] px-5 py-4 focus:ring-2 focus:ring-primary outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground/40 uppercase tracking-widest">Email Address</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full bg-[#FFF7F3] border border-primary/10 rounded-[1.25rem] px-5 py-4 focus:ring-2 focus:ring-primary outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground/40 uppercase tracking-widest">Subject</label>
                <input
                  name="subject"
                  type="text"
                  required
                  className="w-full bg-[#FFF7F3] border border-primary/10 rounded-[1.25rem] px-5 py-4 focus:ring-2 focus:ring-primary outline-none"
                  placeholder="How can we help?"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground/40 uppercase tracking-widest">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full bg-[#FFF7F3] border border-primary/10 rounded-[1.25rem] px-5 py-4 focus:ring-2 focus:ring-primary outline-none resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-3 bg-primary text-white py-4 rounded-[1.25rem] font-bold shadow-xl shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-transform"
              >
                <Send size={20} />
                Send on WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
