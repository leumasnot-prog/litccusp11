import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
  ChevronRight,
  Grid,
  Play,
  Home,
  Search,
  Clapperboard,
  User,
} from "lucide-react";

const InstagramMockup = () => {
  return (
    <div className="mx-auto w-fit" style={{ perspective: "1500px" }}>
      <div 
        className="relative group w-[340px] sm:w-[360px] h-[720px] border-[8px] border-zinc-900 rounded-[3.2rem] overflow-hidden shadow-2xl shadow-black/30 ring-[6px] ring-zinc-800/10 transition-transform duration-700 ease-out hover:[transform:rotateX(5deg)_rotateY(-15deg)_translateY(-20px)_scale(1.02)] hover:shadow-[30px_50px_80px_-20px_rgba(0,0,0,0.5)] cursor-pointer"
        style={{ 
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
          WebkitMaskImage: '-webkit-radial-gradient(white, black)'
        }}
      >
        {/* Inner clip wrapper to prevent border bleed */}
        <div className="absolute inset-0 bg-white rounded-[2.6rem] overflow-hidden">
          {/* Dynamic 3D Shine Overlay */}
          <div className="pointer-events-none absolute inset-0 z-50 bg-gradient-to-tr from-transparent via-transparent to-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay" />

        {/* Notch / Dynamic Island */}
      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[110px] h-[30px] bg-black rounded-[18px] z-50 shadow-[inset_0_-2px_4px_rgba(255,255,255,0.2)]" />

      {/* iOS Status Bar */}
      <div className="absolute top-0 w-full h-[54px] z-40 flex justify-between items-center px-7 text-black pointer-events-none">
        <span className="text-[15px] font-semibold tracking-[-0.03em] mt-1">11:39</span>
        <div className="flex gap-1.5 items-center mt-1">
          {/* cellular */}
          <div className="flex items-end gap-[2px] h-2.5 mb-[1px]">
             <div className="w-[3px] h-[5px] bg-black rounded-[1px]" />
             <div className="w-[3px] h-[7px] bg-black rounded-[1px]" />
             <div className="w-[3px] h-[9px] bg-black rounded-[1px]" />
             <div className="w-[3px] h-[11px] bg-black rounded-[1px]" />
          </div>
          {/* wifi */}
          <svg className="w-[15px] h-[15px] fill-current" viewBox="0 0 24 24"><path d="M12 3a18.9 18.9 0 0 0-11 3.5l1.5 2a16.5 16.5 0 0 1 19 0l1.5-2A18.9 18.9 0 0 0 12 3zM12 7.5A13.4 13.4 0 0 0 4.5 10l1.5 2.5a10 10 0 0 1 12 0L19.5 10A13.4 13.4 0 0 0 12 7.5zM12 12a8 8 0 0 0-5 2.5l1.5 2a5 5 0 0 1 7 0l1.5-2A8 8 0 0 0 12 12z" /></svg>
          {/* battery */}
          <div className="w-[22px] h-[11px] rounded-[4px] border border-black/50 p-[1px] flex items-center relative mb-[1px]">
            <div className="h-full bg-black rounded-[2px] w-[80%]" />
            <div className="absolute -right-[3px] w-[2px] h-[4px] bg-black/50 rounded-r-sm" />
          </div>
        </div>
      </div>

      {/* Screen Container */}
      <div className="w-full h-full bg-white text-black overflow-y-auto overflow-x-hidden scrollbar-hide pb-20 relative pt-[54px]">
        
        {/* Header - Instagram Profile */}
        <div className="flex items-center justify-between px-4 pb-2 pt-1 sticky top-0 bg-white z-20">
          <div className="flex items-center gap-1 cursor-pointer">
            <svg className="w-3.5 h-3.5 text-black" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            <span className="font-bold text-xl tracking-tight">litcc.usp</span>
            <svg className="w-3.5 h-3.5 text-black mt-1" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path></svg>
          </div>
          <div className="flex items-center gap-5">
            <svg className="w-6 h-6 text-black text-md" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 01-3.46 0"></path></svg>
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
          </div>
        </div>

        {/* Profile Details Area */}
        <div className="px-4 py-1 flex items-center justify-between mb-3">
          {/* Avatar */}
          <div className="relative shrink-0">
            <div className="w-[88px] h-[88px] rounded-full bg-gradient-to-tr from-gray-300 via-gray-200 to-gray-300 p-[2px]">
              <div className="w-full h-full bg-white rounded-full p-[3px]">
                <img src="/logo.png" alt="Profile" className="w-full h-full rounded-full object-contain bg-white" />
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="flex flex-col flex-1 pb-1 pt-2 ml-6">
            <h2 className="font-semibold text-[15px] mb-1 leading-none text-black">Liga de TCC USP-RP</h2>
            <div className="flex justify-between w-full pr-3 mt-1 text-center text-black">
              <div><div className="font-bold text-[16px] leading-tight text-left">434</div><div className="text-[13px] text-gray-500">posts</div></div>
              <div><div className="font-bold text-[16px] leading-tight text-left">6.997</div><div className="text-[13px] text-gray-500">seguidores</div></div>
              <div><div className="font-bold text-[16px] leading-tight text-left">1.170</div><div className="text-[13px] text-gray-500">seguindo</div></div>
            </div>
          </div>
        </div>
        
        {/* Bio text */}
        <div className="px-4 pb-4">
          <p className="text-[14px] text-gray-500 mb-1 leading-snug">Educação</p>
          <p className="text-[14px] leading-snug mb-1 text-black">💜 Ciência, prática e propósito<br/>✉️ Inscrições, eventos e conteúdos ↓</p>
          <div className="flex items-center gap-1.5 mt-1 text-[14px] font-semibold text-blue-900 pointer-events-none">
            <svg className="w-4 h-4 text-gray-400 -mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
            litcc.my.canva.site/encon... <span className="text-gray-500 font-normal ml-0.5 text-[13px]">e outros 3 links</span>
          </div>
        </div>

        {/* Mutual Friends */}
        <div className="px-4 mb-4 flex items-center">
          <div className="flex -space-x-2 mr-3 opacity-90">
             <div className="w-6 h-6 rounded-full border border-white bg-gray-200" />
             <div className="w-6 h-6 rounded-full border border-white bg-gray-300" />
             <div className="w-6 h-6 rounded-full border border-white bg-blue-500 text-white flex items-center justify-center pointer-events-none" />
          </div>
          <p className="text-[13px] text-black leading-tight">
            Seguido(a) por <span className="font-semibold">psi.marianac</span>,<br/><span className="font-semibold">joao.vitor.psi</span> e <span className="font-semibold">outras 32 pessoas</span>
          </p>
        </div>
        
        <div className="flex gap-1.5 px-4 mb-4 text-black">
           <button className="flex-1 bg-[#efefef] font-semibold text-[13px] py-1.5 rounded-lg flex items-center justify-center gap-1 hover:bg-gray-200">
             Seguindo <ChevronRight className="w-4 h-4 rotate-90 opacity-70" />
           </button>
           <button className="flex-1 bg-[#efefef] font-semibold text-[13px] py-1.5 rounded-lg hover:bg-gray-200">Mensagem</button>
           <a href="mailto:litcc.usp@gmail.com" className="flex-1 bg-[#efefef] font-semibold text-[13px] py-1.5 rounded-lg hover:bg-gray-200 text-center flex items-center justify-center">Email</a>
           <button className="w-9 bg-[#efefef] font-semibold py-1.5 rounded-lg flex items-center justify-center shrink-0 hover:bg-gray-200">
             <User className="w-4 h-4 ml-1" /><span className="text-[12px] font-bold ml-[1px]">+</span>
           </button>
        </div>
        
        {/* Profile Grid Tabs */}
        <div className="flex border-t border-gray-200 mt-2">
            <div className="flex-1 flex justify-center py-3 border-b-[1.5px] border-black cursor-pointer"><Grid className="w-6 h-6 text-black" strokeWidth={1.5} /></div>
            <div className="flex-1 flex justify-center py-3 cursor-pointer"><Clapperboard className="w-6 h-6 text-gray-400" strokeWidth={1.5} /></div>
            <div className="flex-1 flex justify-center py-3 cursor-pointer"><User className="w-6 h-6 text-gray-400" strokeWidth={1.5} /></div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-3 gap-[2px]">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                <div key={i} className="aspect-square bg-gray-200 relative group cursor-pointer overflow-hidden">
                    <img src={`/insta/${i}.jpg`} className="w-full h-full object-cover group-hover:opacity-90 transition-opacity" alt="Post" />
                    {i % 3 === 1 && (
                      <div className="absolute top-2 right-2">
                        <svg className="w-4 h-4 fill-white drop-shadow-md" viewBox="0 0 24 24"><path d="M4 4h16v16H4zM6 6v12h12V6z"/></svg>
                      </div>
                    )}
                </div>
            ))}
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="absolute bottom-0 w-full bg-white border-t border-gray-200 px-6 pt-3 pb-8 flex justify-between items-center z-20">
        <Home className="w-[26px] h-[26px] text-black" strokeWidth={2} />
        <Search className="w-[26px] h-[26px] text-black" strokeWidth={2.5} />
        <svg className="w-[26px] h-[26px] text-black" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path></svg>
        <Clapperboard className="w-[26px] h-[26px] text-gray-400" strokeWidth={2} />
        <div className="w-7 h-7 rounded-full border-[1.5px] border-black overflow-hidden bg-gray-100">
          <img src="/logo.png" alt="Profile" className="w-full h-full object-contain bg-white" />
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export function SocialMedia() {
  return (
    <section id="social" className="py-24 bg-[#f5f3ef] overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#08607e]/5 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#56035c]/5 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4 text-[#56035c]">
              Nossas Redes
            </p>
            <h2 className="text-4xl md:text-5xl font-medium text-[#08607e] mb-6">
              Acompanhe a LiTCC no Instagram
            </h2>
            <p className="text-lg text-[#77757b] mb-8 font-light leading-relaxed">
              Fique por dentro de tudo o que acontece na nossa liga! Divulgamos nossos eventos, reuniões de grupos de estudos, materiais de extensão e muito mais sobre o mundo da Terapia Cognitivo-Comportamental.
            </p>
            <a 
              href="https://www.instagram.com/litcc.usp?igsh=MWtxc2UzdjRpcG93eQ==" 
              target="_blank"
              className="inline-flex items-center gap-2 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-all group"
            >
              Seguir @litcc.usp
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <InstagramMockup />
        </motion.div>
      </div>
    </section>
  );
}
