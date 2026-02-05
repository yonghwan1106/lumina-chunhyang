"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";

interface InfographicCardProps {
  src: string;
  alt: string;
  title?: string;
  className?: string;
}

export function InfographicCard({
  src,
  alt,
  title,
  className,
}: InfographicCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        className={cn(
          "relative group cursor-pointer overflow-hidden rounded-xl border border-border/50 bg-card",
          className
        )}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        onClick={() => setIsOpen(true)}
      >
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain p-2"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <div className="flex items-center gap-2 text-white">
            <ZoomIn className="w-5 h-5" />
            <span className="text-sm font-medium">크게 보기</span>
          </div>
        </div>

        {title && (
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
            <p className="text-sm font-medium text-white truncate">{title}</p>
          </div>
        )}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="relative max-w-5xl max-h-[90vh] w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              <div className="relative w-full h-[80vh] bg-card rounded-lg overflow-hidden">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-contain p-4"
                  sizes="100vw"
                  priority
                />
              </div>

              {title && (
                <p className="text-center text-white mt-4 text-lg font-medium">
                  {title}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
