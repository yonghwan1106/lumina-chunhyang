"use client";

import { Hero } from "@/components/sections/hero";
import { SectionCard } from "@/components/shared/section-card";
import { CountdownTimer } from "@/components/shared/countdown-timer";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/scroll-reveal";
import {
  FileText,
  Sparkles,
  BookHeart,
  TrendingUp,
  Calendar,
  Wallet
} from "lucide-react";

const sections = [
  {
    href: "/overview",
    title: "전략 개요",
    description: "2026 루미나 춘향의 비전과 미션, SWOT 분석, 해외 벤치마킹 사례를 확인하세요.",
    icon: FileText,
    color: "primary" as const,
    stats: "목표 방문객 100만 명",
  },
  {
    href: "/contents",
    title: "킬러 콘텐츠",
    description: "스마트 합죽선, 개화하는 누각, 오작교 레조넌스, 글로벌 러브 시그널을 만나보세요.",
    icon: Sparkles,
    color: "secondary" as const,
    stats: "4대 핵심 콘텐츠",
  },
  {
    href: "/story",
    title: "스토리텔링",
    description: "춘향과 몽룡의 사랑 이야기를 사계절 테마로 재해석한 몰입형 여정을 경험하세요.",
    icon: BookHeart,
    color: "accent" as const,
    stats: "4계절 사랑 여정",
  },
  {
    href: "/impact",
    title: "경제 효과",
    description: "루미나 춘향이 남원시와 전라북도에 가져올 경제적 가치를 전망합니다.",
    icon: TrendingUp,
    color: "gold" as const,
    stats: "예상 경제효과 3,500억 원",
  },
  {
    href: "/roadmap",
    title: "마케팅 로드맵",
    description: "D-180부터 D+30까지의 체계적인 마케팅 전략과 실행 계획을 확인하세요.",
    icon: Calendar,
    color: "spring" as const,
    stats: "4단계 마케팅 전략",
  },
  {
    href: "/budget",
    title: "예산 계획",
    description: "효율적인 예산 배분으로 최대의 효과를 창출하는 예산 계획을 살펴보세요.",
    icon: Wallet,
    color: "summer" as const,
    stats: "총 예산 41.3억 원",
  },
];

export default function Home() {
  // 2026년 4월 15일 오픈 예정
  const festivalDate = new Date("2026-04-15T18:00:00");

  return (
    <>
      <Hero />

      {/* Countdown Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-background to-card/50">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                2026 루미나 춘향 개막까지
              </h2>
              <p className="text-muted-foreground">
                남원에서 펼쳐질 빛의 축제를 기대해주세요
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <CountdownTimer
              targetDate={festivalDate}
              label="Grand Opening: 2026. 4. 15"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Section Cards */}
      <section className="py-24 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-lumina-primary text-sm font-medium tracking-wider uppercase">
                Festival Overview
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-foreground">
                축제 둘러보기
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                2026 루미나 춘향의 모든 것을 살펴보세요
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {sections.map((section, index) => (
              <StaggerItem key={section.href}>
                <SectionCard {...section} index={index} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { value: "100만", label: "목표 방문객", unit: "명" },
                { value: "3,500억", label: "경제 효과", unit: "원" },
                { value: "4대", label: "킬러 콘텐츠", unit: "" },
                { value: "30일", label: "축제 기간", unit: "" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center p-4 md:p-6 rounded-2xl bg-card border border-border/50"
                >
                  <div className="text-2xl md:text-4xl font-bold text-lumina-primary mb-1">
                    {stat.value}
                    <span className="text-lg md:text-xl">{stat.unit}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
