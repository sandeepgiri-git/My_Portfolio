"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import GlowCard from "@/components/ui/GlowCard";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import TextReveal from "@/components/ui/TextReveal";
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiTypescript, SiJavascript,
  SiTailwindcss, SiPython, SiDocker, SiGit, SiPostgresql, SiSolidity,
  SiExpress, SiFirebase, SiVercel, SiFigma, SiHtml5, SiCss3
} from "react-icons/si";

const skills = [
  { name: "React", icon: SiReact, color: "#61DAFB", level: 95 },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", level: 90 },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: 85 },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: 95 },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", level: 85 },
  { name: "Express", icon: SiExpress, color: "#ffffff", level: 85 },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 80 },
  { name: "Python", icon: SiPython, color: "#3776AB", level: 80 },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4", level: 90 },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", level: 70 },
  { name: "Docker", icon: SiDocker, color: "#2496ED", level: 65 },
  { name: "Git", icon: SiGit, color: "#F05032", level: 90 },
  { name: "Solidity", icon: SiSolidity, color: "#363636", level: 60 },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28", level: 75 },
  { name: "Vercel", icon: SiVercel, color: "#ffffff", level: 85 },
  { name: "Figma", icon: SiFigma, color: "#F24E1E", level: 70 },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26", level: 95 },
  { name: "CSS3", icon: SiCss3, color: "#1572B6", level: 90 },
];

const stats = [
  { label: "Projects Built", value: 10, suffix: "+" },
  { label: "Technologies", value: 15, suffix: "+" },
  { label: "DSA Problems", value: 500, suffix: "+" },
  { label: "Cups of Coffee", value: 999, suffix: "+" },
];

const expertiseAreas = [
  { title: "Frontend Development", description: "React, Next.js, TypeScript, Tailwind CSS, Framer Motion, Three.js", level: 95 },
  { title: "Backend Development", description: "Node.js, Express, REST APIs, GraphQL, MongoDB, PostgreSQL", level: 85 },
  { title: "Data Structures & Algorithms", description: "500+ problems solved across LeetCode, GFG, HackerRank", level: 90 },
  { title: "UI/UX Design", description: "Figma, responsive design, accessibility, micro-animations", level: 75 },
  { title: "DevOps & Cloud", description: "Docker, Vercel, CI/CD pipelines, Git workflows", level: 70 },
  { title: "System Design", description: "Scalable architectures, caching strategies, database design", level: 75 },
];

export default function Experience() {
  return (
    <Section id="skills" className="px-6 md:px-20 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-7xl font-heading font-bold mb-4">
            <TextReveal>Skills & Expertise</TextReveal>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My technical expertise spans across the full stack spectrum, from pixel-perfect UIs to scalable backends.
          </p>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlowCard>
                <div className="glass rounded-2xl p-6 text-center">
                  <div className="text-3xl md:text-4xl font-heading font-bold text-gradient">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <span className="text-sm text-muted-foreground mt-2 block">{stat.label}</span>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        {/* Expertise Bars */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h3 className="text-2xl font-heading font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-accent" /> Core Capabilities
            </h3>
            <div className="space-y-6">
              {expertiseAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-base font-medium text-foreground group-hover:text-accent transition-colors">{area.title}</span>
                    <span className="text-xs text-muted-foreground">{area.level}%</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{area.description}</p>
                  <div className="h-1 w-full bg-border rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${area.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, #06b6d4, #8b5cf6)`,
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Decorative side */}
          <div className="hidden lg:flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-accent-secondary/5 rounded-3xl border border-white/5 backdrop-blur-sm" />
            <div className="relative z-10 text-center p-8">
              <div className="text-8xl font-heading font-black text-gradient opacity-20 mb-4">XP</div>
              <p className="text-sm text-muted-foreground">Constantly learning,<br/>always building.</p>
            </div>
          </div>
        </div>

        {/* Tech Stack Grid */}
        <div>
          <h3 className="text-2xl font-heading font-bold mb-8 text-center">
            Technologies I Work With
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group"
              >
                <div className="glass rounded-xl p-4 flex flex-col items-center gap-2 text-center hover:border-accent/30 transition-all duration-300 cursor-default">
                  <skill.icon
                    size={28}
                    className="transition-all duration-300 opacity-60 group-hover:opacity-100"
                    style={{ color: skill.color }}
                  />
                  <span className="text-[10px] font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
