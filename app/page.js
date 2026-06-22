'use client';

import { useState } from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Overview from "../components/Overview";
import Modules from "../components/Modules";
import OperationalIntegration from "../components/OperationalIntegration";
import WhyChooseUs from "../components/WhyChooseUs";
import MobileShowcase from "../components/MobileShowcase";
import Security from "../components/Security";
import FreeTrialPromo from "../components/FreeTrialPromo";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white selection:bg-primary/30">
      <Navbar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <main className="pt-14">
        <Hero setIsModalOpen={setIsModalOpen} isLoading={false} />
        <Overview />
        <Modules />
        <OperationalIntegration />
        <WhyChooseUs />
        <MobileShowcase />
        <Security />
        <FreeTrialPromo />
        <CTA setIsModalOpen={setIsModalOpen} />
      </main>
      <Footer />
    </div>
  );
}
