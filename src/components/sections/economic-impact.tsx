"use client";

import { TrendingUp, Users, Briefcase, Award } from "lucide-react";
import { economicImpact } from "@/data/statistics";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/scroll-reveal";
import { InfographicCard } from "@/components/shared/infographic-card";
import { cn } from "@/lib/utils";

const iconList = [TrendingUp, TrendingUp, Users, Award];

function MainStatCard({
  stat,
  index,
}: {
  stat: (typeof economicImpact.mainStats)[number];
  index: number;
}) {
  const Icon = iconList[index];
  const colors = [
    "text-lumina-primary border-lumina-primary/30",
    "text-lumina-secondary border-lumina-secondary/30",
    "text-lumina-accent border-lumina-accent/30",
    "text-lumina-gold border-lumina-gold/30",
  ];

  return (
    <div
      className={cn(
        "card-lumina rounded-2xl p-6 border transition-all duration-300 hover:scale-105",
        colors[index]
      )}
    >
      <Icon className={cn("w-8 h-8 mb-4", colors[index].split(" ")[0])} />
      <div className="mb-2">
        <AnimatedCounter
          target={stat.value}
          suffix={stat.unit}
          className="text-3xl font-bold text-foreground"
        />
      </div>
      <h3 className="font-semibold text-foreground mb-1">{stat.label}</h3>
      <p className="text-sm text-muted-foreground">{stat.description}</p>
    </div>
  );
}

function BreakdownBar({
  item,
  maxValue,
  index,
}: {
  item: (typeof economicImpact.breakdown)[number];
  maxValue: number;
  index: number;
}) {
  const colors = [
    "bg-lumina-primary",
    "bg-lumina-secondary",
    "bg-lumina-accent",
    "bg-lumina-gold",
    "bg-spring",
  ];

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-foreground font-medium">{item.category}</span>
        <span className="text-muted-foreground">{item.value}억 원 ({item.percentage}%)</span>
      </div>
      <div className="h-3 bg-muted rounded-full overflow-hidden">
        <div
          className={cn("h-full rounded-full transition-all duration-1000", colors[index])}
          style={{ width: `${(item.value / maxValue) * 100}%` }}
        />
      </div>
    </div>
  );
}

function GrowthRanking() {
  const { comparison } = economicImpact;

  return (
    <div className="card-lumina rounded-2xl p-6 border border-border/50">
      <h4 className="font-semibold text-foreground mb-4">{comparison.title}</h4>
      <div className="space-y-3">
        {comparison.festivals.map((festival, index) => (
          <div key={festival.name} className="flex items-center gap-3">
            <div
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold",
                index === 0
                  ? "bg-lumina-gold text-black"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {festival.rank}
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <span
                  className={cn(
                    "font-medium",
                    index === 0 ? "text-lumina-gold" : "text-foreground"
                  )}
                >
                  {festival.name}
                </span>
                <span className="text-muted-foreground">+{festival.growth}%</span>
              </div>
              <div className="h-1.5 bg-muted rounded-full mt-1 overflow-hidden">
                <div
                  className={cn(
                    "h-full rounded-full",
                    index === 0 ? "bg-lumina-gold" : "bg-muted-foreground/30"
                  )}
                  style={{ width: `${festival.growth}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function EconomicImpact() {
  const maxBreakdownValue = Math.max(...economicImpact.breakdown.map((b) => b.value));

  return (
    <section id="economic" className="py-24 px-4 bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-lumina-accent text-sm font-medium tracking-wider uppercase">
              {economicImpact.subtitle}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-foreground">
              {economicImpact.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              루미나 춘향이 남원시와 전라북도에 가져올 경제적 가치를 전망합니다
            </p>
          </div>
        </ScrollReveal>

        {/* Main Stats */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12" staggerDelay={0.1}>
          {economicImpact.mainStats.map((stat, index) => (
            <StaggerItem key={stat.label}>
              <MainStatCard stat={stat} index={index} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Breakdown */}
          <ScrollReveal delay={0.2}>
            <div className="card-lumina rounded-2xl p-6 border border-border/50">
              <h4 className="font-semibold text-foreground mb-6">업종별 경제효과 분포</h4>
              <div className="space-y-4">
                {economicImpact.breakdown.map((item, index) => (
                  <BreakdownBar key={item.category} item={item} maxValue={maxBreakdownValue} index={index} />
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Growth Ranking */}
          <ScrollReveal delay={0.3}>
            <GrowthRanking />
          </ScrollReveal>
        </div>

        {/* Infographic */}
        <ScrollReveal delay={0.4}>
          <div className="max-w-4xl mx-auto">
            <InfographicCard
              src="/images/infographics/09-economic-impact.png"
              alt="경제적 파급효과 전망"
              title="2026 루미나 춘향 경제 파급효과"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
