"use client";

import * as React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navigationItems } from "@/data/navigation";
import { StatusIndicator } from "@/components/ui/StatusIndicator";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [activeId, setActiveId] = React.useState("home");
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    // Intersection Observer for scrollspy
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    navigationItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => document.removeEventListener("keydown", handleEscape);
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled 
            ? "bg-[var(--surface-elevated)] backdrop-blur-xl border-b border-[var(--border)] shadow-lg" 
            : "bg-transparent"
        )}
      >
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px] origin-left bg-[var(--primary)] z-50"
          style={{ scaleX }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div 
              className="flex-shrink-0 cursor-pointer flex items-center gap-4"
              onClick={() => scrollTo("home")}
              role="button"
              tabIndex={0}
            >
              <span className="font-mono font-bold text-xl tracking-tighter text-[var(--foreground)]">
                SS
              </span>
              <StatusIndicator status="online" label="SYSTEM ONLINE" className="hidden sm:flex" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 bg-[var(--surface-muted)] px-2 py-1 rounded-full border border-[var(--border-muted)]">
              {navigationItems.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={cn(
                      "relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors",
                      isActive ? "text-[var(--primary-foreground)]" : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 bg-[var(--primary)] rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[var(--foreground)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] rounded-md"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Panel */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-40 bg-[var(--background)] pt-20 px-4 pb-6 md:hidden overflow-y-auto"
        >
          <div className="flex flex-col space-y-2">
            {navigationItems.map((item) => {
              const isActive = activeId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={cn(
                    "flex items-center w-full px-4 py-4 rounded-xl text-left text-lg font-medium transition-colors",
                    isActive 
                      ? "bg-[var(--accent)] text-[var(--accent-foreground)] border border-[var(--primary)]/20" 
                      : "text-[var(--muted-foreground)] hover:bg-[var(--surface-elevated)] hover:text-[var(--foreground)] border border-transparent"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className={cn("w-2 h-2 rounded-full mr-4", isActive ? "bg-[var(--primary)]" : "bg-transparent")} />
                  {item.label}
                </button>
              );
            })}
          </div>
        </motion.div>
      )}
    </>
  );
}
