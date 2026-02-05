"use client";

import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
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
        boxShadow: `0 0 ${lantern.size * 2}px ${lantern.color}`,
      }}
      animate={{
        y: [-20, -40, -20],
        opacity: [0.4, 0.8, 0.4],
        scale: [1, 1.2, 1],
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

function StarField() {
  const stars = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 3,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 3,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const { hero } = siteContent;

  const lanterns = useMemo(() => {
    const colors = [
      "rgba(168, 85, 247, 0.6)",
      "rgba(255, 107, 157, 0.6)",
      "rgba(0, 210, 255, 0.6)",
      "rgba(255, 215, 0, 0.6)",
    ];

    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: 20 + Math.random() * 60,
      size: 20 + Math.random() * 40,
      delay: Math.random() * 2,
      duration: 4 + Math.random() * 3,
      color: colors[i % colors.length],
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
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-night-sky" />

      {/* Stars */}
      {mounted && <StarField />}

      {/* Floating lanterns */}
      {mounted && (
        <div className="absolute inset-0">
          {lanterns.map((lantern) => (
            <FloatingLantern key={lantern.id} lantern={lantern} />
          ))}
        </div>
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lumina-primary/20 border border-lumina-primary/30 text-lumina-primary text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            {hero.description}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
        >
          <span className="gradient-lumina bg-clip-text text-transparent animate-gradient-shift">
            {hero.title}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-muted-foreground mb-6"
        >
          {hero.subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          {hero.slogan}
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          onClick={scrollToContent}
          className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-lumina-primary hover:bg-lumina-primary/90 text-white font-medium text-lg transition-all duration-300 glow-primary"
        >
          {hero.cta}
          <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex justify-center pt-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-lumina-primary"
            animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
