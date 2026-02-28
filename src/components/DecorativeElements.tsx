import { motion } from "framer-motion";

export const GridPattern = ({ className = "" }: { className?: string }) => (
  <svg className={`absolute pointer-events-none opacity-[0.03] ${className}`} width="100%" height="100%">
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
  </svg>
);

export const CircuitPattern = ({ className = "" }: { className?: string }) => (
  <svg className={`absolute pointer-events-none ${className}`} width="300" height="300" viewBox="0 0 300 300" fill="none">
    <circle cx="50" cy="50" r="4" fill="hsl(var(--gold))" opacity="0.2" />
    <circle cx="150" cy="100" r="3" fill="hsl(var(--gold))" opacity="0.15" />
    <circle cx="250" cy="200" r="5" fill="hsl(var(--gold))" opacity="0.1" />
    <path d="M50 50 L150 50 L150 100" stroke="hsl(var(--gold))" strokeWidth="1" opacity="0.1" />
    <path d="M150 100 L250 100 L250 200" stroke="hsl(var(--gold))" strokeWidth="1" opacity="0.08" />
    <circle cx="100" cy="250" r="3" fill="hsl(var(--gold))" opacity="0.12" />
    <path d="M100 250 L200 250 L200 150" stroke="hsl(var(--gold))" strokeWidth="1" opacity="0.06" />
  </svg>
);

export const FloatingDots = ({ count = 6 }: { count?: number }) => (
  <>
    {Array.from({ length: count }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1.5 h-1.5 rounded-full bg-gold/10"
        style={{
          top: `${15 + (i * 67) % 70}%`,
          left: `${10 + (i * 43) % 80}%`,
        }}
        animate={{ y: [0, -15, 0], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
      />
    ))}
  </>
);

export const GlowOrb = ({ className = "" }: { className?: string }) => (
  <div className={`absolute rounded-full blur-3xl pointer-events-none ${className}`} />
);
