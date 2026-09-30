import { skillGroups, exploring } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Skills() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
      <Reveal>
        <SectionHeading index="06" title="Skills" />
      </Reveal>

      <div className="mt-14 space-y-10">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={i * 60}>
            <div className="grid gap-4 border-t border-border pt-6 md:grid-cols-12">
              <h3 className="meta-label md:col-span-3">{g.title}</h3>
              <ul className="flex flex-wrap gap-x-8 gap-y-3 md:col-span-9">
                {g.items.map((s) => (
                  <li
                    key={s}
                    className="text-lg tracking-tight text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-24">
        <h3 className="meta-label">Currently Exploring</h3>
        <ul className="mt-6 flex flex-wrap items-baseline gap-x-6 gap-y-3">
          {exploring.map((e, i) => (
            <li key={e} className="flex items-baseline gap-6">
              <span className="text-[clamp(1.25rem,2.6vw,2rem)] tracking-tight">{e}</span>
              {i < exploring.length - 1 && (
                <span aria-hidden="true" className="text-border">
                  /
                </span>
              )}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
