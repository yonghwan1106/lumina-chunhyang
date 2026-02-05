"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Star,
  Share2,
  ShoppingCart,
  ChevronRight,
  Clock,
  Users,
  Smartphone,
  Zap,
} from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/scroll-reveal";
import { cn } from "@/lib/utils";

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
    schedule?: Array<{ time: string; show: string }> | { period: string; regular: string; special: string; weather: string };
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

  return (
    <>
      <PageHeader
        title={content.title}
        subtitle={content.subtitle}
        description={content.description}
        badge="Killer Content"
        badgeColor={content.color as "primary" | "secondary" | "accent" | "gold"}
      />

      {/* Back Button */}
      <div className="container mx-auto max-w-6xl px-4 -mt-8 mb-8">
        <Link
          href="/contents"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          모든 콘텐츠 보기
        </Link>
      </div>

      {/* Main Content */}
      <section className="py-8 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Image */}
            <ScrollReveal>
              <div className={cn("relative rounded-2xl overflow-hidden border", colors.border)}>
                <div className="aspect-[4/3] relative">
                  <Image
                    src={content.image}
                    alt={content.title}
                    fill
                    className="object-contain p-6 bg-card"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Info */}
            <ScrollReveal delay={0.2}>
              <div className="space-y-6">
                {/* Features */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">주요 기능</h3>
                  <ul className="grid grid-cols-1 gap-3">
                    {content.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-muted-foreground">
                        <ChevronRight className={cn("w-5 h-5 flex-shrink-0", colors.text)} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats */}
                <div className="space-y-4 pt-6 border-t border-border/50">
                  <h3 className="text-lg font-semibold text-foreground">기대 효과</h3>
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

      {/* Specs Section */}
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
                    <span className="text-sm text-muted-foreground capitalize">{key}</span>
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

      {/* Show Sequence (for global-signal) */}
      {content.showSequence && (
        <section className="py-12 px-4 bg-gradient-to-b from-card/50 to-background">
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

      {/* Reviews */}
      {content.reviews && (
        <section className="py-12 px-4 bg-card/50">
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
    </>
  );
}
