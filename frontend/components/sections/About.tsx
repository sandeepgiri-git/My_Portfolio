"use client";

import Section from "@/components/ui/Section";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub, FaHackerrank } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

// Mock Data
const education = [
  { year: "2022 - 2026", degree: "B.Tech in CSE-IOT", institution: "Indore Institute of Science And Technology" },
  { year: "2020 - 2022", degree: "Higher Secondary (Science)", institution: "Sisodiya Public School" },
];

const socialLinks = [
  { name: "LinkedIn", icon: FaLinkedin, url: "https://www.linkedin.com/in/sandeep-giri-3068612a4/", color: "hover:text-blue-500" },
  { name: "Instagram", icon: FaInstagram, url: "#", color: "hover:text-pink-500" },
  { name: "Twitter", icon: FaTwitter, url: "#", color: "hover:text-sky-500" },
  { name: "GitHub", icon: FaGithub, url: "https://github.com/sandeepgiri-git/", color: "hover:text-white" },
  { name: "LeetCode", icon: SiLeetcode, url: "https://leetcode.com/u/sandeepgiri25/", color: "hover:text-yellow-500" },
  { name: "GeeksforGeeks", icon: SiGeeksforgeeks, url: "https://www.geeksforgeeks.org/profile/ersandee8yxf", color: "hover:text-green-500" },
  { name: "HackerRank", icon: FaHackerrank, url: "https://www.hackerrank.com/profile/er_sandeep_giri1", color: "hover:text-green-400" },
];

export default function About() {
  return (
    <Section id="about" className="px-6 md:px-20 py-20 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Image & Socials */}
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center space-y-8"
        >
            <div className="relative group w-64 h-64 md:w-80 md:h-80 perspective-1000">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent to-purple-600 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500 blur-md opacity-70 animate-pulse"></div>
                <div className="absolute inset-0 bg-background rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-500 border border-white/10 overflow-hidden relative shadow-2xl">
                     <Image 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                        alt="Profile" 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                     />
                </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-4">
                 {socialLinks.map((social, index) => (
                    <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xl text-muted transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${social.color}`}
                        aria-label={social.name}
                    >
                         <social.icon />
                    </a>
                ))}
            </div>
        </motion.div>

        {/* Right Side: Bio & Education */}
        <div className="space-y-10">
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex items-center gap-4 mb-6">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">About Me</h2>
                    <a 
                        href="/resume.pdf" 
                        download="Sandeep_Giri_Resume.pdf"
                        className="px-6 py-2 text-sm font-bold text-background bg-accent rounded-full hover:bg-accent/90 transition-colors shadow-lg shadow-accent/25 hover:shadow-accent/40 transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                        Download Resume
                    </a>
                </div>
                
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    I’m Sandeep Giri, a final-year Full-Stack Developer specializing in MERN and Next.js, focused on building performant, scalable, and user-centric web applications. I enjoy working across the stack, from crafting clean UIs to implementing efficient backend logic.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  My development approach is driven by strong problem-solving and DSA fundamentals, helping me write optimized and maintainable code.
                </p>
            </motion.div>

            {/* Education Section */}
            <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
                    <span className="w-8 h-[2px] bg-accent"></span> Education
                </h3>
                <div className="space-y-8 border-l-2 border-border pl-8 ml-3 relative">
                    {education.map((edu, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="relative group"
                        >
                            <span className="absolute -left-[39px] top-1 h-4 w-4 rounded-full bg-background border-2 border-accent group-hover:bg-accent transition-colors duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                            <span className="text-xs text-accent font-bold tracking-widest uppercase mb-1 block opacity-80">{edu.year}</span>
                            <h4 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">{edu.degree}</h4>
                            <p className="text-muted-foreground text-sm mt-1">{edu.institution}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>

      </div>
    </Section>
  );
}
