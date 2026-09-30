import { useState } from "react";
import { pipeline } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const stack = [
  "n8n",
  "AI calling agents",
  "Lead automation",
  "Firebase",
  "WhatsApp automation",
  "SMS automation",
  "Email automation",
  "API integrations",
  "AI workflows",
];

export function AutomationSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="beyond-code"
      className="scroll-mt-20 border-y border-border bg-surface py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <SectionHeading
            index="02"
            title="Beyond Code"
            subtitle="I don't just build software. I build systems that make work simpler."
          />
        </Reveal>

        <div className="mt-16 grid gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <ol className="relative">
              {pipeline.map((s, i) => (
                <li
                  key={s.label}
                  className="relative pl-10"
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(i)}
                  onBlur={() => setActive(null)}
                >
                  <span
                    aria-hidden="true"
                    className="absolute top-3 left-[7px] h-2 w-2 rounded-full border border-foreground bg-background"
                  />
                  {i < pipeline.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute top-6 left-[11px] h-[calc(100%-1rem)] w-px bg-border"
                    />
                  )}
                  <button
                    type="button"
                    className="group w-full pb-8 text-left"
                    aria-describedby={`stage-note-${i}`}
                  >
                    <span className="text-sm tracking-[0.16em] uppercase transition-colors group-hover:text-accent">
                      {s.label}
                    </span>
                    <span
                      id={`stage-note-${i}`}
                      className="mt-2 block max-w-[44ch] text-sm text-muted-foreground transition-opacity duration-300"
                      style={{ opacity: active === i ? 1 : 0.45 }}
                    >
                      {s.note}
                    </span>
                  </button>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal className="md:col-span-5" delay={120}>
            <p className="max-w-[42ch] leading-relaxed">
              Built business automation workflows that reduced manual operational effort by
              approximately 40%.
            </p>
            <ul className="mt-10 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {stack.map((s) => (
                <li key={s} className="border-b border-border pb-2 text-sm text-muted-foreground">
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
