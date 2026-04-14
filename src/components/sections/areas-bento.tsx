import React from "react";
import {
    BookOpenIcon,
    SearchIcon,
    UsersIcon,
    CalendarIcon,
    Share2Icon
} from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const areas = [
    {
        Icon: BookOpenIcon,
        name: "Ensino",
        description: "Grupos de estudos e formação teórica em TCC baseada em evidências.",
        href: "#projetos",
        cta: "Ver grupos",
        background: <div className="absolute -right-10 -top-10 w-72 h-72 bg-gradient-to-br from-[#08607e]/30 to-transparent blur-3xl rounded-full transform-gpu transition-all duration-500 group-hover:scale-110" />,
        className: "lg:row-start-1 lg:row-end-4 lg:col-start-1 lg:col-end-2",
    },
    {
        Icon: SearchIcon,
        name: "Pesquisa",
        description: "Investigação científica e produção acadêmica no contexto universitário.",
        href: "#projetos",
        cta: "Ver linhas",
        background: <div className="absolute -right-4 -top-4 w-48 h-48 bg-gradient-to-br from-[#56035c]/20 to-transparent blur-2xl rounded-full transform-gpu transition-all duration-500 group-hover:scale-110" />,
        className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
        Icon: UsersIcon,
        name: "Extensão",
        description: "Ações práticas e produção de cartilhas educativas para a comunidade.",
        href: "#materiais",
        cta: "Ver materiais",
        background: <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-gradient-to-tl from-[#08607e]/25 to-transparent blur-3xl rounded-full transform-gpu transition-all duration-500 group-hover:scale-110" />,
        className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
    {
        Icon: CalendarIcon,
        name: "Eventos",
        description: "Organização de simpósios, palestras e minicursos científicos.",
        href: "#projetos",
        cta: "Cronograma",
        background: <div className="absolute left-10 -bottom-10 w-56 h-56 bg-gradient-to-tr from-[#56035c]/25 to-[#08607e]/10 blur-3xl rounded-full transform-gpu transition-all duration-500 group-hover:scale-110" />,
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-3",
    },
    {
        Icon: Share2Icon,
        name: "Marketing",
        description: "Divulgação científica e gestão de mídias sociais da liga.",
        href: "https://www.instagram.com/litcc.usp/",
        cta: "Ver Instagram",
        background: <div className="absolute -right-4 -top-4 w-56 h-56 bg-gradient-to-br from-[#08607e]/20 to-[#56035c]/10 blur-2xl rounded-full transform-gpu transition-all duration-500 group-hover:scale-110" />,
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-3 lg:row-end-4",
    },
];

export function AreasBento() {
    return (
        <section id="areas" className="py-20 bg-[#f5f3ef]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-xs font-medium uppercase tracking-[0.3em] mb-4 text-[#56035c]">Áreas de Atuação</p>
                    <h2 className="text-4xl md:text-5xl font-medium text-[#08607e]">Nossas Frentes de Trabalho</h2>
                </div>
                <BentoGrid className="lg:grid-rows-3 lg:grid-cols-3">
                    {areas.map((area) => (
                        <BentoCard
                            key={area.name}
                            name={area.name}
                            className={area.className}
                            background={area.background}
                            Icon={area.Icon}
                            description={area.description}
                            href={area.href}
                            cta={area.cta}
                        />
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
}
