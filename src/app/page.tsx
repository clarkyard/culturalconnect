"use client";

import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import TourPackagesSection from "@/components/TourPackagesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <Hero />
        <AboutSection />
        <TourPackagesSection />
        <WhyChooseUsSection />
      </div>
      <Footer />
    </motion.main>
  );
}
