import { Reveal } from "@/components/Reveal";
import { ContourMap } from "@/components/MountainMarks";
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-[1400px] scroll-mt-20 px-6 py-24 md:px-10 md:py-32">
      <Reveal>
        <SectionHeading index="03" title="A little about me." />
      </Reveal>

      <div className="mt-14 grid gap-14 md:grid-cols-12">
        <Reveal className="space-y-6 md:col-span-7">
          <p className="max-w-[52ch] text-lg leading-relaxed">
            I'm a Computer Science student who enjoys being somewhere between engineering, product
            and creativity.
          </p>
          <p className="max-w-[52ch] leading-relaxed text-muted-foreground">
            I like understanding how things work, building them from scratch, and then figuring out
            how they can be made simpler, faster or more useful.
          </p>
          <p className="max-w-[52ch] leading-relaxed text-muted-foreground">
            Over time, that curiosity has taken me from full-stack development into product
            engineering, AI and automation — and far beyond the screen into mountains, motorcycles,
            communities and unfamiliar roads.
          </p>
          <p className="max-w-[52ch] leading-relaxed text-muted-foreground">
            Public speaking and community work taught me to communicate; expeditions taught me to
            prepare. I like experiences that force me to learn, adapt and keep moving.
          </p>
        </Reveal>

        <Reveal className="md:col-span-5" delay={100}>
          <ContourMap />
        </Reveal>
      </div>
    </section>
  );
}
