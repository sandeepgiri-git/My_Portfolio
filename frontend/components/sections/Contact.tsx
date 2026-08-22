"use client";

import Section from "@/components/ui/Section";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { submitContactForm } from "@/actions/submitContact";
import toast from "react-hot-toast";

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
      <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] -z-10" />

      <div className="grid lg:grid-cols-2 gap-16 w-full max-w-7xl mx-auto items-center">
        
        {/* Left Side: Text */}
        <div className="space-y-10">
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-7xl font-heading font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60">
              Let's Create<br />Something <span className="text-accent">Epic.</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Whether you have a groundbreaking idea or just want to say hi, my inbox is always open. Let's build the future together.
            </p>
          </motion.div>

          <div className="flex flex-col space-y-2 text-muted-foreground mt-10">
              <span className="text-sm uppercase tracking-widest font-bold opacity-50">Contact Details</span>
              <a href="mailto:sandeepgiri9634@gmail.com" className="text-xl hover:text-accent transition-colors">sandeepgiri9634@gmail.com</a>
              <span className="text-lg">Indore, India</span>
           </div>
        </div>

        {/* Right Side: Advanced Form with 3D Tilt and Glow */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="relative perspective-1000"
        >
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
            className="relative bg-secondary/10 backdrop-blur-xl border border-border/50 p-6 md:p-10 rounded-3xl shadow-2xl overflow-hidden group"
          >
             {/* Cursor Glow */}
             <div 
                className="absolute w-[300px] h-[300px] bg-accent/20 rounded-full blur-[80px] pointer-events-none transition-opacity duration-500"
                style={{
                    left: cursorPosition.x,
                    top: cursorPosition.y,
                    transform: 'translate(-50%, -50%)',
                    opacity: showGlow ? 1 : 0
                }}
             />

             <form onSubmit={handleSubmit} className="space-y-6 relative z-10" style={{ transform: "translateZ(20px)" }}>
                <div className="group">
                    <label className={`block text-sm font-medium transition-colors duration-300 ${focused === 'name' ? 'text-accent' : 'text-muted-foreground'}`}>Your Name</label>
                    <motion.input 
                        whileFocus={{ scale: 1.02, x: 5 }}
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused(null)}
                        className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-accent transition-all duration-300 text-lg placeholder-muted-foreground/20 text-foreground relative z-20"
                        placeholder="Your Name"
                        disabled={isLoading}
                    />
                </div>
                
                <div className="group">
                    <label className={`block text-sm font-medium transition-colors duration-300 ${focused === 'email' ? 'text-accent' : 'text-muted-foreground'}`}>Email Address</label>
                    <motion.input 
                        whileFocus={{ scale: 1.02, x: 5 }}
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused(null)}
                        className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-accent transition-all duration-300 text-lg placeholder-muted-foreground/20 text-foreground relative z-20"
                        placeholder="john@example.com"
                        disabled={isLoading}
                    />
                </div>

                <div className="group">
                    <label className={`block text-sm font-medium transition-colors duration-300 ${focused === 'message' ? 'text-accent' : 'text-muted-foreground'}`}>Message</label>
                    <motion.textarea 
                        whileFocus={{ scale: 1.02, x: 5 }}
                        rows={4}
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused(null)}
                        className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-accent transition-all duration-300 text-lg resize-none placeholder-muted-foreground/20 text-foreground relative z-20"
                        placeholder="Tell me about your project..."
                        disabled={isLoading}
                    />
                </div>

                <motion.button 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-accent to-blue-600 text-white font-bold py-4 rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg shadow-accent/25 relative z-20 disabled:opacity-50"
                >
                    {isLoading ? "Sending..." : "Send Message"}
                </motion.button>
             </form>
          </motion.div>
        </motion.div>

      </div>
    </Section>
  );
}
