"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub, FaHackerrank } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const socialLinks = [
  { name: "LinkedIn", icon: FaLinkedin, url: "#", color: "hover:text-blue-500" },
  { name: "Instagram", icon: FaInstagram, url: "#", color: "hover:text-pink-500" },
  { name: "Twitter", icon: FaTwitter, url: "#", color: "hover:text-sky-500" },
  { name: "GitHub", icon: FaGithub, url: "#", color: "hover:text-white" },
  { name: "LeetCode", icon: SiLeetcode, url: "#", color: "hover:text-yellow-500" },
  { name: "GeeksforGeeks", icon: SiGeeksforgeeks, url: "#", color: "hover:text-green-500" },
  { name: "HackerRank", icon: FaHackerrank, url: "#", color: "hover:text-green-400" },
];

export default function Contact() {
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <Section id="contact" className="px-6 md:px-20 py-20 relative overflow-hidden min-h-screen flex items-center">
      {/* Background decoration */}
      <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] -z-10" />

      <div className="grid lg:grid-cols-2 gap-16 w-full max-w-7xl mx-auto items-center">
        
        {/* Left Side: Text & Socials */}
        <div className="space-y-10">
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-heading font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              Let's Create<br />Something <span className="text-accent">Epic.</span>
            </h2>
            <p className="text-xl text-muted max-w-lg leading-relaxed">
              Whether you have a groundbreaking idea or just want to say hi, my inbox is always open. Let's build the future together.
            </p>
          </motion.div>

          {/* Social Links Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="grid grid-cols-4 sm:grid-cols-7 gap-4"
          >
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${social.color} group`}
                aria-label={social.name}
              >
                 <social.icon size={20} className="transition-opacity opacity-70 group-hover:opacity-100" />
              </a>
            ))}
          </motion.div>
          
           <div className="flex flex-col space-y-2 text-muted">
              <span className="text-sm uppercase tracking-widest font-bold opacity-50">Contact Details</span>
              <a href="mailto:hello@example.com" className="text-xl hover:text-accent transition-colors">hello@example.com</a>
              <span className="text-lg">San Francisco, CA</span>
           </div>
        </div>

        {/* Right Side: Advanced Form */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="relative"
        >
          {/* Form Card */}
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/5 before:to-transparent before:pointer-events-none">
             
             <form className="space-y-6 relative z-10">
                <div className="group">
                    <label className={`block text-sm font-medium transition-colors duration-300 ${focused === 'name' ? 'text-accent' : 'text-muted'}`}>Your Name</label>
                    <input 
                        type="text" 
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused(null)}
                        className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-accent transition-all duration-300 text-lg placeholder-white/20"
                        placeholder="John Doe"
                    />
                </div>
                
                <div className="group">
                    <label className={`block text-sm font-medium transition-colors duration-300 ${focused === 'email' ? 'text-accent' : 'text-muted'}`}>Email Address</label>
                    <input 
                        type="email"
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused(null)}
                        className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-accent transition-all duration-300 text-lg placeholder-white/20"
                        placeholder="john@example.com"
                    />
                </div>

                <div className="group">
                    <label className={`block text-sm font-medium transition-colors duration-300 ${focused === 'message' ? 'text-accent' : 'text-muted'}`}>Message</label>
                    <textarea 
                        rows={4}
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused(null)}
                        className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-accent transition-all duration-300 text-lg resize-none placeholder-white/20"
                        placeholder="Tell me about your project..."
                    />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-accent to-blue-600 text-white font-bold py-4 rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg shadow-accent/25 transform hover:translate-y-[-2px] active:scale-[0.98]"
                >
                    Send Message
                </button>
             </form>
          </div>
        </motion.div>

      </div>
    </Section>
  );
}
