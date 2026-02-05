"use client";

import { motion } from "framer-motion";
import { Wallet, Sparkles, Megaphone, Server, Users, Shield, PiggyBank } from "lucide-react";
import { siteContent } from "@/data/content";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/scroll-reveal";
import { formatNumber } from "@/lib/utils";
import { cn } from "@/lib/utils";

const categoryIcons = [Sparkles, Megaphone, Server, Users, Shield, PiggyBank];
const categoryColors = [
  "text-lumina-primary bg-lumina-primary/10 border-lumina-primary/30",
  "text-lumina-secondary bg-lumina-secondary/10 border-lumina-secondary/30",
  "text-lumina-accent bg-lumina-accent/10 border-lumina-accent/30",
  "text-lumina-gold bg-lumina-gold/10 border-lumina-gold/30",
  "text-spring bg-spring/10 border-spring/30",
  "text-summer bg-summer/10 border-summer/30",
];

function BudgetPieChart({ categories }: { categories: typeof siteContent.budget.categories }) {
  // Calculate cumulative percentages for pie chart segments
  let cumulativePercentage = 0;
  const segments = categories.map((cat, index) => {
    const startAngle = cumulativePercentage;
    cumulativePercentage += cat.percentage;
    return {
      ...cat,
      startAngle,
      endAngle: cumulativePercentage,
      color: [
        "#A855F7", // lumina-primary
        "#FF6B9D", // lumina-secondary
        "#00D2FF", // lumina-accent
        "#FFD700", // lumina-gold
        "#FF9BD2", // spring
        "#22C55E", // summer
      ][index],
    };
  });

  const getCoordinatesForPercent = (percent: number) => {
    const x = Math.cos(2 * Math.PI * (percent / 100 - 0.25));
    const y = Math.sin(2 * Math.PI * (percent / 100 - 0.25));
    return [x, y];
  };

  return (
    <div className="relative aspect-square max-w-xs mx-auto">
      <svg viewBox="-1 -1 2 2" className="w-full h-full transform -rotate-90">
        {segments.map((segment, index) => {
          const [startX, startY] = getCoordinatesForPercent(segment.startAngle);
          const [endX, endY] = getCoordinatesForPercent(segment.endAngle);
          const largeArcFlag = segment.percentage > 50 ? 1 : 0;

          const pathData = [
            `M ${startX} ${startY}`,
            `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`,
            `L 0 0`,
          ].join(" ");

          return (
            <motion.path
              key={segment.name}
              d={pathData}
              fill={segment.color}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="hover:opacity-80 transition-opacity cursor-pointer"
            />
          );
        })}
      </svg>

      {/* Center text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-24 h-24 rounded-full bg-card flex items-center justify-center">
          <div className="text-center">
            <Wallet className="w-6 h-6 text-lumina-primary mx-auto mb-1" />
            <span className="text-xs text-muted-foreground">총 예산</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function BudgetItem({
  category,
  index,
}: {
  category: (typeof siteContent.budget.categories)[number];
  index: number;
}) {
  const Icon = categoryIcons[index];
  const colorClass = categoryColors[index];

  return (
    <div className={cn("flex items-center gap-4 p-4 rounded-xl border", colorClass)}>
      <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", colorClass.split(" ")[1])}>
        <Icon className={cn("w-5 h-5", colorClass.split(" ")[0])} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <span className="font-medium text-foreground truncate">{category.name}</span>
          <span className="text-sm text-muted-foreground ml-2">{category.percentage}%</span>
        </div>
        <div className="text-sm text-muted-foreground">
          {formatNumber(category.amount / 100000000)}억 원
        </div>
      </div>
    </div>
  );
}

export function Budget() {
  const { budget } = siteContent;

  return (
    <section id="budget" className="py-24 px-4 bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-lumina-primary text-sm font-medium tracking-wider uppercase">
              {budget.subtitle}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-foreground">
              {budget.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              효율적인 예산 배분으로 최대의 효과를 창출합니다
            </p>
          </div>
        </ScrollReveal>

        {/* Total Budget */}
        <ScrollReveal delay={0.1}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-lumina-primary/20 via-lumina-secondary/20 to-lumina-accent/20 border border-lumina-primary/30">
              <Wallet className="w-8 h-8 text-lumina-primary" />
              <div className="text-left">
                <span className="text-sm text-muted-foreground block">총 예산</span>
                <AnimatedCounter
                  target={budget.total / 100000000}
                  suffix="억 원"
                  decimals={2}
                  className="text-3xl font-bold text-foreground"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Pie Chart */}
          <ScrollReveal delay={0.2}>
            <BudgetPieChart categories={budget.categories} />
          </ScrollReveal>

          {/* Budget Items */}
          <StaggerContainer className="space-y-3" staggerDelay={0.1}>
            {budget.categories.map((category, index) => (
              <StaggerItem key={category.name}>
                <BudgetItem category={category} index={index} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
