"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star, Share2, ShoppingCart } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/scroll-reveal";
import { killerContents } from "@/data/killer-contents";
import { cn } from "@/lib/utils";

const colorClasses: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  primary: {
    bg: "bg-lumina-primary/10",
    border: "border-lumina-primary/30",
    text: "text-lumina-primary",
    glow: "hover:shadow-lumina-primary/20",
  },
  secondary: {
    bg: "bg-lumina-secondary/10",
    border: "border-lumina-secondary/30",
    text: "text-lumina-secondary",
    glow: "hover:shadow-lumina-secondary/20",
  },
  accent: {
    bg: "bg-lumina-accent/10",
    border: "border-lumina-accent/30",
    text: "text-lumina-accent",
    glow: "hover:shadow-lumina-accent/20",
  },
  gold: {
    bg: "bg-lumina-gold/10",
    border: "border-lumina-gold/30",
    text: "text-lumina-gold",
    glow: "hover:shadow-lumina-gold/20",
  },
};

export function ContentsListContent() {
  return (
    <>
      <PageHeader
        title="킬러 콘텐츠"
        subtitle="Killer Contents"
        description="전통과 첨단 기술이 융합된 4대 핵심 콘텐츠를 만나보세요"
        badge="4 Signature Experiences"
        badgeColor="secondary"
      />

      {/* Contents Grid */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.15}>
            {killerContents.map((content, index) => {
              const colors = colorClasses[content.color];

              return (
                <StaggerItem key={content.id}>
                  <Link href={`/contents/${content.id}`}>
                    <motion.div
                      className={cn(
                        "group card-lumina rounded-2xl overflow-hidden border transition-all duration-300",
                        "hover:scale-[1.02] hover:shadow-xl",
                        colors.border,
                        colors.glow
                      )}
                      whileHover={{ y: -5 }}
                    >
                      {/* Image */}
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={content.image}
                          alt={content.title}
                          fill
                          className="object-contain p-4 bg-card group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className={cn(
                          "absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium",
                          colors.bg,
                          colors.text
                        )}>
                          {content.subtitle}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-lumina-primary transition-colors">
                          {content.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 line-clamp-2">
                          {content.description}
                        </p>

                        {/* Stats */}
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                            <Star className={cn("w-4 h-4", colors.text)} />
                            <span>{content.stats.satisfaction}%</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                            <Share2 className={cn("w-4 h-4", colors.text)} />
                            <span>{content.stats.shareRate}%</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                            <ShoppingCart className={cn("w-4 h-4", colors.text)} />
                            <span>{content.stats.purchaseIntent}%</span>
                          </div>
                        </div>

                        {/* CTA */}
                        <div className={cn(
                          "flex items-center gap-2 font-medium",
                          colors.text
                        )}>
                          자세히 보기
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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

      {/* Summary Stats */}
      <section className="py-16 px-4 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                콘텐츠 종합 기대효과
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "평균 만족도", value: "96.3%", color: "primary" },
                { label: "평균 공유율", value: "88.5%", color: "secondary" },
                { label: "평균 구매의향", value: "75%", color: "accent" },
                { label: "콘텐츠 수", value: "4개", color: "gold" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className={cn(
                    "text-center p-6 rounded-2xl border",
                    colorClasses[stat.color].border,
                    colorClasses[stat.color].bg
                  )}
                >
                  <div className={cn("text-3xl font-bold mb-1", colorClasses[stat.color].text)}>
                    {stat.value}
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
