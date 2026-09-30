import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { volunteering } from "@/lib/site-data";

export function Volunteering() {
  return (
    <section
      id="community"
      className="border-y border-border bg-surface py-24 scroll-mt-20 md:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <SectionHeading
            index="05"
            title="Community & Volunteering"
            subtitle="Time given to the technology communities that make building less lonely."
          />
        </Reveal>

        <Reveal className="mt-14">
          <ol>
            {volunteering.map((v) => (
              <li key={v.org} className="grid gap-4 border-t border-border py-8 md:grid-cols-12">
                <div className="md:col-span-4">
                  <h3 className="text-lg tracking-tight">{v.org}</h3>
                  <p className="mt-2 meta-label">{v.role}</p>
                </div>
                <div className="md:col-span-8">
                  <p className="max-w-[52ch] text-sm leading-relaxed text-muted-foreground">
                    {v.context}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                    {v.highlights.map((h) => (
                      <li key={h} className="meta-label">
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
