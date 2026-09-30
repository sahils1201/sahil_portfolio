import { MountainScene } from "@/components/MountainScene";
import { MountainGlyph } from "@/components/MountainMarks";
import heroRidge from "@/assets/hero-ridge.jpg";

const meta = ["B.Tech Computer Science", "Full-Stack Developer", "Product Builder", "AI & Automation"];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-0 md:pt-40">
      <div aria-hidden="true" className="absolute inset-0">
        <img
          src={heroRidge}
          alt=""
          width={1600}
          height={1008}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover opacity-[0.22] grayscale contrast-[0.9] dark:opacity-[0.28] dark:brightness-[0.8]"
        />
        <span className="photo-grain" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/55 to-background" />
      </div>
      <div aria-hidden="true" className="topo-grid absolute inset-0 opacity-50" />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[46vh] min-h-[260px] md:h-[52vh]"
      >
        <MountainScene className="h-full w-full" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex items-center gap-3">
          <MountainGlyph className="text-accent" />
          <span className="meta-label">Build → Automate → Explore</span>
        </div>

        <h1 className="display mt-8 max-w-[16ch] text-[clamp(3rem,8.5vw,6.75rem)]">
          I build digital products, automate workflows, and turn ideas into reality.
        </h1>

        <p className="mt-8 max-w-[52ch] text-base leading-relaxed text-muted-foreground md:text-lg">
          I'm Sahil Sable — a Computer Science student and builder exploring software, AI,
          automation and product engineering.
        </p>

        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
          {meta.map((m) => (
            <li key={m} className="meta-label">
              {m}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-sm bg-foreground px-6 py-3 text-sm text-background transition-opacity hover:opacity-85"
          >
            View My Work <span aria-hidden="true">→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3 text-sm transition-colors hover:bg-surface"
          >
            Let's Connect <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="mt-24 flex items-end justify-between pb-16 md:mt-40 md:pb-24">
          <span className="meta-label">19.0760° N / 72.8777° E</span>
          <span className="meta-label hidden md:inline">Elev. 1420 m — scroll</span>
        </div>
      </div>
    </section>
  );
}
