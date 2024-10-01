"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Coffee, Heart, Leaf, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function LandingPageComponent() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-700">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-slate-600">
            North Shore Transcendental Meditation®
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/transcendental-meditation" className="text-neutral-600 hover:text-emerald-500">
              Transcendental Meditation
            </Link>
            <Link href="/about-us" className="text-neutral-600 hover:text-emerald-500">
              About Us
            </Link>
            <Link href="/contact-us" className="text-neutral-600 hover:text-emerald-500">
              Contact Us
            </Link>
          </nav>
          <Button className="bg-emerald-500 hover:bg-royal-600 text-white font-semibold">Book Session</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[calc(100vh-80px)] flex items-center justify-center">
        <Image src="/hero.jpg" alt="Serene meditation background" layout="fill" objectFit="cover" className="absolute inset-0 z-0" />
        <div className="absolute inset-0 bg-amber-600 opacity-5 z-10"></div>
        <div className="relative z-20 text-center text-yellow-900">
          <h1 className="text-5xl font-bold mb-4">The Heaven of Kingdom is Within</h1>
          <p className="text-xl mb-8">Discover the power of transcendental meditation®</p>
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-lg px-8 py-3">Start Your Journey</Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12 text-emerald-600">Why choose Transcendental Meditation®</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Leaf className="w-10 h-10 text-emerald-500" />, title: "Reduce Stress" },
              { icon: <Sun className="w-10 h-10 text-amber-400" />, title: "Increase Clarity" },
              { icon: <Heart className="w-10 h-10 text-rose-400" />, title: "Improve Well-being" },
              { icon: <Coffee className="w-10 h-10 text-neutral-500" />, title: "Boost Productivity" },
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-emerald-600">{benefit.title}</h3>
                <p className="text-neutral-600">Experience the transformative power of meditation in your professional life.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image src="/grace.jpg" alt="Meditation instructor" width={600} height={400} className="rounded-lg shadow-md" />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-semibold mb-4 text-emerald-600">Begin your journey with Grace</h2>
              <p className="text-neutral-700 mb-4">
                A customer once told Grace that &quot;meditation is a very personal thing&quot;. We understand that. We are attentive to your needs in understanding and developing
                the habits for this simple and natural technique.
              </p>
              <p className="text-neutral-700">Join us in our serene, cozy studio and discover the transformative power of meditation for your personal and professional growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-emerald-50 text-emerald-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Transform Your Leadership?</h2>
          <p className="text-xl mb-8">Book your personalized transcendental meditation session today.</p>
          <form className="max-w-md mx-auto">
            <div className="flex gap-4">
              <Input type="email" placeholder="Enter your email" className="bg-white text-neutral-800" />
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold">Get Started</Button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-semibold">North Shore Meditation</h3>
              <p className="text-emerald-100">Elevate your mind, enhance your leadership</p>
            </div>
            <div className="text-center md:text-right">
              <p>123 Serenity Lane, North Shore</p>
              <p>Email: info@northshoremeditation.com</p>
              <p>Phone: (555) 123-4567</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
