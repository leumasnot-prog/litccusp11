import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import {
  BookOpen,
  Users,
  Search,
  Calendar,
  Megaphone,
  Settings,
  Download,
  ExternalLink,
  Mail,
  Instagram,
  Youtube,
  MessageCircle,
  ChevronRight,
  Menu,
  X,
  ArrowUpRight,
  GraduationCap,
  FlaskConical,
  HandHelping
} from 'lucide-react';

import { BackgroundGradientAnimation } from './components/ui/background-gradient-animation';
import { AreasBento } from './components/sections/areas-bento';
import { SocialMedia } from './components/sections/social-media';
import { Simposio } from './components/sections/simposio';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Quem Somos', href: '#quem-somos' },
    { name: 'Simpósio', href: '#simposio' },
    { name: 'Áreas', href: '#areas' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="LiTCC Logo" className="w-10 h-10 object-contain" />
          <span className="font-medium text-xl tracking-tighter text-litcc-teal">LiTCC<span className="text-litcc-purple">.USP</span></span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-litcc-gray hover:text-litcc-teal transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-litcc-teal" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-gray-100 p-6 md:hidden flex flex-col items-center gap-2 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-litcc-gray w-full text-center py-4 border-b border-gray-100 last:border-0 hover:text-litcc-teal transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <BackgroundGradientAnimation
        gradientBackgroundStart="rgba(245, 243, 239, 1)"
        gradientBackgroundEnd="rgba(188, 199, 203, 0.4)"
        firstColor="8, 96, 126"
        secondColor="86, 3, 92"
        thirdColor="125, 6, 81"
        fourthColor="188, 199, 203"
        fifthColor="245, 243, 239"
        pointerColor="8, 96, 126"
        containerClassName="min-h-screen w-full"
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-12 items-center relative z-20 min-h-screen pt-28 pb-8 md:py-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left flex flex-col items-center md:items-start order-1"
          >

            <h1 className="text-[42px] leading-[1.1] md:text-7xl font-medium mb-4 tracking-tight mt-6 md:mt-0">
              Unindo <span className="text-litcc-teal">Ciência</span> e <br className="hidden md:block" /> <span className="text-white bg-litcc-purple px-2 rounded-xl inline-block mt-2 md:mt-0">Prática</span> em TCC
            </h1>
            <p className="text-lg text-litcc-gray mb-6 max-w-lg leading-relaxed font-light mx-auto md:mx-0">
              A Liga de Terapias Cognitivo-Comportamentais da USP-RP é um espaço de excelência para o desenvolvimento acadêmico, clínico e científico.
            </p>
            <div className="hidden md:flex flex-wrap gap-4 justify-start">
              <a href="#quem-somos" className="bg-litcc-teal text-white px-8 py-4 rounded-2xl font-medium flex items-center gap-2 hover:bg-litcc-purple transition-all group shadow-xl shadow-litcc-teal/20 w-fit">
                Conheça a Liga <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center mt-2 md:mt-0 order-2"
          >
            <div className="relative w-[280px] h-[280px] md:w-full md:max-w-lg md:aspect-square flex items-center justify-center">
              <img src="/logo.png" alt="LiTCC Logo" className="w-full md:w-[80%] h-auto object-contain animate-float drop-shadow-2xl" />
            </div>
          </motion.div>

          {/* Mobile Button - Appears below Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex md:hidden flex-wrap gap-4 justify-center w-full order-3"
          >
            <a href="#quem-somos" className="bg-litcc-teal text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-litcc-purple transition-all group shadow-xl shadow-litcc-teal/20 w-fit">
              Conheça a Liga <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </BackgroundGradientAnimation>
    </section >
  );
};

const SectionHeader = ({ title, subtitle, light = false }: { title: string, subtitle: string, light?: boolean }) => (
  <div className="text-center mb-16">
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-xs font-bold uppercase tracking-[0.3em] mb-4 ${light ? 'text-white/60' : 'text-litcc-purple'}`}
    >
      {subtitle}
    </motion.p>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className={`text-4xl md:text-5xl font-bold ${light ? 'text-white' : 'text-litcc-teal'}`}
    >
      {title}
    </motion.h2>
  </div>
);

const QuemSomos = () => {
  return (
    <section id="quem-somos" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="h-64 bg-litcc-teal/5 rounded-3xl flex items-center justify-center p-8 border border-litcc-teal/10">
                <div className="text-center">
                  <div className="text-4xl font-medium text-litcc-teal mb-2">10+</div>
                  <div className="text-sm text-litcc-gray font-light">Anos de História</div>
                </div>
              </div>
              <div className="h-48 bg-litcc-purple/5 rounded-3xl flex items-center justify-center p-8 border border-litcc-purple/10">
                <Users className="w-12 h-12 text-litcc-purple" />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="h-48 bg-litcc-burgundy/5 rounded-3xl flex items-center justify-center p-8 border border-litcc-burgundy/10">
                <FlaskConical className="w-12 h-12 text-litcc-burgundy" />
              </div>
              <div className="h-64 bg-litcc-silver/10 rounded-3xl flex items-center justify-center p-8 border border-litcc-silver/20">
                <div className="text-center">
                  <div className="text-3xl font-medium text-litcc-teal mb-2">LaPPIC</div>
                  <div className="text-xs text-litcc-gray font-light uppercase tracking-tighter">Vínculo Institucional</div>
                </div>
              </div>
            </div>
          </motion.div>

          <div>
            <SectionHeader title="Excelência Acadêmica" subtitle="Quem Somos" />
            <div className="space-y-6 text-litcc-gray leading-relaxed">
              <p>
                A Liga de Terapias Cognitivo-Comportamentais (LiTCC) é uma organização estudantil vinculada à Faculdade de Filosofia, Ciências e Letras de Ribeirão Preto (FFCLRP-USP).
              </p>
              <p>
                Nosso propósito é fomentar o estudo aprofundado da TCC, integrando alunos de graduação e pós-graduação em atividades que transcendem a sala de aula regular, sempre sob a supervisão de docentes renomados.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-litcc-teal/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="text-litcc-teal" />
                  </div>
                  <div>
                    <h4 className="font-bold text-litcc-teal">Missão</h4>
                    <p className="text-sm">Promover a formação ética e científica em TCC.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-litcc-purple/10 flex items-center justify-center shrink-0">
                    <Search className="text-litcc-purple" />
                  </div>
                  <div>
                    <h4 className="font-bold text-litcc-purple">Visão</h4>
                    <p className="text-sm">Ser referência nacional em ligas acadêmicas de psicologia.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


const Projetos = () => {
  const [filter, setFilter] = useState('Todos');
  const categories = ['Todos', 'Estudo', 'Eventos', 'Extensão'];

  const projects = [
    { title: 'Grupo de Estudos Avançados', cat: 'Estudo', size: 'col-span-2 row-span-2', img: 'https://picsum.photos/seed/study/800/600' },
    { title: 'Simpósio de TCC 2024', cat: 'Eventos', size: 'col-span-1 row-span-1', img: 'https://picsum.photos/seed/event/400/300' },
    { title: 'Atendimento Comunitário', cat: 'Extensão', size: 'col-span-1 row-span-2', img: 'https://picsum.photos/seed/clinic/400/600' },
    { title: 'Workshop de Ansiedade', cat: 'Eventos', size: 'col-span-1 row-span-1', img: 'https://picsum.photos/seed/workshop/400/300' },
  ];

  const filteredProjects = filter === 'Todos' ? projects : projects.filter(p => p.cat === filter);

  return (
    <section id="projetos" className="py-24 bg-litcc-teal text-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader title="Impacto e Inovação" subtitle="Projetos e Atividades" light />

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${filter === cat ? 'bg-white text-litcc-teal' : 'bg-white/10 text-white hover:bg-white/20'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj, idx) => (
              <motion.div
                layout
                key={proj.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`${proj.size} relative rounded-3xl overflow-hidden group cursor-pointer`}
              >
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-litcc-teal/90 via-transparent to-transparent p-8 flex flex-col justify-end">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/70 mb-2">{proj.cat}</span>
                  <h4 className="text-xl font-bold leading-tight">{proj.title}</h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Materiais = () => {
  const items = [
    { title: 'E-book: Introdução à TCC', type: 'PDF', size: '2.4 MB' },
    { title: 'Cartilha: Manejo de Ansiedade', type: 'PDF', size: '1.8 MB' },
    { title: 'Guia de Prática Clínica', type: 'PDF', size: '3.1 MB' },
    { title: 'Protocolo de Depressão', type: 'PDF', size: '2.2 MB' },
  ];

  return (
    <section id="materiais" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader title="Biblioteca Digital" subtitle="Materiais e Recursos" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-3xl border border-litcc-silver/30 hover:border-litcc-teal transition-all group"
            >
              <div className="w-12 h-12 bg-litcc-offwhite rounded-xl flex items-center justify-center mb-6 group-hover:bg-litcc-teal/10 transition-colors">
                <BookOpen className="text-litcc-teal" />
              </div>
              <h4 className="font-medium text-litcc-teal mb-2 line-clamp-2">{item.title}</h4>
              <div className="flex justify-between items-center text-xs text-litcc-gray mb-6 font-light">
                <span>{item.type}</span>
                <span>{item.size}</span>
              </div>
              <button className="w-full py-3 rounded-xl bg-litcc-offwhite text-litcc-teal font-medium text-sm flex items-center justify-center gap-2 hover:bg-litcc-teal hover:text-white transition-all">
                <Download className="w-4 h-4" /> Download
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contato" className="bg-litcc-purple text-white pt-24 pb-12 relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-litcc-teal/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img src="/logo.png" alt="LiTCC Logo" className="w-12 h-12 object-contain" />
              <span className="font-bold text-2xl tracking-tighter">LiTCC<span className="text-litcc-silver">.USP</span></span>
            </div>
            <p className="text-white/70 max-w-md mb-8 leading-relaxed">
              Liga de Terapias Cognitivo-Comportamentais da USP Ribeirão Preto.
              Fomentando a ciência psicológica com ética e rigor acadêmico.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-lg shadow-black/5 border border-white/20 w-fit">
                <img src="/usplogo.png" alt="USP Logo" className="h-12 object-contain" />
                <div className="border-l border-gray-200 pl-4">
                  <p className="text-[10px] uppercase tracking-widest text-litcc-gray font-bold mb-1">Entidade Vinculada</p>
                  <p className="text-sm font-bold text-litcc-teal">USP Ribeirão Preto</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="https://www.instagram.com/litcc.usp?igsh=MWtxc2UzdjRpcG93eQ==" target="_blank" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-600 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="https://m.youtube.com/@ligadeterapiascognitivo-co3123?fbclid=PAZnRzaARLMd1leHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAaem3KD9Q_CT0WYtxfycdaPWvJrxeQezvMWr57BIf8J2XEbp2O-3vJDWe8v2tg_aem_n-7CQKFgB2tI8MUBGC_blA" target="_blank" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition-colors"><Youtube className="w-5 h-5" /></a>
              <a href="https://chat.whatsapp.com/EAOs277dhmhIcTyOxS0ARR" target="_blank" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500 transition-colors"><MessageCircle className="w-5 h-5" /></a>
              <a href="mailto:litcc.usp@gmail.com" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-litcc-teal transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-white/70 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#quem-somos" className="hover:text-white transition-colors">Quem Somos</a></li>
              <li><a href="#areas" className="hover:text-white transition-colors">Áreas de Atuação</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Institucional</h4>
            <ul className="space-y-4 text-white/70 text-sm">
              <li><a href="https://www.ffclrp.usp.br/" target="_blank" className="hover:text-white transition-colors flex items-center gap-2">FFCLRP-USP <ExternalLink className="w-3 h-3" /></a></li>
              <li><a href="#" className="hover:text-white transition-colors">LaPPIC</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/40 font-medium uppercase tracking-widest">
          <p>© 2024 LiTCC USP-RP. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Popup ---
const NovidadePopup = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-zinc-900 border border-white/20 rounded-3xl p-6 shadow-[0_0_80px_rgba(86,3,92,0.5)] max-w-lg w-full relative my-auto max-h-[95vh] overflow-y-auto scrollbar-hide"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-red-500 transition-colors text-white z-50 shadow-lg"
            >
              <X className="w-4 h-4" />
            </button>
            
            <div className="absolute -top-4 -left-4 bg-red-500 text-white text-[11px] font-extrabold px-5 py-2 rounded-full animate-pulse shadow-[0_0_20px_rgba(239,68,68,0.6)] z-50 border border-red-400">
              NOVIDADE!
            </div>

            <div className="rounded-2xl overflow-hidden mb-6 border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.8)] mt-2 relative">
              <img 
                src="/formulario do simposio.png" 
                alt="Formulário do Simpósio" 
                className="w-full h-auto max-h-[350px] object-cover object-top hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 text-white font-bold text-lg drop-shadow-lg">
                Inscrições Abertas!
              </div>
            </div>

            <div className="text-center text-white mb-6">
              <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#8ce0ff] to-[#e98aff]">
                IV Simpósio da LiTCC
              </h3>
              <p className="text-sm text-neutral-300">
                Acesse agora para garantir sua vaga e participe do maior evento presencial da Liga de TCC neste campus.
              </p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={onClose}
                className="flex-1 px-4 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-colors text-sm"
              >
                Agora Não
              </button>
              <a
                href="https://forms.gle/p5VZAH7hTCxsCXvw8"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex-1 px-4 py-3 rounded-full bg-gradient-to-r from-[#08607e] to-[#56035c] text-white font-bold shadow-lg hover:shadow-[0_0_30px_rgba(86,3,92,0.6)] hover:scale-105 transition-all text-center text-sm flex justify-center items-center gap-2"
              >
                Garantir Vaga <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- Main App ---

export default function App() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <div className="min-h-screen selection:bg-litcc-teal selection:text-white">
      <NovidadePopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
      <Navbar />
      <main>
        <Hero />
        <Simposio />
        <QuemSomos />
        <AreasBento />
        {/* <Projetos /> */}
        {/* <Materiais /> */}
        <SocialMedia />
      </main>
      <Footer />

      {/* Floating Action Button */}
      <motion.a
        href="#contato"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-14 h-14 bg-litcc-teal text-white rounded-full shadow-2xl flex items-center justify-center z-40 hover:bg-litcc-purple transition-colors"
      >
        <Mail className="w-6 h-6" />
      </motion.a>
    </div>
  );
}
