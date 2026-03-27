import type { CSSProperties } from "react";
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
    <div
      className={cn("absolute shape-enter", className)}
      style={
        {
          "--shape-rotate": `${rotate}deg`,
          animationDelay: `${delay}s`,
        } as CSSProperties
      }
    >
      <div
        className="shape-float relative"
        style={
          {
            "--shape-width": `${mobileWidth ?? width}px`,
            "--shape-height": `${mobileHeight ?? height}px`,
            "--shape-width-md": `${width}px`,
            "--shape-height-md": `${height}px`,
          } as CSSProperties
        }
      >
        <div
          className={cn(
            "rounded-full w-[var(--shape-width)] h-[var(--shape-height)] md:w-[var(--shape-width-md)] md:h-[var(--shape-height-md)]",
            "bg-gradient-to-r to-transparent",
            gradient,
            "border-2 border-white/[0.10]",
            "shadow-[0_8px_32px_0_rgba(78,222,163,0.08)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(78,222,163,0.12),transparent_70%)]"
          )}
        />
      </div>
    </div>
  );
}
