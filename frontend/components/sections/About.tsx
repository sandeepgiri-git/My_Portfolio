"use client";

import Section from "@/components/ui/Section";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub, FaHackerrank, FaMapMarkerAlt } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { FiDownload } from "react-icons/fi";
import GlowCard from "@/components/ui/GlowCard";
import MagneticButton from "@/components/ui/MagneticButton";
import TextReveal from "@/components/ui/TextReveal";

const education = [
  { year: "2022 - 2026", degree: "B.Tech in CSE-IOT", institution: "Indore Institute of Science And Technology" },
  { year: "2020 - 2022", degree: "Higher Secondary (Science)", institution: "Sisodiya Public School" },
];

const socialLinks = [
  { name: "LinkedIn", icon: FaLinkedin, url: "https://www.linkedin.com/in/sandeep-giri-3068612a4/", color: "#0A66C2" },
  { name: "GitHub", icon: FaGithub, url: "https://github.com/sandeepgiri-git/", color: "#ffffff" },
  { name: "LeetCode", icon: SiLeetcode, url: "https://leetcode.com/u/sandeepgiri25/", color: "#FFA116" },
  { name: "GeeksforGeeks", icon: SiGeeksforgeeks, url: "https://www.geeksforgeeks.org/profile/ersandee8yxf", color: "#2F8D46" },
  { name: "HackerRank", icon: FaHackerrank, url: "https://www.hackerrank.com/profile/er_sandeep_giri1", color: "#00EA64" },
  { name: "Instagram", icon: FaInstagram, url: "#", color: "#E4405F" },
  { name: "Twitter", icon: FaTwitter, url: "#", color: "#1DA1F2" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  }),
};

export default function About() {
  return (
    <Section id="about" className="px-6 md:px-20 py-20 overflow-hidden">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-7xl font-heading font-bold mb-4">
          <TextReveal>About Me</TextReveal>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A glimpse into who I am, what I do, and where I'm headed.
        </p>
      </motion.div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto auto-rows-[180px] md:auto-rows-[200px]">
        
        {/* Bio Card — Large (spans 4 cols, 2 rows) */}
        <motion.div custom={0} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <GlowCard className="md:col-span-4 lg:col-span-4 md:row-span-2 h-full">
            <div className="glass rounded-2xl p-8 h-full flex flex-col justify-center">
              <h3 className="text-2xl font-heading font-bold mb-4 text-foreground">
                Hey, I'm <span className="text-gradient">Sandeep</span> 👋
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a final-year Full-Stack Developer specializing in MERN and Next.js, focused on building performant, scalable, and user-centric web applications. I enjoy working across the stack, from crafting clean UIs to implementing efficient backend logic.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My development approach is driven by strong problem-solving and DSA fundamentals, helping me write optimized and maintainable code. I'm passionate about creating digital experiences that are both beautiful and functional.
              </p>
            </div>
          </GlowCard>
        </motion.div>

        {/* Profile Photo Card — 2 cols, 2 rows */}
        <motion.div custom={1} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="md:col-span-2 lg:col-span-2 md:row-span-2"
        >
          <GlowCard className="h-full">
            <div className="glass rounded-2xl p-4 h-full relative overflow-hidden group">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                  alt="Sandeep Giri"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-sm font-bold text-foreground">Sandeep Giri</span>
                  <p className="text-xs text-muted-foreground">Full-Stack Developer</p>
                </div>
              </div>
            </div>
          </GlowCard>
        </motion.div>

        {/* Location Card */}
        <motion.div custom={2} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="md:col-span-2"
        >
          <GlowCard className="h-full">
            <div className="glass rounded-2xl p-6 h-full flex flex-col justify-center items-center text-center">
              <FaMapMarkerAlt className="text-accent text-2xl mb-3" />
              <span className="text-lg font-bold text-foreground">Indore, India</span>
              <span className="text-xs text-muted-foreground mt-1">IST (UTC +5:30)</span>
            </div>
          </GlowCard>
        </motion.div>

        {/* Freelance Status Card */}
        <motion.div custom={3} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="md:col-span-2"
        >
          <GlowCard className="h-full">
            <div className="glass rounded-2xl p-6 h-full flex flex-col justify-center items-center text-center">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shadow-lg shadow-emerald-400/50" />
                <span className="text-sm font-bold text-emerald-400 uppercase tracking-wider">Available</span>
              </div>
              <span className="text-lg font-bold text-foreground">Open for Freelance</span>
              <span className="text-xs text-muted-foreground mt-1">Let's work together</span>
            </div>
          </GlowCard>
        </motion.div>

        {/* Resume Download Card */}
        <motion.div custom={4} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="md:col-span-2"
        >
          <GlowCard className="h-full">
            <MagneticButton href="/resume.pdf" download="Sandeep_Giri_Resume.pdf" className="h-full block">
              <div className="glass rounded-2xl p-6 h-full flex flex-col justify-center items-center text-center cursor-pointer group hover:border-accent/30 transition-all duration-300">
                <FiDownload className="text-accent text-3xl mb-3 group-hover:translate-y-1 transition-transform duration-300" />
                <span className="text-lg font-bold text-foreground">Download Resume</span>
                <span className="text-xs text-muted-foreground mt-1">PDF • Updated 2025</span>
              </div>
            </MagneticButton>
          </GlowCard>
        </motion.div>

        {/* Education Card — spans 4 cols */}
        <motion.div custom={5} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="md:col-span-4 lg:col-span-4"
        >
          <GlowCard className="h-full">
            <div className="glass rounded-2xl p-6 h-full">
              <h3 className="text-sm font-bold text-accent uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-6 h-[2px] bg-accent" /> Education
              </h3>
              <div className="flex flex-col md:flex-row gap-6">
                {education.map((edu, index) => (
                  <div key={index} className="flex-1 relative pl-4 border-l-2 border-accent/30">
                    <span className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-accent" />
                    <span className="text-xs text-accent font-bold block mb-1">{edu.year}</span>
                    <h4 className="text-base font-bold text-foreground">{edu.degree}</h4>
                    <p className="text-sm text-muted-foreground">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </div>
          </GlowCard>
        </motion.div>

        {/* Social Links Card — spans full width */}
        <motion.div custom={6} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="md:col-span-4 lg:col-span-6"
        >
          <GlowCard className="h-full">
            <div className="glass rounded-2xl p-6 h-full flex items-center justify-center">
              <div className="flex flex-wrap justify-center gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-muted-foreground hover:text-foreground transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <social.icon size={18} style={{ color: social.color }} />
                    <span className="text-sm font-medium hidden sm:inline">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </GlowCard>
        </motion.div>

      </div>
    </Section>
  );
}
