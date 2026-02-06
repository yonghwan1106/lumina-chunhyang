"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Cherry,
  Sun,
  Leaf,
  Snowflake,
  MapPin,
  Clock,
  Camera,
  Calendar,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/scroll-reveal";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { SocialShare } from "@/components/shared/social-share";
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

// C2: 계절 제목 텍스트 글로우 색상
const seasonTextGlow: Record<string, string> = {
  spring: "0 0 20px rgba(253,164,175,0.4), 0 0 40px rgba(253,164,175,0.2)",
  summer: "0 0 20px rgba(52,211,153,0.4), 0 0 40px rgba(52,211,153,0.2)",
  autumn: "0 0 20px rgba(251,191,36,0.4), 0 0 40px rgba(251,191,36,0.2)",
  winter: "0 0 20px rgba(147,197,253,0.4), 0 0 40px rgba(147,197,253,0.2)",
};

// C4: 포토스팟 호버 글로우
const seasonBoxGlow: Record<string, string> = {
  spring: "0 0 20px rgba(253,164,175,0.3), 0 0 40px rgba(253,164,175,0.1)",
  summer: "0 0 20px rgba(52,211,153,0.3), 0 0 40px rgba(52,211,153,0.1)",
  autumn: "0 0 20px rgba(251,191,36,0.3), 0 0 40px rgba(251,191,36,0.1)",
  winter: "0 0 20px rgba(147,197,253,0.3), 0 0 40px rgba(147,197,253,0.1)",
};

// C5: 다른 계절 탐색 데이터
const allSeasons = [
  { id: "spring", name: "봄", title: "만남의 봄", icon: "Cherry" },
  { id: "summer", name: "여름", title: "사랑의 여름", icon: "Sun" },
  { id: "autumn", name: "가을", title: "이별의 가을", icon: "Leaf" },
  { id: "winter", name: "겨울", title: "재회의 겨울", icon: "Snowflake" },
];

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

      {/* Breadcrumb & Share */}
      <div className="container mx-auto max-w-6xl px-4 -mt-8 mb-8 flex items-center justify-between">
        <Breadcrumb
          items={[
            { label: "스토리텔링", href: "/story" },
            { label: season.title },
          ]}
        />
        <SocialShare title={`${season.title} - 루미나 춘향`} />
      </div>

      {/* C1: 계절 분위기 배경 + Story Section */}
      <section className="py-12 px-4 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="relative">
              {/* C1: 배경 글로우 레이어 */}
              <div
                className={cn("absolute -top-20 -left-20 w-64 h-64 rounded-full blur-3xl opacity-30 pointer-events-none", colors.fill)}
              />
              <div
                className={cn("absolute -bottom-20 -right-20 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none", colors.fill)}
              />

              <div className={cn("relative rounded-2xl p-8 border", colors.border, colors.bg)}>
                <div className="flex items-center gap-3 mb-6">
                  {Icon && (
                    <div className={cn("w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br", colors.gradient)}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  )}
                  <div>
                    {/* C2: 제목 텍스트 글로우 */}
                    <h2
                      className={cn("text-2xl font-bold", colors.text)}
                      style={{ textShadow: seasonTextGlow[season.color] }}
                    >
                      {season.name}의 이야기
                    </h2>
                    <p className="text-muted-foreground">{season.description}</p>
                  </div>
                </div>

                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-muted-foreground whitespace-pre-line leading-relaxed">
                    {season.story}
                  </p>
                </div>
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
              {/* C3: 구역(zone) 정보 표시 */}
              {"zone" in season.schedule && season.schedule.zone && (
                <div className="mt-3 flex items-center gap-2">
                  <MapPin className={cn("w-4 h-4", colors.text)} />
                  <p className={cn("text-sm font-medium", colors.text)}>
                    구역: {season.schedule.zone}
                  </p>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* C4: Photo Spots with hover glow */}
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
                <motion.div
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-xl border",
                    colors.border,
                    colors.bg
                  )}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: seasonBoxGlow[season.color],
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Camera className={cn("w-8 h-8 flex-shrink-0", colors.text)} />
                  <div>
                    <h4 className="font-semibold text-foreground">{spot.name}</h4>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      {spot.location}
                    </div>
                  </div>
                </motion.div>
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

      {/* C5: 다른 계절 탐색 UI 개선 */}
      <section className="py-12 px-4 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-foreground mb-2">
                다른 계절 둘러보기
              </h3>
              <p className="text-sm text-muted-foreground">
                춘향과 몽룡의 사랑 여정을 계속 탐험하세요
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-4" staggerDelay={0.1}>
            {allSeasons.map((s) => {
              if (s.id === season.id) return null;
              const sColors = seasonColors[s.id];
              const SIcon = iconMap[s.icon];

              return (
                <StaggerItem key={s.id}>
                  <Link href={`/story/${s.id}`}>
                    <motion.div
                      className={cn(
                        "card-glass rounded-2xl p-5 border transition-all",
                        sColors.border
                      )}
                      whileHover={{ y: -4, scale: 1.02 }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className={cn(
                          "w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br",
                          sColors.gradient
                        )}>
                          {SIcon && <SIcon className="w-5 h-5 text-white" />}
                        </div>
                        <div>
                          <span className={cn("text-xs font-bold uppercase tracking-wider", sColors.text)}>
                            {s.name}
                          </span>
                          <h4 className="font-bold text-foreground">{s.title}</h4>
                        </div>
                      </div>
                      <div className={cn("flex items-center gap-2 text-sm font-medium", sColors.text)}>
                        탐험하기
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </motion.div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
