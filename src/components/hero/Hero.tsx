"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { HeroContent } from "./HeroContent";
import { HeroVisual } from "./HeroVisual";
import { Container } from "@/components/ui/Container";

export function Hero() {
  const scrollToNext = () => {
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = skillsSection.getBoundingClientRect().top;
      
      window.scrollTo({
        top: elementRect - bodyRect - offset,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-20 pb-10 overflow-hidden">
      
      <Container className="relative z-10 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
          <HeroContent />
          
          {/* Visual section hidden on very small screens, scales down on mobile */}
          <div className="hidden sm:block">
            <HeroVisual />
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-0 right-0 flex justify-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <button 
          onClick={scrollToNext}
          className="flex flex-col items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] rounded-lg p-2"
          aria-label="Scroll to next section"
        >
          <span className="text-[0.65rem] font-mono tracking-widest uppercase text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors">
            Explore the journey
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={16} className="text-[var(--muted-foreground)] group-hover:text-[var(--primary)] transition-colors" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}
