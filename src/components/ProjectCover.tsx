import type { Project } from "@/lib/site-data";

/**
 * Editorial, typographic project covers.
 * Deliberately abstract — never a simulated product screenshot.
 */
export function ProjectCover({ project }: { project: Project }) {
  return (
    <div className="relative overflow-hidden rounded-sm border border-border bg-surface">
      <div className="flex items-center justify-between border-b border-border px-5 py-3">
        <span className="meta-label">{project.flow.join(" → ")}</span>
        <span className="meta-label tabular-nums">{project.number}</span>
      </div>

      <div className="relative aspect-[16/10] w-full">
        <div aria-hidden="true" className="topo-grid absolute inset-0 opacity-60" />
        <Graphic project={project} />
        <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-baseline gap-x-6 gap-y-2 p-5">
          <span className="display text-[clamp(1.5rem,3.4vw,2.5rem)] tracking-tight uppercase">
            {project.title}
          </span>
          <span className="meta-label">{project.category}</span>
        </div>
      </div>

      <ul className="flex flex-wrap gap-x-6 gap-y-2 border-t border-border px-5 py-3">
        {(project.features ?? project.technologies).slice(0, 5).map((t) => (
          <li key={t} className="meta-label">
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Graphic({ project }: { project: Project }) {
  const common = "absolute inset-0 h-full w-full text-foreground";
  if (project.cover === "network") {
    const nodes = [
      [70, 60],
      [190, 32],
      [300, 84],
      [120, 150],
      [250, 168],
      [370, 140],
      [180, 220],
      [320, 240],
    ] as const;
    return (
      <svg viewBox="0 0 440 280" className={common} fill="none" aria-hidden="true">
        {nodes.map(([x, y], i) =>
          nodes.slice(i + 1).map(([x2, y2], j) => {
            const d = Math.hypot(x - x2, y - y2);
            if (d > 150) return null;
            return (
              <line
                key={`${i}-${j}`}
                x1={x}
                y1={y}
                x2={x2}
                y2={y2}
                stroke="currentColor"
                strokeWidth="0.7"
                opacity={0.28}
              />
            );
          }),
        )}
        {nodes.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={i === 3 ? 4 : 2.6}
            className={i === 3 ? "fill-accent" : "fill-current"}
            opacity={i === 3 ? 1 : 0.55}
          />
        ))}
      </svg>
    );
  }

  if (project.cover === "route") {
    return (
      <svg viewBox="0 0 440 280" className={common} fill="none" aria-hidden="true">
        <path
          d="M30 240C110 236 96 168 168 160s86-66 158-72"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="6 6"
          opacity={0.45}
        />
        {([
          [30, 240],
          [168, 160],
          [326, 88],
        ] as const).map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="10" stroke="currentColor" strokeWidth="0.8" opacity={0.35} />
            <circle cx={x} cy={y} r="3" className={i === 2 ? "fill-accent" : "fill-current"} opacity={i === 2 ? 1 : 0.6} />
          </g>
        ))}
        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={i}
            x1={0}
            y1={40 + i * 48}
            x2={440}
            y2={40 + i * 48}
            stroke="currentColor"
            strokeWidth="0.5"
            opacity={0.1}
          />
        ))}
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 440 280" className={common} fill="none" aria-hidden="true">
      {([
        [60, 60],
        [200, 60],
        [340, 60],
        [130, 160],
        [270, 160],
        [200, 240],
      ] as const).map(([x, y], i) => (
        <rect
          key={i}
          x={x - 44}
          y={y - 18}
          width="88"
          height="36"
          rx="2"
          stroke="currentColor"
          strokeWidth="0.8"
          opacity={0.35}
        />
      ))}
      <path
        d="M60 78v34h70M200 78v34h-70M200 78v34h70M340 78v34h-70M130 178v34h70M270 178v34h-70"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity={0.3}
      />
      <circle cx="200" cy="240" r="3" className="fill-accent" />
    </svg>
  );
}
