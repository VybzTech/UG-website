import React from "react";
import { motion } from "framer-motion";
import bgImage from "@/assets/images/landing/hero-bg.jpg";
import Button from "@/components/ui/Button";
import { ChevronDown } from "lucide-react";
import { COLORS } from "@/constants/colors";
import ComboText from "@/components/ui/ComboText";
import { HubotH1 } from "@/components/ui/HubotText";
import CTAButton from "@/components/ui/CTAButton";
import { useNavigate } from "react-router-dom";

/**
 * Enhanced Hero Component
 * Features:
 * - Full-screen background image with brightness/contrast adjustments
 * - Blurred white fade overlay (10% opacity top → 90% opacity bottom)
 * - Smooth scroll indicator animation
 * - Framer Motion animations for content reveal
 * - Gradient text for hero heading
 */
export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const scrollIndicatorVariants = {
    animate: {
      y: [0, 8, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const navigate = useNavigate();

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Full-screen background image */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="Hero background - modern property"
          className="w-full h-full object-cover" // brightness-[0.85] contrast-[1.05]"
        />

        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />

        {/* Blurred white fade overlay - 10% at top, 90% at bottom */}
        <motion.div
          className="absolute inset-0 backdrop-blur-[4px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.65) 55%, rgba(255, 255, 255, 1) 100%)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants}>
          <motion.div
            className="font-hubot inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-0"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255,255,255,0.15)",
            }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-xs font-medium text-white">
              ✨ AI-Powered Matching
            </span>
          </motion.div>
        </motion.div>

        {/* Heading with ComboText and Gradient */}
        <motion.div variants={itemVariants} className="mb-6">
          <HubotH1
            children="Move into your"
            fontWeight="extrabold"
            size={60}
            style={{ color: "#7F4E31" }}
          />
          <div className="flex justify-center">
            <ComboText
              firstText="Dream"
              secondText="Home"
              firstColor={COLORS.text}
              secondColor={COLORS.primary}
              fontFamily="hubot"
              fontWeight="extrabold"
              size={100}
              gap={4}
              lineHeight={99}
              className="drop-shadow-xl"
            />
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex sm:flex-row gap-5 justify-center items-center"
        >
          {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="primary"
              size="lg"
              className="min-w-[200px] font-semibold"
            >
              Explore Listings
            </Button>
          </motion.div> */}

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <CTAButton
              variant="default" 
              onClick={() => navigate("/landlord")}
              className="text-black"
            >
              Landlord
            </CTAButton>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <CTAButton
              variant="primary"
              onClick={() => navigate("/tenant")}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 border-none shadow-yellow-200/50 shadow-lg hover:shadow-yellow-300/50"
            >
              Tenant
            </CTAButton>
          </motion.div>
        </motion.div>

        {/* Stats/Features Row */}
        {/* <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-8 mt-12 text-white/80 text-sm sm:text-base"
        >
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-xl">🏠</span>
            <span>10,000+ Homes</span>
          </motion.div>
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-xl">⚡</span>
            <span>Match in Minutes</span>
          </motion.div>
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-xl">💰</span>
            <span>Zero Commission</span>
          </motion.div>
        </motion.div> */}
      </motion.div>

      {/* Scroll Indicator */}
      {/* <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
        variants={scrollIndicatorVariants}
        animate="animate"
      >
        <motion.div
          className="w-6 h-10 border-2 border-white rounded-full flex items-center justify-center cursor-pointer hover:border-primary transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            window.scrollBy({
              top: window.innerHeight,
              behavior: "smooth",
            });
          }}
        >
          <motion.div
            className="w-1 h-2 bg-white rounded-full"
            animate={{ y: [0, 4, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div> */}

      {/* Optional: Floating shapes for visual interest */}
      {/* <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-3xl"
        animate={{
          y: [0, 20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-32 right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"
        animate={{
          y: [0, -20, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      /> */}
    </section>
  );
}
