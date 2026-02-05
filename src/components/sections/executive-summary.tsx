"use client";

import { Moon, Users, Globe, Heart, LucideIcon } from "lucide-react";
import { siteContent } from "@/data/content";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/scroll-reveal";
import { InfographicCard } from "@/components/shared/infographic-card";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Moon,
  Users,
  Globe,
  Heart,
};

interface StatCardProps {
  icon: string;
  title: string;
  value: string;
  unit: string;
  description: string;
  index: number;
}

function StatCard({ icon, title, value, unit, description, index }: StatCardProps) {
  const Icon = iconMap[icon];
  const colors = [
    "text-lumina-primary border-lumina-primary/30",
    "text-lumina-secondary border-lumina-secondary/30",
    "text-lumina-accent border-lumina-accent/30",
    "text-lumina-gold border-lumina-gold/30",
  ];

  // 숫자로 변환 가능한지 확인
  const numericValue = parseFloat(value.replace(/,/g, ""));
  const isNumeric = !isNaN(numericValue);

  return (
    <div
      className={cn(
        "card-lumina rounded-2xl p-6 transition-all duration-300 hover:scale-105",
        "border",
        colors[index % colors.length]
      )}
    >
      <div className="flex items-center gap-3 mb-4">
        {Icon && <Icon className={cn("w-6 h-6", colors[index % colors.length].split(" ")[0])} />}
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      </div>

      <div className="mb-3">
        {isNumeric ? (
          <AnimatedCounter
            target={numericValue}
            suffix={unit}
            className="text-4xl font-bold text-foreground"
          />
        ) : (
          <span className="text-4xl font-bold text-foreground">
            {value}<span className="text-2xl ml-1">{unit}</span>
          </span>
        )}
      </div>

      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

export function ExecutiveSummary() {
  const { executiveSummary } = siteContent;

  return (
    <section id="executive" className="py-24 px-4 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-lumina-primary text-sm font-medium tracking-wider uppercase">
              {executiveSummary.subtitle}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-foreground">
              {executiveSummary.title}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Stats Grid */}
          <StaggerContainer className="grid grid-cols-2 gap-4" staggerDelay={0.1}>
            {executiveSummary.cards.map((card, index) => (
              <StaggerItem key={card.title}>
                <StatCard {...card} index={index} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Infographic */}
          <ScrollReveal direction="right" delay={0.3}>
            <InfographicCard
              src="/images/infographics/01-strategic-framework.png"
              alt="전략 프레임워크 개요"
              title="2026 춘향제 전략 프레임워크"
              className="h-full"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
