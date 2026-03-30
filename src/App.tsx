/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Brain, 
  Cpu, 
  Database, 
  Globe, 
  Rocket, 
  Shield, 
  Zap, 
  ChevronRight, 
  Calendar,
  MapPin,
  TrendingUp,
  Award,
  Users,
  Sparkles,
  ArrowUp
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#F27D26] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#F27D26] rounded-sm flex items-center justify-center font-bold text-black">AI</div>
            <span className="font-bold tracking-tighter text-xl uppercase">Impact Summit</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest opacity-70">
            <a href="#impact" className="hover:text-[#F27D26] transition-colors">Impact</a>
            <a href="#learnings" className="hover:text-[#F27D26] transition-colors">Learnings</a>
            <a href="#research" className="hover:text-[#F27D26] transition-colors">Research</a>
            <a href="#roadmap" className="hover:text-[#F27D26] transition-colors">Roadmap</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden min-h-screen flex items-center">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-vibrant-orange/20 rounded-full blur-[120px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              x: [0, -50, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-vibrant-purple/20 rounded-full blur-[150px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, -80, 0],
              y: [0, 50, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-vibrant-blue/20 rounded-full blur-[100px]" 
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,#050505_70%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full mb-8"
            >
              <Sparkles className="w-3 h-3 text-vibrant-orange" />
              <span className="text-vibrant-orange text-[10px] font-black uppercase tracking-[0.3em]">
                India | 16–21 February 2026
              </span>
            </motion.div>
            
            <h1 className="text-[14vw] md:text-[11vw] font-display font-black leading-[0.8] uppercase tracking-tighter mb-10">
              AI Impact <br />
              <span className="text-gradient">Summit</span>
            </h1>

            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7">
                <p className="text-xl md:text-3xl text-white/70 font-medium leading-tight max-w-2xl mb-10">
                  The definitive gathering of researchers, startups, and global tech leaders shaping the future of <span className="text-white">sovereign AI</span> and enterprise deployment.
                </p>
                <div className="flex flex-wrap gap-6">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-10 py-5 bg-white text-black rounded-2xl font-black uppercase tracking-widest text-xs shadow-2xl shadow-white/10 hover:bg-vibrant-orange hover:text-white transition-all"
                  >
                    Explore Summit
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-10 py-5 glass rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all"
                  >
                    View Agenda
                  </motion.button>
                </div>
              </div>
              
              <div className="md:col-span-5 flex flex-col gap-4">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  className="glass p-8 rounded-[32px] flex items-center gap-6 group hover:border-vibrant-orange/50 transition-all"
                >
                  <div className="w-16 h-16 bg-vibrant-orange/10 rounded-2xl flex items-center justify-center text-vibrant-orange group-hover:bg-vibrant-orange group-hover:text-white transition-all">
                    <Calendar className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest font-black opacity-40 mb-1">Duration</div>
                    <div className="text-2xl font-display font-black">6 Full Days</div>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 }}
                  className="glass p-8 rounded-[32px] flex items-center gap-6 group hover:border-vibrant-purple/50 transition-all"
                >
                  <div className="w-16 h-16 bg-vibrant-purple/10 rounded-2xl flex items-center justify-center text-vibrant-purple group-hover:bg-vibrant-purple group-hover:text-white transition-all">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest font-black opacity-40 mb-1">Location</div>
                    <div className="text-2xl font-display font-black">New Delhi, India</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-40 px-6 relative">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-vibrant-orange text-xs font-black uppercase tracking-[0.5em] mb-6 block"
              >
                The Vision
              </motion.span>
              <h2 className="text-7xl md:text-8xl font-display font-black uppercase tracking-tighter leading-[0.85] mb-12">
                Overall <br /> <span className="text-gradient">Impact</span>
              </h2>
              <p className="text-xl text-white/50 leading-relaxed max-w-md">
                The summit brought together policymakers and tech leaders to redefine the Indian AI landscape.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Production Scale", desc: "AI shifting from experimentation to massive production scale across industries.", color: "from-vibrant-orange" },
                { title: "Sovereign Compute", desc: "Intense focus on building and scaling Indian compute infrastructure.", color: "from-vibrant-purple" },
                { title: "Enterprise Adoption", desc: "Rapid deployment of enterprise-grade AI solutions in traditional sectors.", color: "from-vibrant-blue" },
                { title: "Global Leadership", desc: "India emerging as a hub for responsible AI governance and innovation.", color: "from-white" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 30 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-10 rounded-[40px] hover:bg-white/10 transition-all group"
                >
                  <div className={`w-12 h-1 bg-gradient-to-r ${item.color} to-transparent mb-8 group-hover:w-full transition-all duration-500`} />
                  <h3 className="text-2xl font-display font-black uppercase mb-4">{item.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Key Learnings */}
      <section id="learnings" className="py-40 px-6 bg-white text-black rounded-[60px] relative z-10 mx-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-24">
            <span className="text-vibrant-purple text-xs font-black uppercase tracking-[0.5em] mb-4 block">Core Insights</span>
            <h2 className="text-7xl md:text-8xl font-display font-black uppercase tracking-tighter leading-none">Key Learnings</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Brain className="w-12 h-12" />, 
                title: "Agentic AI", 
                desc: "Autonomous systems capable of reasoning, planning, and executing complex tasks without human intervention.",
                color: "bg-vibrant-orange"
              },
              { 
                icon: <Globe className="w-12 h-12" />, 
                title: "Multimodal Systems", 
                desc: "Integration of text, vision, speech, and data pipelines to create more intuitive AI experiences.",
                color: "bg-vibrant-purple"
              },
              { 
                icon: <Database className="w-12 h-12" />, 
                title: "AI + Big Data", 
                desc: "Data quality and scalable infrastructure are more critical than model size for production-grade reliability.",
                color: "bg-vibrant-blue"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -20 }}
                className="bg-gray-50 p-12 rounded-[48px] border border-gray-100 transition-all group hover:shadow-2xl hover:shadow-black/5"
              >
                <div className={`w-20 h-20 ${item.color} rounded-3xl flex items-center justify-center text-white mb-10 shadow-xl group-hover:rotate-12 transition-all`}>
                  {item.icon}
                </div>
                <h3 className="text-3xl font-display font-black uppercase mb-6 tracking-tight">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-lg">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CDAC Research */}
      <section id="research" className="py-40 px-6 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-vibrant-blue text-xs font-black uppercase tracking-[0.5em] mb-6 block">Innovation Hub</span>
              <h2 className="text-7xl md:text-8xl font-display font-black uppercase tracking-tighter leading-[0.85] mb-10">CDAC Research <br /> <span className="text-gradient">& Innovation</span></h2>
              <p className="text-2xl text-white/50 mb-12 leading-relaxed">
                Shaping India's AI ecosystem through indigenous supercomputing and quantum research initiatives.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: <Cpu />, text: "Supercomputing Initiatives" },
                  { icon: <Brain />, text: "Indigenous AI Models" },
                  { icon: <Shield />, text: "Cybersecurity AI" },
                  { icon: <Zap />, text: "Quantum Research" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 glass p-6 rounded-2xl hover:bg-white/10 transition-all">
                    <div className="text-vibrant-blue">{item.icon}</div>
                    <span className="font-bold text-sm uppercase tracking-wider">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-vibrant-blue/20 to-vibrant-purple/20 blur-[100px] rounded-full" />
              <div className="grid grid-cols-2 gap-6 relative">
                <div className="space-y-6 pt-16">
                  <div className="aspect-square glass rounded-[40px] flex items-center justify-center hover:scale-105 transition-all">
                    <TrendingUp className="w-16 h-16 text-vibrant-blue" />
                  </div>
                  <div className="aspect-square glass rounded-[40px] flex items-center justify-center hover:scale-105 transition-all">
                    <Users className="w-16 h-16 text-vibrant-purple" />
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="aspect-square glass rounded-[40px] flex items-center justify-center hover:scale-105 transition-all">
                    <Award className="w-16 h-16 text-vibrant-orange" />
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-vibrant-orange to-vibrant-purple rounded-[40px] flex items-center justify-center shadow-2xl shadow-vibrant-orange/20 hover:scale-105 transition-all">
                    <Rocket className="w-16 h-16 text-black" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section - Marquee */}
      <section className="py-32 bg-white text-black overflow-hidden relative">
        <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-white to-transparent z-10" />
        
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-20 px-10">
              {["Google AI", "Microsoft", "NVIDIA", "Meta", "OpenAI", "Anthropic", "CDAC", "Reliance Jio", "Tata Elxsi", "Infosys"].map((company, j) => (
                <div key={j} className="text-5xl font-display font-black tracking-tighter uppercase opacity-20 hover:opacity-100 transition-opacity cursor-default">
                  {company}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Career Roadmap */}
      <section id="roadmap" className="py-40 px-6 bg-[#0a0a0a]">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto"
        >
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-2xl">
              <span className="text-vibrant-orange text-xs font-black uppercase tracking-[0.5em] mb-6 block">Future Ready</span>
              <h2 className="text-7xl md:text-8xl font-display font-black uppercase tracking-tighter leading-none">Career <br /> <span className="text-gradient">Roadmap</span></h2>
            </div>
            <div className="text-right">
              <div className="text-6xl font-display font-black text-vibrant-orange leading-none">2026</div>
              <div className="text-xs uppercase tracking-[0.3em] font-black opacity-40 mt-4">Strategic Evolution</div>
            </div>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: "01", title: "Branding", desc: "Optimize LinkedIn & professional branding", color: "vibrant-orange" },
              { step: "02", title: "Resume", desc: "Create ATS-ready resume & portfolio", color: "vibrant-purple" },
              { step: "03", title: "Projects", desc: "Deploy live AI projects on GitHub", color: "vibrant-blue" },
              { step: "04", title: "Certify", desc: "Earn AI industry certifications", color: "white" },
              { step: "05", title: "Interview", desc: "Weekly mock interviews & prep", color: "vibrant-orange" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="glass p-10 rounded-[40px] flex flex-col justify-between min-h-[320px] group hover:border-white/20 transition-all"
              >
                <div className={`text-6xl font-display font-black text-${item.color} opacity-20 group-hover:opacity-100 transition-all`}>{item.step}</div>
                <div>
                  <h3 className="text-2xl font-display font-black uppercase mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-32 px-6 border-t border-white/10 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-vibrant-orange/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-20 mb-24">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-vibrant-orange to-vibrant-purple rounded-xl flex items-center justify-center font-black text-black">AI</div>
                <span className="font-display font-black tracking-tighter text-3xl uppercase">Impact Summit</span>
              </div>
              <p className="text-xl text-white/40 leading-relaxed max-w-sm">
                Empowering the next generation of AI leaders through knowledge, collaboration, and innovation.
              </p>
            </div>
            
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-black mb-8 opacity-40">Navigation</h4>
              <ul className="space-y-4 text-sm font-bold uppercase tracking-widest">
                <li><a href="#impact" className="hover:text-vibrant-orange transition-colors">Impact</a></li>
                <li><a href="#learnings" className="hover:text-vibrant-purple transition-colors">Learnings</a></li>
                <li><a href="#research" className="hover:text-vibrant-blue transition-colors">Research</a></li>
                <li><a href="#roadmap" className="hover:text-vibrant-orange transition-colors">Roadmap</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-black mb-8 opacity-40">Connect</h4>
              <ul className="space-y-4 text-sm font-bold uppercase tracking-widest">
                <li><a href="#" className="hover:text-vibrant-orange transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-vibrant-purple transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-vibrant-blue transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-vibrant-orange transition-colors">Discord</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5">
            <div className="text-[10px] uppercase tracking-[0.3em] font-black opacity-20">
              © 2026 AI Impact Summit. All rights reserved.
            </div>
            <div className="flex gap-10 text-[10px] uppercase tracking-[0.3em] font-black opacity-20">
              <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-10 right-10 w-16 h-16 glass rounded-full flex items-center justify-center text-vibrant-orange hover:bg-vibrant-orange hover:text-white transition-all z-50 shadow-2xl"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
