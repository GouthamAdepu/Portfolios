"use client";

import { motion } from "framer-motion";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="relative min-h-screen flex flex-col bg-background text-foreground overflow-hidden">
      {/* Animated background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-background to-background">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
          animate={{
            x: mousePosition.x - 250,
            y: mousePosition.y - 250,
          }}
          transition={{ type: "spring", damping: 15, stiffness: 200 }}
          style={{
            background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
          }}
        />
      </div>

      <Navigation />
      
      <div className="container mx-auto px-4 flex-grow">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}