import { projects } from "@/lib/site-data";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { RidgeDivider } from "@/components/MountainMarks";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function SelectedWork() {
  return (
    <section id="work" className="mx-auto max-w-[1400px] scroll-mt-20 px-6 py-24 md:px-10 md:py-32">
      <Reveal>
        <SectionHeading
          index="01"
          title="Selected Work"
          subtitle="A few things I've built, designed, automated and experimented with."
        />
      </Reveal>

      {projects.map((p, i) => (
        <div key={p.title}>
          <ProjectShowcase project={p} index={i} />
          {i < projects.length - 1 && <RidgeDivider />}
        </div>
      ))}
    </section>
  );
}
