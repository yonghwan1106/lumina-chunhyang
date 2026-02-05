"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Share2, ShoppingCart, ChevronRight } from "lucide-react";
import { killerContents, KillerContent } from "@/data/killer-contents";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { cn } from "@/lib/utils";

const colorClasses: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  primary: {
    bg: "bg-lumina-primary/10",
    border: "border-lumina-primary/30",
    text: "text-lumina-primary",
    glow: "glow-primary",
  },
  secondary: {
    bg: "bg-lumina-secondary/10",
    border: "border-lumina-secondary/30",
    text: "text-lumina-secondary",
    glow: "glow-secondary",
  },
  accent: {
    bg: "bg-lumina-accent/10",
    border: "border-lumina-accent/30",
    text: "text-lumina-accent",
    glow: "glow-accent",
  },
  gold: {
    bg: "bg-lumina-gold/10",
    border: "border-lumina-gold/30",
    text: "text-lumina-gold",
    glow: "glow-gold",
  },
};

function TabButton({
  content,
  isActive,
  onClick,
}: {
  content: KillerContent;
  isActive: boolean;
  onClick: () => void;
}) {
  const colors = colorClasses[content.color];

  return (
    <button
      onClick={onClick}
      className={cn(
        "flex-1 min-w-0 px-4 py-3 rounded-xl text-left transition-all duration-300",
        "border",
        isActive
          ? `${colors.bg} ${colors.border} ${colors.glow}`
          : "border-border/50 hover:border-border"
      )}
    >
      <div className={cn("font-semibold text-sm md:text-base truncate", isActive ? colors.text : "text-foreground")}>
        {content.title}
      </div>
      <div className="text-xs text-muted-foreground truncate hidden md:block">{content.subtitle}</div>
    </button>
  );
}

function StatBar({ label, value, color }: { label: string; value: number; color: string }) {
  const colors = colorClasses[color];

  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">{label}</span>
        <span className={colors.text}>{value}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className={cn("h-full rounded-full", colors.bg.replace("/10", ""))}
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </div>
    </div>
  );
}

function ContentPanel({ content }: { content: KillerContent }) {
  const colors = colorClasses[content.color];

  return (
    <motion.div
      key={content.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="grid lg:grid-cols-2 gap-8"
    >
      {/* Image */}
      <div className={cn("relative rounded-2xl overflow-hidden border", colors.border)}>
        <div className="aspect-[4/3] relative">
          <Image
            src={content.image}
            alt={content.title}
            fill
            className="object-contain p-4 bg-card"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col justify-center space-y-6">
        <div>
          <span className={cn("text-sm font-medium", colors.text)}>{content.subtitle}</span>
          <h3 className="text-3xl font-bold text-foreground mt-1">{content.title}</h3>
        </div>

        <p className="text-lg text-muted-foreground leading-relaxed">{content.description}</p>

        {/* Features */}
        <div className="space-y-2">
          <h4 className="font-semibold text-foreground">주요 기능</h4>
          <ul className="grid grid-cols-2 gap-2">
            {content.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                <ChevronRight className={cn("w-4 h-4", colors.text)} />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Stats */}
        <div className="space-y-3 pt-4 border-t border-border/50">
          <StatBar
            label="만족도"
            value={content.stats.satisfaction}
            color={content.color}
          />
          <StatBar
            label="SNS 공유율"
            value={content.stats.shareRate}
            color={content.color}
          />
          <StatBar
            label="구매 의향"
            value={content.stats.purchaseIntent}
            color={content.color}
          />
        </div>

        {/* Icons */}
        <div className="flex gap-4 pt-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Star className={cn("w-5 h-5", colors.text)} />
            <span>{content.stats.satisfaction}% 만족</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Share2 className={cn("w-5 h-5", colors.text)} />
            <span>{content.stats.shareRate}% 공유</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ShoppingCart className={cn("w-5 h-5", colors.text)} />
            <span>{content.stats.purchaseIntent}% 구매</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function KillerContents() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeContent = killerContents[activeIndex];

  return (
    <section id="killer" className="py-24 px-4 bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-lumina-secondary text-sm font-medium tracking-wider uppercase">
              4대 킬러 콘텐츠
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-foreground">
              차별화된 체험 콘텐츠
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              전통과 첨단 기술이 융합된 독창적인 체험으로 방문객에게 잊을 수 없는 추억을 선사합니다
            </p>
          </div>
        </ScrollReveal>

        {/* Tabs */}
        <ScrollReveal delay={0.2}>
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
            {killerContents.map((content, index) => (
              <TabButton
                key={content.id}
                content={content}
                isActive={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </ScrollReveal>

        {/* Content */}
        <AnimatePresence mode="wait">
          <ContentPanel content={activeContent} />
        </AnimatePresence>
      </div>
    </section>
  );
}
