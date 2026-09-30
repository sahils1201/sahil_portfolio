import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { beyondItems, pillars } from "@/lib/site-data";
import { MountainGlyph } from "@/components/MountainMarks";

export function BeyondIDE() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <SectionHeading
            index="07"
            title="Beyond the IDE"
            subtitle="Technology is what I build, but it isn't everything that shapes me."
          />
        </Reveal>

        <Reveal className="mt-14">
          <ol className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
            {pillars.map((p, i) => (
              <li key={p.key} className="bg-background p-6">
                <div className="flex items-center justify-between">
                  <span className="meta-label tabular-nums">0{i + 1}</span>
                  <MountainGlyph className="text-border" />
                </div>
                <h3 className="display mt-8 text-2xl uppercase">{p.key}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.note}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal className="mt-16">
          <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {beyondItems.map((i) => (
              <li key={i} className="border-b border-border pb-3 text-lg tracking-tight">
                {i}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
