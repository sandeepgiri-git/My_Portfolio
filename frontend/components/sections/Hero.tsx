"use client";

import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Scene from "@/components/canvas/Scene";
import HeroExperience from "@/components/canvas/HeroExperience";
import TextReveal from "@/components/ui/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import MarqueeText from "@/components/ui/MarqueeText";
import { SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiTypescript, SiTailwindcss, SiPython, SiDocker, SiGit, SiPostgresql } from "react-icons/si";

const roles = [
  "Full-Stack Developer",
  "UI Engineer",
  "Problem Solver",
  "Creative Technologist",
];

const techIcons = [
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { icon: SiPython, name: "Python", color: "#3776AB" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
  { icon: SiDocker, name: "Docker", color: "#2496ED" },
  { icon: SiGit, name: "Git", color: "#F05032" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
];

function RoleRotator() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[1.5em] relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentRole}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0 text-gradient"
        >
          {roles[currentRole]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section id="home" ref={containerRef} className="relative h-screen w-full overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Scene className="h-full w-full">
          <HeroExperience />
        </Scene>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/40 via-transparent to-background pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-background/30 via-transparent to-background/30 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 h-full w-full flex flex-col justify-center items-center">
        <motion.div
          style={{ y, opacity }}
          className="text-center space-y-6 px-4 max-w-4xl"
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for Freelance
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-8xl lg:text-9xl font-heading font-bold tracking-tight"
          >
            <TextReveal delay={0.5} mode="char">Sandeep Giri</TextReveal>
          </motion.h1>

          {/* Role Rotator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-xl md:text-3xl font-light"
          >
            <RoleRotator />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            I craft performant, scalable digital experiences that live at the intersection of design and engineering.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4 pointer-events-auto"
          >
            <MagneticButton href="#projects" strength={25}>
              <div className="px-8 py-3 rounded-full bg-accent text-background font-bold text-sm hover:shadow-lg hover:shadow-accent/25 transition-all duration-300">
                View My Work
              </div>
            </MagneticButton>
            <MagneticButton href="#contact" strength={25}>
              <div className="px-8 py-3 rounded-full border border-border/50 text-foreground font-bold text-sm hover:bg-accent/10 hover:border-accent/30 transition-all duration-300">
                Get in Touch
              </div>
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground/60">Scroll</span>
          <div className="relative w-6 h-10 border-2 border-muted-foreground/20 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 bg-accent rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>

      {/* Tech Marquee Strip at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-0 left-0 right-0 z-30 border-t border-border/20 bg-background/50 backdrop-blur-sm"
      >
        <MarqueeText speed={40} className="py-3">
          {techIcons.map((tech, i) => (
            <span key={i} className="flex items-center gap-2 text-muted-foreground/60 text-sm">
              <tech.icon size={16} style={{ color: tech.color }} />
              {tech.name}
            </span>
          ))}
        </MarqueeText>
      </motion.div>
    </section>
  );
}
