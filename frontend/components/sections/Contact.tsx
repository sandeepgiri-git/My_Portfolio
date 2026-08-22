"use client";

import Section from "@/components/ui/Section";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { submitContactForm } from "@/actions/submitContact";
import toast from "react-hot-toast";
import TextReveal from "@/components/ui/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { FiMail, FiSend } from "react-icons/fi";

export default function Contact() {
  const [focused, setFocused] = useState<string | null>(null);
  const formRef = useRef<HTMLDivElement>(null);
  
  // Form State
  const [formData, setFormData] = useState({ name: "", email: "", description: "" });
  const [isLoading, setIsLoading] = useState(false);

  // 3D Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!formRef.current) return;
    const rect = formRef.current.getBoundingClientRect();
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

  // Cursor Glow Effect
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showGlow, setShowGlow] = useState(false);

  useEffect(() => {
    const handleWindowMouseMove = (e: MouseEvent) => {
        if (formRef.current) {
            const rect = formRef.current.getBoundingClientRect();
            setCursorPosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
            setShowGlow(true);
        }
    };

    const formElement = formRef.current;
    if(formElement){
        formElement.addEventListener('mousemove', handleWindowMouseMove as any);
        formElement.addEventListener('mouseleave', () => setShowGlow(false));
    }

    return () => {
        if(formElement){
            formElement.removeEventListener('mousemove', handleWindowMouseMove as any);
            formElement.removeEventListener('mouseleave', () => setShowGlow(false));
        }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.description) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    const loadingToast = toast.loading("Sending message...");

    try {
      const result = await submitContactForm(formData);
      if (result.success) {
        toast.success(result.message, { id: loadingToast });
        setFormData({ name: "", email: "", description: "" });
      } else {
        toast.error(result.message, { id: loadingToast });
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.", { id: loadingToast });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Section id="contact" className="px-6 md:px-20 py-20 relative overflow-hidden min-h-screen flex items-center">
      {/* Background decoration */}
      <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-accent-secondary/5 rounded-full blur-[100px] -z-10" />

      <div className="grid lg:grid-cols-2 gap-16 w-full max-w-6xl mx-auto items-center">
        
        {/* Left Side: Text */}
        <div className="space-y-8">
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-7xl font-heading font-bold mb-6">
              <TextReveal>Let's Build</TextReveal>
              <br />
              <span className="text-gradient">
                <TextReveal delay={0.3}>Something Epic.</TextReveal>
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Whether you have a groundbreaking idea, need a freelance developer, or just want to say hi — my inbox is always open.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <div className="flex flex-col space-y-3">
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-muted-foreground/50">Get in touch</span>
              <MagneticButton href="mailto:sandeepgiri9634@gmail.com" strength={15}>
                <div className="flex items-center gap-3 text-xl text-foreground hover:text-accent transition-colors group">
                  <FiMail className="text-accent" />
                  <span>sandeepgiri9634@gmail.com</span>
                </div>
              </MagneticButton>
              <span className="text-muted-foreground flex items-center gap-2 text-sm">
                📍 Indore, India
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Advanced Form with 3D Tilt and Glow */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="relative"
           style={{ perspective: "1000px" }}
        >
          {/* Animated gradient border */}
          <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-accent via-accent-secondary to-accent bg-[length:200%_100%] animate-aurora opacity-30 blur-sm" />
          
          {/* Form Card */}
          <motion.div 
            ref={formRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ 
                rotateX, 
                rotateY, 
                transformStyle: "preserve-3d" 
            }}
            className="relative glass rounded-3xl p-6 md:p-10 shadow-2xl overflow-hidden group"
          >
             {/* Cursor Glow */}
             <div 
                className="absolute w-[300px] h-[300px] bg-accent/15 rounded-full blur-[80px] pointer-events-none transition-opacity duration-500"
                style={{
                    left: cursorPosition.x,
                    top: cursorPosition.y,
                    transform: 'translate(-50%, -50%)',
                    opacity: showGlow ? 1 : 0
                }}
             />

             <form onSubmit={handleSubmit} className="space-y-6 relative z-10" style={{ transform: "translateZ(20px)" }}>
                <div>
                    <label className={`block text-sm font-medium transition-colors duration-300 mb-2 ${focused === 'name' ? 'text-accent' : 'text-muted-foreground'}`}>Your Name</label>
                    <motion.input 
                        whileFocus={{ scale: 1.01 }}
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused(null)}
                        className="w-full bg-white/5 border border-border/50 rounded-xl px-4 py-3 focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all duration-300 text-foreground placeholder-muted-foreground/30"
                        placeholder="John Doe"
                        disabled={isLoading}
                    />
                </div>
                
                <div>
                    <label className={`block text-sm font-medium transition-colors duration-300 mb-2 ${focused === 'email' ? 'text-accent' : 'text-muted-foreground'}`}>Email Address</label>
                    <motion.input 
                        whileFocus={{ scale: 1.01 }}
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused(null)}
                        className="w-full bg-white/5 border border-border/50 rounded-xl px-4 py-3 focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all duration-300 text-foreground placeholder-muted-foreground/30"
                        placeholder="john@example.com"
                        disabled={isLoading}
                    />
                </div>

                <div>
                    <label className={`block text-sm font-medium transition-colors duration-300 mb-2 ${focused === 'message' ? 'text-accent' : 'text-muted-foreground'}`}>Message</label>
                    <motion.textarea 
                        whileFocus={{ scale: 1.01 }}
                        rows={4}
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused(null)}
                        className="w-full bg-white/5 border border-border/50 rounded-xl px-4 py-3 focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all duration-300 resize-none text-foreground placeholder-muted-foreground/30"
                        placeholder="Tell me about your project..."
                        disabled={isLoading}
                    />
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-accent to-accent-secondary text-white font-bold py-4 rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg shadow-accent/20 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <FiSend size={16} />
                  {isLoading ? "Sending..." : "Send Message"}
                </motion.button>
             </form>
          </motion.div>
        </motion.div>

      </div>
    </Section>
  );
}
