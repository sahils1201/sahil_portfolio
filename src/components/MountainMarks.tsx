import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

/** Tiny inline mountain glyph used as a recurring brand motif. */
export function MountainGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 14"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      className={cn("h-3.5 w-6", className)}
    >
      <path d="M1 13 8 3l4 5.2L15.5 4 23 13Z" />
    </svg>
  );
}

/** Thin animated contour line used to separate sections. */
export function RidgeDivider() {
  const { ref, visible } = useReveal<HTMLDivElement>(0.4);
  return (
    <div ref={ref} className="mx-auto max-w-[1400px] px-6 md:px-10" aria-hidden="true">
      <svg viewBox="0 0 1200 24" className="h-6 w-full text-border" fill="none">
        <path
          d="M0 20h380l58-13 34 9 40-14 46 18 52-9 44 6 40-11 52 14h354"
          stroke="currentColor"
          strokeWidth="1"
          pathLength={1}
          strokeDasharray={1}
          strokeDashoffset={visible ? 0 : 1}
          style={{ transition: "stroke-dashoffset 1800ms cubic-bezier(.16,1,.3,1)" }}
        />
      </svg>
    </div>
  );
}

/** Layered silhouette that fades in near the footer. */
export function FooterMountains() {
  const { ref, visible } = useReveal<HTMLDivElement>(0.1);
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-56 overflow-hidden"
    >
      <svg viewBox="0 0 1200 240" preserveAspectRatio="none" className="h-full w-full">
        {[
          { d: "M0 240 220 96l150 78 180-120 200 128 180-84 270 142v40Z", o: 0.035, y: 40 },
          { d: "M0 240 180 140l160 60 200-92 220 108 190-64 250 128v40Z", o: 0.06, y: 26 },
          { d: "M0 240 240 168l180 44 190-70 210 88 180-46 200 96v40Z", o: 0.1, y: 12 },
        ].map((l, i) => (
          <path
            key={i}
            d={l.d}
            className="fill-foreground"
            style={{
              opacity: visible ? l.o : 0,
              transform: `translateY(${visible ? 0 : l.y}px)`,
              transition: `opacity 1200ms ease ${i * 140}ms, transform 1200ms cubic-bezier(.16,1,.3,1) ${i * 140}ms`,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

/** Abstract contour map that draws itself on scroll (About section). */
export function ContourMap() {
  const { ref, visible } = useReveal<HTMLDivElement>(0.2);
  const rings = [0, 1, 2, 3, 4, 5, 6];

  return (
    <div ref={ref} className="relative">
      <svg
        viewBox="0 0 420 340"
        className="w-full text-foreground"
        fill="none"
        role="img"
        aria-label="Abstract contour map of a mountain marked basecamp, ascent and summit"
      >
        {rings.map((i) => {
          const inset = i * 24;
          const yTop = 250 - i * 30;
          return (
            <path
              key={i}
              d={`M${24 + inset} ${296 - i * 6} C ${100 + inset * 0.5} ${yTop + 26}, ${170 + inset * 0.2} ${yTop}, ${210} ${yTop - 8} C ${250 - inset * 0.2} ${yTop}, ${320 - inset * 0.5} ${yTop + 26}, ${396 - inset} ${296 - i * 6}`}
              stroke="currentColor"
              strokeWidth="0.9"
              opacity={0.35}
              pathLength={1}
              strokeDasharray={1}
              strokeDashoffset={visible ? 0 : 1}
              style={{
                transition: `stroke-dashoffset 1600ms cubic-bezier(.16,1,.3,1) ${i * 120}ms`,
              }}
            />
          );
        })}
        <circle cx="210" cy="52" r="2.5" className="fill-accent" />
        <text x="220" y="56" className="fill-current text-[9px] tracking-[0.2em] opacity-60">
          SUMMIT
        </text>
        <text x="150" y="180" className="fill-current text-[9px] tracking-[0.2em] opacity-45">
          ASCENT
        </text>
        <text x="30" y="322" className="fill-current text-[9px] tracking-[0.2em] opacity-45">
          BASECAMP
        </text>
        <text x="330" y="322" className="fill-current text-[9px] tracking-[0.2em] opacity-30">
          1420 M
        </text>
      </svg>
    </div>
  );
}

