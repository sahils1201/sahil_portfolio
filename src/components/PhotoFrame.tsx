import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
};

/**
 * Shared treatment for all atmospheric imagery: monochrome, film grain,
 * soft vignette and a theme-aware wash so photos sit naturally in
 * both light and dark mode.
 */
export function PhotoFrame({
  src,
  alt,
  width,
  height,
  className,
  imgClassName,
  priority = false,
}: Props) {
  return (
    <figure className={cn("relative overflow-hidden rounded-sm bg-surface", className)}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className={cn(
          "h-full w-full object-cover grayscale contrast-[0.92] transition-transform duration-[1400ms] ease-[cubic-bezier(.16,1,.3,1)]",
          "dark:brightness-[0.72] dark:contrast-[0.95]",
          imgClassName,
        )}
      />
      <span aria-hidden="true" className="photo-grain" />
      <span aria-hidden="true" className="photo-vignette" />
      <span aria-hidden="true" className="photo-wash" />
    </figure>
  );
}
