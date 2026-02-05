"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Cherry,
  Sun,
  Leaf,
  Snowflake,
  MapPin,
  Clock,
  Camera,
  Calendar,
  LucideIcon,
} from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/scroll-reveal";
import { cn } from "@/lib/utils";
import { StorySeason } from "@/data/story-seasons";

interface SeasonDetailPageProps {
  season: StorySeason;
}

const iconMap: Record<string, LucideIcon> = {
  Cherry,
  Sun,
  Leaf,
  Snowflake,
};

const seasonColors: Record<string, { gradient: string; border: string; text: string; bg: string; fill: string }> = {
  spring: {
    gradient: "from-pink-400 via-pink-300 to-rose-200",
    border: "border-spring/30",
    text: "text-spring",
    bg: "bg-spring/10",
    fill: "bg-spring",
  },
  summer: {
    gradient: "from-blue-500 via-purple-500 to-indigo-600",
    border: "border-summer/30",
    text: "text-summer",
    bg: "bg-summer/10",
    fill: "bg-summer",
  },
  autumn: {
    gradient: "from-orange-400 via-amber-500 to-yellow-600",
    border: "border-autumn/30",
    text: "text-autumn",
    bg: "bg-autumn/10",
    fill: "bg-autumn",
  },
  winter: {
    gradient: "from-cyan-400 via-blue-300 to-white",
    border: "border-winter/30",
    text: "text-winter",
    bg: "bg-winter/10",
    fill: "bg-winter",
  },
};

export function SeasonDetailPage({ season }: SeasonDetailPageProps) {
  const Icon = iconMap[season.icon];
  const colors = seasonColors[season.color];

  return (
    <>
      <PageHeader
        title={season.title}
        subtitle={season.subtitle}
        description={season.heroText}
        badge={`${season.name} Season`}
        badgeColor={season.color === "spring" ? "secondary" : season.color === "summer" ? "accent" : season.color === "autumn" ? "gold" : "primary"}
      />

      {/* Back Button */}
      <div className="container mx-auto max-w-6xl px-4 -mt-8 mb-8">
        <Link
          href="/story"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          모든 계절 보기
        </Link>
      </div>

      {/* Story Section */}
      <section className="py-12 px-4 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <div className={cn("rounded-2xl p-8 border", colors.border, colors.bg)}>
              <div className="flex items-center gap-3 mb-6">
                {Icon && (
                  <div className={cn("w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br", colors.gradient)}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                )}
                <div>
                  <h2 className={cn("text-2xl font-bold", colors.text)}>{season.name}의 이야기</h2>
                  <p className="text-muted-foreground">{season.description}</p>
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-muted-foreground whitespace-pre-line leading-relaxed">
                  {season.story}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Experiences */}
      <section className="py-12 px-4 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                체험 프로그램
              </h2>
              <p className="text-muted-foreground">
                {season.name} 테마에 맞는 특별한 체험을 즐겨보세요
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {season.experiences.map((exp) => (
              <StaggerItem key={exp.title}>
                <div className={cn(
                  "card-lumina rounded-2xl p-6 border h-full",
                  colors.border
                )}>
                  <h3 className={cn("text-xl font-bold mb-2", colors.text)}>
                    {exp.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <div className={cn("p-3 rounded-lg text-sm", colors.bg)}>
                    <span className={cn("font-medium", colors.text)}>하이라이트: </span>
                    <span className="text-foreground">{exp.highlight}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-12 px-4 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              운영 일정
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className={cn("rounded-2xl p-6 border", colors.border)}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <Calendar className={cn("w-6 h-6 flex-shrink-0", colors.text)} />
                  <div>
                    <h4 className="font-semibold text-foreground">운영 기간</h4>
                    <p className="text-muted-foreground">{season.schedule.period}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className={cn("w-6 h-6 flex-shrink-0", colors.text)} />
                  <div>
                    <h4 className="font-semibold text-foreground">메인 쇼 시간</h4>
                    <p className="text-muted-foreground">{season.schedule.mainShow}</p>
                  </div>
                </div>
              </div>
              {"droneShow" in season.schedule && season.schedule.droneShow && (
                <div className="mt-4 pt-4 border-t border-border/50">
                  <p className={cn("text-sm font-medium", colors.text)}>
                    드론쇼: {season.schedule.droneShow}
                  </p>
                </div>
              )}
              <div className="mt-4 pt-4 border-t border-border/50">
                <p className="text-sm text-muted-foreground">
                  소요 시간: {season.schedule.duration}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Photo Spots */}
      <section className="py-12 px-4 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              포토 스팟
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-4" staggerDelay={0.1}>
            {season.photoSpots.map((spot) => (
              <StaggerItem key={spot.name}>
                <div className={cn(
                  "flex items-center gap-4 p-4 rounded-xl border",
                  colors.border,
                  colors.bg
                )}>
                  <Camera className={cn("w-8 h-8 flex-shrink-0", colors.text)} />
                  <div>
                    <h4 className="font-semibold text-foreground">{spot.name}</h4>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      {spot.location}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Season-specific sections */}

      {/* Night Food Zone (Summer) */}
      {"nightFoodZone" in season && season.nightFoodZone && (
        <section className="py-12 px-4 bg-card/50">
          <div className="container mx-auto max-w-4xl">
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
                야식존 안내
              </h2>
            </ScrollReveal>

            <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
              {season.nightFoodZone.map((zone) => (
                <StaggerItem key={zone.name}>
                  <div className={cn("p-6 rounded-xl border", colors.border)}>
                    <h3 className={cn("font-bold text-lg mb-3", colors.text)}>{zone.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {zone.items.map((item) => (
                        <span
                          key={item}
                          className={cn("px-3 py-1 rounded-full text-sm", colors.bg, colors.text)}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* Letter Writing (Autumn) */}
      {"letterWriting" in season && season.letterWriting && (
        <section className="py-12 px-4 bg-card/50">
          <div className="container mx-auto max-w-4xl">
            <ScrollReveal>
              <div className={cn("rounded-2xl p-6 border", colors.border)}>
                <h2 className="text-2xl font-bold text-foreground mb-6">편지 쓰기 체험</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <span className="text-sm text-muted-foreground">장소</span>
                    <p className="font-medium text-foreground">{season.letterWriting.location}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">비용</span>
                    <p className="font-medium text-foreground">{season.letterWriting.fee}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">기념품</span>
                    <p className="font-medium text-foreground">{season.letterWriting.keepSake}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Finale (Winter) */}
      {"finale" in season && season.finale && (
        <section className="py-12 px-4 bg-gradient-to-b from-card/50 to-background">
          <div className="container mx-auto max-w-4xl">
            <ScrollReveal>
              <div className={cn(
                "rounded-2xl p-8 border text-center",
                colors.border,
                colors.bg
              )}>
                <h2 className={cn("text-3xl font-bold mb-4", colors.text)}>
                  {season.finale.name}
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  {season.finale.description}
                </p>
                <p className="text-foreground">
                  {season.finale.participation}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Navigation to other seasons */}
      <section className="py-12 px-4 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <h3 className="text-xl font-bold text-foreground mb-6 text-center">
              다른 계절 둘러보기
            </h3>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-4">
            {["spring", "summer", "autumn", "winter"].map((s) => {
              if (s === season.id) return null;
              const sColors = seasonColors[s];
              const seasonNames: Record<string, string> = {
                spring: "봄",
                summer: "여름",
                autumn: "가을",
                winter: "겨울",
              };

              return (
                <Link
                  key={s}
                  href={`/story/${s}`}
                  className={cn(
                    "px-6 py-3 rounded-full font-medium transition-all hover:scale-105",
                    `bg-gradient-to-r ${sColors.gradient}`,
                    "text-white"
                  )}
                >
                  {seasonNames[s]}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
