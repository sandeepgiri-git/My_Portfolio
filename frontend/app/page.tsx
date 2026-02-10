"use client";

import Hero from "@/components/sections/Hero";
import Navbar from "@/components/ui/Navbar";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative w-full">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      
      <footer className="py-8 text-center text-muted text-sm border-t border-border mt-20">
        <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
      </footer>
    </main>
  );
}
