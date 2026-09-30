import type { Project } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";
import { ProjectCover } from "@/components/ProjectCover";

export function ProjectShowcase({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1;
  return (
    <Reveal as="article" className="group grid gap-10 py-16 md:grid-cols-12 md:gap-12 md:py-24">
      <div className={flip ? "md:order-2 md:col-span-5" : "md:col-span-5"}>
        <div className="flex items-baseline gap-4">
          <span className="text-sm tabular-nums text-muted-foreground transition-colors duration-500 group-hover:text-accent">
            {project.number}
          </span>
          <span className="meta-label">{project.category}</span>
        </div>
        <h3 className="display mt-4 text-[clamp(2.25rem,5vw,3.5rem)]">{project.title}</h3>
        {project.highlight && <p className="mt-3 text-sm text-accent">{project.highlight}</p>}
        <p className="mt-5 max-w-[46ch] leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
          {project.technologies.map((t) => (
            <li key={t} className="meta-label">
              {t}
            </li>
          ))}
        </ul>

        <p className="mt-6 max-h-0 overflow-hidden text-sm text-muted-foreground opacity-0 transition-all duration-700 group-hover:max-h-20 group-hover:opacity-100 group-focus-within:max-h-20 group-focus-within:opacity-100">
          {project.flow.join(" → ")}
        </p>

        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm transition-colors hover:border-accent hover:text-accent"
        >
          {project.cta} <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className={flip ? "md:order-1 md:col-span-7" : "md:col-span-7"}>
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} — view project`}
          className="relative block transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-y-1 md:group-hover:scale-[1.015]"
        >
          <ProjectCover project={project} />
          <span className="pointer-events-none absolute top-4 right-4 rounded-sm border border-border bg-background/80 px-3 py-1.5 text-[0.7rem] tracking-[0.18em] uppercase opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100">
            View Project ↗
          </span>
        </a>
      </div>
    </Reveal>
  );
}
