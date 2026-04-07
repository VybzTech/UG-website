import React from "react";
import { motion } from "framer-motion";
import OptimizedImage from "@/components/ui/OptimizedImage";
import ugLogo from "@/assets/images/ug-logo.png";

export default function PageLoader() {
    const letters = "URBAN GRAVITY".split(" ");
    const radius = 100;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white font-poppins selection:bg-yellow-400 selection:text-white">
            {/* Dynamic Background Ambiance */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.08)_0%,transparent_70%)] animate-pulse" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[40%] aspect-square bg-yellow-400/5 blur-[120px] rounded-full" />
            <div className="absolute top-[-10%] right-[-10%] w-[40%] aspect-square bg-blue-400/5 blur-[120px] rounded-full" />

            {/* Main 3D Container */}
            <div
                className="relative flex items-center justify-center w-full h-full"
                style={{ perspective: "1500px" }}
            >
                {/* The "Pole" (Central Axis of Rotation) */}
                <div className="absolute flex items-center justify-center pointer-events-none">
                    <div className="w-[2px] h-64 bg-gradient-to-b from-transparent via-yellow-400/40 to-transparent flex items-center justify-center">
                        <motion.div
                            className="w-[1.5px] h-40 bg-yellow-400 blur-[3px]"
                            animate={{ y: [-100, 100, -100] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </div>
                </div>

                {/* Central Logo - Suspended in the mid-section of the pole */}
                <motion.div
                    className="z-50 relative p-6 bg-white/60 backdrop-blur-2xl border border-white/80 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] flex items-center justify-center"
                    initial={{ scale: 0.8, opacity: 0, rotateY: -90 }}
                    animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {/* Subtle glow behind logo */}
                    <div className="absolute -inset-4 bg-yellow-400/15 blur-3xl rounded-full" />

                    <OptimizedImage
                        src={ugLogo}
                        alt="Urban Gravity"
                        width={85}
                        height={85}
                        priority={true}
                        className="drop-shadow-2xl z-10"
                    />
                </motion.div>

                {/* Spinning 3D Orbit - Everything here spins around the Y-axis */}
                <motion.div
                    className="absolute w-full h-full flex items-center justify-center pointer-events-none"
                    style={{ transformStyle: "preserve-3d" }}
                    animate={{ rotateY: 360 }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {/* Orbiting "LOADING" Letters */}
                    {letters.map((letter, i) => {
                        const angle = (i / letters.length) * 360;
                        return (
                            <div
                                key={i}
                                className="absolute flex items-center justify-center"
                                style={{
                                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                                    transformStyle: "preserve-3d"
                                }}
                            >
                                <div
                                    className="relative flex items-center justify-center"
                                    style={{ transform: `rotateY(${-angle}deg)` }} // Optional: keep letters facing forward slightly (comment out to make them spin with axis)
                                >
                                    <motion.span
                                        className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tighter"
                                        style={{
                                            color: i % 2 === 0 ? "#fbbf24" : "rgba(31, 41, 55, 0.15)",
                                            WebkitTextStroke: i % 2 !== 0 ? "1.5px #fbbf24" : "none",
                                            textShadow: i % 2 === 0 ? "0 10px 20px rgba(251, 191, 36, 0.25)" : "none",
                                        }}
                                        animate={{
                                            y: [0, -20, 0],
                                            scale: [1, 1.15, 1],
                                            opacity: [1, 0.8, 1]
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            delay: i * 0.2,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        {letter}
                                    </motion.span>
                                </div>
                            </div>
                        );
                    })}

                    {/* Decorative Orbiting Rings */}
                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={`ring-${i}`}
                            className="absolute border border-yellow-400/20 rounded-full"
                            style={{
                                width: 300 + (i * 80),
                                height: 300 + (i * 80),
                                transform: `rotateX(${75 + (i * 10)}deg) rotateZ(${i * 60}deg)`,
                            }}
                            animate={{ rotateZ: 360 }}
                            transition={{ duration: 12 + (i * 4), repeat: Infinity, ease: "linear" }}
                        />
                    ))}

                    {/* Glowing Dust Particles */}
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={`dust-${i}`}
                            className="absolute w-1 h-1 bg-yellow-400 rounded-full shadow-[0_0_8px_#fbbf24]"
                            style={{
                                transform: `rotateY(${i * 45}deg) translateZ(${radius + 40}px) translateY(${Math.sin(i * 1.5) * 60}px)`,
                            }}
                        />
                    ))}
                </motion.div>

                {/* 3D Ground Reflection/Shadow */}
                <div className="absolute bottom-[20%] w-[300px] h-12 bg-black/5 blur-[50px] rounded-[100%] scale-x-[1.8] pointer-events-none -z-10" />
            </div>

            {/* Modern Status Indicator */}
            <div className="absolute bottom-20 flex flex-col items-center gap-5 w-full">
                {/* Premium Progress Bar */}
                <div className="relative w-64 h-[3px] bg-gray-100/80 rounded-full overflow-hidden backdrop-blur-md border border-white/50">
                    <motion.div
                        className="absolute top-0 h-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 shadow-[0_0_15px_rgba(251,191,36,0.6)]"
                        initial={{ width: "0%", x: "-100%" }}
                        animate={{ width: "40%", x: "300%" }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
