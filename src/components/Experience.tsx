import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { experiences } from "@/lib/site-data";

export function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-[1400px] scroll-mt-20 px-6 py-24 md:px-10 md:py-32"
    >
      <Reveal>
        <SectionHeading
          index="04"
          title="Experience"
          subtitle="Engineering and automation on one side, community and communication on the other."
        />
      </Reveal>

      <Reveal className="mt-14">
        <ol className="space-y-14">
          {experiences.map((e) => (
            <li key={e.org} className="relative border-l border-border pl-8 pb-2 md:pl-12">
              <span
                aria-hidden="true"
                className="absolute top-2 -left-[4.5px] h-2 w-2 rounded-full bg-foreground"
              />
              <div className="grid gap-6 md:grid-cols-12">
                <div className="md:col-span-4">
                  <h3 className="text-xl tracking-tight">{e.org}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{e.role}</p>
                </div>
                <div className="md:col-span-8">
                  <ul className="space-y-3">
                    {e.points.map((p) => (
                      <li key={p} className="text-sm leading-relaxed text-muted-foreground">
                        {p}
                      </li>
                    ))}
                  </ul>
                  {e.impact && <p className="mt-6 text-sm">{e.impact}</p>}
                  <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                    {e.tags.map((t) => (
                      <li key={t} className="meta-label">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
