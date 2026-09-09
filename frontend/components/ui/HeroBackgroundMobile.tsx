"use client";

import { motion } from "framer-motion";

/**
 * A lightweight alternative to the 3D HeroExperience canvas for mobile devices.
 * Uses pure CSS gradients, blur, and framer-motion for a visually rich but
 * GPU-friendly background — no WebGL, no Three.js.
 */
export default function HeroBackgroundMobile() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated gradient orb — accent */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.35) 0%, rgba(6,182,212,0.08) 50%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Animated gradient orb — secondary */}
      <motion.div
        animate={{
          x: [0, -25, 15, 0],
          y: [0, 30, -25, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[40%] left-[30%] w-[280px] h-[280px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.3) 0%, rgba(139,92,246,0.06) 50%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* Animated gradient orb — blue accent */}
      <motion.div
        animate={{
          x: [0, 20, -30, 0],
          y: [0, -20, 35, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute top-[55%] right-[15%] w-[200px] h-[200px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.25) 0%, rgba(59,130,246,0.05) 50%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Subtle dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--accent) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
    </div>
  );
}
