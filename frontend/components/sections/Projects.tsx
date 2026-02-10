"use client";

import Section from "@/components/ui/Section";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "AI-Based Interview System",
    category: "Full Stack Web Application",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop",
    color: "#a855f7",
    tech: ["Next.js", "Python", "TensorFlow"],
    links: { code: "https://github.com/sandeepgiri-git/Major-project", demo: "https://major-project-seven-psi.vercel.app/" }
  },
  {
    title: "BlockVote",
    category: "Blockchain Voting System",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop",
    color: "#3b82f6",
    tech: ["Solidity", "React", "Web3.js"],
    links: { code: "https://github.com/sandeepgiri-git/BlockVote", demo: "-" }
  },
  {
    title: "Doubt Solving Chatbot",
    category: "AI Educational Assistant",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop",
    color: "#ec4899",
    tech: ["OpenAI API", "Node.js", "Socket.io"],
    links: { code: "https://github.com/sandeepgiri-git/Doubt-solving-chatbot", demo: "https://doubt-solving-chatbot.vercel.app/" }
  }
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative h-[500px] w-full rounded-3xl bg-secondary border border-white/10 overflow-hidden group shadow-xl"
    >
      {/* Image Background */}
      <div 
        className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110"
        style={{ transform: "translateZ(0px)" }}
      >
        <Image 
            src={project.image} 
            alt={project.title} 
            fill 
            className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end z-20" style={{ transform: "translateZ(60px)" }}>
        <div className="transform transition-all duration-500 translate-y-4 group-hover:translate-y-0">
            <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider uppercase rounded-full bg-white/10 backdrop-blur-md text-accent border border-white/10">
                {project.category}
            </span>
            <h3 className="text-3xl font-heading font-bold text-white mb-2 leading-tight">{project.title}</h3>
            
            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-2 mb-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {project.tech.map((t, i) => (
                    <span key={i} className="text-xs text-muted/80 bg-black/50 px-2 py-1 rounded">#{t}</span>
                ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 delay-200 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0">
                <a href={project.links.code} className="flex-1 flex items-center justify-center gap-2 bg-white text-black font-bold py-3 rounded-xl hover:bg-gray-200 transition-colors">
                    <FaGithub /> Code
                </a>
                {project.links.demo !== "-" && (<a href={project.links.demo} className="flex-1 flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white font-bold py-3 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
                    <FaExternalLinkAlt size={14} /> Demo
                </a>)}
            </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <Section id="projects" className="px-6 md:px-20 py-20">
      <div className="relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-6xl font-heading font-bold mb-4 text-foreground">Selected Works</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A collection of projects exploring the boundaries of design and technology.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
            ))}
        </div>
      </div>
    </Section>
  );
}
