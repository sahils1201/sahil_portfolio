import { Reveal } from "@/components/Reveal";
import { socials } from "@/lib/site-data";

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-[1400px] scroll-mt-20 px-6 py-28 md:px-10 md:py-40"
    >
      <Reveal>
        <h2 className="display text-[clamp(2.5rem,7vw,5.5rem)]">
          Have an idea?
          <br />
          Let's build it.
        </h2>
        <p className="mt-8 max-w-[54ch] leading-relaxed text-muted-foreground">
          Whether it's a product, an experiment, an automation or something completely new — I'd
          love to hear about it.
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-3">
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm bg-foreground px-6 py-3 text-sm text-background transition-opacity hover:opacity-85"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3 text-sm transition-colors hover:bg-surface"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
