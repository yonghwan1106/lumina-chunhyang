"use client";

import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { siteContent } from "@/data/content";

interface Lantern {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  color: string;
}

interface CherryPetal {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
  rotation: number;
}

function FloatingLantern({ lantern }: { lantern: Lantern }) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: `${lantern.x}%`,
        top: `${lantern.y}%`,
        width: lantern.size,
        height: lantern.size,
        background: `radial-gradient(circle, ${lantern.color} 0%, transparent 70%)`,
        filter: `blur(${lantern.size * 0.1}px)`,
      }}
      animate={{
        y: [-10, -30, -10],
        x: [-5, 5, -5],
        opacity: [0.3, 0.7, 0.3],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: lantern.duration,
        delay: lantern.delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

function CherryBlossomPetal({ petal }: { petal: CherryPetal }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: `${petal.x}%`,
        top: "-5%",
        width: petal.size,
        height: petal.size,
      }}
      initial={{ y: "-10%", opacity: 0, rotate: 0 }}
      animate={{
        y: "110vh",
        x: [0, 30, -20, 40, 0],
        opacity: [0, 1, 1, 1, 0],
        rotate: [0, 180, 360, 540, 720],
      }}
      transition={{
        duration: petal.duration,
        delay: petal.delay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <svg viewBox="0 0 20 20" className="w-full h-full">
        <ellipse
          cx="10"
          cy="10"
          rx="8"
          ry="5"
          fill="url(#petalGradient)"
          opacity="0.7"
        />
        <defs>
          <linearGradient id="petalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDA4AF" />
            <stop offset="100%" stopColor="#F472B6" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}

function StarField() {
  const stars = useMemo(() => {
    return Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            background: `radial-gradient(circle, rgba(244, 241, 237, 0.9) 0%, rgba(244, 241, 237, 0) 70%)`,
          }}
          animate={{
            opacity: [0.1, 0.8, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function MoonGlow() {
  return (
    <div className="absolute top-10 right-[15%] w-32 h-32 md:w-48 md:h-48">
      {/* 달빛 외곽 글로우 */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(244, 241, 237, 0.15) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* 달 본체 */}
      <motion.div
        className="absolute inset-[20%] rounded-full"
        style={{
          background: "radial-gradient(circle at 30% 30%, rgba(244, 241, 237, 0.25) 0%, rgba(244, 241, 237, 0.05) 50%, transparent 70%)",
        }}
        animate={{
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const { hero } = siteContent;

  const lanterns = useMemo(() => {
    const colors = [
      "rgba(139, 92, 246, 0.5)",   // 자주색
      "rgba(244, 114, 182, 0.5)",  // 분홍색
      "rgba(45, 212, 191, 0.4)",   // 옥색
      "rgba(245, 158, 11, 0.6)",   // 금색 (등불)
    ];

    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: 5 + Math.random() * 90,
      y: 15 + Math.random() * 55,
      size: 25 + Math.random() * 50,
      delay: Math.random() * 3,
      duration: 6 + Math.random() * 4,
      color: colors[i % colors.length],
    }));
  }, []);

  const cherryPetals = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: 8 + Math.random() * 12,
      delay: Math.random() * 10,
      duration: 12 + Math.random() * 8,
      rotation: Math.random() * 360,
    }));
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToContent = () => {
    const element = document.querySelector("#executive");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 배경 레이어 */}
      <div className="absolute inset-0 gradient-night-sky" />

      {/* 달빛 효과 */}
      <div className="absolute inset-0 bg-moonlit" />

      {/* 수묵화 번짐 효과 */}
      <div className="absolute inset-0 bg-ink-wash" />

      {/* 달 */}
      {mounted && <MoonGlow />}

      {/* 별 */}
      {mounted && <StarField />}

      {/* 떠다니는 등불 */}
      {mounted && (
        <div className="absolute inset-0">
          {lanterns.map((lantern) => (
            <FloatingLantern key={lantern.id} lantern={lantern} />
          ))}
        </div>
      )}

      {/* 벚꽃 파티클 */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {cherryPetals.map((petal) => (
            <CherryBlossomPetal key={petal.id} petal={petal} />
          ))}
        </div>
      )}

      {/* 한지 텍스처 오버레이 */}
      <div className="absolute inset-0 texture-hanji" />

      {/* 하단 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      {/* 콘텐츠 */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* 뱃지 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            {hero.description}
          </span>
        </motion.div>

        {/* 메인 타이틀 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 font-display"
        >
          <span
            className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-shift"
            style={{
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundSize: '200% 200%',
            }}
          >
            {hero.title}
          </span>
        </motion.h1>

        {/* 영문 서브타이틀 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground/70 mb-2 tracking-[0.3em] uppercase"
        >
          Lumina Chunhyang
        </motion.p>

        {/* 서브타이틀 */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8"
        >
          {hero.subtitle}
        </motion.p>

        {/* 슬로건 - 나눔명조로 강조 */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-3xl lg:text-4xl font-accent font-medium text-foreground mb-12 max-w-3xl mx-auto leading-relaxed text-glow-moon"
        >
          {hero.slogan}
        </motion.p>

        {/* CTA 버튼 */}
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          onClick={scrollToContent}
          className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-deep text-white font-medium text-lg transition-all duration-300 overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10 flex items-center gap-2">
            {hero.cta}
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </span>
          {/* 호버 시 글로우 */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              boxShadow: "0 0 40px rgba(139, 92, 246, 0.5), 0 0 80px rgba(244, 114, 182, 0.3)",
            }}
          />
        </motion.button>
      </div>

      {/* 스크롤 인디케이터 */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          className="w-7 h-12 rounded-full border-2 border-foreground/20 flex justify-center pt-2 backdrop-blur-sm"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-gradient-to-b from-primary to-secondary"
            animate={{ y: [0, 16, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
