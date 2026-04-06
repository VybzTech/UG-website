import React from "react";
import { motion } from "framer-motion";
import { COLORS } from "@/constants/colors";
import ComboText from "@/components/ui/ComboText";
import { HubotH1 } from "@/components/ui/HubotText";
import CTAButton from "@/components/ui/CTAButton";
import { useNavigate } from "react-router-dom";
import SplineScene from "@/components/ui/SplineScene";

/**
 * Enhanced Hero Component
 * Features:
 * - Spline 3D Interactive Background
 * - Mobile-first responsive layout
 * - Premium Framer Motion staggered animations
 * - Glassmorphism UI elements
 */
export default function Hero() {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-[#0a0a0f]">
      {/* 3D Scene Background - Only visible when assets load */}
      <div className="absolute inset-0 z-0">
        <SplineScene 
          scene="https://prod.spline.design/ATuXmR0x8S-o2mMC/scene.splinecode" 
          className="opacity-40 scale-125 md:scale-100 md:opacity-60"
        />
        {/* Overlays for depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/60 via-transparent to-[#0a0a0f]" />
        <div className="absolute inset-0 backdrop-blur-[1px] pointer-events-none" />
      </div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 w-full max-w-6xl px-6 md:px-10 flex flex-col items-center md:items-start text-center md:text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.div
            className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
            <span className="text-[10px] md:text-xs font-semibold text-white/90 uppercase tracking-[0.2em] font-hubot">
              Redefining Urban Living
            </span>
          </motion.div>
        </motion.div>

        {/* Headline with responsive sizing */}
        <motion.div variants={itemVariants} className="space-y-1 md:space-y-4">
          <div className="block md:hidden">
             <HubotH1 className="text-white leading-[1.1]" fontWeight="extrabold" size={42}>
              Move into your
            </HubotH1>
            <div className="mt-2">
              <ComboText
                firstText="Dream"
                secondText="Home"
                firstColor="#FFFFFF"
                secondColor="#FFCA08"
                fontFamily="hubot"
                fontWeight="extrabold"
                size={58}
                gap={2}
                className="drop-shadow-[0_0_20px_rgba(255,202,8,0.3)]"
              />
            </div>
          </div>

          <div className="hidden md:block">
            <HubotH1 className="text-white leading-none" fontWeight="extrabold" size={72}>
              Move into your
            </HubotH1>
            <div className="mt-4">
              <ComboText
                firstText="Dream"
                secondText="Home"
                firstColor="#FFFFFF"
                secondColor="#FFCA08"
                fontFamily="hubot"
                fontWeight="extrabold"
                size={120}
                gap={4}
                className="drop-shadow-[0_0_40px_rgba(255,202,8,0.4)]"
              />
            </div>
          </div>
        </motion.div>

        {/* Sub-text */}
        <motion.p 
          variants={itemVariants}
          className="mt-8 text-white/50 font-hubot text-base md:text-xl max-w-[280px] md:max-w-xl leading-relaxed"
        >
          An ecosystem built on trust, experience, and choice. 
          The future of housing is here.
        </motion.p>

        {/* Action Buttons - Stacked on mobile, Row on desktop */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
            <CTAButton
              variant="primary"
              onClick={() => navigate("/tenant")}
              className="w-full sm:w-52 py-4.5 rounded-2xl text-black font-bold shadow-[0_20px_40px_-15px_rgba(255,202,8,0.3)] border-none"
            >
              Get Started
            </CTAButton>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
            <CTAButton
              variant="default"
              onClick={() => navigate("/landlord")}
              className="w-full sm:w-52 py-4.5 rounded-2xl bg-white/5 border-white/10 text-white backdrop-blur-xl hover:bg-white/10 transition-all"
            >
              For Landlords
            </CTAButton>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative Elements for Mobile */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none md:hidden" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none md:hidden" />
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-30"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
}
