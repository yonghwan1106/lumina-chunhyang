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
  primary: "bg-primary/10 text-primary border-primary/20",
  secondary: "bg-secondary/10 text-secondary border-secondary/20",
  accent: "bg-accent/10 text-accent border-accent/20",
  gold: "bg-gold/10 text-gold border-gold/20",
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
    <div className={cn("relative pt-32 pb-20 px-4 overflow-hidden", className)}>
      {/* 배경 효과 */}
      <div className="absolute inset-0 gradient-night-sky" />
      <div className="absolute inset-0 bg-ink-wash opacity-50" />

      {/* 달빛 효과 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: "radial-gradient(ellipse 100% 100% at 50% 0%, rgba(244, 241, 237, 0.15) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* 장식 라인 */}
      <motion.div
        className="absolute top-24 left-0 right-0 h-px divider-horizontal opacity-30"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      {/* 한지 텍스처 */}
      <div className="absolute inset-0 texture-hanji" />

      <div className="relative container mx-auto max-w-4xl text-center">
        {/* 뱃지 */}
        {badge && (
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={cn(
              "inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium border backdrop-blur-sm mb-6",
              badgeColors[badgeColor]
            )}
          >
            <span className={cn(
              "w-1.5 h-1.5 rounded-full",
              badgeColor === "gold" ? "bg-gold" : badgeColor === "secondary" ? "bg-secondary" : badgeColor === "accent" ? "bg-accent" : "bg-primary"
            )} />
            {badge}
          </motion.span>
        )}

        {/* 영문 서브타이틀 */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs md:text-sm font-medium tracking-[0.25em] uppercase text-muted-foreground/60 mb-3"
          >
            {subtitle}
          </motion.p>
        )}

        {/* 메인 타이틀 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
        >
          <span
            className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
            style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            {title}
          </span>
        </motion.h1>

        {/* 설명 */}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
        )}

        {/* 하단 장식 */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-3 mt-8"
        >
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/50" />
          <div className="dot-decoration" />
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary/50" />
        </motion.div>
      </div>

      {/* 하단 페이드 */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
