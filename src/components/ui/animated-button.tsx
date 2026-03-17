import { cn } from "@/lib/utils";
import React from "react";

interface AnimatedButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const AnimatedButton = ({
  href = "#",
  children,
  className,
  onClick,
}: AnimatedButtonProps) => (
  <a
    href={href}
    onClick={onClick}
    className={cn(
      "relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-bold uppercase tracking-widest text-xs transition-all bg-background border border-outline-variant/30 group cursor-pointer font-label",
      className
    )}
  >
    {/* Animated fill — primary green slides in from bottom-left */}
    <span className="w-48 h-48 rotate-[-40deg] bg-primary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
    <span className="relative w-full text-center text-foreground transition-colors duration-300 ease-in-out group-hover:text-on-primary whitespace-nowrap">
      {children}
    </span>
  </a>
);
