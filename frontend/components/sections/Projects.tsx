"use client";

import Section from "@/components/ui/Section";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import GlowCard from "@/components/ui/GlowCard";
import TextReveal from "@/components/ui/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";

const projects = [
  {
    title: "AI-Based Interview System",
    category: "Full Stack Web Application",
    description: "An intelligent interview platform leveraging AI to conduct, analyze, and score technical interviews in real-time. Built with a focus on natural conversation flow and accurate skill assessment.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop",
    color: "#8b5cf6",
    tech: ["Next.js", "Python", "TensorFlow", "OpenAI"],
    links: { code: "https://github.com/sandeepgiri-git/Major-project", demo: "https://major-project-seven-psi.vercel.app/" }
  },
  {
    title: "BlockVote",
    category: "Blockchain Voting System",
    description: "A decentralized voting platform built on Ethereum blockchain ensuring transparent, tamper-proof elections. Smart contracts handle vote casting and tallying with complete auditability.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop",
    color: "#06b6d4",
    tech: ["Solidity", "React", "Web3.js", "Ethereum"],
    links: { code: "https://github.com/sandeepgiri-git/BlockVote", demo: "-" }
  },
  {
    title: "Doubt Solving Chatbot",
    category: "AI Educational Assistant",
    description: "An AI-powered educational assistant that provides instant, contextual answers to student queries. Features real-time chat with socket connections and intelligent response generation.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop",
    color: "#ec4899",
    tech: ["OpenAI API", "Node.js", "Socket.io", "React"],
    links: { code: "https://github.com/sandeepgiri-git/Doubt-solving-chatbot", demo: "https://doubt-solving-chatbot.vercel.app/" }
  }
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const isReversed = index % 2 === 1;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="w-full"
    >
      <GlowCard className="w-full">
        <div className={`glass rounded-2xl overflow-hidden flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
          {/* Image Side */}
          <div className="relative lg:w-1/2 h-[300px] lg:h-[450px] overflow-hidden">
            {/* Project Number */}
            <div className="absolute top-6 left-6 z-20">
              <span className="text-8xl font-heading font-black text-white/5">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            
            <motion.div style={{ y: imageY }} className="absolute inset-[-10%] h-[120%]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </motion.div>
            
            {/* Color overlay */}
            <div
              className="absolute inset-0 opacity-30 mix-blend-multiply"
              style={{ backgroundColor: project.color }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/40" />
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
            <span
              className="inline-block w-fit px-3 py-1 mb-4 text-xs font-bold tracking-wider uppercase rounded-full border"
              style={{
                color: project.color,
                borderColor: project.color + "40",
                backgroundColor: project.color + "10",
              }}
            >
              {project.category}
            </span>

            <h3 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4 leading-tight">
              {project.title}
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs text-muted-foreground bg-white/5 border border-white/10 px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <MagneticButton href={project.links.code} strength={20}>
                <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-foreground text-sm font-medium hover:bg-white/10 transition-all duration-300">
                  <FaGithub size={16} /> Source Code
                </div>
              </MagneticButton>
              {project.links.demo !== "-" && (
                <MagneticButton href={project.links.demo} strength={20}>
                  <div
                    className="flex items-center gap-2 px-6 py-3 rounded-full text-background text-sm font-bold hover:opacity-90 transition-all duration-300"
                    style={{ backgroundColor: project.color }}
                  >
                    <FaExternalLinkAlt size={12} /> Live Demo
                  </div>
                </MagneticButton>
              )}
            </div>
          </div>
        </div>
      </GlowCard>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <Section id="projects" className="px-6 md:px-20 py-20">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-7xl font-heading font-bold mb-4">
            <TextReveal>Selected Works</TextReveal>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of projects exploring the boundaries of design and technology.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
}
