import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { CalendarDays, MapPin, Award, ArrowRight } from "lucide-react";

// Magnetic Button Wrapper
const MagneticButton = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.3);
    y.set(middleY * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: mouseXSpring, y: mouseYSpring }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
};

export function Simposio() {
  return (
    <section id="simposio" className="relative py-32 bg-zinc-950 overflow-hidden text-neutral-200">
      {/* 1. Animated Background Mesh / Glow Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Deep Violet Blob */}
        <motion.div
          animate={{ x: [0, 120, -50, 0], y: [0, -100, 50, 0], scale: [1, 1.2, 0.9, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#56035c]/70 blur-[120px] mix-blend-screen"
        />
        {/* Teal/USP Blue Blob */}
        <motion.div
          animate={{ x: [0, -150, 80, 0], y: [0, 150, -80, 0], scale: [1, 1.1, 1.05, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-[#08607e]/60 blur-[130px] mix-blend-screen"
        />
        {/* Soft Indigo Center Highlight */}
        <motion.div
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/20 blur-[150px] pointer-events-none" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Main Glow Aurora behind the card */}
          <div className="absolute inset-[-2px] z-0 rounded-[44px] bg-gradient-to-r from-[#08607e] via-indigo-600 to-[#56035c] opacity-40 blur-2xl animate-pulse" />
          
          {/* 2. Main Glass Container */}
          <div className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 md:p-16 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden group/container z-10">
            
            {/* Subtle Inner Glows & Borders */}
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-70" />
            <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-[#08607e]/70 to-transparent" />
            
            {/* Decorative Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none" />

            {/* --- Header Content --- */}
            <div className="text-center mb-20 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
              >
                <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/90">Inscrições Abertas</span>
              </motion.div>

              <h2 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8ce0ff] via-indigo-300 to-[#e98aff] drop-shadow-sm">
                  IV Simpósio da LiTCC
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl font-light text-neutral-300 max-w-4xl mx-auto leading-relaxed border-l-4 border-l-[#08607e] pl-6 md:pl-8 text-left md:text-center md:border-l-0 md:border-t-0">
                TCC em Desenvolvimento: <span className="font-semibold text-white">Desafios e Estratégias da Infância ao Envelhecimento</span>
              </p>
            </div>

            {/* --- Bento Grid Info Blocks --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 relative z-10">
              {/* Data/Horário */}
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-8 rounded-3xl bg-black/20 border border-white/10 hover:border-[#08607e]/50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#08607e]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 border border-white/5">
                    <CalendarDays className="w-6 h-6 text-[#8ce0ff]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Data e Horário</h3>
                  <p className="text-neutral-400 font-medium">30 de Maio de 2026<br />Das 8h00 às 18h00</p>
                </div>
              </motion.div>

              {/* Local */}
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-8 rounded-3xl bg-black/20 border border-white/10 hover:border-[#56035c]/50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#56035c]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 border border-white/5">
                    <MapPin className="w-6 h-6 text-[#e98aff]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Presencial</h3>
                  <p className="text-neutral-400 font-medium">Teatro do Campus PUSP<br />Ribeirão Preto - SP</p>
                </div>
              </motion.div>

              {/* Certificação */}
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-8 rounded-3xl bg-black/20 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 border border-white/5">
                    <Award className="w-6 h-6 text-indigo-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Certificação</h3>
                  <p className="text-neutral-400 font-medium">Evento presencial com<br />emissão de Carga Horária.</p>
                </div>
              </motion.div>
            </div>

            {/* --- CTA Magnetic Button --- */}
            <div className="flex justify-center mt-12 relative z-10">
              <MagneticButton>
                <a
                  href="https://forms.gle/p5VZAH7hTCxsCXvw8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white text-zinc-950 font-extrabold text-lg overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_80px_rgba(255,255,255,0.4)] transition-all duration-500 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Garantir Vaga no Simpósio
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                  
                  {/* Subtle animated gradient inside button */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 group-hover:animate-pulse" />
                </a>
              </MagneticButton>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
