"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Star,
  Share2,
  ShoppingCart,
  ChevronRight,
  Clock,
  Users,
  Smartphone,
  Zap,
  MapPin,
  Camera,
  Globe,
  Monitor,
  Sparkles,
  ArrowRight,
  CalendarCheck,
  Timer,
  UserCheck,
  Hourglass,
  Wifi,
  Video,
  Languages,
  Archive,
} from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/scroll-reveal";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { SocialShare } from "@/components/shared/social-share";
import { cn } from "@/lib/utils";
import { killerContents } from "@/data/killer-contents";

interface ContentDetailPageProps {
  content: {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    stats: {
      satisfaction: number;
      shareRate: number;
      purchaseIntent: number;
    };
    image: string;
    color: string;
    specs?: Record<string, string | undefined>;
    pricing?: {
      standard: number;
      premium: number;
      vip: number;
      note: string;
    };
    arFeatures?: Array<{ name: string; description: string }>;
    reviews?: Array<{ user: string; rating: number; comment: string }>;
    scenarios?: Array<{ name: string; duration: string; description: string; interactive: string }>;
    schedule?: Array<{ time: string; show: string }> | { period?: string; regular?: string; special?: string; weather?: string };
    photoGuide?: { bestSpot: string; bestTime: string; tips: string[] };
    experienceFlow?: Array<{ step: number; title: string; description: string }>;
    lightEffects?: Array<{ name: string; trigger: string; description: string }>;
    reservation?: { required: boolean; duration: string; capacity: string; waitTime: string; tip: string };
    participation?: { online: Record<string, string>; onsite: Record<string, string> };
    liveStreaming?: { platforms: string[]; multiAngle: boolean; languages: string[]; archive: string };
    showSequence?: Array<{ time: string; description: string }>;
  };
}

const colorClasses: Record<string, { bg: string; border: string; text: string; fill: string }> = {
  primary: {
    bg: "bg-lumina-primary/10",
    border: "border-lumina-primary/30",
    text: "text-lumina-primary",
    fill: "bg-lumina-primary",
  },
  secondary: {
    bg: "bg-lumina-secondary/10",
    border: "border-lumina-secondary/30",
    text: "text-lumina-secondary",
    fill: "bg-lumina-secondary",
  },
  accent: {
    bg: "bg-lumina-accent/10",
    border: "border-lumina-accent/30",
    text: "text-lumina-accent",
    fill: "bg-lumina-accent",
  },
  gold: {
    bg: "bg-lumina-gold/10",
    border: "border-lumina-gold/30",
    text: "text-lumina-gold",
    fill: "bg-lumina-gold",
  },
};

// A6: 스펙 라벨 한글화
const specLabels: Record<string, string> = {
  size: "크기",
  weight: "무게",
  battery: "배터리",
  led: "LED",
  sensor: "센서",
  connectivity: "연결",
  projectors: "프로젝터",
  resolution: "해상도",
  coverage: "투사 면적",
  audio: "오디오",
  software: "소프트웨어",
  bridgeLength: "다리 길이",
  sensors: "센서",
  leds: "LED",
  soundSystem: "음향 시스템",
  camera: "카메라",
  drones: "드론",
  altitude: "최대 고도",
  flightTime: "비행 시간",
  formations: "형상 수",
  colors: "색상",
  safety: "안전 시스템",
};

// A8: 스토리 연결 데이터
const storyConnections: Record<string, { season: string; path: string; text: string }> = {
  hapjukseon: { season: "봄", path: "/story/spring", text: "봄 — 첫 만남의 설렘을 합죽선 하나에 담다" },
  pavilion: { season: "사계절", path: "/story/spring", text: "사계절 — 광한루에 피어나는 사랑의 서사" },
  ojakgyo: { season: "여름", path: "/story/summer", text: "여름 — 오작교에서 맹세한 영원한 사랑" },
  "global-signal": { season: "겨울", path: "/story/winter", text: "겨울 — 전 세계가 함께하는 재회의 감동" },
};

// 참여 방법 key 한글 변환
const participationLabels: Record<string, string> = {
  method: "참여 방법",
  deadline: "마감",
  fee: "비용",
  limit: "제한",
};

function StatBar({ label, value, color }: { label: string; value: number; color: string }) {
  const colors = colorClasses[color];

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">{label}</span>
        <span className={colors.text}>{value}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className={cn("h-full rounded-full", colors.fill)}
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </div>
    </div>
  );
}

export function ContentDetailPage({ content }: ContentDetailPageProps) {
  const colors = colorClasses[content.color];
  const otherContents = killerContents.filter((c) => c.id !== content.id);
  const storyConnection = storyConnections[content.id];

  return (
    <>
      <PageHeader
        title={content.title}
        subtitle={content.subtitle}
        description={content.description}
        badge="Killer Content"
        badgeColor={content.color as "primary" | "secondary" | "accent" | "gold"}
      />

      {/* Breadcrumb & Share */}
      <div className="container mx-auto max-w-6xl px-4 -mt-8 mb-8 flex items-center justify-between">
        <Breadcrumb
          items={[
            { label: "킬러 콘텐츠", href: "/contents" },
            { label: content.title },
          ]}
        />
        <SocialShare title={`${content.title} - 루미나 춘향`} />
      </div>

      {/* Infographic - Full Width */}
      <section className="py-8 px-4 bg-card/50">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <div className={cn("relative rounded-2xl overflow-hidden border", colors.border)}>
              <div className="relative w-full">
                <Image
                  src={content.image}
                  alt={content.title}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain bg-card"
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  priority
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features & Stats */}
      <section className="py-12 px-4 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Features */}
            <ScrollReveal>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground">주요 기능</h3>
                <ul className="grid grid-cols-1 gap-3">
                  {content.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-muted-foreground">
                      <ChevronRight className={cn("w-5 h-5 flex-shrink-0", colors.text)} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal delay={0.2}>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground">기대 효과</h3>
                <div className="space-y-4">
                  <StatBar label="만족도" value={content.stats.satisfaction} color={content.color} />
                  <StatBar label="SNS 공유율" value={content.stats.shareRate} color={content.color} />
                  <StatBar label="구매 의향" value={content.stats.purchaseIntent} color={content.color} />
                </div>

                {/* Quick Stats */}
                <div className="flex gap-4 pt-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Star className={cn("w-5 h-5", colors.text)} />
                    <span>{content.stats.satisfaction}% 만족</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Share2 className={cn("w-5 h-5", colors.text)} />
                    <span>{content.stats.shareRate}% 공유</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ShoppingCart className={cn("w-5 h-5", colors.text)} />
                    <span>{content.stats.purchaseIntent}% 구매</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* A8: 스토리 연결 배너 */}
      {storyConnection && (
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-6xl">
            <ScrollReveal>
              <Link href={storyConnection.path}>
                <div className={cn(
                  "relative overflow-hidden rounded-2xl p-6 border transition-all hover:scale-[1.01]",
                  colors.border, colors.bg
                )}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={cn("w-10 h-10 rounded-full flex items-center justify-center", colors.fill)}>
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">춘향전 스토리 연결</p>
                        <p className={cn("font-bold text-lg", colors.text)}>{storyConnection.text}</p>
                      </div>
                    </div>
                    <ArrowRight className={cn("w-6 h-6", colors.text)} />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Specs Section (A6: 한글 라벨) */}
      {content.specs && (
        <section className="py-12 px-4 bg-gradient-to-b from-card/50 to-background">
          <div className="container mx-auto max-w-6xl">
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-foreground mb-8">제품 사양</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(content.specs).filter(([, value]) => value !== undefined).map(([key, value]) => (
                  <div key={key} className={cn("p-4 rounded-xl border", colors.border, colors.bg)}>
                    <span className="text-sm text-muted-foreground">{specLabels[key] || key}</span>
                    <p className="font-medium text-foreground mt-1">{value}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Pricing Section */}
      {content.pricing && (
        <section className="py-12 px-4 bg-card/50">
          <div className="container mx-auto max-w-6xl">
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-foreground mb-8">가격 정보</h2>
            </ScrollReveal>
            <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
              {[
                { name: "스탠다드", price: content.pricing.standard, desc: "기본 LED 패턴" },
                { name: "프리미엄", price: content.pricing.premium, desc: "AR 기능 포함" },
                { name: "VIP", price: content.pricing.vip, desc: "골드 도금 + 개인 각인" },
              ].map((tier, index) => (
                <StaggerItem key={tier.name}>
                  <div className={cn(
                    "p-6 rounded-2xl border text-center",
                    index === 2 ? `${colors.border} ${colors.bg}` : "border-border/50"
                  )}>
                    <h3 className={cn("font-bold text-lg mb-2", index === 2 ? colors.text : "text-foreground")}>
                      {tier.name}
                    </h3>
                    <p className="text-3xl font-bold text-foreground mb-2">
                      {tier.price.toLocaleString()}<span className="text-lg">원</span>
                    </p>
                    <p className="text-sm text-muted-foreground">{tier.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
            <ScrollReveal delay={0.3}>
              <p className="text-sm text-muted-foreground text-center mt-6">{content.pricing.note}</p>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* AR Features */}
      {content.arFeatures && (
        <section className="py-12 px-4 bg-gradient-to-b from-card/50 to-background">
          <div className="container mx-auto max-w-6xl">
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-foreground mb-8">AR 기능</h2>
            </ScrollReveal>
            <StaggerContainer className="grid md:grid-cols-2 gap-4" staggerDelay={0.1}>
              {content.arFeatures.map((feature) => (
                <StaggerItem key={feature.name}>
                  <div className={cn("p-5 rounded-xl border flex items-start gap-4", colors.border)}>
                    <Smartphone className={cn("w-6 h-6 flex-shrink-0 mt-1", colors.text)} />
                    <div>
                      <h4 className="font-semibold text-foreground">{feature.name}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* Scenarios (for pavilion) */}
      {content.scenarios && (
        <section className="py-12 px-4 bg-card/50">
          <div className="container mx-auto max-w-6xl">
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-foreground mb-8">공연 시나리오</h2>
            </ScrollReveal>
            <StaggerContainer className="space-y-4" staggerDelay={0.1}>
              {content.scenarios.map((scenario) => (
                <StaggerItem key={scenario.name}>
                  <div className={cn("p-6 rounded-xl border", colors.border)}>
                    <div className="flex items-center gap-4 mb-3">
                      <h4 className={cn("font-bold text-lg", colors.text)}>{scenario.name}</h4>
                      <span className="text-sm text-muted-foreground">({scenario.duration})</span>
                    </div>
                    <p className="text-muted-foreground mb-2">{scenario.description}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <Zap className={cn("w-4 h-4", colors.text)} />
                      <span className="text-foreground">인터랙티브: {scenario.interactive}</span>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* A1: 공연 시간표 (Pavilion schedule 배열) */}
      {content.schedule && Array.isArray(content.schedule) && (() => {
        const scheduleArr = content.schedule as Array<{ time: string; show: string }>;
        return (
          <section className="py-12 px-4 bg-gradient-to-b from-card/50 to-background">
            <div className="container mx-auto max-w-6xl">
              <ScrollReveal>
                <h2 className="text-2xl font-bold text-foreground mb-8">공연 시간표</h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {scheduleArr.map((item, index) => (
                    <div
                      key={item.time}
                      className={cn(
                        "p-4 rounded-xl border text-center transition-all",
                        index === scheduleArr.length - 1
                          ? `${colors.border} ${colors.bg}`
                          : "border-border/50"
                      )}
                    >
                      <Clock className={cn("w-5 h-5 mx-auto mb-2", colors.text)} />
                      <p className={cn("text-lg font-bold font-mono", colors.text)}>{item.time}</p>
                      <p className="text-sm text-muted-foreground mt-1">{item.show}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </section>
        );
      })()}

      {/* A2: 촬영 가이드 (Pavilion photoGuide) */}
      {content.photoGuide && (
        <section className="py-12 px-4 bg-card/50">
          <div className="container mx-auto max-w-6xl">
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-foreground mb-8">촬영 가이드</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className={cn("rounded-2xl p-6 border", colors.border)}>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="flex items-start gap-4">
                    <MapPin className={cn("w-6 h-6 flex-shrink-0", colors.text)} />
                    <div>
                      <h4 className="font-semibold text-foreground">베스트 촬영 포인트</h4>
                      <p className="text-muted-foreground">{content.photoGuide.bestSpot}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className={cn("w-6 h-6 flex-shrink-0", colors.text)} />
                    <div>
                      <h4 className="font-semibold text-foreground">최적 촬영 시간</h4>
                      <p className="text-muted-foreground">{content.photoGuide.bestTime}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {content.photoGuide.tips.map((tip) => (
                    <span
                      key={tip}
                      className={cn(
                        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm",
                        colors.bg, colors.text
                      )}
                    >
                      <Camera className="w-3.5 h-3.5" />
                      {tip}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Experience Flow (for ojakgyo) */}
      {content.experienceFlow && (
        <section className="py-12 px-4 bg-gradient-to-b from-card/50 to-background">
          <div className="container mx-auto max-w-6xl">
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-foreground mb-8">체험 순서</h2>
            </ScrollReveal>
            <StaggerContainer className="relative" staggerDelay={0.1}>
              {content.experienceFlow.map((step, index) => (
                <StaggerItem key={step.step}>
                  <div className="flex gap-4 mb-6 last:mb-0">
                    <div className="flex flex-col items-center">
                      <div className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center font-bold text-white",
                        colors.fill
                      )}>
                        {step.step}
                      </div>
                      {index < content.experienceFlow!.length - 1 && (
                        <div className={cn("w-0.5 h-full mt-2", colors.bg)} />
                      )}
                    </div>
                    <div className="pb-6">
                      <h4 className="font-semibold text-foreground">{step.title}</h4>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* Light Effects (for ojakgyo) */}
      {content.lightEffects && (
        <section className="py-12 px-4 bg-card/50">
          <div className="container mx-auto max-w-6xl">
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-foreground mb-8">빛 효과</h2>
            </ScrollReveal>
            <StaggerContainer className="grid md:grid-cols-2 gap-4" staggerDelay={0.1}>
              {content.lightEffects.map((effect) => (
                <StaggerItem key={effect.name}>
                  <div className={cn("p-5 rounded-xl border", colors.border, colors.bg)}>
                    <h4 className={cn("font-bold mb-1", colors.text)}>{effect.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">트리거: {effect.trigger}</p>
                    <p className="text-foreground">{effect.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* A3: 예약 안내 (Ojakgyo reservation) */}
      {content.reservation && (
        <section className="py-12 px-4 bg-gradient-to-b from-card/50 to-background">
          <div className="container mx-auto max-w-6xl">
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-foreground mb-8">예약 안내</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className={cn("p-4 rounded-xl border text-center", colors.border, colors.bg)}>
                  <CalendarCheck className={cn("w-6 h-6 mx-auto mb-2", colors.text)} />
                  <p className="text-sm text-muted-foreground">예약 여부</p>
                  <p className="font-bold text-foreground">{content.reservation.required ? "필수" : "선택"}</p>
                </div>
                <div className={cn("p-4 rounded-xl border text-center", colors.border, colors.bg)}>
                  <Timer className={cn("w-6 h-6 mx-auto mb-2", colors.text)} />
                  <p className="text-sm text-muted-foreground">소요 시간</p>
                  <p className="font-bold text-foreground">{content.reservation.duration}</p>
                </div>
                <div className={cn("p-4 rounded-xl border text-center", colors.border, colors.bg)}>
                  <UserCheck className={cn("w-6 h-6 mx-auto mb-2", colors.text)} />
                  <p className="text-sm text-muted-foreground">수용 인원</p>
                  <p className="font-bold text-foreground">{content.reservation.capacity}</p>
                </div>
                <div className={cn("p-4 rounded-xl border text-center", colors.border, colors.bg)}>
                  <Hourglass className={cn("w-6 h-6 mx-auto mb-2", colors.text)} />
                  <p className="text-sm text-muted-foreground">평균 대기</p>
                  <p className="font-bold text-foreground">{content.reservation.waitTime}</p>
                </div>
              </div>
              <div className={cn("p-4 rounded-xl border flex items-center gap-3", colors.border)}>
                <div className={cn("px-2.5 py-1 rounded-md text-xs font-bold text-white", colors.fill)}>TIP</div>
                <p className="text-foreground text-sm">{content.reservation.tip}</p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Show Sequence (for global-signal) */}
      {content.showSequence && (
        <section className="py-12 px-4 bg-card/50">
          <div className="container mx-auto max-w-6xl">
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-foreground mb-8">쇼 타임라인</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className={cn("p-6 rounded-2xl border", colors.border)}>
                {content.showSequence.map((seq, index) => (
                  <div
                    key={seq.time}
                    className={cn(
                      "flex items-start gap-4 py-4",
                      index < content.showSequence!.length - 1 && "border-b border-border/50"
                    )}
                  >
                    <div className={cn(
                      "px-3 py-1 rounded-lg text-sm font-mono font-medium",
                      colors.bg,
                      colors.text
                    )}>
                      {seq.time}
                    </div>
                    <p className="text-foreground">{seq.description}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* A4: 참여 방법 (Global Signal participation) */}
      {content.participation && (
        <section className="py-12 px-4 bg-gradient-to-b from-card/50 to-background">
          <div className="container mx-auto max-w-6xl">
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-foreground mb-8">참여 방법</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="grid md:grid-cols-2 gap-6">
                {/* 온라인 참여 */}
                <div className={cn("p-6 rounded-2xl border", colors.border)}>
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className={cn("w-6 h-6", colors.text)} />
                    <h3 className={cn("font-bold text-lg", colors.text)}>온라인 참여</h3>
                  </div>
                  <div className="space-y-3">
                    {Object.entries(content.participation.online).map(([key, value]) => (
                      <div key={key} className="flex items-start gap-3">
                        <span className="text-sm text-muted-foreground min-w-[70px]">
                          {participationLabels[key] || key}
                        </span>
                        <span className="text-foreground text-sm">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* 현장 참여 */}
                <div className={cn("p-6 rounded-2xl border", colors.border)}>
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className={cn("w-6 h-6", colors.text)} />
                    <h3 className={cn("font-bold text-lg", colors.text)}>현장 참여</h3>
                  </div>
                  <div className="space-y-3">
                    {Object.entries(content.participation.onsite).map(([key, value]) => (
                      <div key={key} className="flex items-start gap-3">
                        <span className="text-sm text-muted-foreground min-w-[70px]">
                          {participationLabels[key] || key}
                        </span>
                        <span className="text-foreground text-sm">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* A5: 라이브 스트리밍 (Global Signal liveStreaming) */}
      {content.liveStreaming && (
        <section className="py-12 px-4 bg-card/50">
          <div className="container mx-auto max-w-6xl">
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-foreground mb-8">라이브 스트리밍</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className={cn("p-6 rounded-2xl border", colors.border)}>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* 플랫폼 */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Video className={cn("w-5 h-5", colors.text)} />
                      <h4 className="font-semibold text-foreground">스트리밍 플랫폼</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {content.liveStreaming.platforms.map((platform) => (
                        <span
                          key={platform}
                          className={cn("px-3 py-1.5 rounded-full text-sm font-medium", colors.bg, colors.text)}
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* 지원 언어 */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Languages className={cn("w-5 h-5", colors.text)} />
                      <h4 className="font-semibold text-foreground">지원 언어</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {content.liveStreaming.languages.map((lang) => (
                        <span
                          key={lang}
                          className={cn("px-3 py-1.5 rounded-full text-sm font-medium", colors.bg, colors.text)}
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border/50 flex flex-wrap gap-6">
                  <div className="flex items-center gap-2 text-sm">
                    <div className={cn(
                      "w-2.5 h-2.5 rounded-full",
                      content.liveStreaming.multiAngle ? "bg-emerald-400" : "bg-muted-foreground"
                    )} />
                    <span className="text-foreground">멀티앵글 {content.liveStreaming.multiAngle ? "지원" : "미지원"}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Archive className={cn("w-4 h-4", colors.text)} />
                    <span className="text-foreground">{content.liveStreaming.archive}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Reviews */}
      {content.reviews && (
        <section className="py-12 px-4 bg-gradient-to-b from-card/50 to-background">
          <div className="container mx-auto max-w-6xl">
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-foreground mb-8">체험 후기</h2>
            </ScrollReveal>
            <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
              {content.reviews.map((review) => (
                <StaggerItem key={review.user}>
                  <div className="p-6 rounded-xl border border-border/50 bg-card">
                    <div className="flex items-center gap-1 mb-3">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-lumina-gold text-lumina-gold" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4">&quot;{review.comment}&quot;</p>
                    <p className="text-sm font-medium text-foreground">- {review.user}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* A7: 다른 콘텐츠 탐색 */}
      <section className="py-12 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">다른 킬러 콘텐츠</h2>
              <p className="text-muted-foreground">4대 핵심 콘텐츠를 모두 만나보세요</p>
            </div>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {otherContents.map((item) => {
              const itemColors = colorClasses[item.color];
              return (
                <StaggerItem key={item.id}>
                  <Link href={`/contents/${item.id}`}>
                    <motion.div
                      className={cn(
                        "group card-glass rounded-2xl p-5 border-l-4 transition-all",
                        itemColors.border
                      )}
                      whileHover={{ scale: 1.03, y: -4 }}
                    >
                      <h3 className={cn("font-bold text-lg mb-1", itemColors.text)}>{item.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{item.subtitle}</p>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{item.description}</p>
                      <div className={cn("flex items-center gap-2 text-sm font-medium", itemColors.text)}>
                        자세히 보기
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
