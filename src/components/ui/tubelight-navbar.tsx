import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TubelightNavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface TubelightNavBarProps {
  items: TubelightNavItem[];
  className?: string;
  activeTab?: string;
}

export function TubelightNavBar({ items, className, activeTab }: TubelightNavBarProps) {
  const [active, setActive] = useState(activeTab ?? "");

  useEffect(() => {
    if (activeTab !== undefined) setActive(activeTab);
  }, [activeTab]);

  return (
    <div className={cn("flex items-center", className)}>
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = active === item.name;

        return (
          <a
            key={item.name}
            href={item.url}
            onClick={() => setActive(item.name)}
            className={cn(
              "relative cursor-pointer text-xs font-bold px-4 py-2 uppercase tracking-tighter transition-colors font-label",
              "text-foreground/70 hover:text-foreground",
              isActive && "text-foreground"
            )}
          >
            <span className="hidden md:inline">{item.name}</span>
            <span className="md:hidden">
              <Icon size={15} strokeWidth={2.5} />
            </span>

            {isActive && (
              <motion.div
                layoutId="tubelight-lamp"
                className="absolute inset-0 w-full bg-primary/10 -z-10"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Lamp glow effect */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary">
                  <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                  <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                  <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                </div>
              </motion.div>
            )}
          </a>
        );
      })}
    </div>
  );
}
