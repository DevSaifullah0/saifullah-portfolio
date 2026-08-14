"use client";

import { motion } from "motion/react";

export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow 1 */}

      <motion.div
        animate={{
          x: [0, 160, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-52 -top-52 h-[600px] w-[600px] rounded-full bg-white/[0.045] blur-[150px]"
      />

      {/* Glow 2 */}

      <motion.div
        animate={{
          x: [0, -140, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-64 -right-52 h-[650px] w-[650px] rounded-full bg-gray-500/[0.04] blur-[160px]"
      />
    </div>
  );
}