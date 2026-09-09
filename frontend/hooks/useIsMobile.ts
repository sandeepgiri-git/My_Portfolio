"use client";

import { useState, useEffect } from "react";

/**
 * Returns true when viewport width is below the given breakpoint (default 768px).
 * SSR-safe: defaults to false on the server so the desktop (heavier) version
 * is included in the initial HTML and 3D assets can start loading immediately
 * for desktop users.
 */
export default function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);

    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(e.matches);
    };

    // Set initial value
    handleChange(mql);

    // Listen for changes
    mql.addEventListener("change", handleChange as (e: MediaQueryListEvent) => void);
    return () =>
      mql.removeEventListener("change", handleChange as (e: MediaQueryListEvent) => void);
  }, [breakpoint]);

  return isMobile;
}
