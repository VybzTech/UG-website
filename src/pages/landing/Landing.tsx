import React from "react";
import { useTheme } from "@/contexts/ThemeContext";
import Navbar from "./Navbar";
import Hero from "./Hero";
import ScrollSection from "./ScrollSection";
import Footer from "@/components/common/Footer";

const Landing = () => {
  const { isDark } = useTheme();

  return (
    <div
      className="min-h-screen font-sans overflow-x-hidden selection:bg-yellow-200"
      style={{
        background: isDark ? "#0a0a0f" : "#ffffff",
        transition: "background 0.4s ease",
      }}
    >
      <Navbar />
      <Hero />
      <ScrollSection />
      <Footer />
    </div>
  );
};

export default Landing;
