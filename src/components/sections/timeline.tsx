"use client";

import { motion } from "framer-motion";
import { Flag, Target, Zap, Rocket, CheckCircle } from "lucide-react";
import { siteContent } from "@/data/content";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/scroll-reveal";
import { InfographicCard } from "@/components/shared/infographic-card";
import { cn } from "@/lib/utils";

const phaseIcons = [Target, Zap, Rocket, Flag];
const phaseColors = [
  { bg: "bg-lumina-primary/10", border: "border-lumina-primary/30", text: "text-lumina-primary", fill: "bg-lumina-primary" },
  { bg: "bg-lumina-secondary/10", border: "border-lumina-secondary/30", text: "text-lumina-secondary", fill: "bg-lumina-secondary" },
  { bg: "bg-lumina-accent/10", border: "border-lumina-accent/30", text: "text-lumina-accent", fill: "bg-lumina-accent" },
  { bg: "bg-lumina-gold/10", border: "border-lumina-gold/30", text: "text-lumina-gold", fill: "bg-lumina-gold" },
];

interface TimelinePhaseProps {
  phase: (typeof siteContent.timeline.phases)[number];
  index: number;
  isLast: boolean;
}

function TimelinePhase({ phase, index, isLast }: TimelinePhaseProps) {
  const Icon = phaseIcons[index];
  const colors = phaseColors[index];

  return (
    <div className="relative">
      {/* Connector line */}
      {!isLast && (
        <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-border via-border to-transparent z-0" />
      )}

      <div className={cn("relative z-10 card-lumina rounded-2xl p-6 border transition-all duration-300 hover:scale-105", colors.border)}>
        {/* Phase header */}
        <div className="flex items-center gap-3 mb-4">
          <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", colors.bg)}>
            <Icon className={cn("w-5 h-5", colors.text)} />
          </div>
          <div>
            <span className={cn("text-sm font-semibold", colors.text)}>{phase.phase}</span>
            <h3 className="text-lg font-bold text-foreground">{phase.title}</h3>
          </div>
        </div>

        {/* Items */}
        <ul className="space-y-2">
          {phase.items.map((item, i) => (
            <motion.li
              key={i}
              className="flex items-start gap-2"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <CheckCircle className={cn("w-4 h-4 mt-0.5 flex-shrink-0", colors.text)} />
              <span className="text-sm text-muted-foreground">{item}</span>
            </motion.li>
          ))}
        </ul>

        {/* Progress indicator */}
        <div className="mt-4 pt-4 border-t border-border/50">
          <div className="flex items-center gap-2">
            <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
              <motion.div
                className={cn("h-full rounded-full", colors.fill)}
                initial={{ width: 0 }}
                whileInView={{ width: `${(index + 1) * 25}%` }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
              />
            </div>
            <span className="text-xs text-muted-foreground">{(index + 1) * 25}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Timeline() {
  const { timeline } = siteContent;

  return (
    <section id="timeline" className="py-24 px-4 bg-gradient-to-b from-card/50 to-background">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-lumina-gold text-sm font-medium tracking-wider uppercase">
              {timeline.subtitle}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-foreground">
              {timeline.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              축제 성공을 위한 체계적인 마케팅 및 운영 로드맵
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline phases */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12" staggerDelay={0.15}>
          {timeline.phases.map((phase, index) => (
            <StaggerItem key={phase.phase}>
              <TimelinePhase phase={phase} index={index} isLast={index === timeline.phases.length - 1} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Infographic */}
        <ScrollReveal delay={0.3}>
          <div className="max-w-4xl mx-auto">
            <InfographicCard
              src="/images/infographics/08-marketing-roadmap.png"
              alt="마케팅 홍보 로드맵"
              title="D-180 마케팅 홍보 로드맵"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
