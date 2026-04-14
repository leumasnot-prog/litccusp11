import React, { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const BentoGrid = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "grid w-full auto-rows-[22rem] grid-cols-1 gap-4 lg:grid-cols-3",
                className
            )}
        >
            {children}
        </div>
    );
};

const BentoCard = ({
    name,
    className,
    background,
    Icon,
    description,
    href,
    cta,
}: {
    name: string;
    className: string;
    background: ReactNode;
    Icon: any;
    description: string;
    href: string;
    cta: string;
}) => (
    <div
        key={name}
        className={cn(
            "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-3xl",
            // glassmorphism + design guide colors
            "bg-white/50 backdrop-blur-md border border-[#bcc7cb]/20",
            "transform-gpu transition-all duration-300 hover:shadow-2xl hover:border-[#56035c]/30",
            className
        )}
    >
        <div className="absolute inset-0 z-0">{background}</div>

        <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-8 transition-all duration-300">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#08607e]/10 text-[#08607e] transition-all duration-300 group-hover:bg-[#08607e] group-hover:text-white group-hover:scale-110">
                <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-medium text-[#08607e] mt-4">
                {name}
            </h3>
            <p className="max-w-lg text-[#77757b] font-light leading-relaxed">
                {description}
            </p>
        </div>

        {/* <div
            className={cn(
                "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
            )}
        >
            <Button
                variant="ghost"
                asChild
                size="sm"
                className="pointer-events-auto text-[#56035c] hover:bg-[#56035c]/10 rounded-xl"
            >
                <a href={href}>
                    {cta}
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                </a>
            </Button>
        </div> */}

        <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-[#56035c]/5" />
    </div>
);

export { BentoCard, BentoGrid };
