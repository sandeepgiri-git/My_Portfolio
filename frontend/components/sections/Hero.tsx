"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Scene from "@/components/canvas/Scene";
import HeroExperience from "@/components/canvas/HeroExperience";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Scene className="h-full w-full">
          <HeroExperience />
        </Scene>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full w-full flex flex-col justify-center items-center pointer-events-none">
        <motion.div 
          style={{ y, opacity }} 
          className="text-center space-y-4 px-4 sticky top-1/2 -translate-y-1/2"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60"
          >
            Sandeep Giri
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-muted font-light tracking-wide"
          >
            Building digital experiences that matter
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-muted/60">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-muted/0 via-muted to-muted/0" />
        </motion.div>
      </div>
    </section>
  );
}
