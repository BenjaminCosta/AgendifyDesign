"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ElegantShape({
  className,
  delay = 0,
  width = 400,
  mobileWidth,
  height = 100,
  mobileHeight,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  mobileWidth?: number;
  height?: number;
  mobileHeight?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={
          {
            "--shape-width": `${mobileWidth ?? width}px`,
            "--shape-height": `${mobileHeight ?? height}px`,
            "--shape-width-md": `${width}px`,
            "--shape-height-md": `${height}px`,
          } as CSSProperties
        }
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full w-[var(--shape-width)] h-[var(--shape-height)] md:w-[var(--shape-width-md)] md:h-[var(--shape-height-md)]",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.10]",
            "shadow-[0_8px_32px_0_rgba(78,222,163,0.08)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(78,222,163,0.12),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}
