"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Cherry,
  Sun,
  Leaf,
  Snowflake,
  ArrowRight,
  LucideIcon,
  Smartphone,
  Monitor,
  Sparkles,
} from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/scroll-reveal";
import { InfographicCard } from "@/components/shared/infographic-card";
import { siteContent } from "@/data/content";
import { storySeasons } from "@/data/story-seasons";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Cherry,
  Sun,
  Leaf,
  Snowflake,
};

const seasonColors: Record<string, { gradient: string; border: string; text: string; bg: string }> = {
  spring: {
    gradient: "from-pink-400 via-pink-300 to-rose-200",
    border: "border-spring/30",
    text: "text-spring",
    bg: "bg-spring/10",
  },
  summer: {
    gradient: "from-blue-500 via-purple-500 to-indigo-600",
    border: "border-summer/30",
    text: "text-summer",
    bg: "bg-summer/10",
  },
  autumn: {
    gradient: "from-orange-400 via-amber-500 to-yellow-600",
    border: "border-autumn/30",
    text: "text-autumn",
    bg: "bg-autumn/10",
  },
  winter: {
    gradient: "from-cyan-400 via-blue-300 to-white",
    border: "border-winter/30",
    text: "text-winter",
    bg: "bg-winter/10",
  },
};

// B1: 스토리 개요 계절 아이콘 매핑
const overviewSeasonIcons: LucideIcon[] = [Cherry, Sun, Leaf, Snowflake];
const overviewSeasonKeys = ["spring", "summer", "autumn", "winter"];

// B2: 체험 유형 아이콘
const experienceIcons: LucideIcon[] = [Smartphone, Monitor, Sparkles];
const experienceColors = ["primary", "secondary", "accent"];

export function StoryContent() {
  const { storytelling } = siteContent;
  const seasons = Object.values(storySeasons);

  return (
    <>
      <PageHeader
        title="사계절 사랑 스토리텔링"
        subtitle="Four Seasons Love Journey"
        description={storytelling.description}
        badge="Immersive Experience"
        badgeColor="accent"
      />

      {/* Interactive Timeline */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                춘향과 몽룡의 사랑 여정
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                각 계절을 클릭하여 상세한 스토리와 체험 프로그램을 확인하세요
              </p>
            </div>
          </ScrollReveal>

          {/* Season Cards */}
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.15}>
            {seasons.map((season, index) => {
              const Icon = iconMap[season.icon];
              const colors = seasonColors[season.color];

              return (
                <StaggerItem key={season.id}>
                  <Link href={`/story/${season.id}`}>
                    <motion.div
                      className={cn(
                        "group relative card-lumina rounded-2xl p-6 border transition-all duration-300",
                        "hover:scale-105 hover:shadow-xl",
                        colors.border
                      )}
                      whileHover={{ y: -5 }}
                    >
                      {/* Season badge */}
                      <div
                        className={cn(
                          "inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4",
                          `bg-gradient-to-r ${colors.gradient}`
                        )}
                      >
                        {Icon && <Icon className="w-4 h-4 text-white" />}
                        <span className="text-sm font-medium text-white">{season.name}</span>
                      </div>

                      {/* Content */}
                      <h3 className={cn("text-2xl font-bold mb-2", colors.text)}>
                        {season.title}
                      </h3>
                      <p className="text-muted-foreground font-medium mb-3">
                        {season.subtitle}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {storytelling.seasons[index].description}
                      </p>

                      {/* CTA */}
                      <div className={cn(
                        "flex items-center gap-2 text-sm font-medium",
                        colors.text
                      )}>
                        자세히 보기
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>

                      {/* Step indicator */}
                      <div className="absolute top-4 right-4">
                        <div
                          className={cn(
                            "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white",
                            `bg-gradient-to-br ${colors.gradient}`
                          )}
                        >
                          {index + 1}
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* B1: Story Overview - 시각 강화 */}
      <section className="py-16 px-4 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                춘향전 이야기
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="prose prose-invert max-w-none">
              <div className="grid md:grid-cols-2 gap-8 relative">
                {/* md 이상에서 가로 연결선 */}
                <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-4rem)] h-px bg-gradient-to-r from-spring/20 via-summer/30 to-autumn/20" />

                {[
                  { title: "배경", season: "spring", text: "조선 시대 전라도 남원. 퇴기 월매의 딸 춘향과 남원 부사의 아들 이몽룡은 광한루에서 우연히 만나 첫눈에 사랑에 빠집니다. 신분의 차이에도 불구하고 두 사람은 영원한 사랑을 맹세합니다." },
                  { title: "시련", season: "summer", text: "몽룡이 과거를 보러 한양으로 떠난 후, 새로 부임한 변학도가 춘향에게 수청을 강요합니다. 춘향은 몽룡에 대한 정절을 지키며 거절하고, 옥에 갇히게 됩니다." },
                  { title: "기다림", season: "autumn", text: "옥에 갇힌 춘향은 죽음을 앞두고도 몽룡을 향한 사랑을 포기하지 않습니다. 한편 한양에서 과거에 급제한 몽룡은 암행어사가 되어 남원으로 향합니다." },
                  { title: "재회", season: "winter", text: "변학도의 생일 잔치 날, 암행어사 출두로 악행이 드러나고 춘향은 구출됩니다. 마침내 재회한 두 사람은 영원한 사랑을 이루며, 이들의 이야기는 불멸의 사랑의 상징이 됩니다." },
                ].map((item, index) => {
                  const Icon = overviewSeasonIcons[index];
                  const sKey = overviewSeasonKeys[index];
                  const sColors = seasonColors[sKey];

                  return (
                    <div
                      key={item.title}
                      className={cn(
                        "card-glass rounded-2xl p-6 border relative",
                        sColors.border
                      )}
                    >
                      {/* Act 번호 배지 */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className={cn(
                          "w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br",
                          sColors.gradient
                        )}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <span className={cn("text-xs font-bold uppercase tracking-wider", sColors.text)}>
                            Act {index + 1}
                          </span>
                          <h3 className={cn("text-xl font-bold", sColors.text)}>{item.title}</h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{item.text}</p>
                    </div>
                  );
                })}
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
              src="/images/infographics/03-storytelling-journey.png"
              alt="사계절 사랑 스토리텔링 여정"
              title="춘향과 몽룡의 사계절 사랑 여정"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* B2: Experience Types - 아이콘 추가 */}
      <section className="py-16 px-4 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                체험 유형
              </h2>
              <p className="text-muted-foreground">
                다양한 방식으로 춘향전의 세계를 경험하세요
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {[
              {
                title: "인터랙티브 체험",
                description: "터치, 움직임, 소리에 반응하는 첨단 기술로 스토리 속 주인공이 되어보세요.",
                color: "primary"
              },
              {
                title: "미디어 아트",
                description: "광한루와 오작교를 캔버스로 한 대형 프로젝션 매핑과 LED 연출을 감상하세요.",
                color: "secondary"
              },
              {
                title: "몰입형 공연",
                description: "배우들의 라이브 퍼포먼스와 관객 참여형 연극으로 감동을 느껴보세요.",
                color: "accent"
              }
            ].map((type, index) => {
              const Icon = experienceIcons[index];
              const colorKey = experienceColors[index];
              const bgClass = colorKey === "primary" ? "bg-lumina-primary/10" :
                colorKey === "secondary" ? "bg-lumina-secondary/10" : "bg-lumina-accent/10";
              const borderClass = colorKey === "primary" ? "border-lumina-primary/30" :
                colorKey === "secondary" ? "border-lumina-secondary/30" : "border-lumina-accent/30";
              const textClass = colorKey === "primary" ? "text-lumina-primary" :
                colorKey === "secondary" ? "text-lumina-secondary" : "text-lumina-accent";

              return (
                <StaggerItem key={type.title}>
                  <div className={cn(
                    "card-lumina rounded-2xl p-6 border h-full",
                    borderClass
                  )}>
                    {/* 아이콘 박스 */}
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center mb-4 border",
                      bgClass, borderClass
                    )}>
                      <Icon className={cn("w-6 h-6", textClass)} />
                    </div>
                    <h3 className={cn("text-xl font-bold mb-3", textClass)}>
                      {type.title}
                    </h3>
                    <p className="text-muted-foreground">{type.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
