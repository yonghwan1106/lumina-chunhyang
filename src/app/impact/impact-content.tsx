"use client";

import { TrendingUp, Users, Award, Briefcase, Building, Car, Utensils, ShoppingBag } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/scroll-reveal";
import { InfographicCard } from "@/components/shared/infographic-card";
import { economicImpact, visitorProjections, spendingPattern, accommodationImpact, employmentDetail } from "@/data/statistics";
import { cn } from "@/lib/utils";

const iconList = [TrendingUp, TrendingUp, Users, Award];
const sectorIcons: Record<string, typeof Building> = {
  숙박업: Building,
  음식점업: Utensils,
  소매업: ShoppingBag,
  "교통/운수": Car,
  "문화/오락": Award,
};

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

export function ImpactContent() {
  const maxBreakdownValue = Math.max(...economicImpact.breakdown.map((b) => b.value));

  return (
    <>
      <PageHeader
        title="경제적 파급효과"
        subtitle="Economic Impact Projection"
        description="루미나 춘향이 남원시와 전라북도에 가져올 경제적 가치를 전망합니다"
        badge="3,500억 원 예상"
        badgeColor="gold"
      />

      {/* Main Stats */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12" staggerDelay={0.1}>
            {economicImpact.mainStats.map((stat, index) => (
              <StaggerItem key={stat.label}>
                <MainStatCard stat={stat} index={index} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Breakdown & Comparison */}
      <section className="py-16 px-4 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Breakdown */}
            <ScrollReveal delay={0.2}>
              <div className="card-lumina rounded-2xl p-6 border border-border/50 h-full">
                <h4 className="font-semibold text-foreground mb-6">업종별 경제효과 분포</h4>
                <div className="space-y-4">
                  {economicImpact.breakdown.map((item, index) => {
                    const colors = [
                      "bg-lumina-primary",
                      "bg-lumina-secondary",
                      "bg-lumina-accent",
                      "bg-lumina-gold",
                      "bg-spring",
                    ];
                    return (
                      <div key={item.category} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-foreground font-medium">{item.category}</span>
                          <span className="text-muted-foreground">{item.value}억 원 ({item.percentage}%)</span>
                        </div>
                        <div className="h-3 bg-muted rounded-full overflow-hidden">
                          <div
                            className={cn("h-full rounded-full transition-all duration-1000", colors[index])}
                            style={{ width: `${(item.value / maxBreakdownValue) * 100}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>

            {/* Growth Ranking */}
            <ScrollReveal delay={0.3}>
              <div className="card-lumina rounded-2xl p-6 border border-border/50 h-full">
                <h4 className="font-semibold text-foreground mb-4">{economicImpact.comparison.title}</h4>
                <div className="space-y-3">
                  {economicImpact.comparison.festivals.map((festival, index) => (
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
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Visitor Projections */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">방문객 분석</h2>
              <p className="text-muted-foreground">국내외 방문객 구성과 지역별 분포</p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Domestic */}
            <ScrollReveal delay={0.1}>
              <div className="card-lumina rounded-2xl p-6 border border-lumina-primary/30">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-foreground">국내 방문객</h3>
                  <span className="text-2xl font-bold text-lumina-primary">
                    {(visitorProjections.domestic.total / 10000).toFixed(1)}만 명
                  </span>
                </div>
                <div className="space-y-3">
                  {visitorProjections.domestic.breakdown.map((item) => (
                    <div key={item.region} className="flex items-center justify-between">
                      <span className="text-muted-foreground">{item.region}</span>
                      <div className="flex items-center gap-3">
                        <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-lumina-primary rounded-full"
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                        <span className="text-foreground font-medium w-12 text-right">{item.percentage}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* International */}
            <ScrollReveal delay={0.2}>
              <div className="card-lumina rounded-2xl p-6 border border-lumina-secondary/30">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-foreground">해외 방문객</h3>
                  <span className="text-2xl font-bold text-lumina-secondary">
                    {(visitorProjections.international.total / 10000).toFixed(1)}만 명
                  </span>
                </div>
                <div className="space-y-3">
                  {visitorProjections.international.breakdown.map((item) => (
                    <div key={item.country} className="flex items-center justify-between">
                      <span className="text-muted-foreground">{item.country}</span>
                      <div className="flex items-center gap-3">
                        <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-lumina-secondary rounded-full"
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                        <span className="text-foreground font-medium w-12 text-right">{item.percentage}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Spending Pattern */}
      <section className="py-16 px-4 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">{spendingPattern.title}</h2>
              <p className="text-muted-foreground">
                평균 1인당 소비: <span className="text-lumina-gold font-bold">{spendingPattern.averageSpending.toLocaleString()}원</span>
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* By Category */}
            <ScrollReveal delay={0.1}>
              <div className="card-lumina rounded-2xl p-6 border border-border/50">
                <h4 className="font-semibold text-foreground mb-6">항목별 소비</h4>
                <div className="space-y-4">
                  {spendingPattern.categories.map((cat, index) => {
                    const colors = ["bg-lumina-primary", "bg-lumina-secondary", "bg-lumina-accent", "bg-lumina-gold", "bg-spring", "bg-summer"];
                    return (
                      <div key={cat.category} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-foreground">{cat.category}</span>
                          <span className="text-muted-foreground">{cat.amount.toLocaleString()}원 ({cat.percentage}%)</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className={cn("h-full rounded-full", colors[index])}
                            style={{ width: `${cat.percentage * 3}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>

            {/* By Visitor Type */}
            <ScrollReveal delay={0.2}>
              <div className="card-lumina rounded-2xl p-6 border border-border/50">
                <h4 className="font-semibold text-foreground mb-6">방문 유형별 소비</h4>
                <div className="space-y-4">
                  {spendingPattern.byVisitorType.map((type, index) => {
                    const colors = ["text-lumina-primary", "text-lumina-secondary", "text-lumina-accent", "text-lumina-gold"];
                    return (
                      <div key={type.type} className="flex items-center justify-between p-4 rounded-xl bg-muted/30">
                        <span className="text-foreground">{type.type}</span>
                        <span className={cn("text-2xl font-bold", colors[index])}>
                          {type.spending.toLocaleString()}원
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Accommodation Impact */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">{accommodationImpact.title}</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: "총 객실 수", value: accommodationImpact.totalRooms.toLocaleString(), unit: "실" },
                { label: "축제 전 점유율", value: accommodationImpact.occupancyBefore, unit: "%" },
                { label: "축제 중 점유율", value: accommodationImpact.occupancyDuring, unit: "%" },
                { label: "가격 상승률", value: accommodationImpact.priceIncrease, unit: "%" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl bg-muted/30">
                  <div className="text-2xl font-bold text-lumina-primary">
                    {stat.value}<span className="text-lg">{stat.unit}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-4 gap-4" staggerDelay={0.1}>
            {accommodationImpact.categories.map((cat) => (
              <StaggerItem key={cat.type}>
                <div className="card-lumina rounded-xl p-5 border border-border/50">
                  <Building className="w-6 h-6 text-lumina-accent mb-3" />
                  <h4 className="font-semibold text-foreground">{cat.type}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{cat.rooms}실</p>
                  <div className="text-lg font-bold text-lumina-accent">{cat.occupancy}% 점유</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Employment Detail */}
      <section className="py-16 px-4 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">{employmentDetail.title}</h2>
              <p className="text-muted-foreground">
                총 <span className="text-lumina-gold font-bold">{employmentDetail.total.toLocaleString()}명</span>의 일자리 창출
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Direct Employment */}
            <ScrollReveal delay={0.1}>
              <div className="card-lumina rounded-2xl p-6 border border-lumina-primary/30">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-foreground">직접 고용</h3>
                  <span className="text-xl font-bold text-lumina-primary">
                    {employmentDetail.direct.total.toLocaleString()}명
                  </span>
                </div>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {employmentDetail.direct.breakdown.map((job) => (
                    <div key={job.job} className="flex items-center justify-between py-2 border-b border-border/30 last:border-0">
                      <div>
                        <span className="text-foreground">{job.job}</span>
                        <span className="text-xs text-muted-foreground ml-2">({job.type})</span>
                      </div>
                      <span className="font-medium text-lumina-primary">{job.count}명</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Indirect Employment */}
            <ScrollReveal delay={0.2}>
              <div className="card-lumina rounded-2xl p-6 border border-lumina-secondary/30">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-foreground">간접 고용</h3>
                  <span className="text-xl font-bold text-lumina-secondary">
                    {employmentDetail.indirect.total.toLocaleString()}명
                  </span>
                </div>
                <div className="space-y-4">
                  {employmentDetail.indirect.breakdown.map((sector) => {
                    const Icon = sectorIcons[sector.sector] || Briefcase;
                    return (
                      <div key={sector.sector} className="flex items-center gap-4">
                        <Icon className="w-6 h-6 text-lumina-secondary" />
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <span className="text-foreground">{sector.sector}</span>
                            <span className="font-medium text-lumina-secondary">{sector.count}명</span>
                          </div>
                          <div className="h-1.5 bg-muted rounded-full mt-1 overflow-hidden">
                            <div
                              className="h-full bg-lumina-secondary rounded-full"
                              style={{ width: `${(sector.count / employmentDetail.indirect.total) * 100}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Wage Impact */}
          <ScrollReveal delay={0.3}>
            <div className="mt-8 grid md:grid-cols-3 gap-4">
              <div className="text-center p-6 rounded-xl bg-lumina-gold/10 border border-lumina-gold/30">
                <div className="text-2xl font-bold text-lumina-gold mb-1">
                  {(employmentDetail.wageImpact.averageWage / 10000).toFixed(0)}만원
                </div>
                <div className="text-sm text-muted-foreground">평균 월급</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-lumina-gold/10 border border-lumina-gold/30">
                <div className="text-2xl font-bold text-lumina-gold mb-1">
                  {(employmentDetail.wageImpact.totalWages / 100000000).toFixed(1)}억원
                </div>
                <div className="text-sm text-muted-foreground">총 임금 지급액</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-lumina-gold/10 border border-lumina-gold/30">
                <div className="text-xl font-bold text-lumina-gold mb-1">
                  {employmentDetail.wageImpact.period}
                </div>
                <div className="text-sm text-muted-foreground">고용 기간</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Infographic */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <InfographicCard
              src="/images/infographics/09-economic-impact.png"
              alt="경제적 파급효과 전망"
              title="2026 루미나 춘향 경제 파급효과"
            />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
