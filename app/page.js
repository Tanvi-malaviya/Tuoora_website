import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Overview from "../components/Overview";
import Modules from "../components/Modules";
import OperationalIntegration from "../components/OperationalIntegration";
import WhyChooseUs from "../components/WhyChooseUs";
import MobileShowcase from "../components/MobileShowcase";
import Security from "../components/Security";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white selection:bg-primary/30">
      <Navbar />
      <main className="pt-14">
        <Hero />
        <Overview />
        <Modules />
        <OperationalIntegration />
        <WhyChooseUs />
        <MobileShowcase />
        <Security />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

