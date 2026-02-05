"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  badge?: string;
  badgeColor?: "primary" | "secondary" | "accent" | "gold";
  className?: string;
}

const badgeColors = {
  primary: "bg-lumina-primary/20 text-lumina-primary border-lumina-primary/30",
  secondary: "bg-lumina-secondary/20 text-lumina-secondary border-lumina-secondary/30",
  accent: "bg-lumina-accent/20 text-lumina-accent border-lumina-accent/30",
  gold: "bg-lumina-gold/20 text-lumina-gold border-lumina-gold/30",
};

export function PageHeader({
  title,
  subtitle,
  description,
  badge,
  badgeColor = "primary",
  className,
}: PageHeaderProps) {
  return (
    <div className={cn("pt-32 pb-16 px-4 bg-gradient-to-b from-background to-card/50", className)}>
      <div className="container mx-auto max-w-4xl text-center">
        {badge && (
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
              "inline-block px-4 py-1.5 rounded-full text-sm font-medium border mb-4",
              badgeColors[badgeColor]
            )}
          >
            {badge}
          </motion.span>
        )}

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm font-medium tracking-wider uppercase text-muted-foreground mb-2"
          >
            {subtitle}
          </motion.p>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        )}
      </div>
    </div>
  );
}
