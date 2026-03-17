import type { HTMLAttributes } from "react";

interface RotatingBorderButtonProps extends HTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
  href?: string;
  width?: string;
  height?: string;
  disabled?: boolean;
}

const RotatingBorderButton = ({
  children,
  href = "#",
  width,
  height = "64px",
  className = "",
  disabled = false,
  style,
  ...props
}: RotatingBorderButtonProps) => {
  return (
    <a
      href={disabled ? undefined : href}
      aria-disabled={disabled}
      className={`
        rotatingGradient
        relative cursor-pointer
        after:content-[""] after:block after:absolute after:bg-[var(--color-background)]
        after:inset-[2px] after:z-[1]
        after:transition-opacity after:duration-300 after:ease-linear
        flex items-center justify-center
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
      style={{
        "--r": "0deg",
        minWidth: width,
        height,
        ...style,
      } as React.CSSProperties}
      {...props}
    >
      <span className="relative z-10 text-[var(--color-text)] flex items-center justify-center font-label font-bold uppercase tracking-widest text-xs px-10 whitespace-nowrap">
        {children}
      </span>
    </a>
  );
};

export default RotatingBorderButton;
