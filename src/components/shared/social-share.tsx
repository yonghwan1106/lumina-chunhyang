"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Share2, Link2, Check, X as XIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialShareProps {
  title: string;
  className?: string;
}

export function SocialShare({ title, className }: SocialShareProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const getUrl = () => {
    if (typeof window === "undefined") return "";
    return window.location.href;
  };

  const shareOptions = [
    {
      name: "X / Twitter",
      icon: XIcon,
      onClick: () => {
        const url = getUrl();
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
          "_blank",
          "noopener,noreferrer"
        );
      },
    },
    {
      name: "Facebook",
      icon: () => (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      onClick: () => {
        const url = getUrl();
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
          "_blank",
          "noopener,noreferrer"
        );
      },
    },
    {
      name: "카카오스토리",
      icon: () => (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3c-5.088 0-9.168 3.384-9.168 7.6 0 2.792 1.856 5.232 4.632 6.608l-1.2 4.392 5.064-3.336c.216.016.44.032.672.032 5.088 0 9.168-3.384 9.168-7.6S17.088 3 12 3z" />
        </svg>
      ),
      onClick: () => {
        const url = getUrl();
        window.open(
          `https://story.kakao.com/share?url=${encodeURIComponent(url)}`,
          "_blank",
          "noopener,noreferrer"
        );
      },
    },
  ];

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(getUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback for older browsers
    }
  };

  return (
    <div className={cn("relative", className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-muted-foreground hover:text-foreground border border-border/50 hover:border-border transition-colors"
        aria-label="공유하기"
      >
        <Share2 className="w-4 h-4" />
        공유
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full mb-2 left-0 card-lumina rounded-xl p-2 min-w-[180px] border border-border/50 shadow-xl"
          >
            {shareOptions.map((option) => {
              const Icon = option.icon;
              return (
                <button
                  key={option.name}
                  onClick={() => {
                    option.onClick();
                    setIsOpen(false);
                  }}
                  className="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  {option.name}
                </button>
              );
            })}
            <div className="border-t border-border/50 my-1" />
            <button
              onClick={() => {
                copyLink();
                setTimeout(() => setIsOpen(false), 1500);
              }}
              className="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-400" />
              ) : (
                <Link2 className="w-4 h-4" />
              )}
              {copied ? "복사됨!" : "링크 복사"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
