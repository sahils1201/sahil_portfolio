import { useCallback, useEffect, useState } from "react";

type Theme = "light" | "dark";

function current(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setTheme(current());
  }, []);

  const toggle = useCallback(() => {
    const next: Theme = current() === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* ignore */
    }
    setTheme(next);
  }, []);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={theme === "dark"}
      className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground transition-colors hover:bg-surface"
    >
      <span className="relative block h-4 w-4">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="absolute inset-0 h-4 w-4 transition-all duration-300 dark:scale-0 dark:opacity-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        >
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4M5.2 5.2l1.7 1.7M17.1 17.1l1.7 1.7M18.8 5.2l-1.7 1.7M6.9 17.1l-1.7 1.7" />
        </svg>
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="absolute inset-0 h-4 w-4 scale-0 opacity-0 transition-all duration-300 dark:scale-100 dark:opacity-100"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        >
          <path d="M20 14.2A8.2 8.2 0 0 1 9.8 4a8.4 8.4 0 1 0 10.2 10.2Z" />
        </svg>
      </span>
    </button>
  );
}
