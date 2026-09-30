"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Mail, MapPin, Phone, Briefcase, GraduationCap, Code, Server, Database, Globe, Calendar, TerminalSquare, SearchCode, ShieldCheck, User, MonitorCog, Store, Layout, Rocket, MessageSquare, ArrowRight } from "lucide-react";
import { FiGithub as Github, FiLinkedin as Linkedin } from "react-icons/fi";
import AnimatedBackground from "@/components/AnimatedBackground";
import { portfolioData } from "@/data/portfolioData";
import { Hero } from "@/components/hero/Hero";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Portfolio() {
  const { hero, about, services, skills, experience, projects, education } = portfolioData;

  return (
    <main className="min-h-screen relative text-slate-200 selection:bg-sky-500/30 font-sans pb-20">
      <AnimatedBackground />

      <Hero />

      <div className="max-w-5xl mx-auto px-4 space-y-32 mt-20">
        
        {/* About Section */}
        <motion.section 
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <SectionTitle icon={<User className="text-[var(--primary)]" />} title="About Me" />
          
          <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
            <motion.div 
              variants={fadeIn}
              className="lg:w-1/3 w-full max-w-sm"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-[var(--primary)] to-purple-600 rounded-3xl blur-[20px] opacity-20 group-hover:opacity-40 transition duration-700" />
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-[var(--border-muted)] group-hover:border-[var(--primary)]/50 transition-colors bg-[var(--surface-elevated)] p-2">
                  <div className="w-full h-full rounded-xl overflow-hidden relative bg-black/20">
                    <img 
                      src={about.image} 
                      alt={hero.name} 
                      className="object-cover w-full h-full transition-all duration-700 scale-100 group-hover:scale-105" 
                    />
                    {/* Inner glowing ring overlay */}
                    <div className="absolute inset-0 rounded-xl shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] pointer-events-none" />
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn} className="lg:w-2/3 space-y-5 text-slate-400 leading-relaxed text-[15px] lg:text-base text-justify lg:text-left">
              {about.paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? "text-[var(--foreground)] font-medium text-lg leading-snug" : ""}>
                  {p}
                </p>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section 
          id="services"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <SectionTitle icon={<Rocket className="text-[var(--primary)]" />} title="What I Do" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const icons: Record<string, React.ReactNode> = {
                MonitorCog: <MonitorCog size={28} />,
                Store: <Store size={28} />,
                Layout: <Layout size={28} />,
                Briefcase: <Briefcase size={28} />
              };
              return (
                <ServiceCard 
                  key={index}
                  icon={icons[service.icon] || <Code size={28} />}
                  title={service.title}
                  desc={service.desc}
                />
              );
            })}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <SectionTitle icon={<TerminalSquare className="text-sky-400" />} title="Technical Arsenal" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const icons = [<Code key="1" size={24} />, <Server key="2" size={24} />, <Database key="3" size={24} />, <Globe key="4" size={24} />];
              return (
                <SkillCard 
                  key={index}
                  icon={icons[index % icons.length]} 
                  title={skill.title} 
                  skills={skill.skills} 
                />
              );
            })}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          id="experience"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <SectionTitle icon={<Briefcase className="text-sky-400" />} title="Professional Experience" />
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <ExperienceCard 
                key={index}
                role={exp.role}
                company={exp.company}
                date={exp.date}
                location={exp.location}
                bullets={exp.bullets}
              />
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <SectionTitle icon={<SearchCode className="text-sky-400" />} title="Featured Projects" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index}
                title={project.title}
                tech={project.tech}
                desc={project.desc}
              />
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          id="education"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <SectionTitle icon={<GraduationCap className="text-sky-400" />} title="Education" />
          <div className="grid grid-cols-1 gap-6">
            {education.map((edu, index) => (
              <motion.div key={index} variants={fadeIn} className="glass-card p-6 rounded-2xl flex flex-col md:flex-row justify-between md:items-center gap-4 hover:border-sky-500/50 transition-colors">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                  <p className="text-sky-400">{edu.institution}</p>
                  <p className="text-sm text-slate-400 mt-2">CGPA: {edu.cgpa}</p>
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-sm bg-slate-800/50 px-4 py-2 rounded-full w-fit">
                  <Calendar size={16} />
                  {edu.date}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Hire Me CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative mt-32 mb-20 p-10 md:p-16 rounded-3xl overflow-hidden border border-[var(--primary)]/30 bg-[var(--surface-elevated)] text-center shadow-[0_0_50px_rgba(34,211,238,0.1)]"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary)]/10 via-transparent to-purple-500/10" />
          
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <div className="w-16 h-16 bg-[var(--primary)]/20 rounded-full flex items-center justify-center mb-6 text-[var(--primary)] shadow-[0_0_20px_var(--primary)]">
              <MessageSquare size={32} />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Ready to start a project?
            </h2>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              Whether you need a POS, a complex Management System, or a dynamic website, I am available for freelance work and full-time opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href={`mailto:${hero.contact.email}`}
                className="group inline-flex items-center justify-center rounded-full text-base font-medium transition-all focus-visible:outline-none bg-[var(--primary)] text-[var(--primary-foreground)] h-14 px-10 shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:scale-105"
              >
                Hire Me Now
                <ArrowRight size={18} className="ml-3 group-hover:translate-x-2 transition-transform" />
              </a>
              <div className="flex items-center gap-3">
                <span className="text-slate-500 font-medium hidden sm:inline">or</span>
                <a 
                  href={`tel:${hero.contact.phone}`}
                  className="group inline-flex items-center justify-center rounded-full text-base font-medium transition-all focus-visible:outline-none bg-[var(--surface-muted)] border border-[var(--border-muted)] hover:border-[var(--primary)] text-[var(--foreground)] h-14 px-8 hover:scale-105"
                >
                  <Phone size={18} className="mr-3 text-[var(--muted-foreground)] group-hover:text-[var(--primary)] transition-colors" />
                  {hero.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </motion.section>

      </div>
    </main>
  );
}

// Subcomponents

function ServiceCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 25 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      variants={fadeIn}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative perspective-[1000px] h-full"
    >
      <div 
        style={{ transform: "translateZ(20px)" }}
        className="glass-card p-8 rounded-2xl flex flex-col h-full group hover:border-[var(--primary)]/50 transition-colors duration-300 bg-[var(--surface-elevated)] cursor-default shadow-lg hover:shadow-2xl hover:shadow-[var(--primary)]/10"
      >
        <div className="w-14 h-14 rounded-xl bg-[var(--surface-muted)] border border-[var(--border-muted)] group-hover:border-[var(--primary)]/50 flex items-center justify-center text-[var(--muted-foreground)] group-hover:text-[var(--primary)] transition-colors mb-6 shadow-inner">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--primary)] transition-colors">{title}</h3>
        <p className="text-[15px] text-slate-400 leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

function ContactBadge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 bg-slate-800/80 px-4 py-2 rounded-full border border-slate-700/50 hover:border-sky-500/50 transition-colors cursor-pointer hover:bg-slate-800">
      <span className="text-sky-400">{icon}</span>
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}

function SectionTitle({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-10 border-b border-slate-800 pb-4">
      <div className="bg-sky-500/10 p-3 rounded-xl border border-sky-500/20">
        {icon}
      </div>
      <h2 className="text-3xl font-bold text-white tracking-wide">{title}</h2>
    </div>
  );
}

function SkillCard({ icon, title, skills }: { icon: React.ReactNode; title: string; skills: string }) {
  return (
    <motion.div 
      variants={fadeIn}
      whileHover={{ y: -5, scale: 1.02 }}
      className="glass-card p-6 rounded-2xl border-t-2 border-t-sky-500/50 hover:shadow-[0_0_30px_-5px_rgba(56,189,248,0.3)] transition-all"
    >
      <div className="text-sky-400 mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed">{skills}</p>
    </motion.div>
  );
}

function ExperienceCard({ role, company, date, location, bullets }: any) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 30 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div variants={fadeIn} className="relative pl-8 md:pl-0 perspective-[1200px]">
      <div className="hidden md:block absolute left-[8.5rem] top-0 bottom-0 w-px bg-slate-800" />
      <div className="md:grid md:grid-cols-[8rem_1fr] gap-8">
        <div className="mb-4 md:mb-0 text-sm text-slate-500 font-medium pt-1">
          {date}
        </div>
        
        <motion.div 
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative z-10 cursor-default"
        >
          <div 
            style={{ transform: "translateZ(30px)" }}
            className="glass-card p-6 md:p-8 rounded-2xl relative group hover:border-[var(--primary)]/40 transition-colors shadow-2xl bg-[var(--surface-elevated)]"
          >
            <div className="absolute left-[-2.3rem] md:left-[-2.35rem] top-6 w-3 h-3 rounded-full bg-[var(--primary)] shadow-[0_0_15px_var(--primary)] z-10" />
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[var(--primary)] transition-colors">{role}</h3>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
              <span className="text-[var(--primary)] font-medium">{company}</span>
              <span className="hidden sm:inline text-slate-600">•</span>
              <span className="text-sm text-slate-500 flex items-center gap-1"><MapPin size={14} />{location}</span>
            </div>
            <ul className="space-y-3 mt-4">
              {bullets.map((b: string, i: number) => (
                <li key={i} className="text-sm text-slate-400 flex items-start gap-3">
                  <span className="text-[var(--primary)] mt-1 opacity-70"><ShieldCheck size={14} /></span>
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ title, tech, desc }: { title: string; tech: string; desc: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 25 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      variants={fadeIn}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative perspective-[1200px] h-full"
    >
      <div 
        style={{ transform: "translateZ(40px)" }}
        className="glass-card p-6 rounded-2xl flex flex-col h-full group hover:border-[var(--primary)]/60 transition-colors duration-300 relative overflow-hidden bg-[var(--surface-elevated)] shadow-2xl cursor-pointer"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary)]/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-[var(--primary)]/25 transition-all duration-500 pointer-events-none" />
        
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--primary)] transition-colors">{title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.split(", ").map((t, idx) => (
            <span key={idx} className="text-[10px] font-mono text-[var(--primary)]/90 bg-[var(--primary)]/10 px-2 py-1 rounded-md border border-[var(--primary)]/20 shadow-[0_0_10px_transparent] group-hover:shadow-[0_0_10px_rgba(34,211,238,0.2)] transition-shadow">
              {t}
            </span>
          ))}
        </div>
        <p className="text-sm text-slate-400 leading-relaxed flex-1 mt-2">{desc}</p>
        
        <div className="mt-6 pt-4 border-t border-[var(--border-muted)] flex justify-between items-center group-hover:border-[var(--primary)]/30 transition-colors">
          <span className="text-sm font-medium text-slate-400 group-hover:text-white transition-colors flex items-center gap-2">
            View Details <Globe size={14} className="group-hover:text-[var(--primary)] transition-colors" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}
