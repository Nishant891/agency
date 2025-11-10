"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type Theme = "light" | "dark" | "system";
type ThemeContextType = {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
  resolvedTheme: "light" | "dark";
  isMounted: boolean;
};

const defaultContext: ThemeContextType = {
  theme: "system",
  setTheme: () => {},
  toggleTheme: () => {},
  resolvedTheme: "light",
  isMounted: false,
};

const ThemeContext = createContext<ThemeContextType>(defaultContext);

const TRANSITION_CLASS = "theme-transition";
const NO_TRANSITIONS_CLASS = "no-transitions";
const TRANSITION_MS = 400;

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setThemeState] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");
  const [isMounted, setIsMounted] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const el = document.documentElement;
    el.classList.add(NO_TRANSITIONS_CLASS);

    const stored = localStorage.getItem("theme") as Theme | null;
    const initial = stored ?? "system";
    setThemeState(initial);

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const systemPref = mq.matches ? "dark" : "light";
    const initialResolved =
      initial === "system" ? systemPref : (initial as "light" | "dark");

    // Apply theme (SSR already did it, but ensure sync)
    if (initialResolved === "dark") el.classList.add("dark");
    else el.classList.remove("dark");

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.classList.remove(NO_TRANSITIONS_CLASS);
        setIsMounted(true);
      });
    });

    const handleMQ = (e: MediaQueryListEvent) => {
      if (theme === "system") {
        const sys = e.matches ? "dark" : "light";
        setResolvedTheme(sys);
        if (sys === "dark") el.classList.add("dark");
        else el.classList.remove("dark");
      }
    };
    mq.addEventListener("change", handleMQ);

    return () => {
      mq.removeEventListener("change", handleMQ);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const systemPref = mq.matches ? "dark" : "light";
    const rt = theme === "system" ? systemPref : (theme as "light" | "dark");
    setResolvedTheme(rt);
  }, [theme]);

  const setTheme = (t: Theme) => {
    localStorage.setItem("theme", t);

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const systemPref = mq.matches ? "dark" : "light";
    const newResolved = t === "system" ? systemPref : (t as "light" | "dark");

    const el = document.documentElement;

    // Remove transition
    el.classList.remove(TRANSITION_CLASS);

    // Apply new theme
    if (newResolved === "dark") {
      el.classList.add("dark");
    } else {
      el.classList.remove("dark");
    }

    // Force reflow → commit paint
    void el.offsetHeight;

    // Enable transition
    el.classList.add(TRANSITION_CLASS);

    // Cleanup
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      el.classList.remove(TRANSITION_CLASS);
    }, TRANSITION_MS + 50);

    setThemeState(t);
  };

  const toggleTheme = () => {
    const next =
      theme === "dark" ? "light" : theme === "light" ? "system" : "dark";
    setTheme(next);
  };

  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme, resolvedTheme, isMounted }),
    [theme, resolvedTheme, isMounted]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);