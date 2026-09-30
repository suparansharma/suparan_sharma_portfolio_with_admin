"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { StatusIndicator } from "@/components/ui/StatusIndicator";
import { portfolioData } from "@/data/portfolioData";

export function HeroContent() {
  const { hero } = portfolioData;

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
  };

  const nameParts = hero.name.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div 
      className="flex flex-col justify-center max-w-2xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
        <StatusIndicator status="online" />
        <span className="text-xs font-mono font-semibold tracking-widest uppercase text-[var(--muted-foreground)] border border-[var(--border-muted)] px-2 py-1 rounded bg-[var(--surface-muted)]">
          Software Engineer
        </span>
      </motion.div>

      <motion.h1 variants={itemVariants} className="text-display mb-4 text-[var(--foreground)]">
        <span className="block">{firstName}</span>
        <span className="text-gradient block">{lastName}</span>
      </motion.h1>

      <motion.p variants={itemVariants} className="text-body text-[var(--muted-foreground)] mb-10 max-w-lg text-lg leading-relaxed">
        Building modern web experiences from interface to production. Experienced in robust frontend engineering, scalable backends, and full-stack deployment.
      </motion.p>

      <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
        <Button 
          variant="primary" 
          size="lg" 
          className="group shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]"
          onClick={() => scrollTo("projects")}
        >
          Explore My Work
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
        <Button 
          variant="secondary" 
          size="lg" 
          className="group"
          onClick={() => scrollTo("experience")}
        >
          View Experience
          <Briefcase size={16} className="ml-2 text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors" />
        </Button>
        <a 
          href="/Suparan_Resume.pdf" 
          download="Suparan_Sharma_Resume.pdf"
          className="group inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-[var(--border)] bg-transparent hover:bg-[var(--surface-muted)] hover:border-[var(--primary)] text-[var(--foreground)] h-11 px-8"
        >
          Download CV
          <Download size={16} className="ml-2 text-[var(--muted-foreground)] group-hover:text-[var(--primary)] transition-colors" />
        </a>
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mt-10">
        <a href={`mailto:${hero.contact.email}`} className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface-muted)] border border-[var(--border-muted)] hover:border-[var(--primary)] text-sm font-mono text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--primary)]"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          {hero.contact.email}
        </a>
        <a href={`tel:${hero.contact.phone}`} className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface-muted)] border border-[var(--border-muted)] hover:border-[var(--primary)] text-sm font-mono text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--primary)]"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          {hero.contact.phone}
        </a>
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mt-6">
        {hero.contact.github && (
          <a href={hero.contact.github} target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-[var(--surface-muted)] border border-[var(--border-muted)] hover:border-[var(--foreground)] hover:bg-[var(--foreground)]/10 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-all hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
        )}
        {hero.contact.gitlab && (
          <a href={hero.contact.gitlab} target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-[var(--surface-muted)] border border-[var(--border-muted)] hover:border-[#fc6d26] hover:bg-[#fc6d26]/10 text-[var(--muted-foreground)] hover:text-[#fc6d26] transition-all hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z"/></svg>
          </a>
        )}
        {hero.contact.linkedin && (
          <a href={hero.contact.linkedin} target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-[var(--surface-muted)] border border-[var(--border-muted)] hover:border-[#0a66c2] hover:bg-[#0a66c2]/10 text-[var(--muted-foreground)] hover:text-[#0a66c2] transition-all hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
        )}
        {hero.contact.facebook && (
          <a href={hero.contact.facebook} target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-[var(--surface-muted)] border border-[var(--border-muted)] hover:border-[#1877f2] hover:bg-[#1877f2]/10 text-[var(--muted-foreground)] hover:text-[#1877f2] transition-all hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
        )}
        {hero.contact.instagram && (
          <a href={hero.contact.instagram} target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-[var(--surface-muted)] border border-[var(--border-muted)] hover:border-[#e1306c] hover:bg-[#e1306c]/10 text-[var(--muted-foreground)] hover:text-[#e1306c] transition-all hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
        )}
      </motion.div>
    </motion.div>
  );
}
