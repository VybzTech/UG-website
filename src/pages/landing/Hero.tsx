import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import bgImage from "@/assets/images/landing/hero-bg.jpg";
import { COLORS } from "@/constants/colors";
import CTAButton from "@/components/ui/CTAButton";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="Hero background — modern property"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
        {/* White fade at the bottom so it flows into the next section */}
        <motion.div
          className="absolute inset-0 backdrop-blur-[3px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.55) 50%, rgba(255,255,255,1) 100%)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-5 w-full max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-3 sm:mb-4">
          <motion.div
            className="font-hubot inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2
                       bg-white/10 backdrop-blur-md border border-white/20 rounded-full"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-[11px] sm:text-xs font-medium text-white">
              ✨ AI-Powered Matching
            </span>
          </motion.div>
        </motion.div>

        {/* Heading — clamp scales from mobile → desktop */}
        <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
          <h1
            className="font-hubot font-extrabold leading-tight"
            style={{
              fontSize: "clamp(15px, 4vw, 52px)",
              color: "#7F4E31",
            }}
          >
            Move into your
          </h1>
          <div className="flex justify-center items-baseline gap-2 sm:gap-3 flex-wrap">
            <span
              className="font-hubot font-extrabold leading-none drop-shadow-xl"
              style={{
                fontSize: "clamp(52px, 13vw, 120px)",
                color: COLORS.text,
                lineHeight: 0.95,
              }}
            >
              Dream
            </span>
            <span
              className="font-hubot font-extrabold leading-none drop-shadow-xl"
              style={{
                fontSize: "clamp(52px, 13vw, 120px)",
                color: COLORS.primary,
                lineHeight: 0.95,
              }}
            >
              Home
            </span>
          </div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-row gap-3 sm:gap-5 justify-center items-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <CTAButton
              variant="default"
              onClick={() => navigate("/landlord")}
              className="text-black text-sm sm:text-base px-5 sm:px-7 py-2.5 sm:py-3"
            >
              Landlord
            </CTAButton>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <CTAButton
              variant="primary"
              onClick={() => navigate("/tenant")}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 border-none
                         shadow-yellow-200/50 shadow-lg hover:shadow-yellow-300/50
                         text-sm sm:text-base px-5 sm:px-7 py-2.5 sm:py-3"
            >
              Tenant
            </CTAButton>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
