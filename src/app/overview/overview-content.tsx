"use client";

import { Moon, Users, Globe, Heart, Target, TrendingUp, Shield, Lightbulb, LucideIcon } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/scroll-reveal";
import { InfographicCard } from "@/components/shared/infographic-card";
import { siteContent, vision, swotAnalysis, benchmarks, kpiTargets } from "@/data/content";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Moon,
  Users,
  Globe,
  Heart,
};

const valueIcons = [Lightbulb, Heart, Shield, Globe];

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

function SwotCard({ title, items, color, icon }: { title: string; items: string[]; color: string; icon: string }) {
  const colorClasses: Record<string, string> = {
    primary: "border-lumina-primary/30 bg-lumina-primary/5",
    secondary: "border-lumina-secondary/30 bg-lumina-secondary/5",
    accent: "border-lumina-accent/30 bg-lumina-accent/5",
    gold: "border-lumina-gold/30 bg-lumina-gold/5",
  };

  const textClasses: Record<string, string> = {
    primary: "text-lumina-primary",
    secondary: "text-lumina-secondary",
    accent: "text-lumina-accent",
    gold: "text-lumina-gold",
  };

  return (
    <div className={cn("rounded-2xl p-6 border", colorClasses[color])}>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">{icon}</span>
        <h3 className={cn("text-xl font-bold", textClasses[color])}>{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-muted-foreground">
            <span className={cn("mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0", `bg-${color === "primary" ? "lumina-primary" : color === "secondary" ? "lumina-secondary" : color === "accent" ? "lumina-accent" : "lumina-gold"}`)} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function OverviewContent() {
  const { executiveSummary } = siteContent;

  return (
    <>
      <PageHeader
        title="전략 개요"
        subtitle="Executive Summary"
        description="2026 루미나 춘향의 비전, 전략, 그리고 성공을 위한 로드맵을 소개합니다"
        badge="Strategic Framework"
        badgeColor="primary"
      />

      {/* Main Stats */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <StaggerContainer className="grid grid-cols-2 gap-4" staggerDelay={0.1}>
              {executiveSummary.cards.map((card, index) => (
                <StaggerItem key={card.title}>
                  <StatCard {...card} index={index} />
                </StaggerItem>
              ))}
            </StaggerContainer>

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

      {/* Vision & Mission */}
      <section className="py-16 px-4 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {vision.title}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <ScrollReveal delay={0.1}>
              <div className="card-lumina rounded-2xl p-8 border border-lumina-primary/30 h-full">
                <Target className="w-10 h-10 text-lumina-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">비전 Vision</h3>
                <p className="text-lg text-muted-foreground">{vision.vision}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="card-lumina rounded-2xl p-8 border border-lumina-secondary/30 h-full">
                <TrendingUp className="w-10 h-10 text-lumina-secondary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">미션 Mission</h3>
                <p className="text-lg text-muted-foreground">{vision.mission}</p>
              </div>
            </ScrollReveal>
          </div>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4" staggerDelay={0.1}>
            {vision.values.map((value, index) => {
              const Icon = valueIcons[index];
              return (
                <StaggerItem key={value.title}>
                  <div className="card-lumina rounded-xl p-5 border border-border/50 text-center">
                    <Icon className="w-8 h-8 text-lumina-gold mx-auto mb-3" />
                    <h4 className="font-bold text-foreground mb-1">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* SWOT Analysis */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-lumina-accent text-sm font-medium tracking-wider uppercase">
                SWOT Analysis
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                전략 분석
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal delay={0.1}>
              <SwotCard title="강점 (Strengths)" items={swotAnalysis.strengths} color="primary" icon="💪" />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <SwotCard title="약점 (Weaknesses)" items={swotAnalysis.weaknesses} color="secondary" icon="⚠️" />
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <SwotCard title="기회 (Opportunities)" items={swotAnalysis.opportunities} color="accent" icon="🚀" />
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <SwotCard title="위협 (Threats)" items={swotAnalysis.threats} color="gold" icon="🔒" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Benchmarks */}
      <section className="py-16 px-4 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-lumina-gold text-sm font-medium tracking-wider uppercase">
                Global Benchmarking
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                해외 벤치마킹 사례
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                세계적인 빛 축제들의 성공 요인을 분석하고 루미나 춘향만의 차별화 전략을 수립합니다
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.15}>
            {benchmarks.map((benchmark) => (
              <StaggerItem key={benchmark.name}>
                <div className="card-lumina rounded-2xl p-6 border border-border/50">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{benchmark.name}</h3>
                      <p className="text-sm text-muted-foreground">{benchmark.country}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-lumina-gold/10 text-lumina-gold text-sm font-medium">
                      {benchmark.visitors}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-3">{benchmark.feature}</p>
                  <div className="pt-3 border-t border-border/50">
                    <span className="text-sm text-lumina-primary font-medium">배울 점: </span>
                    <span className="text-sm text-muted-foreground">{benchmark.lesson}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* KPI Targets */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-lumina-primary text-sm font-medium tracking-wider uppercase">
                KPI Roadmap
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                연도별 KPI 목표 (2026-2030)
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-semibold text-foreground">연도</th>
                    <th className="text-right py-4 px-4 font-semibold text-foreground">방문객 (만 명)</th>
                    <th className="text-right py-4 px-4 font-semibold text-foreground">매출 (억 원)</th>
                    <th className="text-right py-4 px-4 font-semibold text-foreground">만족도 (%)</th>
                    <th className="text-right py-4 px-4 font-semibold text-foreground">글로벌 점유율 (%)</th>
                  </tr>
                </thead>
                <tbody>
                  {kpiTargets.map((kpi, index) => (
                    <tr
                      key={kpi.year}
                      className={cn(
                        "border-b border-border/50",
                        index === 0 && "bg-lumina-primary/5"
                      )}
                    >
                      <td className="py-4 px-4 font-medium text-foreground">{kpi.year}</td>
                      <td className="text-right py-4 px-4 text-muted-foreground">{kpi.visitors}</td>
                      <td className="text-right py-4 px-4 text-muted-foreground">{kpi.revenue.toLocaleString()}</td>
                      <td className="text-right py-4 px-4 text-muted-foreground">{kpi.satisfaction}</td>
                      <td className="text-right py-4 px-4 text-muted-foreground">{kpi.globalShare}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Infographic */}
      <section className="py-16 px-4 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <InfographicCard
              src="/images/infographics/02-tourism-trends.png"
              alt="관광 트렌드 분석"
              title="2026 야간 관광 트렌드 분석"
            />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
