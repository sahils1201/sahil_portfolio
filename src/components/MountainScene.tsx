import { useEffect, useRef } from "react";

/**
 * Lightweight procedural terrain: layered value-noise ridgelines drawn on a
 * 2D canvas with subtle pointer parallax. No WebGL, no textures, no loops
 * running when off-screen or when reduced motion is requested.
 */
function makeRidge(seed: number, points: number) {
  const vals: number[] = [];
  let x = seed;
  for (let i = 0; i < points; i++) {
    x = (x * 9301 + 49297) % 233280;
    vals.push(x / 233280);
  }
  return vals;
}

function smooth(vals: number[], t: number) {
  const n = vals.length - 1;
  const i = Math.floor(t * n);
  const f = t * n - i;
  const a = vals[Math.max(0, i)] ?? 0;
  const b = vals[Math.min(n, i + 1)] ?? 0;
  // near-linear blend keeps ridges angular rather than wavy
  const s = f < 0.5 ? f * 1.06 : 1 - (1 - f) * 1.06;
  return a + (b - a) * Math.min(1, Math.max(0, s));
}

export function MountainScene({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const layers = [
      { ridge: makeRidge(11, 5), amp: 0.34, base: 0.9, alpha: 0.14, depth: 4 },
      { ridge: makeRidge(233, 6), amp: 0.42, base: 1.02, alpha: 0.2, depth: 9 },
      { ridge: makeRidge(577, 7), amp: 0.5, base: 1.16, alpha: 0.3, depth: 16 },
      { ridge: makeRidge(919, 9), amp: 0.58, base: 1.32, alpha: 0.45, depth: 26 },
    ];

    let w = 0;
    let h = 0;
    let raf = 0;
    let mx = 0;
    let my = 0;
    let tx = 0;
    let ty = 0;
    let visible = true;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const styles = () => {
      const cs = getComputedStyle(document.documentElement);
      return {
        ridge: cs.getPropertyValue("--ridge").trim() || "rgba(0,0,0,.5)",
      };
    };

    const draw = () => {
      mx += (tx - mx) * 0.05;
      my += (ty - my) * 0.05;
      const { ridge } = styles();
      ctx.clearRect(0, 0, w, h);

      layers.forEach((l, li) => {
        const offX = mx * l.depth;
        const offY = my * l.depth * 0.4;
        ctx.beginPath();
        ctx.moveTo(-40, h + 40);
        const steps = 60;
        for (let i = 0; i <= steps; i++) {
          const t = i / steps;
          const n = smooth(l.ridge, t);
          const y = h * l.base - n * h * l.amp - offY;
          ctx.lineTo(t * (w + 80) - 40 + offX, y);
        }
        ctx.lineTo(w + 40, h + 40);
        ctx.closePath();
        ctx.globalAlpha = l.alpha * 0.28;
        ctx.fillStyle = ridge;
        ctx.fill();
        ctx.globalAlpha = l.alpha;
        ctx.lineWidth = li === layers.length - 1 ? 1.2 : 0.9;
        ctx.strokeStyle = ridge;
        ctx.stroke();
        ctx.globalAlpha = 1;
      });

      if (!reduced && visible) raf = requestAnimationFrame(draw);
    };

    const onPointer = (e: PointerEvent) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 2;
      ty = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = !!entry?.isIntersecting;
      if (visible && !reduced) {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(draw);
      }
    });

    resize();
    draw();
    io.observe(canvas);
    window.addEventListener("resize", resize);
    if (!reduced && window.matchMedia("(pointer: fine)").matches) {
      window.addEventListener("pointermove", onPointer, { passive: true });
    }
    const mo = new MutationObserver(() => draw());
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      mo.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      role="presentation"
    />
  );
}
