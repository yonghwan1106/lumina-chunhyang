"use client";

import { Cherry, Sun, Leaf, Snowflake, LucideIcon } from "lucide-react";
import { siteContent } from "@/data/content";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/scroll-reveal";
import { InfographicCard } from "@/components/shared/infographic-card";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Cherry,
  Sun,
  Leaf,
  Snowflake,
};

const seasonColors: Record<string, { gradient: string; border: string; text: string }> = {
  spring: {
    gradient: "gradient-spring",
    border: "border-spring/30",
    text: "text-spring",
  },
  summer: {
    gradient: "gradient-summer",
    border: "border-summer/30",
    text: "text-summer",
  },
  autumn: {
    gradient: "gradient-autumn",
    border: "border-autumn/30",
    text: "text-autumn",
  },
  winter: {
    gradient: "gradient-winter",
    border: "border-winter/30",
    text: "text-winter",
  },
};

interface SeasonCardProps {
  season: {
    id: string;
    name: string;
    title: string;
    subtitle: string;
    description: string;
    color: string;
    icon: string;
  };
  index: number;
}

function SeasonCard({ season, index }: SeasonCardProps) {
  const Icon = iconMap[season.icon];
  const colors = seasonColors[season.color];

  return (
    <div className="relative">
      {/* Connection line */}
      {index < 3 && (
        <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-border to-transparent -translate-y-1/2 z-0" />
      )}

      <div
        className={cn(
          "relative z-10 card-lumina rounded-2xl p-6 border transition-all duration-300 hover:scale-105",
          colors.border
        )}
      >
        {/* Season badge */}
        <div
          className={cn(
            "inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4",
            colors.gradient,
            "bg-opacity-20"
          )}
        >
          {Icon && <Icon className="w-4 h-4 text-white" />}
          <span className="text-sm font-medium text-white">{season.name}</span>
        </div>

        {/* Content */}
        <h3 className={cn("text-2xl font-bold mb-1", colors.text)}>{season.title}</h3>
        <p className="text-muted-foreground font-medium mb-3">{season.subtitle}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">{season.description}</p>

        {/* Step indicator */}
        <div className="mt-4 pt-4 border-t border-border/50">
          <div className="flex items-center gap-2">
            <div
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold",
                colors.gradient,
                "text-white"
              )}
            >
              {index + 1}
            </div>
            <span className="text-sm text-muted-foreground">단계</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Storytelling() {
  const { storytelling } = siteContent;

  return (
    <section id="storytelling" className="py-24 px-4 bg-gradient-to-b from-card/50 to-background">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-spring text-sm font-medium tracking-wider uppercase">
              {storytelling.subtitle}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-foreground">
              {storytelling.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {storytelling.description}
            </p>
          </div>
        </ScrollReveal>

        {/* Season Timeline */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12" staggerDelay={0.15}>
          {storytelling.seasons.map((season, index) => (
            <StaggerItem key={season.id}>
              <SeasonCard season={season} index={index} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Infographic */}
        <ScrollReveal delay={0.3}>
          <div className="max-w-4xl mx-auto">
            <InfographicCard
              src="/images/infographics/03-storytelling-journey.png"
              alt="사계절 사랑 스토리텔링 여정"
              title="춘향과 몽룡의 사계절 사랑 여정"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
