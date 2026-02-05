"use client";

import { motion } from "framer-motion";
import { Flag, Target, Zap, Rocket, CheckCircle, Calendar, Clock, Users, Megaphone, Monitor, Tv } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/scroll-reveal";
import { InfographicCard } from "@/components/shared/infographic-card";
import { roadmapDetail } from "@/data/roadmap-detail";
import { cn } from "@/lib/utils";

const phaseIcons = [Target, Zap, Rocket, Flag];
const phaseColors = [
  { bg: "bg-lumina-primary/10", border: "border-lumina-primary/30", text: "text-lumina-primary", fill: "bg-lumina-primary" },
  { bg: "bg-lumina-secondary/10", border: "border-lumina-secondary/30", text: "text-lumina-secondary", fill: "bg-lumina-secondary" },
  { bg: "bg-lumina-accent/10", border: "border-lumina-accent/30", text: "text-lumina-accent", fill: "bg-lumina-accent" },
  { bg: "bg-lumina-gold/10", border: "border-lumina-gold/30", text: "text-lumina-gold", fill: "bg-lumina-gold" },
];

export function RoadmapContent() {
  return (
    <>
      <PageHeader
        title="마케팅 로드맵"
        subtitle="D-180 to D+30"
        description={roadmapDetail.overview.description}
        badge="210일 마케팅 전략"
        badgeColor="gold"
      />

      {/* Overview Stats */}
      <section className="py-12 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="grid grid-cols-3 gap-4 md:gap-8">
              {[
                { label: "총 기간", value: roadmapDetail.overview.totalDuration, icon: Calendar },
                { label: "주요 마일스톤", value: `${roadmapDetail.overview.keyMilestones}개`, icon: Flag },
                { label: "마케팅 예산", value: roadmapDetail.overview.totalBudget, icon: Megaphone },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 md:p-6 rounded-2xl bg-muted/30">
                  <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-lumina-gold mx-auto mb-2" />
                  <div className="text-lg md:text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Phases */}
      <section className="py-16 px-4 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">4단계 마케팅 전략</h2>
            </div>
          </ScrollReveal>

          <div className="space-y-8">
            {roadmapDetail.phases.map((phase, index) => {
              const Icon = phaseIcons[index];
              const colors = phaseColors[index];

              return (
                <ScrollReveal key={phase.phase} delay={index * 0.1}>
                  <div className={cn("rounded-2xl border p-6 md:p-8", colors.border)}>
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div className="flex items-center gap-4 mb-4 md:mb-0">
                        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", colors.bg)}>
                          <Icon className={cn("w-6 h-6", colors.text)} />
                        </div>
                        <div>
                          <span className={cn("text-sm font-semibold", colors.text)}>{phase.phase}</span>
                          <h3 className="text-xl font-bold text-foreground">{phase.title}</h3>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="text-sm">
                          <span className="text-muted-foreground">기간: </span>
                          <span className="text-foreground">{phase.period}</span>
                        </div>
                        <div className="text-sm">
                          <span className="text-muted-foreground">예산: </span>
                          <span className={cn("font-medium", colors.text)}>{phase.budget}</span>
                        </div>
                      </div>
                    </div>

                    {/* Objectives */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">목표</h4>
                      <div className="flex flex-wrap gap-2">
                        {phase.objectives.map((obj) => (
                          <span
                            key={obj}
                            className={cn("px-3 py-1.5 rounded-full text-sm", colors.bg, colors.text)}
                          >
                            {obj}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Weekly Tasks */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">주간 일정</h4>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-48 overflow-y-auto">
                        {phase.weeklyTasks.map((task) => (
                          <div
                            key={task.week}
                            className="flex items-start gap-2 p-3 rounded-lg bg-muted/30"
                          >
                            <CheckCircle className={cn("w-4 h-4 mt-0.5 flex-shrink-0", colors.text)} />
                            <div>
                              <span className="text-xs text-muted-foreground block">{task.week}</span>
                              <span className="text-sm text-foreground">{task.task}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Channels */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">채널별 전략</h4>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                        {phase.channels.map((channel) => (
                          <div key={channel.name} className={cn("p-3 rounded-xl border", colors.border)}>
                            <h5 className={cn("font-medium mb-1", colors.text)}>{channel.name}</h5>
                            <p className="text-xs text-muted-foreground mb-1">{channel.content}</p>
                            <p className="text-sm font-medium text-foreground">목표: {channel.target}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* KPIs */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">핵심 KPI</h4>
                      <div className="grid grid-cols-3 gap-4">
                        {phase.kpis.map((kpi) => (
                          <div key={kpi.metric} className="text-center">
                            <div className={cn("text-lg md:text-xl font-bold", colors.text)}>{kpi.target}</div>
                            <div className="text-xs text-muted-foreground">{kpi.metric}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">마일스톤 타임라인</h2>
              <p className="text-muted-foreground">주요 일정과 이벤트</p>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />

            {roadmapDetail.milestones.map((milestone, index) => (
              <ScrollReveal key={milestone.date} delay={index * 0.05}>
                <div className={cn(
                  "relative flex items-start gap-4 mb-8",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}>
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-lumina-primary -translate-x-1/2 mt-2" />

                  {/* Content */}
                  <div className={cn(
                    "ml-10 md:ml-0 md:w-[calc(50%-2rem)]",
                    index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                  )}>
                    <span className="text-sm text-lumina-primary font-medium">{milestone.date}</span>
                    <h4 className="text-lg font-bold text-foreground">{milestone.title}</h4>
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Implementation */}
      <section className="py-16 px-4 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">{roadmapDetail.techImplementation.title}</h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.1}>
            {roadmapDetail.techImplementation.items.map((item) => (
              <StaggerItem key={item.tech}>
                <div className="card-lumina rounded-xl p-5 border border-border/50">
                  <Monitor className="w-6 h-6 text-lumina-accent mb-3" />
                  <h4 className="font-semibold text-foreground mb-2">{item.tech}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{item.period}</p>
                  <span className="inline-block px-2 py-1 rounded-full bg-lumina-accent/10 text-lumina-accent text-xs">
                    {item.status}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Channel Strategy */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">채널별 전략</h2>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Digital */}
            <ScrollReveal delay={0.1}>
              <div className="card-lumina rounded-2xl p-6 border border-lumina-primary/30">
                <h3 className="text-xl font-bold text-lumina-primary mb-4">디지털 채널</h3>
                <div className="space-y-3">
                  {roadmapDetail.channelStrategy.digital.map((ch) => (
                    <div key={ch.channel} className="p-3 rounded-lg bg-lumina-primary/5">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-foreground">{ch.channel}</span>
                        <span className="text-sm text-lumina-primary">{ch.budget}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{ch.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Traditional */}
            <ScrollReveal delay={0.2}>
              <div className="card-lumina rounded-2xl p-6 border border-lumina-secondary/30">
                <h3 className="text-xl font-bold text-lumina-secondary mb-4">전통 채널</h3>
                <div className="space-y-3">
                  {roadmapDetail.channelStrategy.traditional.map((ch) => (
                    <div key={ch.channel} className="p-3 rounded-lg bg-lumina-secondary/5">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-foreground">{ch.channel}</span>
                        <span className="text-sm text-lumina-secondary">{ch.budget}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{ch.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Partnership */}
            <ScrollReveal delay={0.3}>
              <div className="card-lumina rounded-2xl p-6 border border-lumina-gold/30">
                <h3 className="text-xl font-bold text-lumina-gold mb-4">파트너십</h3>
                <div className="space-y-3">
                  {roadmapDetail.channelStrategy.partnership.map((p) => (
                    <div key={p.partner} className="p-3 rounded-lg bg-lumina-gold/5">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-foreground">{p.partner}</span>
                        <span className="text-sm text-lumina-gold">{p.count}개</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{p.type}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Infographic */}
      <section className="py-16 px-4 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <InfographicCard
              src="/images/infographics/08-marketing-roadmap.png"
              alt="마케팅 홍보 로드맵"
              title="D-180 마케팅 홍보 로드맵"
            />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
