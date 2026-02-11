import React from "react";
import SectionHero from "@/components/landing/SectionHero";

const ScrollSection = () => {
  // Sample data for the section
  const sectionData = {
    no: 1,
    title: "Find Your Perfect Match",
    content: [
      "Stop wasting time with irrelevant listings.",
      "Our smart algorithm learns your preferences to show you only the homes you'll actually love.",
      "Experience the future of property search with Urban Gravity.",
    ],
    CTA: "Start Exploring",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1073", // Placeholder optimized image
    Btn: () => console.log("CTA Clicked"),
  };

  return (
    <section className="min-h-screen w-full bg-white flex flex-col md:flex-row overflow-hidden">
      {/* Left side: Content with SectionHero (50%) */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen bg-white">
        <SectionHero
          no={sectionData.no}
          title={sectionData.title}
          content={sectionData.content}
          CTA={sectionData.CTA}
          img={sectionData.img}
          Btn={sectionData.Btn}
        />
      </div>

      {/* Right side: Optimized Image (50%) */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative bg-gray-50 flex items-center justify-center p-8 md:p-12 lg:p-20">
        <div className="relative w-full h-full max-w-2xl max-h-[80vh] group">
          {/* Subtle background glow/blob for depth */}
          <div className="absolute -inset-4 bg-yellow-400/10 rounded-full blur-3xl group-hover:bg-yellow-400/20 transition-all duration-700" />

          <img
            src={sectionData.img}
            alt={sectionData.title}
            className="w-full h-full object-contain relative z-10 drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500 ease-out"
            loading="lazy"
          />

          {/* Floating badge for added detail */}
          <div
            className="absolute top-10 right-0 md:-right-10 bg-white shadow-xl rounded-2xl p-4 md:p-5 z-20 border border-gray-100 animate-bounce"
            style={{ animationDuration: "3s" }}
          >
            <p className="text-sm font-bold text-gray-900 font-hubot">
              ✨ Featured Home
            </p>
            <p className="text-xs text-gray-500 mt-1">Lagos, Nigeria</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollSection;
