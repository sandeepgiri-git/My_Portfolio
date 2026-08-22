"use client";

interface MarqueeTextProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  reverse?: boolean;
}

export default function MarqueeText({ 
  children, 
  speed = 30, 
  className = "",
  reverse = false 
}: MarqueeTextProps) {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div 
        className="inline-flex"
        style={{
          animation: `marquee ${speed}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        <span className="inline-flex items-center gap-8 pr-8">
          {children}
        </span>
        <span className="inline-flex items-center gap-8 pr-8" aria-hidden>
          {children}
        </span>
      </div>
    </div>
  );
}
