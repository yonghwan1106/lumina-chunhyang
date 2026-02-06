"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Mail, Phone, MapPin } from "lucide-react";
import { siteContent } from "@/data/content";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

// 등불 아이콘 SVG
function LanternIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C12 2 10 4 10 6C10 8 12 10 12 10C12 10 14 8 14 6C14 4 12 2 12 2Z"
        fill="url(#footerLanternGlow)"
      />
      <rect x="8" y="10" width="8" height="10" rx="1" fill="url(#footerLanternBody)" />
      <path
        d="M7 10H17M7 20H17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 20V22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="footerLanternGlow" x1="12" y1="2" x2="12" y2="10" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F59E0B" />
          <stop offset="1" stopColor="#F59E0B" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="footerLanternBody" x1="12" y1="10" x2="12" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#6D28D9" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Footer() {
  const { footer } = siteContent;

  return (
    <footer className="relative py-24 px-4 overflow-hidden">
      {/* 배경 */}
      <div className="absolute inset-0 gradient-night-sky" />
      <div className="absolute inset-0 bg-ink-wash opacity-30" />

      {/* 상단 장식 라인 */}
      <div className="absolute top-0 left-0 right-0 h-px divider-horizontal" />

      {/* 한지 텍스처 */}
      <div className="absolute inset-0 texture-hanji" />

      <div className="relative container mx-auto max-w-6xl">
        {/* CTA Section */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-4 mb-6"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-8 h-8 opacity-60">
                <LanternIcon className="w-full h-full text-gold" />
              </div>
              <div className="w-10 h-10">
                <LanternIcon className="w-full h-full text-gold" />
              </div>
              <div className="w-8 h-8 opacity-60">
                <LanternIcon className="w-full h-full text-gold" />
              </div>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span
                className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
                style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              >
                {footer.title}
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 font-accent">
              2026 루미나 춘향과 함께 새로운 야간 관광의 역사를 만들어갈 파트너를 찾습니다
            </p>

            <motion.a
              href="#"
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-deep text-white font-medium text-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                {footer.cta}
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.a>
          </div>
        </ScrollReveal>

        {/* Visual Banner */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-5xl mx-auto mb-16">
            <div className="relative rounded-2xl overflow-hidden border border-primary/20">
              <Image
                src="/images/infographics/footer-visual.png"
                alt="루미나 춘향 - 광한루와 오작교의 환상적인 야경"
                width={1920}
                height={1080}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1280px) 100vw, 1200px"
              />
              {/* 그라데이션 오버레이 */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <p className="text-lg md:text-xl font-accent text-foreground/90 text-glow-moon">
                  광한루의 밤, 오작교 위의 사랑
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Contact & Links */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Contact Info */}
          <ScrollReveal direction="left" delay={0.1}>
            <div className="card-lumina rounded-2xl p-6">
              <h4 className="font-display font-semibold text-foreground mb-4">연락처</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>lumina@namwon.go.kr</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <Phone className="w-4 h-4 text-secondary" />
                  <span>063-620-6161</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>전북 남원시 요천로 1447</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Quick Links */}
          <ScrollReveal delay={0.2}>
            <div className="card-lumina rounded-2xl p-6">
              <h4 className="font-display font-semibold text-foreground mb-4">바로가기</h4>
              <ul className="space-y-2">
                {footer.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Social & Hashtags */}
          <ScrollReveal direction="right" delay={0.3}>
            <div className="card-lumina rounded-2xl p-6">
              <h4 className="font-display font-semibold text-foreground mb-4">공식 해시태그</h4>
              <div className="flex flex-wrap gap-2">
                {["#루미나춘향", "#춘향제2026", "#남원야경", "#야간관광", "#빛축제"].map((tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors cursor-pointer"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* 장식 구분선 */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="dot-decoration" />
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6">
              <LanternIcon className="w-full h-full text-gold" />
            </div>
            <span
              className="text-lg font-display font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
              style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              루미나 춘향
            </span>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            {footer.copyright}
          </p>

          <p className="text-xs text-muted-foreground/60">
            Crafted with care using Next.js & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
