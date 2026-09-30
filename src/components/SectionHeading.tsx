export function SectionHeading({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="border-t border-border pt-6">
      <div className="flex items-baseline gap-4">
        <span className="meta-label tabular-nums">{index}</span>
        <h2 className="display text-[clamp(1.75rem,3.4vw,2.75rem)]">{title}</h2>
      </div>
      {subtitle && (
        <p className="mt-4 max-w-[54ch] leading-relaxed text-muted-foreground">{subtitle}</p>
      )}
    </header>
  );
}
