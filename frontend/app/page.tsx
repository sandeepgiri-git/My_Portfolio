"use client";

import Hero from "@/components/sections/Hero";
import Navbar from "@/components/ui/Navbar";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import MarqueeText from "@/components/ui/MarqueeText";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

export default function Home() {
  return (
    <main className="relative w-full">
      <Navbar />
      <Hero />

      {/* Divider */}
      <div className="section-divider" />

      <About />

      {/* Marquee Divider */}
      <div className="py-6 border-y border-border/10 bg-secondary/20">
        <MarqueeText speed={50} className="text-4xl md:text-6xl font-heading font-black text-foreground/[0.03] uppercase tracking-widest">
          <span>Full-Stack Developer</span>
          <span className="text-accent/10">•</span>
          <span>Creative Engineer</span>
          <span className="text-accent/10">•</span>
          <span>Problem Solver</span>
          <span className="text-accent/10">•</span>
          <span>UI Designer</span>
          <span className="text-accent/10">•</span>
        </MarqueeText>
      </div>

      <Projects />

      <div className="section-divider" />

      <Experience />

      <div className="section-divider" />

      <Contact />

      {/* Footer */}
      <footer className="relative border-t border-border/20 bg-secondary/10">
        {/* Wave separator */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo & Tagline */}
            <div className="text-center md:text-left">
              <span className="text-2xl font-heading font-bold">
                SG<span className="text-accent">.</span>
              </span>
              <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1 justify-center md:justify-start">
                Built with <FiHeart className="text-accent" size={12} /> & Next.js
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {[
                { icon: FaGithub, href: "https://github.com/sandeepgiri-git/" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/sandeep-giri-3068612a4/" },
                { icon: FaTwitter, href: "#" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all duration-300"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-xs text-muted-foreground/60">
              &copy; {new Date().getFullYear()} Sandeep Giri. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
