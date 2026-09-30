"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Code2, Server, Database, Braces, Terminal, Layout, Layers, Box, Cpu } from "lucide-react";

export function HeroVisual() {
  return (
    <div className="relative w-full h-[450px] md:h-[500px] flex items-center justify-center lg:justify-end overflow-visible select-none">
      
      {/* Central Glowing Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[var(--primary)] blur-[60px] rounded-full w-[150px] h-[150px] -ml-[75px] -mt-[75px]"
        />
        <div className="relative z-10 flex items-center justify-center w-20 h-20 bg-[var(--surface-elevated)] border border-[var(--primary)] rounded-full shadow-[0_0_30px_rgba(34,211,238,0.3)]">
          <Cpu size={32} className="text-[var(--primary)]" />
        </div>
      </div>

      {/* Ring 1 - Inner (Frontend) */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 w-[220px] h-[220px] -ml-[110px] -mt-[110px] border border-[var(--border)] rounded-full border-dashed"
      >
        {/* React Icon */}
        <div className="absolute top-0 left-1/2 -ml-5 -mt-5">
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex items-center justify-center w-10 h-10 bg-[var(--surface)] border border-blue-500/30 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.3)] text-blue-400"
          >
            <Code2 size={18} />
          </motion.div>
        </div>
        {/* Next.js Icon */}
        <div className="absolute bottom-0 left-1/2 -ml-5 -mb-5">
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex items-center justify-center w-10 h-10 bg-[var(--surface)] border border-slate-500/30 rounded-full shadow-[0_0_15px_rgba(100,116,139,0.3)] text-slate-300"
          >
            <Layout size={18} />
          </motion.div>
        </div>
      </motion.div>

      {/* Ring 2 - Middle (Backend) */}
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 w-[340px] h-[340px] -ml-[170px] -mt-[170px] border border-[var(--border-muted)] rounded-full border-dashed"
      >
        {/* Laravel Icon */}
        <div className="absolute top-1/2 left-0 -ml-5 -mt-5">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex items-center justify-center w-10 h-10 bg-[var(--surface)] border border-red-500/30 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.3)] text-red-400"
          >
            <Server size={18} />
          </motion.div>
        </div>
        {/* Node.js Icon */}
        <div className="absolute top-1/2 right-0 -mr-5 -mt-5">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex items-center justify-center w-10 h-10 bg-[var(--surface)] border border-green-500/30 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.3)] text-green-400"
          >
            <Braces size={18} />
          </motion.div>
        </div>
      </motion.div>

      {/* Ring 3 - Outer (Database & DevOps) */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 w-[460px] h-[460px] -ml-[230px] -mt-[230px] border border-[var(--border-muted)] opacity-50 rounded-full border-dashed"
      >
        {/* Database Icon */}
        <div className="absolute bottom-[10%] left-[15%] -ml-5 -mt-5">
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="flex items-center justify-center w-10 h-10 bg-[var(--surface)] border border-emerald-500/30 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.3)] text-emerald-400"
          >
            <Database size={18} />
          </motion.div>
        </div>
        {/* Terminal/DevOps Icon */}
        <div className="absolute top-[10%] right-[15%] -ml-5 -mt-5">
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="flex items-center justify-center w-10 h-10 bg-[var(--surface)] border border-[var(--primary)]/30 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.3)] text-[var(--primary)]"
          >
            <Terminal size={18} />
          </motion.div>
        </div>
      </motion.div>

    </div>
  );
}
