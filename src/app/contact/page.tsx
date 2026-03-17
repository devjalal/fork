"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export default function ContactPage() {
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsPending(true);

    const formData = new FormData(e.currentTarget);
    // Add Web3Forms access key (public key for jalalkp047@gmail.com)
    // Note: User can get their own key at web3forms.com
    formData.append("access_key", "06a8e833-2a5b-4e12-870d-0361545625c1"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully!", {
          description: "We'll get back to you shortly.",
          icon: <CheckCircle2 className="text-green-500" size={20} />,
        });
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error("Something went wrong.", {
          description: data.message || "Please try again later.",
        });
      }
    } catch (error) {
      toast.error("Failed to send message.", {
        description: "Please check your internet connection.",
      });
    } finally {
      setIsPending(false);
    }
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
                    <p className="text-foreground/60 font-medium">123 Vibe Street, Foodie City, FC 45678</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Phone</h3>
                    <p className="text-foreground/60 font-medium">+1 (234) 567-890</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="text-foreground/60 font-medium">hello@fork.com</p>
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

          {/* Contact Form */}
          <div className="premium-card bg-white p-8 md:p-12">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground/40 uppercase tracking-widest">Full Name</label>
                  <input 
                    name="name"
                    type="text" 
                    required
                    className="w-full bg-[#FFF7F3] border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary outline-none" 
                    placeholder="John Doe" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground/40 uppercase tracking-widest">Email Address</label>
                  <input 
                    name="email"
                    type="email" 
                    required
                    className="w-full bg-[#FFF7F3] border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary outline-none" 
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
                  className="w-full bg-[#FFF7F3] border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary outline-none" 
                  placeholder="How can we help?" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground/40 uppercase tracking-widest">Message</label>
                <textarea 
                  name="message"
                  rows={4} 
                  required
                  className="w-full bg-[#FFF7F3] border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary outline-none resize-none" 
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={isPending}
                className="w-full bg-primary text-white py-4 rounded-2xl font-bold shadow-xl shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-transform disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed"
              >
                {isPending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
