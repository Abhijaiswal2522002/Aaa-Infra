import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";
import Link from "next/link";

interface CardProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
    imageSrc?: string; // Will use for future image integration
    className?: string;
    href?: string;
}

export function Card({ title, description, icon, className, href }: CardProps) {
    return (
        <div className={cn("bg-white text-slate-800 p-6 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col items-start gap-4", className)}>
            {icon && <div className="text-[var(--color-primary)] mb-2 p-3 bg-slate-50 rounded-full">{icon}</div>}
            <h3 className="text-xl font-bold text-[var(--color-foreground)]">{title}</h3>
            <p className="text-[var(--color-secondary)] leading-relaxed flex-grow">{description}</p>
            {href && (
                <Link href={href} className="mt-4 flex items-center text-[var(--color-primary)] font-semibold hover:underline group">
                    Learn More <MoveRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
            )}
        </div>
    );
}
