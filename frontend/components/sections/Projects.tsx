"use client";

import Section from "@/components/ui/Section";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const projects = [
  {
    title: "Neon Cyberpunk",
    category: "WebGL Experience",
    image: "/project1.jpg", // Placeholder
    color: "#a855f7"
  },
  {
    title: "Space Tourism",
    category: "Next.js Website",
    image: "/project2.jpg", // Placeholder
    color: "#3b82f6"
  },
  {
    title: "Abstract Art",
    category: "Generative Design",
    image: "/project3.jpg", // Placeholder
    color: "#ec4899"
  }
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

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
      className="relative h-[400px] w-full rounded-2xl bg-secondary border border-border overflow-hidden cursor-pointer group"
    >
      <div 
        className="absolute inset-0 bg-gradient-to-br from-transparent to-black/80 z-10" 
        style={{ transform: "translateZ(50px)" }}
      />
      
      {/* Placeholder Image Gradient */}
      <div className="absolute inset-0 z-0 bg-neutral-900 group-hover:scale-110 transition-transform duration-700" style={{ backgroundColor: project.color }} />
      
      <div className="absolute bottom-0 left-0 p-8 z-20 transform transition-transform duration-500 group-hover:translate-y-[-10px]"
           style={{ transform: "translateZ(75px)" }}>
        <p className="text-accent text-sm font-bold uppercase tracking-widest mb-2">{project.category}</p>
        <h3 className="text-3xl font-heading font-bold text-white mb-2">{project.title}</h3>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <Section id="projects" className="px-6 md:px-20 py-20">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-heading font-bold mb-16 text-center"
      >
        Selected Works
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
}
