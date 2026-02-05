"use client";

import { motion } from "framer-motion";
import { Sparkles, ExternalLink, Mail, Phone, MapPin } from "lucide-react";
import { siteContent } from "@/data/content";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { InfographicCard } from "@/components/shared/infographic-card";

export function Footer() {
  const { footer } = siteContent;

  return (
    <footer className="py-24 px-4 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto max-w-6xl">
        {/* CTA Section */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 mb-6"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-6 h-6 text-lumina-gold" />
              <Sparkles className="w-8 h-8 text-lumina-primary" />
              <Sparkles className="w-6 h-6 text-lumina-gold" />
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              {footer.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              2026 루미나 춘향과 함께 새로운 야간 관광의 역사를 만들어갈 파트너를 찾습니다
            </p>

            <motion.a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-lumina-primary to-lumina-secondary text-white font-medium text-lg transition-all duration-300 glow-primary hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {footer.cta}
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </div>
        </ScrollReveal>

        {/* Infographic */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-4xl mx-auto mb-16">
            <InfographicCard
              src="/images/infographics/10-sustainability.png"
              alt="운영 관리 및 지속가능성"
              title="지속가능한 축제 운영 전략"
            />
          </div>
        </ScrollReveal>

        {/* Contact & Links */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <ScrollReveal direction="left" delay={0.1}>
            <div className="card-lumina rounded-2xl p-6 border border-border/50">
              <h4 className="font-semibold text-foreground mb-4">연락처</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-4 h-4 text-lumina-primary" />
                  <span>lumina@namwon.go.kr</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-4 h-4 text-lumina-secondary" />
                  <span>063-620-6161</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-lumina-accent" />
                  <span>전북 남원시 요천로 1447</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Quick Links */}
          <ScrollReveal delay={0.2}>
            <div className="card-lumina rounded-2xl p-6 border border-border/50">
              <h4 className="font-semibold text-foreground mb-4">바로가기</h4>
              <ul className="space-y-2">
                {footer.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="flex items-center gap-2 text-muted-foreground hover:text-lumina-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Social & Hashtags */}
          <ScrollReveal direction="right" delay={0.3}>
            <div className="card-lumina rounded-2xl p-6 border border-border/50">
              <h4 className="font-semibold text-foreground mb-4">공식 해시태그</h4>
              <div className="flex flex-wrap gap-2">
                {["#루미나춘향", "#춘향제2026", "#남원야경", "#야간관광", "#빛축제"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-lumina-primary/10 text-lumina-primary text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-lumina-primary" />
              <span className="text-lg font-bold gradient-lumina bg-clip-text text-transparent">
                루미나 춘향
              </span>
            </div>

            <p className="text-sm text-muted-foreground text-center">
              {footer.copyright}
            </p>

            <p className="text-xs text-muted-foreground">
              Built with Next.js & Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
