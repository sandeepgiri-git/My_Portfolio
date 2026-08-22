"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  mode?: "word" | "char";
  once?: boolean;
}

export default function TextReveal({ 
  children, 
  className = "", 
  delay = 0, 
  mode = "word",
  once = true 
}: TextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once, margin: "-10%" });

  const units = mode === "word" ? children.split(" ") : children.split("");

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {units.map((unit, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            animate={isInView ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }}
            transition={{
              duration: 0.5,
              delay: delay + i * (mode === "word" ? 0.08 : 0.03),
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {unit}
            {mode === "word" ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
