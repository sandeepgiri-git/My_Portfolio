"use client";

import Section from "@/components/ui/Section";
import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { motion } from "framer-motion";

const timeline = [
  { year: "2024", title: "Senior Frontend Dev", description: "Leading web experiences at Tech Corp" },
  { year: "2022", title: "Creative Developer", description: "Freelance 3D & WebGL projects" },
  { year: "2020", title: "Full Stack Developer", description: "Building scalable apps at Startup Inc" },
];

export default function About() {
  return (
    <Section id="about" className="grid md:grid-cols-2 gap-10 items-center px-6 md:px-20 overflow-hidden">
      
      {/* 3D Abstract Object */}
      <div className="h-[400px] w-full relative">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 5]} />
          <Float speed={4} rotationIntensity={1} floatIntensity={2}>
            <Sphere args={[1, 100, 200]} scale={2}>
              <MeshDistortMaterial
                color="#3b82f6"
                attach="material"
                distort={0.5}
                speed={2}
                roughness={0.2}
                metalness={0.8}
              />
            </Sphere>
          </Float>
        </Canvas>
      </div>

      {/* Text Content */}
      <div className="space-y-8">
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Who I Am</h2>
          <p className="text-muted text-lg leading-relaxed">
            I'm a creative developer passionate about bridging the gap between design and technology. 
            I specialize in building immersive web experiences that leave a lasting impression.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-6 border-l-2 border-border pl-6">
          {timeline.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative"
            >
              <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-accent ring-4 ring-background" />
              <span className="text-sm text-accent font-bold tracking-widest">{item.year}</span>
              <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
              <p className="text-muted text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
