"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wallet,
  Sparkles,
  Megaphone,
  Server,
  Users,
  Shield,
  PiggyBank,
  ChevronDown,
  ChevronUp,
  TrendingUp,
  LucideIcon,
} from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/scroll-reveal";
import { budgetDetail } from "@/data/budget-detail";
import { cn } from "@/lib/utils";

const categoryIcons: Record<string, LucideIcon> = {
  Sparkles,
  Megaphone,
  Server,
  Users,
  Shield,
  PiggyBank,
};

const categoryColors = [
  { bg: "bg-lumina-primary/10", border: "border-lumina-primary/30", text: "text-lumina-primary", fill: "#A855F7" },
  { bg: "bg-lumina-secondary/10", border: "border-lumina-secondary/30", text: "text-lumina-secondary", fill: "#FF6B9D" },
  { bg: "bg-lumina-accent/10", border: "border-lumina-accent/30", text: "text-lumina-accent", fill: "#00D2FF" },
  { bg: "bg-lumina-gold/10", border: "border-lumina-gold/30", text: "text-lumina-gold", fill: "#FFD700" },
  { bg: "bg-spring/10", border: "border-spring/30", text: "text-spring", fill: "#FF9BD2" },
  { bg: "bg-summer/10", border: "border-summer/30", text: "text-summer", fill: "#22C55E" },
];

function BudgetPieChart() {
  let cumulativePercentage = 0;
  const segments = budgetDetail.categories.map((cat, index) => {
    const startAngle = cumulativePercentage;
    cumulativePercentage += cat.percentage;
    return {
      ...cat,
      startAngle,
      endAngle: cumulativePercentage,
      color: categoryColors[index].fill,
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

function BudgetCategoryCard({ category, index }: { category: typeof budgetDetail.categories[number]; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = categoryIcons[category.icon];
  const colors = categoryColors[index];

  return (
    <div className={cn("rounded-xl border overflow-hidden", colors.border)}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={cn("w-full flex items-center gap-4 p-4 text-left", colors.bg)}
      >
        <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", colors.bg)}>
          <Icon className={cn("w-5 h-5", colors.text)} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <span className="font-medium text-foreground truncate">{category.name}</span>
            <span className="text-sm text-muted-foreground ml-2">{category.percentage}%</span>
          </div>
          <div className="text-sm text-muted-foreground">
            {(category.amount / 100000000).toFixed(1)}억 원
          </div>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-muted-foreground" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        )}
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="p-4 border-t border-border/50 space-y-3">
              <p className="text-sm text-muted-foreground">{category.description}</p>
              <div className="space-y-2">
                {category.details.map((detail) => (
                  <div key={detail.item} className="flex items-center justify-between text-sm">
                    <div>
                      <span className="text-foreground">{detail.item}</span>
                      {detail.note && (
                        <span className="text-muted-foreground text-xs ml-2">({detail.note})</span>
                      )}
                    </div>
                    <span className={cn("font-medium", colors.text)}>
                      {(detail.amount / 100000000).toFixed(1)}억
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function BudgetContent() {
  return (
    <>
      <PageHeader
        title="예산 계획"
        subtitle="Budget Overview"
        description={budgetDetail.overview.description}
        badge={`총 예산 ${(budgetDetail.overview.totalBudget / 100000000).toFixed(2)}억 원`}
        badgeColor="primary"
      />

      {/* Total Budget */}
      <section className="py-12 px-4 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="text-center">
              <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-lumina-primary/20 via-lumina-secondary/20 to-lumina-accent/20 border border-lumina-primary/30">
                <Wallet className="w-8 h-8 text-lumina-primary" />
                <div className="text-left">
                  <span className="text-sm text-muted-foreground block">총 예산</span>
                  <AnimatedCounter
                    target={budgetDetail.overview.totalBudget / 100000000}
                    suffix="억 원"
                    decimals={2}
                    className="text-3xl font-bold text-foreground"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pie Chart & Categories */}
      <section className="py-16 px-4 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">예산 배분</h2>
              <p className="text-muted-foreground">각 항목을 클릭하면 세부 내역을 확인할 수 있습니다</p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={0.2}>
              <BudgetPieChart />
            </ScrollReveal>

            <div className="space-y-3">
              {budgetDetail.categories.map((category, index) => (
                <ScrollReveal key={category.id} delay={0.1 + index * 0.05}>
                  <BudgetCategoryCard category={category} index={index} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Plan */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">{budgetDetail.revenue.title}</h2>
              <p className="text-muted-foreground">
                예상 총 수입: <span className="text-lumina-gold font-bold">
                  {(budgetDetail.revenue.totalProjected / 100000000).toFixed(0)}억 원
                </span>
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-5 gap-4" staggerDelay={0.1}>
            {budgetDetail.revenue.sources.map((source, index) => {
              const colors = categoryColors[index % categoryColors.length];
              return (
                <StaggerItem key={source.name}>
                  <div className={cn("card-lumina rounded-xl p-5 border text-center h-full", colors.border)}>
                    <div className={cn("text-2xl font-bold mb-1", colors.text)}>
                      {(source.amount / 100000000).toFixed(0)}억
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">{source.name}</h4>
                    <p className="text-xs text-muted-foreground">{source.details}</p>
                    <div className="mt-2 text-sm text-muted-foreground">{source.percentage}%</div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Funding Sources */}
      <section className="py-16 px-4 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">{budgetDetail.funding.title}</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="card-lumina rounded-2xl p-6 border border-border/50">
              <div className="space-y-4">
                {budgetDetail.funding.sources.map((source, index) => {
                  const colors = categoryColors[index % categoryColors.length];
                  return (
                    <div key={source.source} className="flex items-center gap-4">
                      <div className={cn("w-16 text-right font-medium", colors.text)}>
                        {source.percentage}%
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <span className="text-foreground font-medium">{source.source}</span>
                          <span className="text-muted-foreground">
                            {(source.amount / 100000000).toFixed(0)}억 원
                          </span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ backgroundColor: colors.fill }}
                            initial={{ width: 0 }}
                            animate={{ width: `${source.percentage}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          />
                        </div>
                        <span className="text-xs text-muted-foreground">{source.type}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ROI Projection */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">{budgetDetail.roi.title}</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="overflow-x-auto mb-8">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-semibold text-foreground">연도</th>
                    <th className="text-right py-4 px-4 font-semibold text-foreground">투자액</th>
                    <th className="text-right py-4 px-4 font-semibold text-foreground">직접 수입</th>
                    <th className="text-right py-4 px-4 font-semibold text-foreground">경제효과</th>
                    <th className="text-right py-4 px-4 font-semibold text-foreground">ROI</th>
                  </tr>
                </thead>
                <tbody>
                  {budgetDetail.roi.projections.map((row, index) => (
                    <tr
                      key={row.year}
                      className={cn(
                        "border-b border-border/50",
                        index === 0 && "bg-lumina-primary/5"
                      )}
                    >
                      <td className="py-4 px-4 font-medium text-foreground">{row.year}</td>
                      <td className="text-right py-4 px-4 text-muted-foreground">
                        {(row.investment / 100000000).toFixed(0)}억
                      </td>
                      <td className="text-right py-4 px-4 text-muted-foreground">
                        {(row.directRevenue / 100000000).toFixed(0)}억
                      </td>
                      <td className="text-right py-4 px-4 text-muted-foreground">
                        {(row.economicEffect / 100000000).toFixed(0)}억
                      </td>
                      <td className="text-right py-4 px-4">
                        <span className={cn(
                          "font-bold",
                          row.roi > 100 ? "text-lumina-gold" : "text-lumina-primary"
                        )}>
                          {row.roi.toFixed(1)}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="grid md:grid-cols-3 gap-4">
              {budgetDetail.roi.notes.map((note, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-lumina-gold/5 border border-lumina-gold/30"
                >
                  <TrendingUp className="w-5 h-5 text-lumina-gold flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{note}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 px-4 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">{budgetDetail.comparison.title}</h2>
              <p className="text-sm text-muted-foreground">{budgetDetail.comparison.note}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-semibold text-foreground">축제명</th>
                    <th className="text-right py-4 px-4 font-semibold text-foreground">예산</th>
                    <th className="text-right py-4 px-4 font-semibold text-foreground">방문객</th>
                    <th className="text-right py-4 px-4 font-semibold text-foreground">1인당 비용</th>
                  </tr>
                </thead>
                <tbody>
                  {budgetDetail.comparison.festivals.map((festival, index) => (
                    <tr
                      key={festival.name}
                      className={cn(
                        "border-b border-border/50",
                        index === 0 && "bg-lumina-primary/5"
                      )}
                    >
                      <td className={cn(
                        "py-4 px-4 font-medium",
                        index === 0 ? "text-lumina-primary" : "text-foreground"
                      )}>
                        {festival.name}
                      </td>
                      <td className="text-right py-4 px-4 text-muted-foreground">{festival.budget}억</td>
                      <td className="text-right py-4 px-4 text-muted-foreground">{festival.visitors}만</td>
                      <td className="text-right py-4 px-4 text-muted-foreground">{festival.perCapita}원</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
