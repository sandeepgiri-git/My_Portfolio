"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";

const skills = [
  { name: "Frontend Development", level: 95 },
  { name: "Three.js / WebGL", level: 85 },
  { name: "React / Next.js", level: 90 },
  { name: "UI/UX Design", level: 80 },
];

export default function Experience() {
  return (
    <Section id="skills" className="px-6 md:px-20 py-20 bg-secondary/30">
        <div className="grid md:grid-cols-2 gap-16">
            <div>
                <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8">Capabilities</h2>
                <p className="text-muted text-lg mb-8">
                    My technical expertise spans across the entire frontend spectrum, from pixel-perfect UI implementation to complex 3D visualizations.
                </p>
                <div className="space-y-8">
                    {skills.map((skill, index) => (
                        <div key={index} className="space-y-2">
                            <div className="flex justify-between">
                                <span className="text-lg font-medium">{skill.name}</span>
                                <span className="text-muted">{skill.level}%</span>
                            </div>
                            <div className="h-2 w-full bg-muted/30 rounded-full overflow-hidden">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                                    className="h-full bg-accent"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="relative hidden md:block">
                 {/* Abstract representation of code/structure */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent rounded-3xl border border-white/5 backdrop-blur-sm p-8 flex items-center justify-center">
                    <div className="text-9xl font-bold opacity-10 font-heading">XP</div>
                 </div>
            </div>
        </div>
    </Section>
  );
}
