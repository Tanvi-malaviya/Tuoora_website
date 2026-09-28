'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  GraduationCap, 
  Users, 
  BookOpen, 
  Star, 
  Sparkles,
  Compass
} from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function NotFoundContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const bottomCards = [
    {
      icon: GraduationCap,
      title: "Study Materials",
      subtitle: "Access quality notes",
      color: "bg-sky-50 text-cyan-600 border-cyan-100 group-hover:border-cyan-300",
      accent: "#20B8D0",
      href: "/features",
    },
    {
      icon: Users,
      title: "Live Classes",
      subtitle: "Learn from experts",
      color: "bg-teal-50 text-teal-600 border-teal-100 group-hover:border-teal-300",
      accent: "#0891B2",
      href: "/features",
    },
    {
      icon: BookOpen,
      title: "Track Progress",
      subtitle: "Stay on top",
      color: "bg-orange-50 text-orange-500 border-orange-100 group-hover:border-orange-300",
      accent: "#F07838",
      href: "/features",
    },
    {
      icon: Star,
      title: "Build Your Future",
      subtitle: "Achieve your goals",
      color: "bg-rose-50 text-primary border-primary/20 group-hover:border-primary/40",
      accent: "#F04D36",
      href: "/about",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-navy selection:bg-primary/20 relative flex flex-col justify-between overflow-x-hidden">
      {/* Top Floating Navbar */}
      <Navbar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

      {/* Decorative Soft Background Waves & Accents */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft Ambient Brand Glows */}
        <div className="absolute top-16 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[110px]" />
        <div className="absolute top-24 -right-20 w-[480px] h-[480px] bg-secondary/8 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-orange-500/5 rounded-full blur-[130px]" />

        {/* Gentle Background Organic Shapes */}
        <svg
          className="absolute top-64 left-0 w-full opacity-30 text-slate-100 pointer-events-none"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,192L48,197.3C96,203,192,213,288,197.3C384,181,480,139,576,144C672,149,768,203,864,208C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Main 404 Hero Container */}
      <main className="relative z-10 flex-1 flex flex-col justify-center pt-24 pb-8 sm:pt-28 sm:pb-10 lg:pt-32 lg:pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: 3D 404 + Headline + CTA */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1"
          >
            {/* 3D 404 Graphic Element (Transparent PNG) */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative w-60 sm:w-72 lg:w-80 h-32 sm:h-40 lg:h-44 mb-2 lg:mb-3"
            >
              <Image
                src="/404-number.png"
                alt="404 - Page Not Found"
                fill
                sizes="(max-width: 768px) 280px, 320px"
                priority
                className="object-contain transition-transform duration-500 hover:scale-105"
              />
            </motion.div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight leading-tight">
              <span className="text-primary drop-shadow-sm">Oops!</span> Page not found
            </h1>

            {/* Subtitle */}
            <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-md leading-relaxed font-normal">
              Looks like you&apos;re trying to access a page that doesn&apos;t exist or has been moved. 
              Don&apos;t worry, let&apos;s get you back on track!
            </p>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3.5 w-full sm:w-auto">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-xl bg-gradient-to-r from-primary to-sunset text-white font-bold text-xs sm:text-sm shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/35 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                <span>Back to Home</span>
              </Link>

              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-xl border border-gray-200 bg-white text-navy font-semibold text-xs sm:text-sm hover:bg-gray-50 hover:border-secondary/30 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 shadow-xs cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-secondary" />
                <span>Book Demo</span>
              </button>
            </div>

            {/* Helpful Quick Links */}
            <div className="mt-4 flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-400">
              <Compass className="w-3.5 h-3.5 text-secondary" />
              <span>Or explore:</span>
              <Link href="/features" className="text-slate-600 hover:text-primary transition-colors underline-offset-4 hover:underline">
                Features
              </Link>
              <span>•</span>
              <Link href="/pricing" className="text-slate-600 hover:text-primary transition-colors underline-offset-4 hover:underline">
                Pricing
              </Link>
              <span>•</span>
              <Link href="/contact" className="text-slate-600 hover:text-primary transition-colors underline-offset-4 hover:underline">
                Contact
              </Link>
            </div>
          </motion.div>

          {/* Right Column: 3D Character Illustration + Floating Accents */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex justify-center items-center relative order-1 lg:order-2"
          >
            {/* Ambient Radial Halo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-cyan-500/10 to-amber-500/10 rounded-full blur-3xl -z-10 scale-90" />

            {/* Floating Question Mark Accent */}
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="absolute -top-3 right-6 sm:right-14 z-20 hidden sm:flex items-center justify-center w-10 h-10 rounded-2xl bg-white shadow-xl shadow-cyan-500/15 border border-cyan-100 text-secondary"
            >
              <span className="text-lg font-black">?</span>
            </motion.div>

            {/* Floating Inspirational Badge */}
            <motion.div
              animate={{ y: [0, 8, 0], rotate: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-6 left-2 sm:left-8 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-md shadow-orange-500/10 border border-orange-100 text-orange-500 text-[11px] font-bold"
            >
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              <span>Good Things Take Time :)</span>
            </motion.div>

            {/* 3D Student Illustration Image (Transparent PNG) */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg aspect-[4/3]"
            >
              <Image
                src="/404-student.png"
                alt="Student studying with laptop and books"
                fill
                sizes="(max-width: 1024px) 380px, 500px"
                priority
                className="object-contain"
              />
            </motion.div>
          </motion.div>

        </div>

    

      </main>

      {/* Standard Tuoora Global Footer */}
      <Footer />
    </div>
  );
}
