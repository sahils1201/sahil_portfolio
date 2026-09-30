import { navLinks, socials } from "@/lib/site-data";
import { FooterMountains, MountainGlyph } from "@/components/MountainMarks";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border pt-20 pb-10">
      <FooterMountains />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="flex items-center gap-3">
              <MountainGlyph className="text-muted-foreground" />
              <span className="text-[0.7rem] tracking-[0.22em] uppercase">Sahil Sable</span>
            </div>
            <p className="mt-4 max-w-[34ch] text-sm text-muted-foreground">
              Developer · Product Builder · AI &amp; Automation
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-3">
            <h2 className="meta-label">Navigate</h2>
            <ul className="mt-4 space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <h2 className="meta-label">Elsewhere</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  GitHub ↗
                </a>
              </li>
              <li>
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  LinkedIn ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
          <span className="meta-label">© 2026 Sahil Sable</span>
          <span className="meta-label">Built with curiosity.</span>
        </div>
      </div>
    </footer>
  );
}
