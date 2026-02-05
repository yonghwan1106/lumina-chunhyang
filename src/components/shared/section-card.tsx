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
    bg: "bg-primary/10",
    border: "border-primary/20",
    text: "text-primary",
    gradient: "from-primary to-primary-deep",
    glow: "rgba(139, 92, 246, 0.3)",
  },
  secondary: {
    bg: "bg-secondary/10",
    border: "border-secondary/20",
    text: "text-secondary",
    gradient: "from-secondary to-secondary-deep",
    glow: "rgba(244, 114, 182, 0.3)",
  },
  accent: {
    bg: "bg-accent/10",
    border: "border-accent/20",
    text: "text-accent",
    gradient: "from-accent to-accent-deep",
    glow: "rgba(45, 212, 191, 0.3)",
  },
  gold: {
    bg: "bg-gold/10",
    border: "border-gold/20",
    text: "text-gold",
    gradient: "from-gold to-gold-deep",
    glow: "rgba(245, 158, 11, 0.4)",
  },
  spring: {
    bg: "bg-spring/10",
    border: "border-spring/20",
    text: "text-spring",
    gradient: "from-spring to-pink-400",
    glow: "rgba(253, 164, 175, 0.3)",
  },
  summer: {
    bg: "bg-summer/10",
    border: "border-summer/20",
    text: "text-summer",
    gradient: "from-summer to-teal-400",
    glow: "rgba(52, 211, 153, 0.3)",
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
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
    >
      <Link href={href}>
        <motion.div
          className={cn(
            "group relative card-lumina rounded-2xl p-6 border overflow-hidden",
            colors.border
          )}
          whileHover={{
            y: -8,
            boxShadow: `0 20px 40px rgba(0,0,0,0.3), 0 0 40px ${colors.glow}`,
          }}
          transition={{ duration: 0.3 }}
        >
          {/* 호버 시 배경 그라데이션 */}
          <motion.div
            className={cn(
              "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500",
              colors.gradient
            )}
          />

          {/* 장식 요소 - 우상단 원 */}
          <div
            className={cn(
              "absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500",
              colors.bg
            )}
          />

          {/* 아이콘 */}
          <div className="relative mb-5">
            <motion.div
              className={cn(
                "w-14 h-14 rounded-xl flex items-center justify-center",
                colors.bg,
                "border",
                colors.border
              )}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Icon className={cn("w-7 h-7", colors.text)} />
            </motion.div>
          </div>

          {/* 콘텐츠 */}
          <h3 className="relative text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="relative text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
            {description}
          </p>

          {/* 통계 */}
          {stats && (
            <div className={cn("relative text-sm font-semibold mb-4", colors.text)}>
              {stats}
            </div>
          )}

          {/* CTA */}
          <div className="relative flex items-center gap-2">
            <span className={cn("text-sm font-medium", colors.text)}>
              자세히 보기
            </span>
            <motion.div
              className={colors.text}
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </div>

          {/* 하단 장식 라인 */}
          <motion.div
            className={cn(
              "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r",
              colors.gradient
            )}
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      </Link>
    </motion.div>
  );
}
