"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionCardProps {
  href: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: "primary" | "secondary" | "accent" | "gold" | "spring" | "summer";
  stats?: string;
  index?: number;
}

const colorClasses = {
  primary: {
    bg: "bg-lumina-primary/10",
    border: "border-lumina-primary/30",
    text: "text-lumina-primary",
    glow: "hover:shadow-lumina-primary/20",
  },
  secondary: {
    bg: "bg-lumina-secondary/10",
    border: "border-lumina-secondary/30",
    text: "text-lumina-secondary",
    glow: "hover:shadow-lumina-secondary/20",
  },
  accent: {
    bg: "bg-lumina-accent/10",
    border: "border-lumina-accent/30",
    text: "text-lumina-accent",
    glow: "hover:shadow-lumina-accent/20",
  },
  gold: {
    bg: "bg-lumina-gold/10",
    border: "border-lumina-gold/30",
    text: "text-lumina-gold",
    glow: "hover:shadow-lumina-gold/20",
  },
  spring: {
    bg: "bg-spring/10",
    border: "border-spring/30",
    text: "text-spring",
    glow: "hover:shadow-spring/20",
  },
  summer: {
    bg: "bg-summer/10",
    border: "border-summer/30",
    text: "text-summer",
    glow: "hover:shadow-summer/20",
  },
};

export function SectionCard({
  href,
  title,
  description,
  icon: Icon,
  color,
  stats,
  index = 0,
}: SectionCardProps) {
  const colors = colorClasses[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={href}>
        <div
          className={cn(
            "group card-lumina rounded-2xl p-6 border transition-all duration-300",
            "hover:scale-[1.02] hover:shadow-lg",
            colors.border,
            colors.glow
          )}
        >
          {/* Icon */}
          <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4", colors.bg)}>
            <Icon className={cn("w-6 h-6", colors.text)} />
          </div>

          {/* Content */}
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-lumina-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {description}
          </p>

          {/* Stats */}
          {stats && (
            <div className={cn("text-sm font-medium mb-4", colors.text)}>
              {stats}
            </div>
          )}

          {/* CTA */}
          <div className={cn("flex items-center gap-2 text-sm font-medium", colors.text)}>
            자세히 보기
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
