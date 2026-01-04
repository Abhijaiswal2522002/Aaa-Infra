import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
}

export function Section({ children, className, containerClassName, ...props }: SectionProps) {
    return (
        <section className={cn("py-12 md:py-16 lg:py-24", className)} {...props}>
            <div className={cn("container-custom mx-auto", containerClassName)}>
                {children}
            </div>
        </section>
    );
}
