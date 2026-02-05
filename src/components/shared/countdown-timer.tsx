"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CountdownTimerProps {
  targetDate: Date;
  label?: string;
  className?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function TimeBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        key={value}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-card border border-lumina-primary/30 flex items-center justify-center glow-primary"
      >
        <span className="text-2xl md:text-3xl font-bold text-lumina-primary">
          {value.toString().padStart(2, "0")}
        </span>
      </motion.div>
      <span className="text-xs md:text-sm text-muted-foreground mt-2">{label}</span>
    </div>
  );
}

export function CountdownTimer({ targetDate, label = "D-Day", className }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!mounted) {
    return (
      <div className={cn("flex flex-col items-center gap-4", className)}>
        <span className="text-sm font-medium text-muted-foreground">{label}</span>
        <div className="flex items-center gap-3 md:gap-4">
          {[0, 0, 0, 0].map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-card border border-lumina-primary/30 flex items-center justify-center">
                <span className="text-2xl md:text-3xl font-bold text-lumina-primary">00</span>
              </div>
              <span className="text-xs md:text-sm text-muted-foreground mt-2">
                {["일", "시간", "분", "초"][i]}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col items-center gap-4", className)}>
      <span className="text-sm font-medium text-muted-foreground">{label}</span>
      <div className="flex items-center gap-3 md:gap-4">
        <TimeBlock value={timeLeft.days} label="일" />
        <span className="text-2xl font-bold text-lumina-primary/50">:</span>
        <TimeBlock value={timeLeft.hours} label="시간" />
        <span className="text-2xl font-bold text-lumina-primary/50">:</span>
        <TimeBlock value={timeLeft.minutes} label="분" />
        <span className="text-2xl font-bold text-lumina-primary/50">:</span>
        <TimeBlock value={timeLeft.seconds} label="초" />
      </div>
    </div>
  );
}
